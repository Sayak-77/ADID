import React, {useEffect,useRef} from 'react'
import '../style/aboutstyles.css';
import Typed from 'typed.js';

const About = () => {
    const typedRef = useRef(null);
    const strings = ["AMIGOS!!!", "DEVELOPERS!!!", "ENTHUSIASTS!!!", "INNOVATORS!!!"];
  
    useEffect(() => {
      
      typedRef.current = new Typed('#typed-element', {
        strings,
        typeSpeed: 50, 
        backSpeed: 50, 
        backDelay: 1000, 
        smartBackspace: true,
        showCursor: false,
        loop: true,
      });
      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }, []);
  return (
    <div>
      <div className="landingback">
    <img src={require('../img/back.jpeg')} alt="Landing Page"/>
        <div className="overlayabout">
            <div className="introhead">
                HOLA&nbsp;&nbsp;<span id='typed-element'></span>
            </div>
            <div className="introduction">
                "Welcome to our cutting-edge Anomaly Detection in IoT Devices platform. Our mission is to empower users with the ability to harness the potential of their IoT data with ease and precision. Our intuitive platform allows you to effortlessly upload your IoT data, whether it's sensor readings, device logs, or any other type of data stream. Once uploaded, our state-of-the-art anomaly detection algorithms go to work, analyzing your data to identify irregular patterns, outliers, and anomalies. By harnessing the power of artificial intelligence and machine learning, we provide you with actionable insights, helping you stay ahead of issues, prevent downtime, and optimize your IoT ecosystem's performance. Say goodbye to manual data scrutiny and hello to automated anomaly detection that puts the power of IoT data analytics at your fingertips."
            </div>
        </div>
    </div>
    <div className="headalign">
        <div className="theheading">
            GET IN TOUCH
        </div>
    </div>

    <div className="thebut">
        <div className="boxes">
            <a style={{"textDecoration":"none","color":"white"}} href="">Give Feedback</a>
        </div>
        <div className="boxes">
            <a style={{"textDecoration":"none","color":"white"}} href="">Request Project</a>
        </div>
    </div>


    <div className="headalign">
        <div className="theheading">
            ABOUT THE TEAM
        </div>
    </div>

    <div className="infobox">
        <div className="cards">
            <div className="profilepic">
                <img className="circular-image" src={require("../img/prachi.jpeg")} alt=""/>
            </div>
            <div className="profilecontent">
                <div className="name">
                    Prachi Dhingra
                </div>
                <div className="degree">
                    UNDERGRADUATE<br/>
                    Computer Science Engineering
                </div>
                <div className="aboutlinks">
                    <i className='bx bxl-gmail' ></i>
                    <i className='bx bxl-linkedin' ></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="profilepic">
                <img id="fit" src={require("../img/shivani.jpeg")} alt=""/>
            </div>
            <div className="profilecontent">
                <div className="name">
                    Shivani
                </div>
                <div className="degree">
                    UNDERGRADUATE<br/>
                    Computer Science Engineering
                </div>
                <div className="aboutlinks">
                    <i className='bx bxl-gmail' ></i>
                    <i className='bx bxl-linkedin' ></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="profilepic">
                <img className="circular-image" src={require("../img/pandey.jpeg")} alt=""/>
            </div>
            <div className="profilecontent">
                <div className="name">
                    Pandey Sashidhar
                </div>
                <div className="degree">
                    UNDERGRADUATE<br/>
                    Computer Science Engineering
                </div>
                <div className="aboutlinks">
                    <i className='bx bxl-gmail' ></i>
                    <i className='bx bxl-linkedin' ></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="profilepic">
                <img className="circular-image" src={require("../img/sayak.jpg")} alt=""/>
            </div>
            <div className="profilecontent">
                <div className="name">
                    Sayak Chatterjee
                </div>
                <div className="degree">
                    UNDERGRADUATE<br/>
                    Computer Science Engineering
                </div>
                <div className="aboutlinks">
                    <i className='bx bxl-gmail' ></i>
                    <i className='bx bxl-linkedin' ></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
        </div>
        <div className="cards">
            <div className="profilepic">
                <img id="fit" src={require("../img/jishnu.jpeg")} alt=""/>
            </div>
            <div className="profilecontent">
                <div className="name">
                    Jishnu Sharma
                </div>
                <div className="degree">
                    UNDERGRADUATE<br/>
                    Computer Science Engineering
                </div>
                <div className="aboutlinks">
                    <i className='bx bxl-gmail' ></i>
                    <i className='bx bxl-linkedin' ></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-twitter' ></i>
                </div>
            </div>
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

export default About
