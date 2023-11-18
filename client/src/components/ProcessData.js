import React from 'react'
import '../style/processdatastyles.css'
const ProcessData = () => {
  return (
    <div>
            <div class="maincontent">
        <div class="inputform">
            <h1 id="anahead">DEVICE DASHBOARD</h1>
            <p id="subana">Device Name: Temperature Sensor 10034</p>
            <div class="ruleshead">
                <h1>"Specifications To Keep In Mind"</h1>
            </div>
            
            <div class="rulesformat">
                <div class="xlimage">
                    <img src={require('../img/format.jpeg')} alt="Specified format"/>
                    <h4 id="imagedesc">Format of data inside the document should be as above</h4>
                </div>
                <div class="keeprules">
                    <ul>
                        <li>
                            The file format should be either <i><b>.csv</b></i> or <i><b>.xlsx</b></i>
                        </li>
                        <li>
                            Correctly specify that the format in which the data is collected by the IOT devices which can either
                            be in BOOLEAN VALUES or NUMERICAL VALUES 
                        </li>
                        <li>
                            If the size of the dataset is large, same will be reflected in the processing time of the dataset.
                        </li>
                        <li>
                            The size of data set which is considered optimal for the use case is from 10,000 - 20,000 readings.
                        </li>
                        <li>
                            To ensure that the insights derived from the datasets are accurate, it would be recommended for the 
                            data to be clean of empty values and other noise which can impact the model performance.  
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sepout">
                <div class="seprate">
                </div>
            </div>
            <div class="uploaddataform">
                <h1 id="sub">Upload Data</h1>
                <form action="process_data.php" method="post" enctype="multipart/form-data">
                    <div>
                        <label for="dataFile">Upload Device Data:</label><br/><br/>
                        <input class="uploadthedata" type="file" id="dataFile" name="dataFile"/>
                    </div>
                    <div>
                        <br/><label>Select Data Type:</label>
                        <input type="radio" id="numeric" name="dataType" value="numeric"/>
                        <label for="numeric">Numeric</label>
                        <input type="radio" id="boolean" name="dataType" value="boolean"/>
                        <label for="boolean">Boolean</label><br/>
                    </div>
                    <div class="rangebox">
                        <div class="thsiit">
                            <br/><br/><label for="acceptablePercentage">Enter Maximum Value:</label>
                            <input type="number" id="acceptablePercentage" name="acceptablePercentage" step="any"/>
                        </div>
                        <div class="thsiit">
                            <br/><br/><label for="acceptablePercentage">Enter Minimum Value:</label>
                            <input type="number" id="acceptablePercentage" name="acceptablePercentage" step="any"/>
                        </div>
                    </div>
                    <div class="belowrangebox">
                        <div class="thsiit">
                            <br/><br/><label for="acceptablePercentage">Enter acceptable percentage:</label>
                            <input type="number" id="acceptablePercentage" name="acceptablePercentage" step="any"/>
                        </div>
                        <div class="thsiit">
                            <br/><br/><label for="fileType">Select File Type:</label><br/><br/>
                            <select id="fileType" name="fileType">
                                <option id="theopt" value="xlsx">XLSX (Microsoft Excel Open XML Spreadsheet)</option>
                                <option id="theopt" value="csv">CSV (Comma Separated Values) </option>
                            </select>
                        </div>
                    </div>
                    <div id="submitbutton">
                        <br/><br/><br/>
                        <button id="insidebutton" type="submit" style={{fontFamily:"Righteous",fontSize: "20px"}}>Upload and Process</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>

    <div class="resultcontent">
        <h1 id="anahead">PROCESSING RESULTS</h1>
        <div class="statistics">
            <div class="midstat">
                <div class="statbox">
                    <div class="stathead">
                        Total Number of Readings
                    </div>
                    <div class="statval">
                        10000
                    </div>
                </div>
                <div class="statbox">
                    <div class="stathead">
                        Total Number of Anomalies
                    </div>
                    <div class="statval">
                        278
                    </div>
                </div>
                <div class="statbox">
                    <div class="stathead">
                        Percentage of Anomalies 
                    </div>
                    <div class="statval">
                        0.7 %
                    </div>
                </div>
                <div id="lmar" class="statbox">
                    <div class="stathead">
                        Device Status
                    </div>
                    <div id="attention" class="statval">
                        Requires Attention
                    </div>
                </div>
            </div>
        </div>
        <div class="resultimage">
            <img src={require('../img/result.jpeg')} alt="Your Result"/>
        </div>
    </div>
    <div className="bottombar">
            <div className="abouthead">
                ADID<br/>
                (<b>A</b>nomaly <b>D</b>etection in <b>I</b>OT <b>D</b>evices)
            </div>
            <div className="aboutintro">
                "Welcome to our cutting-edge Anomaly Detection in IoT Devices platform. We empower users to effortlessly upload IoT data, and our advanced algorithms identify irregularities and anomalies using AI and ML. Get actionable insights, prevent downtime, and optimize performance. Say goodbye to manual scrutiny and hello to automated IoT data analytics."
            </div>
            <div className="sociallinks">
                <i className='bx bxl-gmail' ></i>
                <i className='bx bxl-linkedin' ></i>
                <i className='bx bxl-instagram' ></i>
                <i className='bx bxl-twitter' ></i>
            </div>
        </div>
        <div style={{"text-align": "center","padding": "10px","font-size":"21px", "background-color": "#28282b",
        "color": "white","font-family": "Times New Roman","font-style":"italic",}}>
            <p style={{"marginBottom":"0"}}>&copy; 2023 FoolishDevelopers@node. All rights reserved.</p>
        </div>
    </div>
  )
}

export default ProcessData
