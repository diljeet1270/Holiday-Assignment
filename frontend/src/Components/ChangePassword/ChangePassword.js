import React from "react";
import styles from "./ChangePassword.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
const ChangePassword = () => {
  return (
    <div className={styles.gridContainer}>
      <Sidebar/>
      <Header/>
      <div className={styles.main}>main</div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};
export default ChangePassword;
