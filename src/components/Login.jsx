import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate =  useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log(
      "email=> " + email.current.value + "   password" + password.current.value
    );
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if (enteredEmail === "Admin@greendzine.in" && enteredPassword === "Weareelectric") {
      console.log("Logged In Successfully");
      navigate("/Dashboard");
    }
    else{
      console.log("check email/password");
    }
  };

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
            <form
              action=""
              className="flex flex-col"
              // onSubmit={(e) => e.preventDefault()}
              onSubmit={handleLoginForm}
              autoComplete="false"
            >
              <input
                ref={email}
                type="email"
                className="custom-input p-[1rem] m-3 border-[1px] rounded-l-3xl rounded-r-3xl focus:outline-none"
                name="email"
                placeholder="E-mail"
                required
                autoComplete="false"
              />
              <input
                ref={password}
                type="password"
                className="custom-input p-[1rem] m-3 border-[1px] rounded-l-3xl rounded-r-3xl focus:outline-none"
                placeholder="Password"
                name="password"
                id=""
                required
                autoComplete="false"
              />
              <button
                type="submit"
                className="login_btn p-3 m-3 border-[2px] rounded-l-3xl rounded-r-3xl"
              >
                Login
              </button>
            </form>
            <NavLink to="" className="forgot_text">
              Forgot Password?
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
