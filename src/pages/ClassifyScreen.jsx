import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ClassifyScreen.css";
import axios from "axios";
import Loader from "../components/Loader";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [field1Value, setField1Value] = useState("");
  const [field2Value, setField2Value] = useState("");
  const [field3Value, setField3Value] = useState("SVM");

  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState({});
  const [conf, setConf] = useState(false);

  const handleField1Change = (event) => {
    setField1Value(event.target.value);
  };

  const handleField2Change = (event) => {
    setField2Value(event.target.value);
    console.log(event.target.value);
  };

  const handleField3Change = (event) => {
    setField3Value(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post("http://localhost:5000/api/form", {
        news: field1Value,
        count: field2Value,
        model: field3Value,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setResp(response.data);
        setResult(true);
        toast.success("Classified & Summarized");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <Toaster />
      <Navbar />
      <div className={`wrapper ${loading ? "load" : ""}`}>
        <div className="classify-screen">
          <h1>Classify & Summarize</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <textarea
                type="text"
                value={field1Value}
                onChange={handleField1Change}
                rows={20}
                cols={100}
                required
                placeholder="Enter News"
                className="news-classnsumm"
              />
            </label>
            <br />
            <label>
              <input
                type="number"
                value={field2Value}
                onChange={handleField2Change}
                placeholder="Summarized Sentence Count"
                required
                min={0}
              />
            </label>
            <label className="model-choose">
              <h3>Use Model:</h3>
              <select
                className="select-style"
                value={field3Value}
                onChange={handleField3Change}
              >
                <option value="SVM">SVM</option>
                <option value="KNN">KNN</option>
                <option value="MNB">MNB</option>
              </select>
            </label>

            <br />
            {
              <button type="submit" className="classify-btn">
                Classify & Summarize
              </button>
            }
          </form>
          {loading ? (
            <Loader className="loader" />
          ) : (
            <div className={!result ? `classify-hidden` : `classify-active`}>
              <div className="classify-result">
                <div>
                  The News Is Classified as :{" "}
                  <h3 className="classify-title">{resp.prediction}</h3>
                </div>
                <div className="classify-summmary" id="cl-summary">
                  <h3>Summary:</h3>
                  <p>{resp.summarized}</p>
                </div>
                {/* <h3>Confidence</h3>
                <div>Business: {JSON.stringify(resp.confidence.business)}</div>
                <div>Entertainment: {resp.confidence.entertainment}</div>
                <div>Politics: {resp.confidence.politics}</div>
                <div>Sport: {resp.confidence.sport}</div>
                <div>Technology: {resp.confidence.tech}</div> */}
                <button
                  onClick={() => setConf(!conf)}
                  className="classify-alter-btn"
                >
                  Click to alter showing Confidence and TF-IDF
                </button>

                <div className={!conf ? `classify-hidden` : `classify-active`}>
                  {resp.confidence && (
                    <div className="confi-dis">
                      <h3>Confidence Values</h3>
                      <ul style={{ paddingLeft: 0 }}>
                        {Object.entries(resp.confidence).map(
                          ([category, value]) => (
                            <li
                              key={category}
                              style={{
                                textTransform: "capitalize",
                              }}
                            >
                              <span>{category}:</span>
                              <span style={{ textAlign: "right" }}>
                                <strong>{value}</strong>
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                  {resp.tf_idf && (
                    <div className="tf-box">
                      <h3>TF-IDF Values</h3>
                      <ul>
                        {Object.entries(resp.tf_idf).map(([key, value]) => (
                          <li key={key}>
                            Sentence {key} : <strong> {value} </strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
