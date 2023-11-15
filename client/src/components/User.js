import React from 'react'
import '../style/userstyles.css';
import {Link} from 'react-router-dom';

const User = () => {
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
                    Name: 
                </div>
                <div className="info_value">
                    Gojo Saturou
                </div>
                <div className="info_name">
                    Email: 
                </div>
                <div className="info_value">
                    gojosatoru.infinitepurple@gmail.com
                </div>
                <div className="info_name">
                    Phone Number: 
                </div>
                <div className="info_value">
                    +91 3393949322
                </div>
                <div className="info_name">
                    Institution: 
                </div>
                <div className="info_value">
                    Tokyo Jujutusu High
                </div>
                <div className="info_name">
                    Position: 
                </div>
                <div className="info_value">
                    Special Grade Sorcerer
                </div>
            </div>
        </div>
    </div>
    <div style={{"text-align": "center","padding": "12px","font-size":"21px", "background-color": "#28282b",
        "color": "white","font-family": "Times New Roman","font-style":"italic"}}>
        <p style={{"marginBottom":"0"}}>&copy; 2023 FoolishDevelopers@node. All rights reserved.</p>
    </div>
</div>
  )
}

export default User
