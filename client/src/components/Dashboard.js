import React from 'react'
import '../style/dashstyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
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
                    <form id="deviceForm">
                        <div className="form-group">
                            <label for="deviceName">Device Name:</label>
                            <input type="text" className="form-control" id="deviceName"/>
                        </div>
                        <div className="form-group">
                            <label for="deviceID">Device ID:</label>
                            <input type="text" className="form-control" id="deviceID"/>
                        </div>
                        <div className="form-group">
                            <label for="deviceType">Device Type:</label>
                            <select className="form-control" id="deviceType">
                                <option value="Temperature">Temperature</option>
                                <option value="Humidity">Humidity</option>
                                <option value="Motion">Motion</option>
                                <option value="Smoke">Smoke</option>
                                <option value="Infrared">Infrared</option>
                                <option value="Pressure">Pressure</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label for="fileType">File Type:</label>
                            <select className="form-control" id="fileType">
                                <option value="Excel">Excel</option>
                                <option value="CSV">CSV</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" onclick="addDevice(event)">Add</button>
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
