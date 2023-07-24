import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="price_background">
      <div className="price_container">
        <div className="panel pricing-table">
          <div className="pricing-plan">
            <img
              src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
              alt=""
              className="pricing-img"
            />
            <h2 className="pricing-header">FREE</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">
                Sign Up and get 1 course Free
              </li>
            </ul>
            <span className="pricing-price">Free</span>
            <Link to="/signup" className="pricing-button">
              Sign up
            </Link>
          </div>

          <div className="pricing-plan">
            <img
              src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
              alt=""
              className="pricing-img"
            />
            <h2 className="pricing-header">POPULAR</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">
                access all courses for month
              </li>
            </ul>
            <span className="pricing-price">
              $9.99 / <span style={{ fontSize: "18px" }}>Month</span>
            </span>
            <a href="#/" className="pricing-button is-featured">
              buy now
            </a>
          </div>

          <div className="pricing-plan">
            <img
              src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
              alt=""
              className="pricing-img"
            />
            <h2 className="pricing-header">UNLIMITED</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">
                truly unlimited all courses for life time
              </li>
            </ul>
            <span className="pricing-price ">$149</span>
            <a href="#/" className="pricing-button">
              buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
