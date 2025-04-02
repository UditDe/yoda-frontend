// import React from 'react'
import "./styles/home.scss";
import study_girl from "../assets/png/ReadingDoodle.png";
const Home = () => {
  return (
    <div className="super_container">
      <div className="home_section">
        <div className="headlines-btn">
          <div className="headlines">
            <p className="head-one">
              YODA - CV COMPASS
            </p>
            <p className="head-two">
              Want to be hired? <br/>
              I got you!
            </p>
          </div>
          <button className="hero-btn">
            LEARN MORE
          </button>
        </div>
        <div className="image-container">
          <img className="hero-img" src={study_girl} alt=" " />
        </div>
      </div>
      <div className="about_section"></div>
      <div className="work_flow_section"></div>
      <div className="analyze_section"></div>
    </div>
  );
};

export default Home;
