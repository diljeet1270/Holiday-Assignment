import React, {useEffect, useState} from "react";
import styles from './Header.module.css';
import QuickLinks from "../QuickLinks/QuickLinks";
import profileIcon from '../../assets/user.png'

const Header = () => {
    const [openModel, setOpenModel] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userIcon, setUserIcon] = useState();
    const [time, setTime] = useState("");
    const closeModel = () => setOpenModel(false);

    const checkCurrentTime = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
            setTime("Morning");
        } else if (currentHour >= 12 && currentHour < 18) {
            setTime("Afternoon");
        } else {
            setTime("Evening");
        }
    };

    useEffect(() => {
        checkCurrentTime();

        const intervalId = setInterval(() => {
            checkCurrentTime();
        }, 30000);

        return () => clearInterval(intervalId);
    });
    return (
        <div className={styles.header}>
                <img
                    className={styles.userIcon}
                    src={
                        profileIcon
                            ? profileIcon
                            : userIcon
                            ? userIcon
                            : "/user.png"
                    }
                    alt="user Image"
                    onClick={() => setOpenModel(!openModel)}
                />
                <div className={styles.userName}>
                    <p className={styles.greeting}>Good {time}</p>
                    <p className={styles.name} onClick={() => setOpenModel(!openModel)}>
                        {userName} Deljeet
                    </p>
                </div>
                {openModel && <QuickLinks closeModel={closeModel} />}
            </div>

    )
}
export default Header;