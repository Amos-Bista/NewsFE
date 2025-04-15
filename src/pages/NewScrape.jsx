import React, { useEffect, useState } from "react";
import "./NewScrape.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoaderEng from "../components/LoaderEng";
import LoaderNep from "../components/LoaderNep";

const NewScrape = () => {
  const [engLoading, setEngLoading] = useState(false);
  const [nepLoading, setNepLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const engScrape = async () => {
    setEngLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:5000/scrapeEnglishNews");
      setEngLoading(false);
      toast.success("Scraped Successfully");
      return window.location.assign("/scrape");
    } catch (err) {
      // Delay the error toast for 5 seconds using async/await
      await new Promise(resolve => setTimeout(resolve, 5000));
      toast.error("Something Went Wrong: " + err);
    }
  };

  const nepScrape = async () => {
    setNepLoading(true);
    await axios
      .get("http://localhost:5000/scrapeNepaliNews")
      .then((res) => {
        console.log(res.data);
        setNepLoading(false);
        toast.success("Scraped Successfully");
        return window.location.assign("/scrape");
      })
      
  };

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="scrape-back" onClick={handleClick}>
        <span className="scrape-arrow"></span>
      </div>
      <div className="new-wrapper">
        <Toaster />
        <div className="scrape-box">
          <h1 className="scrape-head-new">Scrape News</h1>
          {engLoading && <LoaderEng />}
          {nepLoading && <LoaderNep />}
          <div className="btn-wrap-new">
            <button className="new-btn" onClick={engScrape}>
              Scrape English
            </button>
            <button className="new-btn" onClick={nepScrape}>
              Scrape Nepali
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewScrape;
