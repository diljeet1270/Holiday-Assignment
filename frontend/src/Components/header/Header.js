import React from "react";
import styles from './Header.module.css';
import malelogo from '../../assets/maleLogo.jpg'

const Header = () => {
    return (
        <div className={styles.header}>
        <div>
         <img src={malelogo} alt="userImage"/>
        </div>
        <div>
         <p>greeting</p>
         <p>user name</p>
        </div>
       </div>
    )
}
export default Header;