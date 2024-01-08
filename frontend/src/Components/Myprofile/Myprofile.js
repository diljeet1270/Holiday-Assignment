import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import profilePic from "../../assets/maleLogo.jpg";
import styles from "./Myprofile.module.css";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import { FaArrowLeftLong } from "react-icons/fa6";

const Myprofile = () => {
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
      <div className={`${styles.profileChangePicture} ${styles.pictureHeader}`}>
        <div className={styles.firstHalf}>
          <div className={styles.profilePicture}>
            <img src={profilePic} alt="Profile Picture" />
          </div>
          <div className={styles.changePicture}>
            <label htmlFor="upload-photo">Upload a Profile Picture</label>
            <input type="file" id="upload-photo" // onChange={handleChange} accept="image/*" 
            />
          </div>
        </div>
        <div className={styles.secondHalf}>
          <button>submit</button>
        </div>
      </div>
      
      <div className={styles.content}></div>

      <Footer />
    </div>
  );
};
export default Myprofile;