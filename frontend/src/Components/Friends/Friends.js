import React from "react";
import styles from "./Friends.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import Button from "../Button/Button";

const Friends = () => {
  return (
    <div className={styles.gridContainer}>
      <Sidebar />
      <Header />
      <p className={styles.heading}>
        <a href="/dashboard">
          <FaArrowLeftLong />
        </a>
        Friends
      </p>
      <div className={styles.friendsList}>
        <div className={styles.firstSection}>
           <div>
             {/* <SearchBar /> */}
             <IoFilter/>
           </div>
           <div>
            <a href="/friends/inviteFriends">
            <Button label="Invite Friends" type="button"/>
            </a>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Friends;
