import React from "react";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="main">
      <Navbar />

      <div className="name">
        <h1>
          <span>Flash Feed</span>
        </h1>
        <h2 className="name2">
          Stay Informed, In Just A Few Lines -<br />{" "}
          <span className="name2__text">Your Daily News Digest</span>
        </h2>
        <p className="details" style={{ color: "black" }}>
          Welcome to Flash Feed, where we summarize long news articles and
          provide you with a quick overview of the most important information.
        </p>

        <Link className="cv-btn" to="/classify">
          Classify
        </Link>
      </div>
    </div>
  );
};

export default Header;
