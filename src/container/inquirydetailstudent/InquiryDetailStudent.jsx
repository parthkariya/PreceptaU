import React from 'react'
import "./InquiryDetailsStudent.css"

const InquiryDetailStudent = ({ getInquiryData }) => {
    console.log("getInquiryData", getInquiryData);
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
                        <p className="inq-details-txt">{getInquiryData.student.first_name}</p>
                    </div>

                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Last Name:</p>
                        <p className="inq-details-txt">{getInquiryData.student.last_name}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Email:</p>
                        <p className="inq-details-txt">{getInquiryData.student.email}</p>
                    </div>


                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Education:</p>
                        <p className="inq-details-txt">{getInquiryData.student.educational}</p>
                    </div>


                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Language:</p>
                        {/* <p className="inq-details-txt">{getInquiryData}</p> */}
                    </div>

                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Subject:</p>
                        <p className="inq-details-txt">{getInquiryData.subject.name}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Date Of Birth:</p>
                        <p className="inq-details-txt">{getInquiryData.student.dob}</p>
                    </div>
                    <div className="inq-details-field-flex">
                        <p className="inq-details-label">Description:</p>
                        <p className="inq-details-txt">{getInquiryData.student.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InquiryDetailStudent