import React from "react";
import images from "../../constants/images";
import "./WentToTeach.css";
import { Link } from "react-router-dom";

const WentToTeach = () => {
  return (
    <div className="went-main-wrapp">
      <div className="container went-base-wrapp">
        <div className="went-single-wrapp">
          <img src={images.teach} className="teach-img" />
          <Link to={"/signup"} state={{ role: 1 }} className="btn2 f-xl">
            I WANT TO TEACH
          </Link>
        </div>
        <div className="went-single-wrapp row-revarse">
          <img src={images.larning} className="teach-img" />
          <Link to={"/signup"} state={{ role: 2 }} className="btn f-xl">
            I WANT TO LEARN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WentToTeach;
