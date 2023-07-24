import React from "react";
import "./Inquery.css";
import { InquiryCard } from "../../components";

const Inquiry = ({
  getinquiryData,
  setTab,
  getTab,
  setInquirytData,
  getInquiryData,
}) => {
  return (
    <div className="inq-main-wrapp">
      <p className="font-heading clr-green">Inquiry List</p>
      <div>
        {getinquiryData && getinquiryData.length > 0
          ? getinquiryData.map((item, index) => {
              console.log("456", item);
              return (
                <InquiryCard
                  itemid={item.id}
                  itemnain={item}
                  item={item.mentor}
                  course={item.course}
                  setTab={setTab}
                  getTab={getTab}
                  setInquirytData={setInquirytData}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Inquiry;
