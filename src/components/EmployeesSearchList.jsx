import React, { useState, useEffect } from "react";
import { Home, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import employeedata from "../utilities/emp-data.json";

const EmployeesSearchList = () => {
  // console.log("employeesdata-"+employeedata);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState([]);

  const filterEmployeeByName = () => {
    console.log(searchQuery);
    const filteredata = employeedata.filter((emp) =>
      emp.emp_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEmployee(filteredata);
  };

  useEffect(() => {
    filterEmployeeByName();
  }, [searchQuery]);

  return (
    <>
      <div className="mx-auto text-center flex flex-col justify-center items-center">
        <div className="logo-container px-[1.9rem]  pt-[2.8rem] pb-[1rem] relative">
          <img
            className="absolute left-[11rem] top-0 md:absolute md:left-[22rem]"
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
        <div className="Employee-container">
          <div className="login-form-container w-[350px]">
            <form
              action=""
              className="flex gap-8 justify-center items-center custom-input p-[1rem] m-3 border-[1px] rounded-l-3xl rounded-r-3xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className="bg-transparent border-none  focus:outline-none text-center font-extrabold"
                name="emp"
                placeholder="Search With name"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button>
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="40px"
                  height="50px"
                >
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                </svg>
                {/* <Search className="" /> */}
              </button>
            </form>
          </div>
          <div className="employee-list-container">
            {filteredEmployee.length > 0
              ? // I have to show only searched employee by name card
                filteredEmployee.map((emp) => (
                  
                    <div
                      className="employees-data-container rounded-lg p-[2rem] text-lg "
                      key={emp.emp_id}
                    >
                      <div className="employee-data relative">
                        <p className="emp-number">{emp.emp_id}</p>
                        <div className="flex pb-4">
                          <p className="emp-id pr-2">EMP ID </p>
                          <p className="ml-4">:</p>
                          <p className="emp-value pl-2 font-extrabold">
                            {emp.emp_id}
                          </p>
                        </div>
                        <div className="flex pb-4">
                          <p className="emp- pr-2">Name</p>
                          <p className="ml-6">:</p>
                          <p className="emp-value pl-2 font-extrabold">
                            {emp.emp_name}
                          </p>
                        </div>
                        <div className="flex pb-4">
                          <p className="emp-dob pr-2">DOB</p>
                          <p className="ml-[2.1rem]">:</p>
                          <p className="emp-value pl-2 text-[#E3963E] font-extrabold">
                            {emp.emp_dob}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="emp-role ">Role</p>
                          <p className="ml-[2.7rem]">:</p>
                          <p className="emp-value ml-[0.6rem] text-[#36A546] font-extrabold">
                            {emp.emp_role}
                          </p>
                        </div>
                      </div>
                    </div>
                  
                ))
              : // show all the employee
                employeedata.map((emp) => (
                  <div
                    className="employees-data-container rounded-lg p-[2rem] text-lg "
                    key={emp.emp_id}
                  >
                    <div className="employee-data relative">
                      <p className="emp-number">{emp.emp_id}</p>
                      <div className="flex pb-4">
                        <p className="emp-id pr-2">EMP ID </p>
                        <p className="ml-4">:</p>
                        <p className="emp-value pl-2 font-extrabold">
                          {emp.emp_id}
                        </p>
                      </div>
                      <div className="flex pb-4">
                        <p className="emp- pr-2">Name</p>
                        <p className="ml-6">:</p>
                        <p className="emp-value pl-2 font-extrabold">
                          {emp.emp_name}
                        </p>
                      </div>
                      <div className="flex pb-4">
                        <p className="emp-dob pr-2">DOB</p>
                        <p className="ml-[2.1rem]">:</p>
                        <p className="emp-value pl-2 text-[#E3963E] font-extrabold">
                          {emp.emp_dob}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="emp-role ">Role</p>
                        <p className="ml-[2.7rem]">:</p>
                        <p className="emp-value ml-[0.6rem] text-[#36A546] font-extrabold">
                          {emp.emp_role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <footer
        className="fixed bottom-0 left-0 z-20 w-full rounded-t-[2.5rem] rounded-lg bg-[#5E5E5E82] md:hidden flex  "
        id="mobileNav"
      >
        <div className="flex justify-center items-center">
          <div className="w-1/2 nav-link rounded-2xl">
            <NavLink to="/Dashboard" className="w-full py-2">
              {({ isActive }) => (
                <div
                // className={`flex flex-col items-center gap-y-[1px] ${
                //   isActive ? "text-orangeColor" : "text-blackColor"
                // }`}
                >
                  <Home className="h-10 w-10 text-[#36A546]" />
                </div>
              )}
            </NavLink>
          </div>
          <div className="w-1/2  rounded-2xl">
            <NavLink to="/Employeelist" className="w-full py-2">
              {({ isActive }) => (
                <div
                className={`${isActive ? "active-nav-link" : "nav-link"
                }`}
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

export default EmployeesSearchList;
