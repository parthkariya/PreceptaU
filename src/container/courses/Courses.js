import React, { useState } from "react";
import "./Courses.css";
import { AiOutlinePlus } from "react-icons/ai";

const Courses = ({ setTab, course_data, setCoursetData, setCourseIsOpen }) => {
  return (
    <>
      <p className="font-heading clr-green tutor-profile-heading-margin-left">
        Courses
      </p>
      <div className="courses-main-wrapp">
        {course_data && course_data.length > 0
          ? course_data.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className="btn f-xl courses-btn-chng"
                  onClick={() => {
                    setTab(5);
                    setCoursetData(item);
                  }}
                >
                  {item.name}
                </button>
              );
            })
          : null}
        <button
          className="btn f-xl"
          onClick={() => {
            setCourseIsOpen(true);
          }}
        >
          <AiOutlinePlus className="courses-icon" />
        </button>
      </div>
    </>
  );
};

export default Courses;
