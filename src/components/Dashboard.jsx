import React from "react";
import ProgressBar from "./ProgressBar";
import { NavLink } from "react-router-dom";
import { Home, User } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <div className="mx-auto text-center flex flex-col justify-center items-center ">
        <div className="logo-container p-[3rem] pb-[5rem] relative">
          <img
            className="absolute left-[12rem] top-0 md:absolute md:left-[22rem]"
            src="/assets/lady-logo.png"
            alt="webapp-logo"
            srcset=""
          />
          <img
            className="w-[115px] h-[100px] mt-[5rem]"
            src="/assets/user-logo.png"
            alt="webapp-logo"
            srcset=""
          />
          <p className="dummy-number-text">4</p>
        </div>
        <div className="w-[90%] md:w-1/2 relative">
          <h2
            className="dashboard-title text-white  pt-[1rem] pb-[1rem] 
            pl-[2rem] pr-[2rem] rounded-l-full rounded-r-full"
          >
            Employee Productivity Dashboard
          </h2>
          <div className="dashboard mb-[2rem] opacity-[0.8] p-[2rem]  rounded-bl-2xl rounded-br-2xl">
            {/* weekcards */}
            <div className="flex flex-col">
              <div className="p-[0.5rem]">
                <div className="flex justify-between">
                  <p className="">Productivity on Monday</p>
                  <p className="text-[#36A546] ">4%</p>
                </div>
                <div className="text-left">
                  <ProgressBar productivityvalue="10" />
                </div>
              </div>
              <div className="flex flex-col p-[0.5rem]">
                <div className="flex justify-between">
                  <p className="">Productivity on Tueday</p>
                  <p className="text-[#36A546] ">92%</p>
                </div>
                <div className="text-left">
                  <ProgressBar productivityvalue="92" />
                </div>
              </div>
              <div className="flex flex-col p-[0.5rem]">
                <div className="flex justify-between">
                  <p className="">Productivity on Wednesday</p>
                  <p className="text-[#36A546] ">122%</p>
                </div>
                <div className="text-left">
                  <ProgressBar productivityvalue="122" />
                </div>
              </div>
              <div className="flex flex-col p-[0.5rem]">
                <div className="flex justify-between">
                  <p className="">Productivity on Thursday</p>
                  <p className="text-[#36A546] ">93%</p>
                </div>
                <div className="text-left">
                  <ProgressBar productivityvalue="93" />
                </div>
              </div>
              <div className="flex flex-col p-[0.5rem]">
                <div className="flex justify-between">
                  <p className="">Productivity on Friday</p>
                  <p className="text-[#36A546] ">89%</p>
                </div>
                <div className="text-left">
                  <ProgressBar productivityvalue="89" />
                </div>
              </div>
              <div className="flex flex-col p-[0.5rem]">
                <div className="flex justify-between">
                  <p className="">Productivity on Saturday</p>
                  <p className="text-[#36A546] ">98%</p>
                </div>
                <div className="text-left">
                  <ProgressBar productivityvalue="98" />
                </div>
              </div>

              {/* <div className="grid grid-cols-2 p-[0.5rem]">
                <div className="text-left">
                  <p className="text-left">Productivity on Tueday</p>
                  <ProgressBar productivityvalue="92" />
                </div>
                <p className="text-[#36A546] text-right">92%</p>
              </div>
              <div className="grid grid-cols-2 p-[0.5rem]">
                <div className="text-left">
                  <p className="text-left">Productivity on Wednesday</p>
                  <ProgressBar productivityvalue="122" />
                </div>
                <p className="text-[#36A546] text-right">122%</p>
              </div>
              <div className="grid grid-cols-2 p-[0.5rem]">
                <div className="text-left">
                  <p className="text-left">Productivity on Thursday</p>
                  <ProgressBar productivityvalue="93" />
                </div>
                <p className="text-[#36A546] text-right">93%</p>
              </div>
              <div className="grid grid-cols-2 p-[0.5rem]">
                <div className="text-left">
                  <p className="text-left">Productivity on Friday</p>
                  <ProgressBar productivityvalue="89" />
                </div>
                <p className="text-[#36A546] text-right">89%</p>
              </div>
              <div className="grid grid-cols-2 p-[0.5rem]">
                <div className="text-left">
                  <p className="text-left">Productivity on Saturday</p>
                  <ProgressBar productivityvalue="98" />
                </div>
                <p className="text-[#36A546] text-right">98%</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <footer
        className="fixed bottom-0 left-0 z-20 w-full border-[#36A546] rounded-t-[2.5rem] rounded-lg bg-[#5E5E5E82] md:hidden flex  "
        id="mobileNav"
      >
        <div className="flex justify-center items-center">
          <div className="w-1/2   rounded-2xl">
            <NavLink to="/Dashboard" className="w-full py-2">
              {({ isActive }) => (
                <div
                className={` ${isActive ? "active-nav-link" : "nav-link"
                }`}
                >
                  <Home className="h-10 w-10 text-[#36A546]" />
                </div>
              )}
            </NavLink>
          </div>
          <div className="w-1/2 nav-link  rounded-2xl">
            <NavLink to="/Employeelist" className="w-full py-2">
              {({ isActive }) => (
                <div
                // className={`flex flex-col items-center gap-y-[1px]  ${
                //   isActive ? "text-orangeColor" : "text-blackColor"
                // }`}
                >
                  <User
                    // className={` ${
                    //   isActive ? "text-orangeColor" : "text-blackColor"
                    // }`}
                    className="h-10 w-10 text-[#36A546]"
                  />
                </div>
              )}
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
