import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {logoutApi} from "../Auth/auth.action"

const Navbar = () => {
  const isAuth = useSelector((store)=> store.auth.token)  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLoginClick = () => {
    // login screen
    if (isAuth) {
      dispatch(logoutApi());
      // he wants to logout
    } else {
      // he wants to login
      navigate("/login");
    }
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="">Home</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>
        {/* Spacer */}
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
