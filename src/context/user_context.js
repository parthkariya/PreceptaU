import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import {
  REGISTER_BEGIN,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  GET_SUBJECT_BEGIN,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_ERROR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_COURSE_BEGIN,
  GET_COURSE_SUCCESS,
  GET_COURSE_ERROR,
  UPDATE_PROFILE_BEGIN,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  MENTOR_LIST_BEGIN,
  MENTOR_LIST_SUCCESS,
  MENTOR_LIST_FAIL,
  LOGOUT_USER,
  DELETE_INQUIRY_SUCCESS,
  DELETE_INQUIRY_BEGIN,
  DELETE_INQUIRY_FAIL,
  GET_PROGRAM_BEGIN,
  GET_PROGRAM_FAIL,
  GET_PROGRAM_SUCCESS,
} from "../Action";
import user_reducer from "../reducer/user_reducer";
import {
  ACCEPT_HEADER,
  deleteinquiry,
  get_course,
  get_subject,
  getprogram,
  mentor_listing,
  register,
  update_profile,
  user_login,
} from "../utils/Constant";

const getLocalStorage = () => {
  let user_no = localStorage.getItem("user_no");

  if (user_no) {
    return JSON.parse(localStorage.getItem("user_no"));
  } else {
    return {};
  }
};

const getUserId = () => {
  let user_no = localStorage.getItem("user_id");

  if (user_no) {
    return JSON.parse(localStorage.getItem("user_id"));
  } else {
    return {};
  }
};

const getToken = () => {
  let usertoken = localStorage.getItem("token");
  if (usertoken) {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return 0;
  }
};

const getUserData = () => {
  let userdata = localStorage.getItem("userdata");

  if (userdata) {
    return JSON.parse(localStorage.getItem("userdata"));
  } else {
    return {};
  }
};

const getLoginState = () => {
  let islogin = localStorage.getItem("islogin");
  if (islogin) {
    return JSON.parse(localStorage.getItem("islogin"));
  } else {
    return false;
  }
};

const initialState = {
  // contact_number: getLocalStorage(),
  usertoken: getToken(),
  isLogin: getLoginState(),
  userdata: getUserData(),
  // user_id: getUserId(),
  register_loding: false,
  register_data: {},
  login_loding: false,
  user_data: {},
  subject_loading: false,
  subject_data: [],
  course_loading: false,
  program_loading: false,
  course_data: [],
  program_data: [],
  role: JSON.parse(localStorage.getItem("role")),
};

const UserContext = React.createContext();
let token = JSON.parse(localStorage.getItem("token"));

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);
  // let navigate = useNavigate();

  // Register
  const setRegister = async (params) => {
    dispatch({ type: REGISTER_BEGIN });
    try {
      const response = await axios.post(register, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const registerdata = response.data;
      console.log("====", response.data);
      if (registerdata.success == 1) {
        dispatch({ type: REGISTER_SUCCESS, payload: registerdata });
        localStorage.setItem("islogin", JSON.stringify(true));
      } else {
        // alert(registerdata.message + "");
        dispatch({ type: REGISTER_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: REGISTER_FAIL });
      alert(error.message + "");
    }
  };

  // Login
  const setLogin = async (params, navigate) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post(user_login, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("islogin", JSON.stringify(true));
        localStorage.setItem("token", JSON.stringify(logindata.token));
        localStorage.setItem("userdata", JSON.stringify(logindata.user));
        localStorage.setItem("role", JSON.stringify(logindata.user.role));
        {
          logindata.user.role == 2
            ? navigate("/studant-profile")
            : navigate("/mentor-profile");
        }
      } else {
        alert(logindata.message + "");
        dispatch({ type: LOGIN_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  const logoutUser = (history) => {
    dispatch({ type: LOGOUT_USER });
    localStorage.setItem("is_login", false);
    localStorage.setItem("is_token", "");
    localStorage.clear();
    history("/");
    return "logout";
  };

  // update profile
  const updateProfile = async (params, navigate) => {
    dispatch({ type: UPDATE_PROFILE_BEGIN });
    try {
      const response = await axios.post(update_profile, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const updateprofiledata = response.data;
      console.log("====", response.data);
      if (updateprofiledata.success == 1) {
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: updateprofiledata });
        localStorage.setItem(
          "userdata",
          JSON.stringify(updateprofiledata.data)
        );
        localStorage.setItem(
          "role",
          JSON.stringify(updateprofiledata.data.role)
        );
      }
      if (updateprofiledata.status === "Token is Expired") {
        localStorage.setItem("islogin", JSON.stringify(false));
        localStorage.setItem("token", JSON.stringify(""));
        window.location.reload();
        navigate("/");
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_PROFILE_FAIL });
    }
  };

  // Get Subjects
  const getsubjectdata = async () => {
    dispatch({ type: GET_SUBJECT_BEGIN });
    try {
      const response = await axios.get(get_subject, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      console.log("get_subject_data", response.data);
      if (response.data.success == 1) {
        dispatch({ type: GET_SUBJECT_SUCCESS, payload: response.data });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_SUBJECT_ERROR });
    }
  };

  // Course with Subjects
  const getCourse = async () => {
    dispatch({ type: GET_COURSE_BEGIN });
    try {
      const response = await axios.get(get_course, {
        headers: {
          Accept: ACCEPT_HEADER,
          // Authorization: "Bearer " + token,
        },
      });

      if (response.data.success == 1) {
        dispatch({ type: GET_COURSE_SUCCESS, payload: response.data.data });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_COURSE_ERROR });
    }
  };

  // const deleteInq = async (params) => {
  //   dispatch({ type: DELETE_INQUIRY_BEGIN });
  //   try {
  //     const response = await axios.post(deleteinquiry, params, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         // Authorization: "Bearer " + token,
  //       },
  //     });
  //     if (response.data.success == 1) {
  //       dispatch({ type: DELETE_INQUIRY_SUCCESS, payload: response.data.data });
  //     }
  //     return response.data;
  //   } catch (error) {
  //     dispatch({ type: DELETE_INQUIRY_FAIL });
  //   }
  // };

  const deleteInq = async (params) => {
    dispatch({ type: DELETE_INQUIRY_BEGIN });
    try {
      const response = await axios.post(deleteinquiry, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      const deleteinquirydata = response.data;
      console.log("====", response.data);
      // if (deleteinquirydata.success == 1) {
      //   dispatch({ type: DELETE_INQUIRY_SUCCESS, payload: deleteinquirydata });
      //   localStorage.setItem(
      //     "userdata",
      //     JSON.stringify(deleteinquirydata.data)
      //   );
      //   localStorage.setItem(
      //     "role",
      //     JSON.stringify(deleteinquirydata.data.role)
      //   );
      // }
      // if (deleteinquirydata.status === "Token is Expired") {
      //   localStorage.setItem("islogin", JSON.stringify(false));
      //   localStorage.setItem("token", JSON.stringify(""));
      //   window.location.reload();
      //   //  navigate("/");
      // // }
      // return response.data;
    } catch (error) {
      dispatch({ type: DELETE_INQUIRY_FAIL });
    }
  };

  // Get Program
  const getprogramdata = async () => {
    dispatch({ type: GET_PROGRAM_BEGIN });
    try {
      const response = await axios.get(getprogram, {
        headers: {
          Accept: ACCEPT_HEADER,
          // Authorization: "Bearer " + token,
        },
      });
      console.log("get_program_data", response.data);
      if (response.data.success == 1) {
        dispatch({ type: GET_PROGRAM_SUCCESS, payload: response.data.data });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_PROGRAM_FAIL });
    }
  };

  useEffect(() => {
    getsubjectdata();
    getCourse();
    getprogramdata();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setRegister,
        setLogin,
        getsubjectdata,
        getCourse,
        updateProfile,
        logoutUser,
        deleteInq,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
