import React from 'react'
import Basicdetails from "./../../components/Editdata/basicdetails";
import Personaldetails from "./../../components/Editdata/personaldetails";
import { useState } from "react";
import ".editdata.css";
import { Link } from "react-router-dom";
import arrowleft from "../../images/arrowleft.jpeg";

const Editdata = () => {
    const [selectedNavItem, setSelectedNavItem] = useState("basic"); 

    const handleNavItemClick = (item) => {
      setSelectedNavItem(item);
    };
    return (
      <div className="seperation">
        <div>
          <div className="chngepswd-section">
            <div className="title changeinfo">
            <Link to="/dashboard">
            <img src={arrowleft} alt="error" className="arrowleft" />
            </Link>
            <h1>Edit User Data</h1>
            </div>
            <div className="chngeinfo-section">
              <div className="chngeinfo-nav">
                <div className="btn-1">
                  <button
                    onClick={() => handleNavItemClick("basic")}
                    className=" detail underline-remover"
                  >
                    Basic Details
                  </button>
                </div>
                <div className="btn-2">
                  <button
                    onClick={() => handleNavItemClick("personal")}
                    className="detail underline-remover"
                  >
                    Personal Details
                  </button>
                </div>
              </div>
              {selectedNavItem === "basic" && <Basicdetails />}
              {selectedNavItem === "personal" && <Personaldetails />}
            </div>
          </div>
        </div>
      </div>
    );
  };


export default Editdata