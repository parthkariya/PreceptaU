import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <img src={images.mail} alt="mail link" />
    </Link>
  );
};

export default ButtonMailto;
