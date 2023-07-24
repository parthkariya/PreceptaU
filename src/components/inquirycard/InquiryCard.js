import React from "react";
import "./InquiryCard.css";
import images from "../../constants/images";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { useUserContext } from "../../context/user_context";
import { ACCEPT_HEADER, deleteinquiry } from "../../utils/Constant";
import axios from "axios";

const InquiryCard = ({
  item,
  course,
  setTab,
  itemid,
  getTab,
  setInquirytData,
  setInquirytDataSecond,
  itemnain,
}) => {
  let token = JSON.parse(localStorage.getItem("token"));

  setInquirytData(itemnain);

  console.log("set inquiry card is", setInquirytData);
  const { deleteInq, role } = useUserContext();
  console.log("inquiry list item", item);
  console.log("setTab is", setTab);
  console.log("id is", itemid);

  const deleteInquery = async () => {
    const fromdata = new FormData();
    await fromdata.append("id", itemid);

    axios
      .post(deleteinquiry, fromdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log("id", itemid);
        window.reload();
      })
      .catch((err) => {
        console.log("er", err);
      });

    // const data = await deleteInq(params);
    // if (data) {
    //   if (data.success === 1) {
    //     console.log("mall-data", data);
    //   }
    // }
  };
  return (
    <>
      {}
      <div className="inq-card-main">
        {" "}
        <div className="inq-card-imgbox">
          <img
            src={
              item.image_full_path !== "" ? item.image_full_path : images.user
            }
            alt="inquiry Image"
            className="inq-card-img"
          />
        </div>
        <div
          className="inq-card-content"
          onClick={() => {
            role === 1 ? setTab(6) : setTab(7);
            // setInquirytData(item);
            console.log("getTab is", getTab);
          }}
        >
          <p className="inq-card-txt">
            Name:
            <span>
              {item.first_name && item.first_name}{" "}
              {item.last_name && item.last_name}
            </span>
          </p>
          <p className="inq-card-txt">
            Email:{" "}
            <span>
              <span>{item.email && item.email}</span>
            </span>
          </p>
          <p className="inq-card-txt">
            Course:{" "}
            <span>
              <span>{course.name && course.name}</span>
            </span>
          </p>
        </div>
        <button className="btn-inq-card" onClick={() => deleteInquery()}>
          <MdOutlineDeleteOutline className="inq-card-icon" />
        </button>
      </div>{" "}
    </>
  );
};

export default InquiryCard;
