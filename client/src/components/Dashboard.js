import React, {useState,useEffect} from 'react'
import '../style/dashstyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import temp from '../img/temp.jpg';
import humidity from '../img/humidity.jpg';
import motion from '../img/motion.jpg';
import pressure from '../img/pressure.jpg';
import infrared from '../img/infrared.jpg';
import smoke from '../img/smoke.jpg';
import Home from './Home';

const Dashboard = () => {
    const [device,setdevice] = useState({
        name: "",id: "", type: "",ftype: ""
    });
    let name,value;
    const handleDevice = (e) =>{
        name=e.target.name;
        value=e.target.value;

        setdevice({... device, [name]:value});
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
        const cardContainer = document.querySelector('.card-whole');

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
            newCard.classList.add('col-sm-3', 'card-cont');
            const ty=<Home/>
            newCard.innerHTML = `
                <div class="card">
                    <img src="${imagePath}" class="card-img-top fixed-size-image" alt="Image Alt Text">
                    <div class="card-body">
                        <h5 class="card-title">${device.name}</h5>
                        <p class="card-text">ID: ${device.id}</p>
                        <p class="card-text">Type: ${device.type}</p>
                        <p class="card-text">File Type: ${device.ftype}</p>
                        <p class="card-text">Date: ${device.date}</p>
                        <p class="card-text">Time: ${device.time}</p>
                        <a href="${ty}" class="btn btn-primary">Device Dashboard</a>
                    </div>
                </div>
            `;
            cardContainer.insertBefore(newCard,cardContainer.firstChild);
        }  
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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
                >
                    <option value="Excel">Excel</option>
                    <option value="CSV">CSV</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
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

    <div className="container">
        <h2 className="device_head">DEVICE DIRECTORY</h2>
        <button type="button" className="btn btn-info add_button" data-toggle="modal" data-target="#myModal">
            Add New Device
        </button>
            <div className="row card-whole">
                <div className="col-sm-3 card-cont">
                </div>
                <div className="col-sm-3 card-cont">
                </div>
            </div>
    </div>      
</div>
  )
}

export default Dashboard