import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";
import { TbPasswordUser } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineRoomPreferences } from "react-icons/md";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
        <div className={styles.sidebar}>
          <div className={styles.siteLogo}>Logo</div>
          <nav>
            <ul>
            <li><a href="/dashboard"><span><RxDashboard/></span>Dashboard</a></li>
          <li><a href="/profile"><span><CgProfile/></span>My Profile</a></li>
          <li><a href="/preferences"><span><MdOutlineRoomPreferences/></span>Preferences</a></li>
          <li><a href="#"><span><FaUserFriends/></span>Friends</a></li>
          <li><a href="/createWaves"><span><BsGraphUp/></span>Create Waves</a></li>
          <li><a href="/changepassword"><span><TbPasswordUser/></span>Change Password</a></li>
            </ul>
          </nav>
        </div>
  );
};
export default Sidebar;
