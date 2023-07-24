import React, { useEffect, useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import images from "../../constants/images";
import ButtonMailto from "../ButtonMailto";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Button } from "@mui/material";
import Modal from "react-modal";
import { useUserContext } from "../../context/user_context";

const Navbar = ({ setTab, getTab }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    setLogin,
    isLogin,
    course_data,
    getCourse,
    userdata,
    role,
    logoutUser,
  } = useUserContext();
  const [loginModalIsOpen, setLoginIsOpen] = useState(false);
  const [getemail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function logout() {
    localStorage.clear();
    window.location.reload(false);
    navigate("/");
  }

  //  let Role = JSON.parse(localStorage.getItem("role"));

  useEffect(() => {
    if (isLogin) {
      getCourse();
    }
    console.log("course_data", course_data && course_data);
  }, [isLogin]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // innerWidth: "100px",
      backgroundColor: "#ebf2f9",
      padding: "10px",
    },
  };

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    console.log("email", email);

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const Login = async (e) => {
    if (getemail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(getemail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else if (password === "") {
      alert("Enter the Password....!");
      return;
    } else {
      var params = {
        email: getemail,
        password: password,
      };

      console.log("-=-=-=->", params);
      // await setRegister(params);
      const data = await setLogin(params, navigate);
      if (data) {
        if (data.success === 1) {
          //  navigate("/");
          // if (isLogin == true && role === 2) {
          //   navigate("/studant-profile");
          // }
          window.location.reload();
        }
      }
    }
  };

  function closeModal() {
    setLoginIsOpen(false);
  }

  function afterOpenModal() {}

  useEffect(() => {
    console.log("isLogin", isLogin);
    console.log("Role", role);
  }, []);

  const togal = () => {
    setTab(4);
    setToggleMenu(false);

    console.log("togal", toggleMenu);
  };
  return (
    <>
      <div className="nav-float">
        <nav className="container" style={{ background: "#fff" }}>
          <div className="nav-main-wrapp">
            <Link to="/">
              <img
                src={images.weblogolast}
                style={{ width: "80px", scale: "1.5" }}
              />
            </Link>
            <div className="nav-link-wrapp">
              <Link to="/ourmission" className="font-bold nav-link">
                OUR MISSION
              </Link>
              <Link
                to=""
                // onClick={handleClickScroll}
                className="font-bold nav-link"
              >
                CONTACT US
              </Link>
              <Link
                to=""
                // onClick={handleClickScroll}
                className="font-bold nav-link"
              >
                LANGUAGES
              </Link>
              {isLogin && role === 1 ? (
                <Link to={"/mentor-profile"} className="btn2 f-xl">
                  Dashboard
                </Link>
              ) : isLogin && role === 2 ? (
                <Link to={"/studant-profile"} className="btn2 f-xl">
                  Dashboard
                </Link>
              ) : (
                <button
                  className="btn f-xl"
                  onClick={() => {
                    setLoginIsOpen(true);
                    console.log(loginModalIsOpen);
                  }}
                >
                  Login
                </button>
              )}

              {isLogin ? (
                <button className="btn f-xl" onClick={logout}>
                  Logout
                </button>
              ) : null}
            </div>
            {toggleMenu ? (
              <button
                onClick={() => setToggleMenu(false)}
                className="toggle_menu_btn"
              >
                <IoClose
                  style={{ width: "32px", height: "32px", color: "#767676" }}
                />
              </button>
            ) : (
              <button
                onClick={() => setToggleMenu(true)}
                className="toggle_menu_btn"
              >
                <img src={images.hamburgar} />
              </button>
            )}
          </div>
        </nav>
      </div>
      <>
        {toggleMenu && (
          <>
            <div className="mobile-nav-main">
              <div className="mobile-nav-links">
                <Link to="" className="font-bold">
                  OUR MISSION
                </Link>
                <Link to="/" className="font-bold">
                  CONTACT US
                </Link>
                <Link to="/" className="font-bold">
                  LANGUAGES
                </Link>
              </div>
              <div className="mobile-nav-links">
                {isLogin && role === 1 ? (
                  <Link to={"/mentor-profile"} className="btn2 f-xl">
                    Dashboard
                  </Link>
                ) : isLogin && role === 2 ? (
                  <Link to={"/studant-profile"} className="btn2 f-xl">
                    Dashboard
                  </Link>
                ) : (
                  <button
                    className="btn f-xl"
                    onClick={() => {
                      setLoginIsOpen(true);
                      console.log(loginModalIsOpen);
                    }}
                  >
                    Login
                  </button>
                )}

                {isLogin ? (
                  <button className="btn f-xl" onClick={logout}>
                    Logout
                  </button>
                ) : null}
              </div>
              {/* <p>123</p> */}

              {role === 1 ? (
                <div
                  className="profile_sidebar_wrapp mob-nav-display"
                  style={{ display: "block", width: "100%" }}
                >
                  <button
                    style={{
                      background: "green",
                      fontWeight: "500",
                      paddingLeft: "40%",
                    }}
                    onClick={() => {
                      setTab(1);
                      setToggleMenu(false);
                    }}
                    className="profile_sidebar_sig_btn"
                  >
                    Courses
                  </button>

                  <button
                    style={{
                      background: "green",
                      fontWeight: "500",
                      paddingLeft: "40%",
                    }}
                    onClick={() => {
                      setTab(3);
                      setToggleMenu(false);
                    }}
                    className="profile_sidebar_sig_btn"
                  >
                    Inquiry List
                  </button>
                  <button
                    style={{
                      background: "green",
                      fontWeight: "500",
                      paddingLeft: "40%",
                    }}
                    onClick={() => {
                      togal();
                    }}
                    className="profile_sidebar_sig_btn"
                  >
                    My Profile
                  </button>
                </div>
              ) : role === 2 ? (
                <div
                  className="profile_sidebar_wrapp mob-nav-display"
                  style={{ display: "block", width: "100%" }}
                >
                  <button
                    style={{
                      background: "green",
                      fontWeight: "500",
                      paddingLeft: "40%",
                    }}
                    onClick={() => {
                      setTab(2);
                      setToggleMenu(false);
                    }}
                    className="profile_sidebar_sig_btn"
                  >
                    Search Mentor
                  </button>
                  <button
                    style={{
                      background: "green",
                      fontWeight: "500",
                      paddingLeft: "40%",
                    }}
                    onClick={() => {
                      setTab(3);
                      setToggleMenu(false);
                    }}
                    className="profile_sidebar_sig_btn"
                  >
                    Inquiry List
                  </button>
                  <button
                    style={{
                      background: "green",
                      fontWeight: "500",
                      paddingLeft: "40%",
                    }}
                    onClick={() => {
                      setTab(4);
                      setToggleMenu(false);
                    }}
                    className="profile_sidebar_sig_btn"
                  >
                    My Profile
                  </button>
                </div>
              ) : null}
              {/* <div
                className="profile_sidebar_wrapp mob-nav-display"
                style={{ display: "block", width: "100%" }}
              >
                <button
                  style={{
                    background: "green",
                    fontWeight: "500",
                    paddingLeft: "40%",
                  }}
                  onClick={() => setTab(1)}
                  className="profile_sidebar_sig_btn"
                >
                  Courses
                </button>

                <button
                  style={{
                    background: "green",
                    fontWeight: "500",
                    paddingLeft: "40%",
                  }}
                  onClick={() => setTab(3)}
                  className="profile_sidebar_sig_btn"
                >
                  Inquiry List
                </button>
                <button
                  style={{
                    background: "green",
                    fontWeight: "500",
                    paddingLeft: "40%",
                  }}
                  onClick={() => setTab(4)}
                  className="profile_sidebar_sig_btn"
                >
                  My Profile
                </button>
              </div> */}

              <div className="mobile-nav-links">
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
          </>
        )}
      </>
      <Modal
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
      </Modal>
    </>
  );
};

export default Navbar;
