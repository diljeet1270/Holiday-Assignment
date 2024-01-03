import React from "react";
import "../Dashboard/Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
const Dashboard = () => {
  return (
    <div className="grid-container">
     <Sidebar/>
      <Header/>
      <div className="item3">Waves</div>
      <div className="item4">Friends</div>
      <Footer/>
    </div>
  );
};
export default Dashboard;
