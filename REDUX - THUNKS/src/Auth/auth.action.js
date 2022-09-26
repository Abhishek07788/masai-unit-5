import axios from "axios";

import { Auth_logIN_Success, Auth_logOut } from "./auth.type";

export const loginApi = (creds) => async (dispatch) => {
  try {
    let res = await axios.post("https://reqres.in/api/login", creds);
    dispatch({
      type: Auth_logIN_Success,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: Auth_logOut });
  }
};

export const logoutApi = () => ({ type: Auth_logOut });
