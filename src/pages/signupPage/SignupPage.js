import { Box, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Footer, Navbar } from "../../common";
import images from "../../constants/images";
import "./SignupPage.css";
import "react-datepicker/dist/react-datepicker.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import { get_subjects } from "../../utils/Constant";
import moment from "moment";

const SignupPage = () => {
  const { setRegister, subject_data, course_data } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.state);
  }, [location]);

  // const fileInput = useRef(null);

  // const handleFileInput = (e) => {
  //   const file = e.target.files[0];
  //   if (file.size > 1024)
  //     onFileSelectError({ error: "File size cannot exceed more than 1MB" });
  //   else onFileSelectSuccess(file); // handle validations
  //   onFileSelect(e.target.files[0]);
  // };

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [selectedImage, setSelectedImage] = useState();
  const [imageUrl, setImageUrl] = useState(null);
  const [avilableDate, setAvilableDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [educationalInstitute, setEducationalInstitute] = useState("");
  const [getemail, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [sortNote, setSortNote] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [price, setPrice] = useState();
  const [password, setPassword] = useState("");
  const [getsubjectId, setSubjectId] = useState(0);
  const [getcourseId, setCoursetId] = useState(0);
  const [getbaseImg, setBaseImg] = useState("");

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
    console.log("selectedImage", selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    console.log("birthDate", moment(birthDate).format("YYYY-MM-DD"));
  }, [birthDate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function getBase64(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
        setBaseImg(reader.result);
        console.log("reader.result", reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    console.log("email", email);

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  // const getSubjects = async () => {
  //   try {
  //     const response = await axios.post(get_subjects, params, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     const subjectdata = response.data;
  //     console.log("====", response.data);
  //     if (subjectdata.success == 1) {
  //     }
  //     return response.data;
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const Signin = async (e) => {
    // const img = {
    //   uri: imageUrl,
    //   name: selectedImage.name,
    //   type: selectedImage.type,
    // };

    if (firstName === "") {
      alert("Enter the First Name...!");
      return;
    } else if (lastName === "") {
      alert("Enter the Last Name......!");
      return;
    } else if (educationalInstitute === "") {
      alert("Enter the Educational Institute......!");
      return;
    } else if (getemail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(getemail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else if (birthDate === "") {
      alert("Please select Birth Date....!");
      return;
    } else if (password === "") {
      alert("Enter the Password....!");
      return;
    } else if (sortNote === "") {
      alert("Enter the Sort Note....!");
    } else {
      var params = {
        first_name: firstName,
        last_name: lastName,
        educational: educationalInstitute,
        email: getemail,
        password: password,
        role: location.state.role,
        description: sortNote,
        course_id: getcourseId,
        subject: getsubjectId,
        code: courseCode,
        image: getbaseImg,
        dob: moment(birthDate).format("YYYY-MM-DD"),
      };

      console.log("-=-=-=->", params);
      // await setRegister(params);
      const data = await setRegister(params);
      if (data) {
        if (data.success === 1) {
          navigate("/");
        }
      }
    }
  };

  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="container signup_main_wrapp nav-margin">
        <div className="signup_part">
          <p className="font-heading clr-green">SIGN UP</p>

          {/* -------------- */}

          <div className="signup_first_wrapp">
            <div className="signup_name_wrapp">
              <input
                type="text"
                className="form-control signup_input"
                name="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="form-control signup_input"
                name="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                className="form-control signup_input2"
                name="educational"
                placeholder="Educational Institute"
                value={educationalInstitute}
                onChange={(e) => setEducationalInstitute(e.target.value)}
              />
              <DatePicker
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                className="red-border"
                placeholderText="Date Of Birth"
                dateFormat="dd/MM/yyyy"
              />
              <input
                type="text"
                className="form-control signup_input2"
                name="email"
                placeholder="Email"
                onChange={(e) => onHandleEmailChange(e)}
              />
            </div>
            <div className="signup_image_wrapp">
              {/* <img src={images.banner_img2} width="60%" /> */}
              <>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setSelectedImage(e.target.files[0]);
                    getBase64(e.target.files[0]);
                  }}
                />

                {imageUrl && selectedImage ? (
                  <label htmlFor="select-image">
                    <Box mt={2} textAlign="center">
                      {/* <div>Image Preview:</div> */}
                      <img
                        src={imageUrl}
                        alt={selectedImage.name}
                        height="100px"
                        className="preiew_img"
                        width="80%"
                      />
                    </Box>
                  </label>
                ) : (
                  <label htmlFor="select-image" className="image_input_box">
                    Upload Profile Image
                  </label>
                )}
              </>
            </div>
          </div>

          {/* -------------- */}

          <div className="signup_secound_wrapp">
            <input
              type="password"
              className="form-control signup_input2"
              name="password"
              placeholder="Create Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Write short note about yourself ..."
              className="form-control signup_input2 form-inp"
              style={{ minHeight: "81px" }}
              value={sortNote}
              onChange={(e) => setSortNote(e.target.value)}
            ></textarea>
          </div>

          {/* -------------- */}

          <div className="what_woude_wrapp">
            {/* <p>What whould you like to teach ?</p> */}
            <select
              onChange={(e) => {
                setCoursetId(e.target.value);
              }}
              className="form-control signup_input2"
            >
              <option value="" disabled selected>
                Select course
              </option>
              {course_data &&
                course_data.map((item, index) => {
                  return (
                    // <option value={`${item.id} ${item.title} `} key={index}>
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            {getcourseId !== 0 ? (
              <select
                onChange={(e) => {
                  setSubjectId(e.target.value);
                }}
                className="form-control signup_input2"
              >
                <option value="" disabled selected>
                  Select subject
                </option>
                {course_data && course_data.length > 0
                  ? course_data.map((item, index) => {
                      return (
                        <>
                          {item.subject.map((itm, ind) => {
                            return item.id == getcourseId ? (
                              <option value={itm.id} key={ind}>
                                {itm.name}
                              </option>
                            ) : null;
                          })}
                        </>
                      );
                    })
                  : null}
              </select>
            ) : null}
            {/* <input
              type="number"
              className="form-control signup_input2"
              name="email"
              placeholder="Enter course code..."
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
            />

            <DatePicker
              selected={avilableDate}
              onChange={(date) => setAvilableDate(date)}
              className="red-border"
              placeholderText="Please select your avilability"
              dateFormat="dd/MM/yyyy"
            />
            <input
              type="number"
              className="form-control signup_input2"
              name="price"
              placeholder="Price"
            /> */}
            <button className="btn2 f-xl" onClick={() => Signin()}>
              Sign Up
            </button>
          </div>
        </div>

        {/* <div className="payment_part">
          <p className="font-heading clr-main-blue">PAYMENT</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button className="btn" style={{ fontSize: "18px" }}>
              Pay Now
            </button>
          </div>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SignupPage;
