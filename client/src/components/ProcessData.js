import React, {useEffect, useState} from 'react'
import '../style/processdatastyles.css'

const ProcessData = () => {
    const [file, setFile] = useState(null);
    const [lower, setlower] = useState('');
    const [upper, setupper] = useState('');
    const [attention, setattention] = useState('');
    const [data, setdata] = useState(null);

    const[condition,setcondition]=useState(false);

    const info=JSON.parse(localStorage.getItem('info'));
    console.log(info)
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    function clicklower(e){
        setlower(e.target.value)
    }
    function clickupper(e){
        setupper(e.target.value)
    }
    function clickpercent(e){
        setattention(e.target.value)
    }
      const handleSubmit = async (e) => {
        e.preventDefault();

        const formData= new FormData();
        formData.append('csv_file', file);
        formData.append('lower', lower);
        formData.append('upper', upper);
        formData.append('attention', attention);

        try {
          const response = await fetch('http://localhost:5000/iotapi/detect_anomalies', {  
            method: 'POST',
            body: formData
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log(result)
            setdata(result)
          } else {
            console.error(`Error: ${response.status} - ${response.statusText}`);
          }
        } catch (error) {
          console.error('Error sending the request:', error);
        }
      };
      useEffect(()=>{
        if(data && data.image_path)
        {setcondition(true);}
        else
        {setcondition(false);}
    },[data])
  return (
    <div>
            <div className="maincontent">
        <div className="inputform">
            <h1 id="anahead">DEVICE DASHBOARD</h1>
            <p id="subana">Device Name: {info.name}_{info.id}</p>
            <div className="ruleshead">
                <h1>"Specifications To Keep In Mind"</h1>
            </div>
            
            <div className="rulesformat">
                <div className="xlimage">
                    <img src={require('../img/format.jpeg')} alt="Specified format"/>
                    <h4 id="imagedesc">Format of data inside the document should be as above</h4>
                </div>
                <div className="keeprules">
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
            <div className="sepout">
                <div className="seprate">
                </div>
            </div>
            <div className="uploaddataform">
                <h1 id="sub">Upload Data</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="dataFile">Upload Device Data:</label><br/><br/>
                        <input className="uploadthedata" type="file" id="dataFile" name="dataFile" onChange={handleFileChange}/>
                    </div>
                    <div>
                        <br/><label>Select Data Type:</label>
                        <input type="radio" id="numeric" name="dataType" value="numeric"/>
                        <label htmlFor="numeric">Numeric</label>
                        <input type="radio" id="boolean" name="dataType" value="boolean"/>
                        <label htmlFor="boolean">Boolean</label><br/>
                    </div>
                    <div className="rangebox">
                        <div className="thsiit">
                            <br/><br/><label htmlFor="acceptablePercentage1">Enter Maximum Value:</label>
                            <input type="number" id="acceptablePercentage1" name="acceptablePercentage1" step="any" value={upper} onChange={clickupper}/>
                        </div>
                        <div className="thsiit">
                            <br/><br/><label htmlFor="acceptablePercentage2">Enter Minimum Value:</label>
                            <input type="number" id="acceptablePercentage2" name="acceptablePercentage2" step="any" value={lower} onChange={clicklower}/>
                        </div>
                    </div>
                    <div className="belowrangebox">
                        <div className="thsiit">
                            <br/><br/><label htmlFor="acceptablePercentage3">Enter acceptable percentage:</label>
                            <input type="number" id="acceptablePercentage3" name="acceptablePercentage3" value={attention} onChange={clickpercent} step="any"/>
                        </div>
                        <div className="thsiit">
                            <br/><br/><label htmlFor="fileType">Select File Type:</label><br/><br/>
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

    <div className="resultcontent">
        <h1 id="anahead">PROCESSING RESULTS</h1>
        <div className="statistics">
            <div className="midstat">
                <div className="statbox">
                    <div className="stathead">
                        Total Number of Readings
                    </div>
                    {data && (
                    <div className="statval">
                        {data.total_readings}
                    </div>
                    )}
                </div>
                <div className="statbox">
                    <div className="stathead">
                        Total Number of Anomalies
                    </div>
                    {data && (
                    <div className="statval">
                        {data.total_anomalies}
                    </div>
                    )}
                </div>
                <div className="statbox">
                    <div className="stathead">
                        Percentage of Anomalies 
                    </div>
                    {data && (
                    <div className="statval">
                        {data.percentage_anomalies}
                    </div>
                    )}
                </div>
                <div id="lmar" className="statbox">
                    <div className="stathead">
                        Device Status
                    </div>
                    {data && (
                    <div id="attention" className="statval">
                        {data.feedback}
                    </div>
                    )}
                </div>
            </div>
        </div>
        <div className="resultimage">
            <img src={condition?require('../img/anomaly_plot.png'):require('../img/result.png')} alt="Your Result"/>
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
        <div style={{"textAlign": "center","padding": "10px","fontSize":"21px", backgroundColor: "#28282b",
        "color": "white",fontFamily: "Times New Roman",fontStyle:"italic",}}>
            <p style={{"marginBottom":"0"}}>&copy; 2023 FoolishDevelopers@node. All rights reserved.</p>
        </div>
    </div>
  )
}

export default ProcessData