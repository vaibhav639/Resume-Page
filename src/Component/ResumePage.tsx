import React from "react";
import "../Css/ResumePage.css";
const ResumePage = () => {
  return (
    <>
      <br />
      <br />
      <div className="mycontainer">
        <header className="myHeader">
          <div className="mydiv">
            <h1 className="myheading1">VAIBHAV CHAUHAN</h1>
            <h4>WEB DEVELOPER</h4>
          </div>
        </header>

        <div className="mycontainer2">
          <h3 className="myheading2">CAREER OBJECTIVE</h3>
          <p className="mylist">
            Seeking opportunity to work in a friendly and fast growing
            environment where my analytical and methodical skills will be of
            great value in achieving the company's missions and goals.
          </p>
        </div>
        <div className="mydiv3">
          <h3 className="myheading2">CONTACT</h3>
          <p>Email :</p>
          <p>abc@gmail.com</p>
          <p>Phone :</p>
          <p>xxxxxxxxxx</p>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
