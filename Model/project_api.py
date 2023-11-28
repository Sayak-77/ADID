from flask import Flask, request, jsonify, send_file
import pandas as pd
import numpy as np
from sklearn.cluster import DBSCAN
import matplotlib
matplotlib.use("Agg")

import matplotlib.pyplot as plt
from flask_cors import CORS, cross_origin

app = Flask("iotapi")
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/iotapi/detect_anomalies', methods=['POST'])

def detect_anomalies():

    lower_bound = float(request.form.get('lower'))
    upper_bound = float(request.form.get('upper'))
    csv_file = request.files['csv_file']
    attention = float(request.form.get('attention'))
    ftype = request.form.get('ftype')

    print(ftype)

    if ftype=='xlsx':
        data = pd.read_excel(csv_file,engine='openpyxl')
    else:
        data = pd.read_csv(csv_file)
    
    
    
    readings = data['values']
    total_len = len(readings)

    # Identify anomalies based on the user-defined range 
    user_defined_anomalies = readings[(readings < lower_bound) | (readings > upper_bound)]

    # Filter the readings within the specified range
    filtered_readings = readings[(readings >= lower_bound) & (readings <= upper_bound)]

    # Reshape the data for compatibility with DBSCAN
    filtered_readings = filtered_readings.values.reshape(-1, 1)

    # Create and fit the DBSCAN model
    dbscan_model = DBSCAN(eps=0.6, min_samples=600)  # Adjust eps and min_samples as needed
    dbscan_model.fit(filtered_readings)

    # Identify anomalies (outliers) as points labeled -1 by DBSCAN
    outliers = filtered_readings[dbscan_model.labels_ == -1]

    # Calculate the total number of anomalies
    total_anomalies = len(user_defined_anomalies) + len(outliers)

    # Calculate the percentage of anomalies
    percentage_anomalies = (total_anomalies / total_len) * 100

    feedback = ''
    if attention < percentage_anomalies:
        feedback="Requires Attention"
    elif attention-5 > percentage_anomalies:
        feedback="Stable"
    else:
        feedback="Requires Maintenance"

   

    # # Plot a scatter plot to visualize the IoT device readings and outliers
    plt.figure(figsize=(12, 6))
    plt.scatter(range(len(filtered_readings)), filtered_readings, color='blue', label='IoT Device Readings (Within Range)')
    plt.scatter(np.where(dbscan_model.labels_ == -1), outliers, color='red', marker='x', label='DBSCAN Anomalies')
    plt.scatter(np.where((readings < lower_bound) | (readings > upper_bound)), user_defined_anomalies,
                color='orange', marker='o', label='User-Defined Anomalies')
    plt.xlabel('Data Point Index')
    plt.ylabel('Readings')
    plt.title('Outlier Detection in IoT Device Readings using DBSCAN and User-Defined Range')
    plt.legend()
    plt.grid(True)

    # Save the plot as an image
    img_path = f"C:\\Users\\Sayak Chatterjee\\Desktop\\ADID\\client\\src\\img\\anomaly_plot.png"
    plt.savefig(img_path, format='png')
    plt.close()

    # Return the response with total number of readings, total number of anomalies, percentage anomalies, and the image path
    response_data = {
        "total_readings": total_len,
        "total_anomalies": total_anomalies,
        "percentage_anomalies": percentage_anomalies,
        "image_path": img_path,
        "feedback": feedback
    }
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

