import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/signupPage/SignupPage";
import EditProfilePage from "./pages/editprofilepage/EditProfilePage";
import StudantProfile from "./pages/profilepage/StudantProfile";
import TutorProfile from "./pages/tutorprofile/TutorProfile";
import { Footer, Navbar } from "./common";
import { useUserContext } from "./context/user_context";
import Modal from "react-modal";
import OurMission from "./pages/ourmission/OurMission.";
function App() {
  return (
    <>
      {" "}
      {/* <BrowserRouter> */}
      <BrowserRouter basename="mentor-u">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<EditProfilePage />} />
          <Route path="/studant-profile" element={<StudantProfile />} />
          <Route path="/mentor-profile" element={<TutorProfile />} />
          <Route path="/OurMission" element={<OurMission />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
