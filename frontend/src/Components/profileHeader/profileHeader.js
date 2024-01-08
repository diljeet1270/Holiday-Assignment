import React from "react";
import styles from './profileHeader.module.css';
import profilePic from "../../assets/maleLogo.jpg";
const ProfileHeader = () => {
    return (
        <div className={styles.profileChangePicture}>
        <div className={styles.firstHalf}>
          <div className={styles.profilePicture}>
            <img src={profilePic} alt="user profile" />
          </div>
          <div className={styles.changePicture}>
            <label htmlFor="upload-photo">Upload a Profile Picture</label>
            <input type="file" id="upload-photo" // onChange={handleChange} accept="image/*" 
            />
          </div>
        </div>
        <div className={styles.secondHalf}>
          <button className={styles.submitPicture} type="submit">Change Picture</button>
        </div>
      </div>  
    )
}
export default ProfileHeader;