import React, { useEffect, useState } from "react";
import "./MentorCard.css";
import images from "../../constants/images";

const MentorCard = ({ item, SetInqiry, course_data }) => {
  console.log("123", item);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    // Enable the button after 1 minute
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Disable the button
    setIsButtonDisabled(true);

    // Perform your desired action here
    // Example: Sending a request, updating state, etc.
    console.log("Button clicked!");
  };
  return (
    <div className="mcard_main_wrapp">
      <img
        src={item.image_full_path !== "" ? item.image_full_path : images.user}
        alt="user profile"
        className="mcard_profile"
      />
      <div className="mcard_des_wrapp">
        <p style={{ fontSize: "14px" }}>
          {item.first_name} {item.last_name}
        </p>
        <p>{item.description}</p>
        <button
          onClick={() => {
            SetInqiry(item.id);
            handleClick();
          }}
          disabled={isButtonDisabled}
          className="btn"
        >
          INQUIRY
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
