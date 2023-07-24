import React from "react";
import images from "../../constants/images";
import "./Footer.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_bg_wrapp">
      <div className="container footer_main_wrapp bg-light-blue">
        {/* <div></div> */}
        <div className="footer_part_1">
          <Link to="/" className="footer_main_text">
            {/* <h2 className="h2">
              IF YOU’VE MADE THIS FAR,
              <br /> LET’S TALK.
            </h2> */}
            <img src={images.weblogolast} className="footer_arrow" />
          </Link>
          {/* <p className="footer_des_text">We are here to help you</p> */}
          <p className="font-des foo-mar-top">MentorU &copy; 2023</p>
        </div>
        <div className="footer_part_2">
          <div className="footer_p2-s1">
            <div>
              <p className="font-md-light">CONTACT</p>
              <a href="" className="font-md foo-link">
                support@gmail.com
              </a>
            </div>
            <div>
              <p className="font-md-light">SOCIAL</p>
              {/* <p>LinkedIn: @palakashar</p> */}
              <div className="mt-2">
                <a href="" className="social-icon">
                  <FiFacebook
                    style={{ width: "22px", height: "22px" }}
                    className="foo-link"
                  />
                </a>
                <a href="" className="social-icon">
                  <FiTwitter
                    style={{ width: "22px", height: "22px" }}
                    className="foo-link"
                  />
                </a>
                <a href="" className="social-icon">
                  <FiInstagram
                    style={{ width: "22px", height: "22px" }}
                    className="foo-link"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_p2-s2">
            <div>
              <p className="font-md-light ">TEARMS</p>
              <div className="d-flex fd-c">
                <a className="font-md foo-link" href="">
                  Contact Us
                </a>
                <a className="font-md foo-link foo-mar-top2" href="">
                  Tearms & Condition
                </a>
                <a className="font-md foo-link foo-mar-top2" href="">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
