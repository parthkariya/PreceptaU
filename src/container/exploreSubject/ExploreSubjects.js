import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./ExploreSubjects.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context";

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

// Modal.setAppElement("#yourAppElement");

const Data = [
  {
    id: 1,
    name: "Finance",
  },
  {
    id: 2,
    name: "Marketing",
  },
  {
    id: 3,
    name: "Economics",
  },
  {
    id: 4,
    name: "Biology",
  },
];

const ExploreSubjects = ({ setLoginIsOpen }) => {
  const { subject_data } = useUserContext();

  const [getvalue, setValue] = useState("");
  const [data, setData] = useState(Data);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (value) => {
    setIsOpen(value);
  };

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the email input value, such as send it to a server
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container explore-main-wrapp">
      <h1 className="font-heading clr-main-blue">EXPLORE SUBJECTS</h1>
      <div className="drop-wrapp">
        <div className="lbl-selector">
          {/* <label className="s-lbl">Category</label> */}
          <select
            className="gift-selector"
            name="budget"
            onChange={(e) => {
              setValue(e.target.value);
              handleChange(true);
            }}
            value={getvalue}
          >
            <option value="" disabled selected>
              What whould you like to learn
            </option>
            {subject_data &&
              subject_data.map((item, index) => {
                return (
                  // <option value={`${item.id} ${item.title} `} key={index}>
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="news-latter-wrapp">
          <p className="news-latter-text">
            Sign Up to recieve email alerts for &nbsp;
            <span
              style={{
                color: "green",
                borderBottom: "2px solid green",
                fontSize: "20px",
                marginBottom: "1rem",
              }}
              className="ff-alt"
            >
              NEW COURSES
            </span>
          </p>

          <form className="subscribe_form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter your email"
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  subscribe
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="explore-model-wrapp">
          <p className="explore-model-text">
            Sign Up For{" "}
            <Link
              to={"/signup"}
              state={{ role: 2 }}
              className="btn-link"
              style={{
                fontSize: "34px",
                borderBottom: "2px solid green",
                color: "green",
              }}
            >
              FREE
            </Link>
          </p>
          <p className="explore-model-text">or</p>
          <button
            className="btn-link"
            style={{
              fontSize: "32px",
              borderBottom: "2px solid #0f4471",
              color: "#0f4471",
            }}
            onClick={() => {
              closeModal();
              setLoginIsOpen(true);
            }}
          >
            LOG IN
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ExploreSubjects;
