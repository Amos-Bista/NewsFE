import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div id="features">
      <h1 className="feat-title">Features</h1>
      <div className="a-container">
        <Link to="/classify">
          {/* <a href="./classify"> */}
          <FeatureBox
            image={featureimage}
            title="Classify"
            detail="Bringing Clarity to the News: Automatically Categorize and Organize"
          />
        </Link>
        {/* </a> */}
        <Link to="./classify">
          <FeatureBox
            image={featureimage1}
            title="Summarize"
            detail="Get the gist in a jiffy: Summarize News Stories Effortlessly with Our News Summarizer."
          />
        </Link>
        <Link to="./newscrape">
          <FeatureBox
            image={featureimage2}
            title="Scrape"
            detail="Stay Ahead of the Game: Automatically Extract the Latest News with Our News Scraper."
          />
        </Link>
      </div>
    </div>
  );
};

export default Feature;
