import React, { useState } from "react";
import ProfileHeader from "../profileHeader/profileHeader";
import styles from "./Myprofile.module.css";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
import BasicDetails from "../profileDetails/BasicDetails";
import PersonalDetails from "../profileDetails/PersonalDetails";

const Myprofile = () => {
  const [activeTab, setActiveTab] = useState("basic"); // "basic" or "personal"

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.gridContainer}>
      <Sidebar />
      <Header />
      <p className={styles.heading}>
        <a href="/dashboard">
          <FaArrowLeftLong />
        </a>
        Profile
      </p>
      <ProfileHeader />

      <div className={styles.content}>
        <div className={styles.tabButtons}>
          <button
            onClick={() => handleTabChange("basic")}
            className={activeTab === "basic" ? styles.activeTab : ""}
          >
            Basic Details
          </button>
          <button
            onClick={() => handleTabChange("personal")}
            className={activeTab === "personal" ? styles.activeTab : ""}
          >
            Personal Details
          </button>
        </div>
        {activeTab === "basic" && <BasicDetails />}
        {activeTab === "personal" && <PersonalDetails />}
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
