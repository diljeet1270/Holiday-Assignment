import React, { useState, useEffect} from "react";
import axios from "axios";
import styles from "./CreateWaves.module.css";
import Button from "../Button/Button";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import dummyPic from "../../assets/maleLogo.jpg";
import SearchBar from "../SearchBar/SearchBar";
import { FaArrowLeftLong } from "react-icons/fa6";

const CreateWaves = () => {
  const employees = [
    { name: "John Doe", age: 32, profession: "Engineer" },
    { name: "Jane Doe", age: 28, profession: "Designer" },
    { name: "Sam Smith", age: 45, profession: "Manager" },
  ];
  const [profileIcon, setProfileIcon] = useState();
  const token = localStorage.getItem("token");
  const getUserPicture = async () => {
    try {
      let response = await axios.get("http://localhost:3001/profile/v1/profilePicture",{
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
      if (response) {
        setProfileIcon(response.data.data.profilePic ||dummyPic);
      } else {
        console.log("error fetching picture")
      }
    } catch (err) {
      console.log("Error getting user picture");
    }
  };

  // useEffect to render the picture first.
  // This will trigger the function to get the users picture
  useEffect(() => {
    getUserPicture();
    });
  const [message, setMessage] = useState('');
  const formData = new FormData();
  const handleFileChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    console.log(file);
    formData.append("file", file)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedFile = formData.get("file");
    console.log(uploadedFile);
  };

  return (
    <div className={styles.gridContainer}>
      <Sidebar />
      <Header />
      <p className={styles.heading}>
        <a href="/dashboard">
          <FaArrowLeftLong />
        </a>
        Create Wave
      </p>
      <div className={styles.wavesContainer}>
        <div className={styles.profilePicContainer}>
          <div className={styles.profilePicture}>
            <img src={profileIcon ? profileIcon : dummyPic} alt="user profile" />
          </div>
          <div>
            <h2>John Doe</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.waveInputs}>
            <p>What do you want to share.</p>
            <div>
            <label className={styles.fileInputLabel} htmlFor="file-input">Upload files</label>
             <input type="file" className="file-input" id="file-input" onChange={handleFileChange}/>
            </div>
            <textarea
              placeholder="Write something"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button label="Create Wave" type="submit" />
          </div>
        </form>
        <div className={styles.searchBar}>
          <SearchBar employees={employees} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateWaves;
