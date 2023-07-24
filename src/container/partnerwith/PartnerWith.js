import React from "react";
import "./PartnerWith.css";

const PartnerWith = () => {
  return (
    <div className="partner-main-wrapp">
      <div className="container bg-light-blue partner-base-wrapp">
        <div className="">
          <h1 className="font-heading clr-green">PARTNERED WITH :</h1>
        </div>
        <div className="partner-single-wrapp">
          <p className="partner-single-wrapp2">U of T</p>
          <div className="green-hr"></div>
          <p className="partner-single-wrapp2">York U</p>
          <div className="green-hr"></div>
          <p className="partner-single-wrapp2">TMU</p>
          <div className="green-hr"></div>
          <p className="partner-single-wrapp2">etc ...</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerWith;
