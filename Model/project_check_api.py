import requests
import csv
import pandas as pd

# Specify the Flask API endpoint
api_url = 'http://localhost:5000/iotapi/detect_anomalies'

# User input for the range and CSV file
lower_bound = 20
upper_bound = 30
csv_file_path = 'C:\\Users\\Sayak Chatterjee\\Desktop\\ADID\Model\\labelled_BINARY.xlsx'  # Replace with the actual path
# C:\\Users\\Sayak Chatterjee\\Desktop\\ADID\Model\\humidity.csv

# Load CSV file as a file object
# with(open(csv_file_path,'rb')) as csv_file:
#     reader=csv.DictReader(csv_file)

csv_file = {'csv_file': open(csv_file_path, 'rb')}

# Form data for the request
form_data = {'lower': lower_bound, 'upper': upper_bound}

# Make a POST request to the Flask API
response = requests.post(api_url, data=form_data, files=csv_file)

# Check the response
if response.status_code == 200:
    result = response.json()
    image_path = result.get('image_path')
    total_readings = result.get('total_readings')
    total_anomalies = result.get('total_anomalies')
    percentage_anomalies = result.get('percentage_anomalies')
    print(f"Image saved at: {image_path}")
    print(f"Total number of readings: {total_readings}")
    print(f"Total number of anomalies: {total_anomalies}")
    print(f"Percentage of anomalies: {percentage_anomalies}")
else:
    print(f"Error: {response.status_code}, {response.text}")
