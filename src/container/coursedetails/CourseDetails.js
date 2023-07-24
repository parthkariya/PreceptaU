import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import { Select } from "@mui/material";
import { useUserContext } from "../../context/user_context";

const CourseDetails = ({ getcourseData }) => {
  console.log("abc", getcourseData);
  const { isLogin, course_data, userdata, subject_data } = useUserContext();

  const [holidayFromTime, setHolidayFromTime] = useState();
  const [holidayToTime, setHolidayToTime] = useState();
  const [coursePageIsOpen, setPageIsOpen] = useState();
  const [getlanguageData, setLanguageData] = useState([]);
  const [getsubjectData, setsubjectData] = useState([]);

  const [getdiscipline, setDiscipline] = useState(
    getcourseData.name ? getcourseData.name : ""
  );
  const [description, setDescription] = useState(
    getcourseData.discipline ? getcourseData.discipline : ""
  );
  const [monFrom, setMonFrom] = useState(
    getcourseData.mon_from == null ||
      getcourseData.mon_from == undefined ||
      getcourseData.mon_from == ""
      ? null
      : getcourseData.mon_from
  );
  const [monTo, setMonTo] = useState(
    getcourseData.mon_to == null ||
      getcourseData.mon_to == undefined ||
      getcourseData.mon_to == ""
      ? null
      : getcourseData.mon_to
  );
  const [tueFrom, setTueFrom] = useState(
    getcourseData.tue_from == null ||
      getcourseData.tue_from == undefined ||
      getcourseData.tue_from == ""
      ? null
      : getcourseData.tue_from
  );
  const [tueTo, setTueTo] = useState(
    getcourseData.tue_to == null ||
      getcourseData.tue_to == undefined ||
      getcourseData.tue_to == ""
      ? null
      : getcourseData.tue_to
  );
  const [wedFrom, setWedFrom] = useState(
    getcourseData.wed_from == null ||
      getcourseData.wed_from == undefined ||
      getcourseData.wed_from == ""
      ? null
      : getcourseData.wed_from
  );
  const [wedTo, setWedTo] = useState(
    getcourseData.mon_to == null ||
      getcourseData.mon_to == undefined ||
      getcourseData.mon_to == ""
      ? null
      : getcourseData.mon_to
  );
  const [thuFrom, setThuFrom] = useState(
    getcourseData.thu_from == null ||
      getcourseData.thu_from == undefined ||
      getcourseData.thu_from == ""
      ? null
      : getcourseData.thu_from
  );
  const [thuTo, setThuTo] = useState(
    getcourseData.thu_to == null ||
      getcourseData.thu_to == undefined ||
      getcourseData.thu_to == ""
      ? null
      : getcourseData.thu_to
  );
  const [friFrom, setFriFrom] = useState(
    getcourseData.fri_from == null ||
      getcourseData.fri_from == undefined ||
      getcourseData.fri_from == ""
      ? null
      : getcourseData.fri_from
  );
  const [friTo, setFriTo] = useState(
    getcourseData.fri_to == null ||
      getcourseData.fri_to == undefined ||
      getcourseData.fri_to == ""
      ? null
      : getcourseData.fri_to
  );
  const [satFrom, setSatFrom] = useState(
    getcourseData.sat_from == null ||
      getcourseData.sat_from == undefined ||
      getcourseData.sat_from == ""
      ? null
      : getcourseData.sat_from
  );
  const [satTo, setSatTo] = useState(
    getcourseData.sat_to == null ||
      getcourseData.sat_to == undefined ||
      getcourseData.sat_to == ""
      ? null
      : getcourseData.sat_to
  );
  const [sunFrom, setSunFrom] = useState(
    getcourseData.sun_from == null ||
      getcourseData.sun_from == undefined ||
      getcourseData.sun_from == ""
      ? null
      : getcourseData.sun_from
  );
  const [sunTo, setSunTo] = useState(
    getcourseData.sun_to == null ||
      getcourseData.sun_to == undefined ||
      getcourseData.sun_to == ""
      ? null
      : getcourseData.sun_to
  );
  const [price, setPrice] = useState(
    getcourseData.price == null ||
      getcourseData.price == undefined ||
      getcourseData.price == ""
      ? null
      : getcourseData.price
  );
  const [mode, setMode] = useState(
    getcourseData.mode == null ||
      getcourseData.mode == undefined ||
      getcourseData.mode == ""
      ? null
      : getcourseData.mode
  );
  const [email, setEmail] = useState(
    getcourseData.contact_email == null ||
      getcourseData.contact_email == undefined ||
      getcourseData.contact_email == ""
      ? null
      : getcourseData.contact_email
  );
  const [getSubject, setSubject] = useState([]);
  const [getLanguage, setLanguage] = useState([]);
  const [name, setName] = useState(
    getcourseData.name == null ||
      getcourseData.name == undefined ||
      getcourseData.name == ""
      ? null
      : getcourseData.name
  );

  useEffect(() => {
    setsubjectData(subject_data.data);
    console.log("getsubjectdata is", getsubjectData);
    console.log("course data is", course_data);
    // console.log("role is", role);
  });
  return (
    // <div className="coursedetails-main-wrapp">
    //   <p className="font-heading clr-green">{getcourseData.name}</p>
    //   <div className="coursedetails-sub-wrapp">
    //     <div className="coursedetails-flex">
    //       <p className="coursedetail-side-txt">Discipline:</p>
    //       <p className="coursedetails-txt">{getcourseData.discipline}</p>
    //     </div>

    //     <div className="coursedetails-flex">
    //       <p className="coursedetail-side-txt">Availability:</p>
    //       <div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Monday:</p>
    //           <p className="coursedetails-txt">
    //             <span>
    //               {getcourseData.mon_from == null ||
    //               getcourseData.mon_from == undefined ||
    //               getcourseData.mon_from == ""
    //                 ? null
    //                 : getcourseData.mon_from}
    //             </span>
    //             <span>
    //               {" "}
    //               {getcourseData.mon_to == null ||
    //               getcourseData.mon_to == undefined ||
    //               getcourseData.mon_to == ""
    //                 ? null
    //                 : getcourseData.mon_to}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Tuesday:</p>
    //           <p className="coursedetails-txt">
    //             {" "}
    //             <span>
    //               {getcourseData.tue_from == null ||
    //               getcourseData.tue_from == undefined ||
    //               getcourseData.tue_from == ""
    //                 ? null
    //                 : getcourseData.tue_from}
    //             </span>
    //             <span>
    //               {getcourseData.tue_to == null ||
    //               getcourseData.tue_to == undefined ||
    //               getcourseData.tue_to == ""
    //                 ? null
    //                 : getcourseData.tue_to}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Wednesday:</p>
    //           <p className="coursedetails-txt">
    //             <span>
    //               {getcourseData.wed_from == null ||
    //               getcourseData.wed_from == undefined ||
    //               getcourseData.wed_from == ""
    //                 ? null
    //                 : getcourseData.wed_from}
    //             </span>
    //             <span>
    //               {getcourseData.wed_to == null ||
    //               getcourseData.wed_to == undefined ||
    //               getcourseData.wed_to == ""
    //                 ? null
    //                 : getcourseData.wed_to}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Thursday:</p>
    //           <p className="coursedetails-txt">
    //             <span>
    //               {getcourseData.thu_from == null ||
    //               getcourseData.thu_from == undefined ||
    //               getcourseData.thu_from == ""
    //                 ? null
    //                 : getcourseData.thu_from}
    //             </span>
    //             <span>
    //               {getcourseData.thu_to == null ||
    //               getcourseData.thu_to == undefined ||
    //               getcourseData.thu_to == ""
    //                 ? null
    //                 : getcourseData.thu_to}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Friday:</p>
    //           <p className="coursedetails-txt">
    //             <span>
    //               {getcourseData.fri_from == null ||
    //               getcourseData.fri_from == undefined ||
    //               getcourseData.fri_from == ""
    //                 ? null
    //                 : getcourseData.fri_from}
    //             </span>
    //             <span>
    //               {getcourseData.fri_to == null ||
    //               getcourseData.fri_to == undefined ||
    //               getcourseData.fri_to == ""
    //                 ? null
    //                 : getcourseData.fri_to}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Saturday:</p>
    //           <p className="coursedetails-txt">
    //             <span>
    //               {getcourseData.sat_from == null ||
    //               getcourseData.sat_from == undefined ||
    //               getcourseData.sat_from == ""
    //                 ? null
    //                 : getcourseData.sat_from}
    //             </span>
    //             <span>
    //               {getcourseData.sat_to == null ||
    //               getcourseData.sat_to == undefined ||
    //               getcourseData.sat_to == ""
    //                 ? null
    //                 : getcourseData.sat_to}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="coursedetails-inner-flex">
    //           <p className="coursedetail-inner-side-txt">Sunday:</p>
    //           <p className="coursedetails-txt">
    //             <span>
    //               {getcourseData.sun_from == null ||
    //               getcourseData.sun_from == undefined ||
    //               getcourseData.sun_from == ""
    //                 ? null
    //                 : getcourseData.sun_from}
    //             </span>
    //             <span>
    //               {getcourseData.sun_to == null ||
    //               getcourseData.sun_to == undefined ||
    //               getcourseData.sun_to == ""
    //                 ? null
    //                 : getcourseData.sun_to}
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="coursedetails-flex">
    //       <p className="coursedetail-side-txt">Price:</p>
    //       <p className="coursedetails-txt">
    //         {getcourseData.price == null ||
    //         getcourseData.price == undefined ||
    //         getcourseData.price == ""
    //           ? null
    //           : getcourseData.price}
    //       </p>
    //     </div>

    //     <div className="coursedetails-flex">
    //       <p className="coursedetail-side-txt">Mode Of Delivery:</p>
    //       <p className="coursedetails-txt">
    //         {getcourseData.mode == null ||
    //         getcourseData.mode == undefined ||
    //         getcourseData.mode == ""
    //           ? null
    //           : getcourseData.mode}
    //       </p>
    //     </div>

    //     <div className="coursedetails-flex">
    //       <p className="coursedetail-side-txt">Language:</p>
    //       <p className="coursedetails-txt">
    //         {getcourseData.language == null ||
    //         getcourseData.language == undefined ||
    //         getcourseData.language == ""
    //           ? null
    //           : getcourseData.language.map((item) => {
    //               return (
    //                 <div>
    //                   <p className="coursedetails-txt">
    //                     {item.name == null ||
    //                     item.name == undefined ||
    //                     item.name == ""
    //                       ? null
    //                       : item.name}
    //                   </p>
    //                 </div>
    //               );
    //             })}
    //       </p>
    //     </div>

    //     <div className="coursedetails-flex">
    //       <p className="coursedetail-side-txt">Subjects:</p>
    //       {getcourseData.subject.map((item) => {
    //         return (
    //           <div>
    //             <p className="coursedetails-txt">
    //               {item.name == null ||
    //               item.name == undefined ||
    //               item.name == ""
    //                 ? null
    //                 : item.name}
    //             </p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div className="login-modal-main course-modal-main">
      <p className="clr-green font-heading">Create Course</p>
      <div className="login-modal-inp-flex">
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control signup_input2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          // placeholder="Enter Discipline"
          placeholder="Enter Program"
          className="form-control signup_input2"
          value={getdiscipline}
          onChange={(e) => setDiscipline(e.target.value)}
        />
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
        />

        <div className="radio-btn-flex">
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

        {/* <Select
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
          options={subject_data}
          onChange={setSubject}
          placeholder="Select Subject" // Placeholder text
        /> */}
        <button
          // onClick={() => Login()}
          className="btn f-xl"
          style={{ margin: "0 auto" }}
          onClick={() => {
            // AddCourse();
            console.log("clicked");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
