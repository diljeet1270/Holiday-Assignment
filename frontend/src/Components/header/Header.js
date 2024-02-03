import React, {useEffect, useState} from "react";
import styles from './Header.module.css';
import QuickLinks from "../QuickLinks/QuickLinks";
import profileIcon from '../../assets/user.png'
import axios from "axios";

const Header = () => {
    const name = localStorage.getItem("name");
    let token = localStorage.getItem("token")
    const [openModel, setOpenModel] = useState(false);
    const [userName, setUserName] = useState(name);
    const [userIcon, setUserIcon] = useState();
    const [time, setTime] = useState("");
    const closeModel = () => setOpenModel(false);
    const getprofilePic = async ()=>{
        try{
            let response = await axios.get("http://localhost:3001/profile/v1/profilePicture",{
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            if(response){
                setUserIcon(response.data.data.profilePic);
            }
            else{
                console.log("Error in getting user details");
            }
        }
        catch(error){
            console.log("Error in getting user icon");
            console.log(error);
        }
    }
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
        getprofilePic();
        const intervalId = setInterval(() => {
            checkCurrentTime();
        }, 30000);

        return () => clearInterval(intervalId);
    });
    return (
        <div className={styles.header}>
                <img
                    className={styles.userIcon}
                    src={userIcon ? userIcon : profileIcon }
                    alt="user Image"
                    onClick={() => setOpenModel(!openModel)}
                />
                <div className={styles.userName}>
                    <p className={styles.greeting}>Good {time}</p>
                    <p className={styles.name} onClick={() => setOpenModel(!openModel)}>
                        {userName}
                    </p>
                </div>
                {openModel && <QuickLinks closeModel={closeModel} />}
            </div>

    )
}
export default Header;