import React, {useEffect,useRef} from 'react'
import '../style/homestyles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Keyboard, Mousewheel, Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'boxicons/css/boxicons.min.css';
import Typed from "typed.js";

const Home = () => {
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
        <div className="overlayhome">
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
            THE FEATURES WE OFFER
        </div>
    </div>
    
    <div className="cardfeatures">
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
            delay:3500,
            disableOnInteraction:false
        }}
        pagination={{
            clickable: true,
            dynamicBullets:true,
        }}
        loop={true}
        style={{
            "--swiper-pagination-color":"#313d5a",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-navigation-color":"#313d5a",
            "--swiper-pagination-bottom": "18px"
        }}
        keyboard={true}
        mousewheel={true}
        modules={[EffectFade, Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
    >
        <SwiperSlide>
                <div className="featurehead">
                    ANOMALY VISUALIZATION
                </div>
                    <div className="featurecontent">
                        <ul>
                            <li>
                                Anomaly visualization is a crucial feature that provides users with intuitive graphical representations of detected anomalies.
                            </li>
                            <li>
                                Visualizations can include charts, graphs, heatmaps, or dashboards that highlight unusual data patterns, making it easier for users to spot anomalies at a glance.
                            </li>
                            <li>
                                Interactive elements within the visualizations allow users to zoom in, explore specific data points, and investigate the root causes of anomalies.
                            </li>
                        </ul>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="featurehead">
                    MULTI-DATA SOURCE INTEGRATION
                </div>
                    <div className="featurecontent">
                        <ul>
                            <li>
                                In many IoT ecosystems, data originates from various sources, such as sensors, actuators, and external APIs. Multi-data source integration ensures that your anomaly detection system can handle diverse data types seamlessly.
                            </li>
                            <li>
                                This feature enables users to consolidate data from different IoT devices and systems into a single platform for comprehensive anomaly detection.
                            </li>
                            <li>
                                It allows for a holistic view of the entire IoT environment, making it possible to detect anomalies that might otherwise go unnoticed when analyzing individual data sources.
                            </li>
                        </ul>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="featurehead">
                    MACHINE LEARNING MODEL CUSTOMIZATION
                </div>
                    <div className="featurecontent">
                        <ul>
                            <li>
                                Customization is a powerful feature that empowers users to adapt anomaly detection models to their specific IoT use cases.
                            </li>
                            <li>
                                Users can fine-tune machine learning algorithms, adjust model parameters, and incorporate domain knowledge to improve detection accuracy.
                            </li>
                            <li>
                                Customization flexibility ensures that the system can evolve and adapt to changing data patterns and user requirements over time.
                            </li>
                        </ul>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="featurehead">
                SECURITY ASSESSMENT
            </div>
                    <div className="featurecontent">
                        <ul>
                            <li>
                                Beyond anomaly detection, security assessment features provide an added layer of protection for IoT devices and networks.
                            </li>
                            <li>
                                These features identify vulnerabilities and potential security threats within the IoT ecosystem, helping organizations proactively address security concerns.
                            </li>
                            <li>
                                By addressing security issues early, the overall safety and integrity of IoT devices and data are upheld.
                            </li>
                        </ul>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="featurehead">
                PREDICTIVE ANALYTICS
            </div>
                    <div className="featurecontent">
                        <ul>
                            <li>
                                Predictive analytics takes anomaly detection a step further by forecasting potential anomalies based on historical data trends.
                            </li>
                            <li>
                                This feature enables users to anticipate and prevent issues before they occur, reducing downtime and minimizing potential disruptions.
                            </li>
                            <li>
                                It empowers organizations to make data-driven decisions and implement preventive measures, ultimately improving the reliability and efficiency of their IoT operations.
                            </li>
                        </ul>
                    </div>
        </SwiperSlide>
    </Swiper>
    </div>
        <div className="headalign">
            <div className="theheading">
                WORKING WITH ADID
            </div>
        </div>

        <div className="steps">
            <div className="todo">
                <div className="stepnumber">
                    <div className="circle">
                        1
                    </div>
                </div>
                <div className="stepcontent">
                    <div>Register yourself on the platform</div>
                </div>
            </div>
            <div className="todo">
                <div className="stepnumber">
                    <div className="circle">
                        2
                    </div>
                </div>
                <div className="stepcontent">
                    <div>Add your respective IOT devices to the environment</div>
                </div>
            </div>
            <div className="todo">
                <div className="stepnumber">
                    <div className="circle">
                        3
                    </div>
                </div>
                <div className="stepcontent">
                    <div>Upload the device's data in the specified format with the required parameters</div>
                </div>
            </div>
            <div className="todo">
                <div className="stepnumber">
                    <div className="circle">
                        4
                    </div>
                </div>
                <div className="stepcontent">
                    <div>Explore the indepth analysis along with visual insights</div>
                </div>
            </div>
        </div>


        <div className="headalign">
            <div className="theheading">
                NEED FOR MONITORING IOT ENVIRONMENTS
            </div>
        </div>

        <div className="points">
            <div className="important">
                <b>Security</b>: Anomalies may indicate unauthorized access or cyberattacks, making continuous monitoring essential to prevent data breaches.
            </div>
            <div className="important">
                <b>Data Integrity:</b> Detecting anomalies ensures data accuracy and prevents the compromise of sensitive information.
            </div>
            <div className="important">
                <b>Operational Efficiency:</b> Monitoring helps optimize device performance, reduce downtime, and extend the lifespan of IoT devices.
            </div>
            <div className="important">
                <b>Predictive Maintenance: </b>Identifying anomalies early allows for timely maintenance, reducing the risk of device failures and costly repairs.
            </div>
            <div className="important">
                <b>Resource Optimization:</b> Anomaly detection helps optimize resource usage, leading to cost savings in terms of energy, bandwidth, and storage.
            </div>
            <div className="important">
                <b>Safety Compliance:</b> Monitoring ensures adherence to safety regulations, especially in critical applications like healthcare and industrial automation.
            </div>
            <div className="important">
                <b>Scalability:</b> As IoT ecosystems grow, monitoring becomes crucial to managing a large number of devices efficiently.
            </div>
            <div className="important">
                <b>Proactive Issue Resolution:</b> Early anomaly detection enables proactive troubleshooting, reducing the impact of issues on operations.
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

export default Home
