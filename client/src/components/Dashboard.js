import React, {useState} from 'react'
import '../style/dashstyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import temp from '../img/temp.jpg';
import humidity from '../img/humidity.jpg';
import motion from '../img/motion.jpg';
import pressure from '../img/pressure.jpg';
import infrared from '../img/infrared.jpg';
import smoke from '../img/smoke.jpg';

const Dashboard = () => {
    const [device,setdevice] = useState({
        name: "",id: "", type: "",ftype: ""
    });
    let name,value;
    const handleDevice = (e) =>{
        name=e.target.name;
        value=e.target.value;

        setdevice({...device, [name]:value});
    }
    const deviceData = [];
    const addDevice = async(e) => {
        e.preventDefault();

        const deviceName = document.getElementById('deviceName').value;
        const deviceID = document.getElementById('deviceID').value;
        const deviceType = document.getElementById('deviceType').value;
        const fileType = document.getElementById('fileType').value;
        
        const currentDate = new Date();
        const deviceTime = currentDate.toLocaleTimeString();
        const deviceDate = currentDate.toLocaleDateString();

        // Add device information to the array
        deviceData.push({
            name: deviceName,
            id: deviceID,
            type: deviceType,
            ftype: fileType,
            date: deviceDate,
            time: deviceTime,
        });
        updateDeviceCards();
        window.$('#myModal').modal('hide'); 
    };
    function updateDeviceCards() {
        const cardContainer = document.querySelector('.whole_card');

        for (let i = deviceData.length - 1; i >= 0; i--) {
            const device = deviceData[i];
            let imagePath;
            switch (device.type) {
                case 'Temperature':
                    imagePath = temp;
                break;
                case 'Humidity':
                    imagePath = humidity;
                break;
                case 'Motion':
                    imagePath = motion;
                break;
                case 'Smoke':
                    imagePath = smoke;
                break;
                case 'Pressure':
                    imagePath = pressure;
                break;
                case 'Infrared':
                    imagePath = infrared;
                break;
                default:
                    imagePath = '../img/default.jpg';
                }
            
            const newCard = document.createElement('div');
            newCard.classList.add('device_card');
        
            newCard.innerHTML = `
                <div>
                    <img src="${imagePath}" class="card-img-top fixed-size-image" alt="Image Alt Text">
                    <div class="card_body">
                        <h5 class="card_title">${device.name}</h5>
                        <p class="card_text">ID: ${device.id}</p>
                        <p class="card_text">Type: ${device.type}</p>
                        <p class="card_text">File Type: ${device.ftype}</p>
                        <p class="card_text">Date: ${device.date}</p>
                        <p class="card_text">Time: ${device.time}</p>
                        <a href="/process_data"><button class="dashboard_button">Process Data</button></a>
                    </div>
                </div>
            `;
            cardContainer.insertBefore(newCard,cardContainer.firstChild);
        }  
    }
    function data()
    {
        window.location.href='/process_data';
    }
    function handleid(){
        localStorage.setItem('info',JSON.stringify({id: device.id,name:device.name}));
    }
  return (
    <div>
        <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Enter Device Information</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                <form id="deviceForm" onSubmit={addDevice}>
            <div className="form-group">
                <label htmlFor="deviceName">Device Name:</label>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="deviceName"
                    value={device.name}
                    onChange={handleDevice}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="deviceID">Device ID:</label>
                <input
                    name="id"
                    type="text"
                    className="form-control"
                    id="deviceID"
                    value={device.id}
                    onChange={handleDevice}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="deviceType">Device Type:</label>
                <select
                    name="type"
                    className="form-control"
                    id="deviceType"
                    value={device.type}
                    onChange={handleDevice}
                    required
                >
                    <option value="Temperature">Temperature</option>
                    <option value="Humidity">Humidity</option>
                    <option value="Motion">Motion</option>
                    <option value="Smoke">Smoke</option>
                    <option value="Infrared">Infrared</option>
                    <option value="Pressure">Pressure</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="fileType">File Type:</label>
                <select
                    name="ftype"
                    className="form-control"
                    id="fileType"
                    value={device.ftype}
                    onChange={handleDevice}
                    required
                >
                    <option value="Excel">Excel</option>
                    <option value="CSV">CSV</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleid}>
                Add
            </button>
        </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div className="device_container">
        <h2 className="device_head">DEVICE DIRECTORY</h2>
        <button type="button" className="add_button" data-toggle="modal" data-target="#myModal">
            Add New Device
        </button>
            <div className="whole_card">
                <div className="device_card">
                        <img src={require('../img/temp.jpg')} className="card-img-top fixed-size-image" alt="Text"/>
                        <div className="card_body">
                            <h5 className="card_title">Home Temperature</h5>
                            <p className="card_text">ID: UHJ907P</p>
                            <p className="card_text">Type: Temperature</p>
                            <p className="card_text">File Type: Excel</p>
                            <p className="card_text">Date: 08/10/2023</p>
                            <p className="card_text">Time: 11:20:30 AM</p>
                            <button className="dashboard_button" onClick={data}>Process Data</button>
                        </div>
                    </div>
                <div className="device_card">
                        <img src={require('../img/smoke.jpg')} className="card-img-top fixed-size-image" alt="Text"/>
                        <div className="card_body">
                            <h5 className="card_title">Smoke Detector</h5>
                            <p className="card_text">ID: ZXG678P</p>
                            <p className="card_text">Type: Smoke</p>
                            <p className="card_text">File Type: CSV</p>
                            <p className="card_text">Date: 02/23/2023</p>
                            <p className="card_text">Time: 1:45:15 PM</p>
                            <button className="dashboard_button" onClick={data}>Process Data</button>
                        </div>
                    </div>
                </div>
           </div>      
    </div>
  )
}

export default Dashboard
