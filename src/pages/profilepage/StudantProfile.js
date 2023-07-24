import React, { useEffect, useState } from "react";
import "./StudantProfile.css";
import { Navbar } from "../../common";
import {
  CourseDetails,
  Courses,
  EditProfile,
  Inquiry,
  InquiryDetailStudent,
  InquiryDetails,
  MentorList,
} from "../../container";
import { useUserContext } from "../../context/user_context";
import { useNavigate } from "react-router-dom";
import {
  ACCEPT_HEADER,
  get_request,
  mentor_listing,
  send_request,
} from "../../utils/Constant";
import axios from "axios";

const StudantProfile = () => {
  const { updateProfile, subject_data, isLogin, course_data, userdata } =
    useUserContext();
  const [gettab, setTab] = useState(1);

  const navigate = useNavigate();

  // mentor list

  const [getsubjectId, setSubjectId] = useState(0);
  const [getcourseId, setCoursetId] = useState(0);
  const [getInquiryData, setInquirytData] = useState({});
  const [getcourseData, setCoursetData] = useState({});
  const [getmentorData, setMentorData] = useState([]);
  const [getinquiryData, setInquiryData] = useState([]);

  useEffect(() => {
    GetInqiry();
  }, []);

  // useEffect(() => {
  const SetMentor = async (course, subject) => {
    var params = {
      course_id: course,
      subject_id: subject,
    };
    const Token = await localStorage.getItem("token");

    try {
      const response = await axios.post(mentor_listing, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      });
      const mentordata = response.data;
      if (mentordata.success === 1) {
        setMentorData(mentordata.data);
        console.log("mentordata", mentordata);
      }
    } catch (error) {}
  };

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

  const SetInqiry = async (m_id) => {
    var params = {
      mentor_id: m_id,
    };
    const Token = await localStorage.getItem("token");

    try {
      const response = await axios.post(send_request, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      });
      if (response.data.success === 1) {
        console.log(response.data);
        GetInqiry();
      }
    } catch (error) {}
  };

  return (
    <>
      <Navbar setTab={setTab} getTab={gettab} />
      <div style={{ marginTop: "111px" }}>
        <div className="profilepage_main_wrapp">
          {/* sidebar */}
          <div className="profile_sidebar_wrapp">
            {/* <button
            style={{
              background: "green",
              fontWeight: "500",
            }}
            onClick={() => setTab(1)}
            className="profile_sidebar_sig_btn"
          >
            Courses
          </button> */}
            <button
              style={{
                background: "green",
                fontWeight: "500",
              }}
              onClick={() => setTab(2)}
              className="profile_sidebar_sig_btn"
            >
              Search Mentor
            </button>
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
            {/* <div className="profile_main_sec_top_wrapp">
          </div> */}
            {/* {gettab === 1 && (
            <Courses
              course_data={course_data}
              setCoursetData={setCoursetData}
              setTab={setTab}
            />
          )} */}
            {gettab === 2 && (
              <MentorList
                course_data={course_data}
                navigate={navigate}
                SetMentor={SetMentor}
                setSubjectId={setSubjectId}
                setCoursetId={setCoursetId}
                getsubjectId={getsubjectId}
                getcourseId={getcourseId}
                getmentorData={getmentorData}
                SetInqiry={SetInqiry}
              />
            )}
            {gettab === 3 && (
              <Inquiry
                getinquiryData={getinquiryData}
                setTab={setTab}
                getTab={gettab}
                setInquirytData={setInquirytData}
                getInquiryData={getInquiryData}
              />
            )}
            {gettab === 4 && <EditProfile setTab={setTab} getTab={gettab} />}
            {/* {gettab === 5 && <CourseDetails />} */}

            {gettab === 6 && (
              <InquiryDetailStudent getInquiryData={getInquiryData} />
            )}

            {gettab === 7 && <InquiryDetails getInquiryData={getInquiryData} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudantProfile;
