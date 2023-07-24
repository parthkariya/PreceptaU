import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../common";
import DatePicker from "react-datepicker";
import { useUserContext } from "../../context/user_context";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./EditProfile.css";
import { Box } from "@mui/material";

const EditProfile = ({ setTab, getTab }) => {
  const {
    updateProfile,
    subject_data,
    isLogin,
    course_data,
    userdata,
    getCourse,
  } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user_data", userdata);
  }, []);

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [getbaseImg, setBaseImg] = useState("");
  const [avilableDate, setAvilableDate] = useState("");
  const [firstName, setFirstName] = useState(
    userdata ? userdata.first_name : ""
  );
  const [lastName, setLastName] = useState(userdata ? userdata.last_name : "");
  const [educationalInstitute, setEducationalInstitute] = useState(
    userdata ? userdata.educational : ""
  );
  const [getemail, setEmail] = useState(userdata ? userdata.email : "");
  const [birthDate, setBirthDate] = useState();
  const [sortNote, setSortNote] = useState(
    userdata ? userdata.description : ""
  );
  const [getteach, setTeach] = useState(userdata ? userdata.subject : "");
  const [courseCode, setCourseCode] = useState(userdata ? userdata.code : "");
  const [price, setPrice] = useState(userdata ? userdata.price : null);
  const [password, setPassword] = useState(
    userdata ? userdata.show_password : ""
  );
  const [getsubjectId, setSubjectId] = useState(0);
  const [getcourseId, setCoursetId] = useState(0);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      console.log("selectedImage", selectedImage.name);
    }
  }, [selectedImage]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("userdata.image_full_path", userdata.image_full_path === "");
    console.log("imageUrl", imageUrl);
  }, []);

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    console.log("email", email);

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  const EditProfile = async (e) => {
    //  const img = {
    //    uri: imageUrl,
    //    name: selectedImage.name,
    //    type: selectedImage.type,
    //  };

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
        description: sortNote,
        course_id: getcourseId,
        subject: getsubjectId,
        code: courseCode,
        image: getbaseImg,
        dob: moment(birthDate).format("YYYY-MM-DD"),
      };

      console.log("-=-=-=->", params);
      // await setRegister(params);
      const data = await updateProfile(params, navigate);
      if (data) {
        if (data.success === 1) {
          //  navigate("/");
          // console.log("update profile sucessfull");
          alert(data.Message);
          window.location.reload();
        }
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar isLogin={isLogin} setTab={setTab} />
      <div className="container padding-left-editprofile">
        <div className="signup_part editprofile-main">
          <p className="font-heading clr-green">My Profile</p>

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
                placeholderText={
                  userdata && userdata.dob ? userdata.dob : "Date Of Birth"
                }
                dateFormat="dd/MM/yyyy"
              />
              <input
                type="text"
                className="form-control signup_input2"
                name="email"
                placeholder="Email"
                value={getemail}
                onChange={(e) => {
                  onHandleEmailChange(e);
                }}
              />
            </div>
            {/* <div className="signup_image_wrapp">
              <>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setSelectedImage(e.target.files[0])
                    getBase64(e.target.files[0])
                    console.log('e', e)
                  }}
                />

                {imageUrl && selectedImage ? (
                  <label htmlFor="select-image">
                    <Box mt={2} textAlign="center">
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
            </div> */}
            <div className="signup_image_wrapp">
              {/* <img src={images.banner_img2} width="60%" /> */}
              <>
                <input
                  // accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setSelectedImage(e.target.files[0]);
                    getBase64(e.target.files[0]);
                  }}
                />

                {(imageUrl && imageUrl !== "") || imageUrl !== null ? (
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
                ) : userdata && userdata.image_full_path !== "" ? (
                  <label htmlFor="select-image">
                    <img
                      src={userdata.image_full_path}
                      alt={userdata.image}
                      height="100px"
                      className="preiew_img"
                      width="80%"
                    />
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
            /> */}

            {/* <DatePicker
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
            <button className="btn2 f-xl" onClick={() => EditProfile()}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default EditProfile;
