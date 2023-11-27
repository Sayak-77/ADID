import React from 'react'
import '../style/userstyles.css';
import {Link} from 'react-router-dom';

const User = () => {
    const help=JSON.parse(localStorage.getItem('help'));
    const raw =JSON.parse(localStorage.getItem('raw'));
  return (
    <div>
        <div className="profile_dash">
        <div className="linkcontainer">
            <div className="profile_picture">
                <img src={require('../img/gojo.jpg')} alt="Profile"/>
            </div>
            <div className="links_to_go">
                <div className="link_button">
                <Link className='linkuser no-hover' to='/'>Home</Link>
                </div>
                <div className="link_button">
                <Link className='linkuser no-hover' to='/dashboard'>Device Dashboard</Link>
                </div>
            </div>
        </div>
        <div className="user_information">
            <div className="profile_heading">
                MY PROFILE
            </div>
            <div className="info_tech">
                <div className="info_name">
                    UserName: 
                </div>
                <div className="info_value">
                    {raw.username}
                </div>
                <div className="info_name">
                    Name: 
                </div>
                <div className="info_value">
                    {help.name}
                </div>
                <div className="info_name">
                    Email: 
                </div>
                <div className="info_value">
                    {help.email}
                </div>
                <div className="info_name">
                    Phone Number: 
                </div>
                <div className="info_value">
                    +91 {raw.mobile}
                </div>
                <div className="info_name">
                    Institution: 
                </div>
                <div className="info_value">
                    {raw.institute}
                </div>
            </div>
        </div>
    </div>
    <div style={{"textAlign": "center","padding": "10px","fontSize":"21px", backgroundColor: "#28282b",
        "color": "white",fontFamily: "Times New Roman",fontStyle:"italic",}}>
            <p style={{"marginBottom":"0"}}>&copy; 2023 FoolishDevelopers@node. All rights reserved.</p>
        </div>
</div>
  )
}

export default User
