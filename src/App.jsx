import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import EmployeesSearchList from "./components/EmployeesSearchList";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <EmployeesSearchList/> */}
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/Dashboard" exact element={<Dashboard/>} />
          <Route path="/Employeelist" exact element={<EmployeesSearchList/>} />
        </Routes>
    </>
  );
}

export default App;
