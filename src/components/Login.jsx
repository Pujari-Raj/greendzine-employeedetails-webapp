import React from "react";
import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="mx-auto text-center flex flex-col justify-center items-center h-screen">
        <div className="">
          <div className="logo-title-container">
            <img
            className="ml-8"
              src="/public/assets/application-logo.png"
              alt="webapp-logo"
              srcset=""
            />
            <p className=" text-2xl">#We are Electric</p>
          </div>
          <div className="login-form-container ">
            <form action="" className="flex flex-col">
              <input
                type="email"
                className="custom-input p-[1rem] m-3 border-[1px] rounded-l-3xl rounded-r-3xl focus:outline-none"
                name="email"
                placeholder="E-mail"
              />
              <input
                type="password"
                className="custom-input p-[1rem] m-3 border-[1px] rounded-l-3xl rounded-r-3xl focus:outline-none"
                placeholder="Password"
                name="password"
                id=""
              />
              <button type="submit" className="login_btn p-3 m-3 border-[2px] rounded-l-3xl rounded-r-3xl">Login</button>
            </form>
            <NavLink to="" className="forgot_text">Forgot Password?</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
