import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../common";
import {
  ExploreSubjects,
  Hero,
  PartnerWith,
  Pricing,
  WentToTeach,
} from "../container";
import Modal from "react-modal";
import { useUserContext } from "../context/user_context";

const LandingPage = () => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { setLogin, isLogin, course_data, getCourse } = useUserContext();
  const [loginModalIsOpen, setLoginIsOpen] = useState(false);
  const [getemail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLogin) {
      getCourse();
    }
    console.log("course_data", course_data && course_data);
  }, [isLogin]);

  return (
    <div>
      {/* <Navbar isLogin={isLogin} setLoginIsOpen={setLoginIsOpen} /> */}
      <Hero />
      {isLogin ? null : <WentToTeach />}
      <PartnerWith />
      {/* <ExploreSubjects
        course_data={course_data}
        setLoginIsOpen={setLoginIsOpen}
      /> */}
      <Pricing />
      {/* <Footer /> */}

      {/* login model start */}

      {/* <Modal
        isOpen={loginModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="login-modal-main">
          <p className="clr-green font-heading">Login</p>
          <div className="login-modal-inp-flex">
            <input
              type="email"
              placeholder="Enter EmailId"
              className="form-control signup_input2"
              onChange={(e) => onHandleEmailChange(e)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control signup_input2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={() => Login()}
              className="btn f-xl"
              style={{ margin: "0 auto" }}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal> */}
      {/* login model end */}
    </div>
  );
};

export default LandingPage;
