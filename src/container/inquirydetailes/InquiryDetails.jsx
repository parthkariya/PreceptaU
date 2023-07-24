import React from 'react'
import "./InquiryDetails.css"

const InquiryDetails = ({ getInquiryData }) => {
    console.log("147", getInquiryData);
    return (
        <div className="profile_main_sec_wrapp profile_main_sec_wrapp-inq-details" style={{ marginTop: "1rem" }}>
            <div className="profile_main_sec_top_wrapp">
                <p className="font-heading clr-green tutor-profile-heading-margin-left">Inquiry Detail</p>
                <div className="inq-details-flex-main-wrapp">
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Program:</p>
                        <p className="inq-details-txt">{getInquiryData.course.name}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">First Name:</p>
                        <p className="inq-details-txt">{getInquiryData.mentor.first_name}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Lat Name:</p>
                        <p className="inq-details-txt">{getInquiryData.mentor.last_name}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Email:</p>
                        <p className="inq-details-txt">{getInquiryData.mentor.email}</p>
                    </div>
                    {/* tranding sec strat */}
                    <div className="mm_tranding_wrapp">
                        <label className="inq-details-label"
                            style={{
                                fontSize: "14px",
                                fontWeight: "300",
                                minWidth: "118px",
                            }}
                            htmlFor=""
                        >
                            Availability:
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
                                    <p className="timming-txt">{getInquiryData.course.mon_from}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                                    <p className="timming-txt">{getInquiryData.course.mon_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
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
                                    <p className="timming-txt">{getInquiryData.course.tue_from}</p>

                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                                    <p className="timming-txt">{getInquiryData.course.tue_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
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
                                    <p className="timming-txt">{getInquiryData.course.wed_from}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                                    <p className="timming-txt">{getInquiryData.course.wed_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
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
                                    <p className="timming-txt">{getInquiryData.course.thu_from}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                                    <p className="timming-txt">{getInquiryData.course.thu_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* PM */}
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
                                    <p className="timming-txt">{getInquiryData.course.fri_from}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* PM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    {/* <select className="input_box">
                    <option value="1">21:00</option>
                  </select> */}
                                    <p className="timming-txt">{getInquiryData.course.fri_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >

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
                                    <p className="timming-txt">{getInquiryData.course.sat_from}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* AM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    <p className="timming-txt">{getInquiryData.course.sat_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* PM */}
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
                                    <p className="timming-txt">{getInquiryData.course.sun_from}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* PM */}
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    <p className="timming-txt">{getInquiryData.course.sun_to}</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        {/* PM */}
                                    </p>
                                </div>
                            </div>
                            {/* single time */}
                            {/* <div div className="tranding_times_wrapp_sec tranding_times_wrapp_sec">
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
                                    <p className="timming-txt">07:00</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        PM
                                    </p>
                                </div>
                                <div className="tranding_sigle_time_wrapp">
                                    <p className="timming-txt">08:00</p>
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        PM
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* tranding sec end */}

                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Language:</p>
                        {/* <p className="inq-details-txt">{getInquiryData}</p> */}
                    </div>

                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Subject:</p>
                        <p className="inq-details-txt">{getInquiryData.subject.name}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Education:</p>
                        <p className="inq-details-txt">{getInquiryData.mentor.educational}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Description:</p>
                        <p className="inq-details-txt">{getInquiryData.mentor.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InquiryDetails