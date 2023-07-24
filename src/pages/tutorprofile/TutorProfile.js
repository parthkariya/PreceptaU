import React, { useEffect, useState } from "react";
import "./TutorProfile.css";
import { Navbar } from "../../common";
import EditProfile from "../../container/editprofile/EditProfile";
import {
  ACCEPT_HEADER,
  add_course,
  get_language,
  get_request,
} from "../../utils/Constant";
import Select from "react-select";
import axios from "axios";
import {
  CourseDetails,
  Courses,
  Inquiry,
  InquiryDetailStudent,
  InquiryDetails,
  InquiryMentor,
} from "../../container";
import { useUserContext } from "../../context/user_context";
import Modal from "react-modal";

// language dropdown static array

var options = [
  { value: "wedding", label: "Wedding" },
  { value: "Food", label: "Food" },
  { value: "Product", label: "Product" },
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Portrait", label: "Portrait" },
  { value: "Boudoir", label: "Boudoir" },
  { value: "Real Estate", label: "Real Estate" },
  { value: "Marketing & Social Media", label: "Marketing & Social Media" },
  { value: "Newborn", label: "Newborn" },
  { value: "Fashion", label: "Fashion" },
  { value: "Event", label: "Event" },
  { value: "Travel", label: "Travel" },
];

const TutorProfile = () => {
  const { isLogin, course_data, userdata, subject_data, role } =
    useUserContext();
  console.log("258", course_data);
  console.log("subject data is", subject_data);
  const [gettab, setTab] = useState(1);
  const [getcourseData, setCoursetData] = useState({});
  const [getInquiryData, setInquirytData] = useState({});
  const [getinquiryData, setInquiryData] = useState([]);
  const [courseModalIsOpen, setCourseIsOpen] = useState(false);
  const [getlanguageData, setLanguageData] = useState([]);
  const [getsubjectData, setsubjectData] = useState([]);

  useEffect(() => {
    setsubjectData(subject_data.data);
    console.log("getsubjectdata is", getsubjectData);
    console.log("course data is", course_data);
    console.log("role is", role);
  });

  // add course states

  const [monFromTime, setMonFromTime] = useState();
  const [monToTime, setMonToTime] = useState();
  const [satFromTime, setSatFromTime] = useState();
  const [satToTime, setSatToTime] = useState();
  const [sunFromTime, setSunFromTime] = useState();
  const [sunToTime, setSunToTime] = useState();
  const [holidayFromTime, setHolidayFromTime] = useState();
  const [holidayToTime, setHolidayToTime] = useState();
  const [coursePageIsOpen, setPageIsOpen] = useState();

  const [getdiscipline, setDiscipline] = useState("");
  const [description, setDescription] = useState("");
  const [monFrom, setMonFrom] = useState("");
  const [monTo, setMonTo] = useState("");
  const [tueFrom, setTueFrom] = useState("");
  const [tueTo, setTueTo] = useState("");
  const [wedFrom, setWedFrom] = useState("");
  const [wedTo, setWedTo] = useState("");
  const [thuFrom, setThuFrom] = useState("");
  const [thuTo, setThuTo] = useState("");
  const [friFrom, setFriFrom] = useState("");
  const [friTo, setFriTo] = useState("");
  const [satFrom, setSatFrom] = useState("");
  const [satTo, setSatTo] = useState("");
  const [sunFrom, setSunFrom] = useState("");
  const [sunTo, setSunTo] = useState("");
  const [price, setPrice] = useState("");
  const [mode, setMode] = useState("");
  const [email, setEmail] = useState("");
  const [getSubject, setSubject] = useState([]);
  const [getLanguage, setLanguage] = useState([]);
  const [name, setName] = useState("");

  const GetInqiry = async () => {
    const Token = await localStorage.getItem("token");

    try {
      const response = await axios.get(get_request, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      });
      if (response.data.success === 1) {
        console.log(response.data);
        setInquiryData(response.data.data);
      }
    } catch (error) {}
  };

  // add course api
  const AddCourse = async () => {
    // var params = {
    //   name: name,
    //   discipline: getdiscipline,
    //   mon_from: monFrom,
    //   mon_to: monTo,
    //   tue_from: tueFrom,
    //   tue_to: tueTo,
    //   wed_from: wedFrom,
    //   wed_to: wedTo,
    //   thu_from: thuFrom,
    //   thu_to: thuTo,
    //   fri_from: friFrom,
    //   fri_to: friTo,
    //   sat_from: satFrom,
    //   sat_to: satTo,
    //   sun_from: sunFrom,
    //   sun_to: sunTo,
    //   price: price,
    //   mode: mode,
    //   contact_email: email,
    //   subjects: "",
    //   languages: "",
    // };

    // for (var i = 0; i < getLanguage.length; i++) {
    //   formData.append("ticker[" + i + "]", getLanguage[i].id);
    //   formData.append("quantity[" + i + "]", "1");
    // }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("discipline", getdiscipline);
    formData.append("mon_from", monFrom);
    formData.append("mon_to", monTo);
    formData.append("tue_from", tueFrom);
    formData.append("tue_to", tueTo);
    formData.append("wed_from", wedFrom);
    formData.append("wed_to", wedTo);
    formData.append("thu_from", thuFrom);
    formData.append("thu_to", thuTo);
    formData.append("fri_from", friFrom);
    formData.append("fri_to", friTo);
    formData.append("sat_from", satFrom);
    formData.append("sat_to", satTo);
    formData.append("sun_from", sunFrom);
    formData.append("sun_to", sunTo);
    formData.append("price", price);
    formData.append("mode", mode);
    formData.append("contact_email", email);
    formData.append("subjects", "");
    for (var i = 0; i < getLanguage.length; i++) {
      formData.append("languages[" + i + "]", getLanguage[i].value);
    }
    for (var i = 0; i < getSubject.length; i++) {
      formData.append("subjects[" + i + "]", getSubject[i].value);
    }
    console.log("formData hire me ", formData);

    const Token = await localStorage.getItem("token");

    try {
      const response = await axios.post(add_course, formData, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      });
      const coursedata = response.data;
      if (coursedata.success === 1) {
        console.log("coursedata", coursedata);
        setName("");
        setDiscipline("");
        setEmail("");
        setMonFrom("");
        setMonTo("");
        setTueFrom("");
        setTueTo("");
        setWedFrom("");
        setWedTo("");
        setThuFrom("");
        setThuTo("");
        setFriFrom("");
        setFriTo("");
        setSatFrom("");
        setSatTo("");
        setSunFrom("");
        setSunTo("");
        setPrice("");
        setSubject("");
        setLanguage("");
        setMode("");
      }
    } catch (error) {}
  };

  // get Language api
  const GetLanguage = async () => {
    const Token = await localStorage.getItem("token");
    try {
      const response = await axios.get(get_language, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      });
      const languagedata = response.data;
      if (languagedata.success === 1) {
        console.log("languagedata", languagedata);
        setLanguageData(languagedata.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    GetInqiry();
    GetLanguage();
  }, []);

  const customStyles = {
    content: {
      top: "39%",
      left: "55%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -28%)",
      // innerWidth: "100px",
      backgroundColor: "#ebf2f9",
      padding: "20px 10px 20px 10px",
      overflow: "scroll",
      maxHeight: "85vh",
    },
  };

  function closeModal() {
    setCourseIsOpen(false);
  }

  function afterOpenModal() {}

  return (
    <>
      <Navbar setTab={setTab} getTab={gettab} />

      <div style={{ marginTop: "111px" }}>
        <div className="profilepage_main_wrapp">
          {/* sidebar */}
          <div className="profile_sidebar_wrapp">
            <button
              style={{
                background: "green",
                fontWeight: "500",
              }}
              onClick={() => setTab(1)}
              className="profile_sidebar_sig_btn"
            >
              Courses
            </button>
            {/* <button
            style={{
              background: "green",
              fontWeight: "500",
            }}
            // onClick={() => setTab(1)}
            className="profile_sidebar_sig_btn"
          >
            Search Mentor
          </button> */}
            <button
              style={{
                background: "green",
                fontWeight: "500",
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
              }}
              onClick={() => setTab(4)}
              className="profile_sidebar_sig_btn"
            >
              My Profile
            </button>
          </div>

          {/* main section */}
          <div className="profile_main_sec_wrapp">
            <div className="profile_main_sec_top_wrapp">
              {gettab === 1 && (
                <Courses
                  course_data={course_data}
                  setCoursetData={setCoursetData}
                  setTab={setTab}
                  setCourseIsOpen={setCourseIsOpen}
                />
              )}
              {gettab === 3 && (
                <InquiryMentor
                  getinquiryData={getinquiryData}
                  setTab={setTab}
                  getTab={gettab}
                  setInquirytData={setInquirytData}
                  getInquirytData={getInquiryData}
                />
              )}
              {gettab === 4 && <EditProfile setTab={setTab} getTab={gettab} />}
              {gettab === 5 && <CourseDetails getcourseData={getcourseData} />}
              {/* {getinquiryData && getinquiryData.length > 0
              ? getinquiryData.map((item, index) => {
                  console.log("456", item); 
                  return (
                    <>
                      {role === 1 ? (
                        <>
                          {gettab === 6 && (
                            <InquiryDetailStudent
                              itemid={item.id}
                              item={item.mentor}
                              course={item.course}
                              setTab={setTab}
                            />
                          )}
                        </>
                      ) : (
                        <>
                          {gettab === 7 && (
                            <InquiryDetails
                              itemid={item.id}
                              item={item.student}
                              course={item.course}
                              setTab={setTab}
                            />
                          )}
                        </>
                      )}
                    </>
                  );
                })
              : null} */}
              {gettab === 6 && (
                <InquiryDetailStudent getInquiryData={getInquiryData} />
              )}

              {gettab === 7 && (
                <InquiryDetails getInquiryData={getInquiryData} />
              )}
            </div>
          </div>
        </div>

        {/* add course modal */}
        <Modal
          isOpen={courseModalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="login-modal-main course-modal-main">
            <p className="clr-green font-heading">Create Course</p>
            <div className="login-modal-inp-flex">
              {/* <input
              type="text"
              placeholder="Enter Name"
              className="form-control signup_input2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> */}
              {/* <input
              type="text"
              // placeholder="Enter Discipline"
              placeholder="Enter Program"
              className="form-control signup_input2"
              value={getdiscipline}
              onChange={(e) => setDiscipline(e.target.value)}
            /> */}
              <input
                type="email"
                // placeholder="Enter Discipline"
                placeholder="Enter Email"
                className="form-control signup_input2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* tranding sec strat */}
              <div className="mm_tranding_wrapp">
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    minWidth: "118px",
                  }}
                  htmlFor=""
                >
                  Availability
                </label>
                <div className="tranding_times_wrapp">
                  {/* single time */}
                  <div className="tranding_times_wrapp_sec add-course-tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Monday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={monFrom}
                        onChange={(e) => setMonFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={monTo}
                        onChange={(e) => setMonTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>

                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Tuesday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={tueFrom}
                        onChange={(e) => setTueFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={tueTo}
                        onChange={(e) => setTueTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>

                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Wednesday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={wedFrom}
                        onChange={(e) => setWedFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={wedTo}
                        onChange={(e) => setWedTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>

                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Thursday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={thuFrom}
                        onChange={(e) => setThuFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={thuTo}
                        onChange={(e) => setThuTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>

                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Friday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={friFrom}
                        onChange={(e) => setFriFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={friTo}
                        onChange={(e) => setFriTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>

                  {/* single time */}
                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Saturday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      {/* <select className="input_box">
                    <option value="1">09:00</option>
                  </select> */}
                      <input
                        type="time"
                        name=""
                        value={satFrom}
                        onChange={(e) => setSatFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      <input
                        type="time"
                        name=""
                        value={satTo}
                        onChange={(e) => setSatTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>
                  {/* single time */}
                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Sunday:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      <input
                        type="time"
                        name=""
                        value={sunFrom}
                        onChange={(e) => setSunFrom(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      <input
                        type="time"
                        name=""
                        value={sunTo}
                        onChange={(e) => setSunTo(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>
                  {/* single time */}
                  <div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                        minWidth: "118px",
                      }}
                      htmlFor=""
                    >
                      Public Holidays:
                    </label>
                    <div className="tranding_sigle_time_wrapp">
                      <input
                        type="time"
                        name=""
                        value={holidayFromTime}
                        onChange={(e) => setHolidayFromTime(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        AM
                      </p>
                    </div>
                    <div className="tranding_sigle_time_wrapp">
                      <input
                        type="time"
                        name=""
                        value={holidayToTime}
                        onChange={(e) => setHolidayToTime(e.target.value)}
                        id=""
                        className="input_box"
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* tranding sec end */}

              {/* <input
              type="number"
              placeholder="Enter Price"
              className="form-control signup_input2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            /> */}

              {/* <div className="radio-btn-flex">
              <label className="course-form-txt course-form-margin-right">
                Mode Of Delivery:
              </label>
              <input
                type="radio"
                id="Online"
                name="gender"
                value={1}
                onChange={(e) => setMode(e.target.value)}
              />
              <label className="course-form-txt" for="male">
                Online
              </label>

              <input
                type="radio"
                id="In-Person"
                name="gender"
                value={2}
                onChange={(e) => setMode(e.target.value)}
              />
              <label className="course-form-txt" for="specifyColor">
                In-Person
              </label>
            </div> */}

              {/* <select
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
            </select> */}
              {/* <select
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              className="form-control signup_input2"
            >
              <option value="" disabled selected>
                Select Language
              </option>
              {getlanguageData && getlanguageData.length > 0
                ? getlanguageData.map((item, index) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                      <Select
                        name="list"
                        value={getlanguageData}
                        isMulti
                        options={getlanguageData}
                        onChange={setLanguageData}
                      />
                    );
                  })
                : null}
            </select> */}

              <Select
                name="list"
                value={getLanguage}
                isMulti
                options={getlanguageData}
                onChange={setLanguage}
                placeholder="Select Language" // Placeholder text
              />
              <Select
                name="list"
                value={getSubject}
                isMulti
                options={getsubjectData}
                onChange={setSubject}
                placeholder="Select Subject" // Placeholder text
              />
              {/* <Select
              name="list"
              value={getSubject}
              isMulti
              options={subject_data}
              onChange={setSubject}
              placeholder="Select Subject" // Placeholder text
            /> */}
              <button
                // onClick={() => Login()}
                className="btn f-xl"
                style={{ margin: "0 auto" }}
                onClick={() => {
                  AddCourse();
                  console.log("clicked");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default TutorProfile;
