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
  LOGOUT_USER,
  GET_PROGRAM_BEGIN,
  GET_PROGRAM_SUCCESS,
  GET_PROGRAM_FAIL,
} from "../Action";

const user_reducer = (state, action) => {
  // register
  if (action.type === REGISTER_BEGIN) {
    return { ...state, register_loding: true };
  }

  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      register_loding: false,
      register_data: action.payload.data,
    };
  }

  if (action.type === REGISTER_FAIL) {
    return { ...state, register_loding: false, login_error: true };
  }

  // login

  if (action.type === LOGIN_BEGIN) {
    return { ...state, login_loding: true };
  }

  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      login_loding: false,
      user_data: action.payload.user,
    };
  }

  if (action.type === LOGIN_FAIL) {
    return { ...state, login_loding: false, login_error: true };
  }

  // course

  if (action.type === GET_COURSE_BEGIN) {
    return { ...state, course_loading: true };
  }

  if (action.type === GET_COURSE_SUCCESS) {
    return {
      ...state,
      course_loading: false,
      course_data: action.payload,
    };
  }

  if (action.type === GET_COURSE_ERROR) {
    return {
      ...state,
      course_loading: false,
    };
  }

  // subject

  if (action.type === GET_SUBJECT_BEGIN) {
    return { ...state, subject_loading: true };
  }

  if (action.type === GET_SUBJECT_SUCCESS) {
    return {
      ...state,
      subject_loading: false,
      subject_data: action.payload,
    };
  }

  if (action.type === GET_SUBJECT_ERROR) {
    return {
      ...state,
      subject_loading: false,
    };
  }

  // course

  if (action.type === GET_PROGRAM_BEGIN) {
    return { ...state, program_loading: true };
  }

  if (action.type === GET_PROGRAM_SUCCESS) {
    return {
      ...state,
      program_loading: false,
      program_data: action.payload,
    };
  }

  if (action.type === GET_PROGRAM_FAIL) {
    return {
      ...state,
      program_loading: false,
    };
  }

  // Logout user

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      is_login: false,
      is_token: "",
    };
  }
};
export default user_reducer;
