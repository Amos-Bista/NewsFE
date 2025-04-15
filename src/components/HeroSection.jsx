import React from "react";
import Button from "./Button";

import "./HeroSection.css";

import Vid1 from "../videos/video-1.mp4";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <video src={Vid1} autoPlay loop muted />
      <h1>ClassifyMe</h1>
      <p>Classify or Scrape The News</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="classify"
          // onClick={navigate("/classifyd")}
        >
          Classify <i className="fa-solid fa-right-to-bracket"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/about"
        >
          Scrape <i className="fa-solid fa-circle-info"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
