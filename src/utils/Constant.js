import React from "react";

const BaseUrl = "https://theapplified.com/praeceptau/api/v1/";

export const ACCEPT_HEADER = "application/x.praeceptau.v1+json";

export const register = BaseUrl + "register";
export const user_login = BaseUrl + "user-login";
export const update_profile = BaseUrl + "update-profile";
export const get_subject = BaseUrl + "get-subject";
export const get_course = BaseUrl + "get-course";
export const get_subjects = BaseUrl + "course";
export const mentor_listing = BaseUrl + "mentor-listing";
export const send_request = BaseUrl + "send-request";
export const get_request = BaseUrl + "get-request";
export const add_course = BaseUrl + "add-course";
export const get_language = BaseUrl + "get-language-list";
export const deleteinquiry = BaseUrl + "deleteinquiry";
export const getprogram = BaseUrl + "getprogram";
