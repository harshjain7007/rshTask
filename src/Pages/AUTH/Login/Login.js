import React, { useState, useEffect } from "react";
import "./Style.css";
import { Avatar } from "@mui/material";
// import Logo from "../../../assets/images/LOGO/MY_UI.png";
import Logo from "../../../assets/images/LOGO/cercles.png";
import { useForm } from "react-hook-form";
import { ERROR_MSG, SUCCESS_MSG } from "../../../components/Custom_Message";
// import { useNavigate } from "react-router";
// import { ABC } from "../../../Api/Api";

import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import { Button } from "@mui/material";
import { loginAdminAuth } from "../../../redux/Slice/authSlice";

import { Login_Admin } from "../../../redux/Slice/authSlice";




import { resetLoginState } from "../../../redux/Slice/authSlice";
import { RotatingLine } from "../../../Global/Spiner";

// import { useLocation } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

import axios from "axios";


import loginPageImage from "../../../assets/images/loginPageImg.png"
import logo from "../../../assets/images/RSFP-logo.png"


const Login = () => {
  // const dispatch = useDispatch()
  // const isAuthenticated = useSelector(state => state.check.isAuthenticated)
  const [showPass, setShowPass] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const { authentication } = useSelector(state => state)

  useEffect(() => {

    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('https://rsfpsoftware.gowild.co.in/dashboard/dashboard-statics/', {
    //       headers: {
    //         'Authorization': 'e6063dc15ddd93a88c07e43c57be656f59583fd3'
    //       }
    //     });
    //     console.log("response.data ==>", response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // }
    // fetchData()

    console.log("authentication==>", authentication);
    if (authentication?.Login) {
      setLoggedIn(false)
      // console.log("/admin/users inside", authentication?.Login?.status)
      navigate("/dashboard");
      return;
    }

  }, [])

  // console.log("/admin/users", location)


  useEffect(() => {
    if (authentication?.Login) {
      SUCCESS_MSG("Admin logged in");
      const { token } = authentication.Login
      sessionStorage.setItem("token", token) 
      navigate("/dashboard");
    }

    if (authentication?.LoginFailed) {
      ERROR_MSG(authentication.LoginFailed.non_field_errors[0]);
      // dispatch(resetLoginState())
    }


  }, [authentication.Login, authentication.LoginFailed])


  const onSubmit = (data) => {
    // Login_Admin_Fun(data);
    let body = {
      username: data.email ,
      password: data.password
    } 
    dispatch(Login_Admin(body))
  };


  // console.log("localStorage.getItem", localStorage.getItem("token") ? true : false)


  return (
    <div className="CONTAINER" >
      <div className="myContainer">
        <div className="myChild">
          {/* <div className="_Card"> */}
          <div className="_gap_20">
            {/* <h1>Login</h1> */}
            <div className="Center_Div myLogoImg">
            <div>
              <img src={logo} alt="" className="logoImg" />
              <strong className=" "> RSPF </strong>
            </div>
              <span className="innerText">Log into your account</span>
              <p className="logP">Enter your user name and password to login </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="_gap_20">
              <div className="_gap_5">
                <label className="label">Email</label>
                <input
                  className={errors.email ? "INPUT_FIELD ER_BR" : "INPUT_FIELD"}
                  placeholder="Enter Email"
                  type="text"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="ER_MSG">Email is required.</span>
                )}
              </div>
              <div className="_gap_5 eyeDiv">
                <label className="label">Password</label>
                <input
                  className={
                    `eyeIn ${errors.password ? "INPUT_FIELD ER_BR" : "INPUT_FIELD"}`
                  }
                  type={showPass ? "text" : "password"}
                  placeholder="Enter Password"
                  {...register("password", { required: true, minLength: 4 })}
                />
                {showPass ? <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEye} className="eyeIcon" /> : <FontAwesomeIcon onClick={() => setShowPass(!showPass)} icon={faEyeSlash} className="eyeIcon" />}
              </div>

              {errors.password && (
                <span className="ER_MSG">Invalid Password</span>
              )}
              <div className="Start_Div _gap_bit">
                <input className="" type="checkbox" />
                <label className="label">Remember Me</label>
              </div>
              <div className="W_FULL">
                <button className="Active_Button W_FULL"
                  type="submit" 
                //  onClick={() => dispatch({type: "auth", payload: true})}>
                >
                  {authentication?.loading ? <RotatingLine color={"white"} /> : "Login"}
                </button>
              </div>
            </form>

            <div></div>
          </div>
        </div>
        <div className="myChild">
          <div className="imgContainer">
            <img src={loginPageImage} alt="Image" className="myImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
