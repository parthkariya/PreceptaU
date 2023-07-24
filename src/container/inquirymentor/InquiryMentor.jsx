import React from 'react'
import { InquiryCard } from '../../components';

const InquiryMentor = ({ getinquiryData, setTab, getTab, setInquirytData }) => {
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
                                item={item.student}
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
    )
}

export default InquiryMentor