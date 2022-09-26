import {
  Auth_logIN_Loading,
  Auth_logIN_Error,
  Auth_logIN_Success,
  Auth_logOut,
} from "./auth.type";

let token = localStorage.getItem("token") || "";

const initialState = [
  {
    loading: false,
    error: false,
    token: token,
  },
];

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Auth_logIN_Loading: {
      return { ...state, loading: true, error: false };
    }
    case Auth_logIN_Error: {
      return { ...state, loading: false, error: true };
    }
    case Auth_logIN_Success: {
      localStorage.setItem("token", payload.token);
      return { ...state, loading: false, error: false, token: payload.token };
    }
    case Auth_logOut: {
      localStorage.removeItem("token");
      return { ...state, loading: false, error: false, token: "" };
    }
    default: {
      return state;
    }
  }
};
