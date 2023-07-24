import React, { useState } from "react";
import "./MentorList.css";
import { MentorCard } from "../../components";
import { useUserContext } from "../../context/user_context";

const MentorList = ({
  course_data,
  setCoursetId,
  SetMentor,
  getsubjectId,
  getcourseId,
  setSubjectId,
  getmentorData,
  SetInqiry,
}) => {
  console.log("course data search mentor", course_data);
  return (
    <div className="mentorlist_main_wrapp">
      <p className="font-heading clr-green">Search Mentor</p>

      {/* dropdowns */}
      <div className="mentorlist_dropdown_wrapp">
        <select
          className="gift-selector"
          style={{ minWidth: "300px" }}
          name="budget"
          onChange={(e) => {
            setCoursetId(e.target.value);
            SetMentor(e.target.value, getsubjectId);
          }}
        >
          <option value="" disabled selected>
            Select Course
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
            className="gift-selector"
            name="budget"
            style={{ minWidth: "300px" }}
            onChange={(e) => {
              setSubjectId(e.target.value);
              SetMentor(getcourseId, e.target.value);
            }}
          >
            <option value="" disabled selected>
              Select Subjects
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
      </div>

      {/* mentor listing */}
      <div className="mentor_list_wrapp">
        {getmentorData && getmentorData.length > 0
          ? getmentorData.map((item, index) => {
              console.log("item", item);
              return (
                <MentorCard
                  key={item.id}
                  item={item}
                  SetInqiry={SetInqiry}
                  course_data={course_data}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default MentorList;
