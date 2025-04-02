// import React from 'react'
import "./styles/home.scss";
import study_girl from "../assets/png/ReadingDoodle.png";
import yoda_intro from "../assets/Masscot/YODA-removebg.png";
import icecream_lady from "../assets/png/IceCreamDoodle.png";
import meditating from "../assets/png/MeditatingDoodle.png";
import petting from "../assets/png/PettingDoodle.png";
import yoda_analysis from "../assets/Masscot/YODA_analyze_bgless.png";
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
          <button className="hero-btn common-btn">
            LEARN MORE
          </button>
        </div>
        <div className="image-container">
          <img className="hero-img" src={study_girl} alt=" " />
        </div>
      </div>
      <div className="about_section">
        <div className="image-container-yoda">
          <img className="masscot-img" src={yoda_intro} alt = " " />
        </div>
        <div className="desc-yoda">
          <h1>MEET YODA</h1>
          <p>
            YODA is an AI-powered CV Analyzer that evaluates resumes with precision, 
            offering deep insights into strengths, weaknesses, and job relevance. 
            Trained on 2,400+ real-world resumes across multiple industries, it uses 
            advanced NLP and Machine Learning to assess formatting, extract key 
            skills, predict job fit, and provide actionable feedback. Whether you're 
            a fresh graduate or a seasoned professional, YODA ensures your CV stands 
            out by making it ATS-friendly and industry-ready. 🚀🐶
          </p>
        </div>
      </div>
      <div className="work_flow_section">
        <h1>HERE’S THE FLOW</h1>
        <div className="work-list">
          <div className="work-card">
            <div className="image-container">
              <img className="card-image" src={icecream_lady} alt=" " />
            </div>
            <span className="step-title">Give Me Your CV</span>
            <p className="step-desc">
              Just upload it
              using the button given below
            </p>
          </div>
          <div className="work-card">
          <div className="image-container">
              <img className="card-image" src={meditating} alt=" " />
            </div>
            <span className="step-title">Wait A Moment</span>
            <p className="step-desc">
            Sometimes the model may take a bit long time to analyze Your CV
            </p>
          </div>
          <div className="work-card">
          <div className="image-container">
              <img className="card-image" src={petting} alt=" " />
            </div>
            <span className="step-title">Ask YODA</span>
            <p className="step-desc">
              Got results !?
              ask suggestions to YODA - the AI assistant
            </p>
          </div>
        </div>
      </div>
      <div className="analyze_section">
        <h1>Lets get Started</h1>
        <div className="analyze-content">
          <div className="btn-group">
            <button className="common-btn">UPLOAD CV</button>
            <button className="common-btn" disabled={true}>ANALYZE CV</button>
          </div>
          <div className="preview-container">
            <img src={yoda_analysis} alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
