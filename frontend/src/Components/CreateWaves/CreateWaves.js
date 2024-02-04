import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useFormik } from "formik";
import styles from "./CreateWaves.module.css";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import dummyPic from "../../assets/maleLogo.jpg";
import searchIcon from "../../assets/search.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-toastify";
import * as Yup from "yup";
const CreateWaves = () => {
  const name = localStorage.getItem("name");
  const [profileIcon, setProfileIcon] = useState();
  const token = localStorage.getItem("token");
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [isPosted, setIsPosted] = useState(false);
  const [waveList, setWaveList] = useState([]);
  const [searchWaveList, setSearchWaveList] = useState([]);
  const [search, setSearch] = useState("");

  const getUserPicture = async () => {
    try {
      let response = await axios.get(
        "http://localhost:3001/profile/v1/profilePicture",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        setProfileIcon(response.data.data.profilePic || dummyPic);
      } else {
        console.log("error fetching picture");
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
  const getWaveList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/waves/v1/waves`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status) {
        setWaveList(response.data.data);
        setSearchWaveList(response.data.data);
      }
    } catch (err) {}
  };
  useEffect(() => {
    getWaveList();
  }, [isPosted, isActive]);

  // creating a new wave
  const postWave = async ({ message }, action) => {
    const formData = new FormData();
    selectedImage && formData.append("image", selectedImage);
    formData.append("message", message);

    try {
      const response = await axios.post(
        `http://localhost:3001/waves/v1/wave`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status) {
        setIsPosted(!isPosted);
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 300,
        });
        action.resetForm();
        setSelectedImageName(null);
        setSelectedImage(null);
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 300,
      });
    }
  };

  const updateStatus = async (waveId, waveStatus) => {
    try {
      const response = await axios.put(
        `http://127.0.0.5:3000/user/waves`,
        { status: !waveStatus, id: waveId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.status) {
        setIsActive(!isActive);
      }
    } catch (err) {}
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setSelectedImageName(event.target.files[0].name);
  };

  const handleShowImageInput = () => {
    fileInputRef.current.click();
  };
  const handleWaveSearch = (event) => {
    if (!waveList || !Array.isArray(waveList)) {
        console.error("waveList is not properly initialized or is not an array.");
        return;
    }

    const filteredWave = waveList.filter((item) => {
        if (item && item.message && typeof item.message === 'string') {
            return item.message.includes(event.target.value);
        }
        return false;
    });

    setSearchWaveList(filteredWave);
};

  const handleStatusChange = (id, status) => {
    updateStatus(id, status);
  };

  const schema = Yup.object({
    message: Yup.string()
      .min(5, "Minimum 5 characters!")
      .max(150, "Maximum 150 characters!")
      .required("Required!"),
  });

  const initialValues = {
    message: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, action) => {
      postWave(values, action);
    },
  });

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
            <img
              src={profileIcon ? profileIcon : dummyPic}
              alt="user profile"
            />
          </div>
          <div>
            <h2>{name}</h2>
          </div>
        </div>
        <form onSubmit={Formik.handleSubmit}>
          <input
            type="file"
            accept="image/*"
            className={styles.imageUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <input
            type="text"
            className={styles.waveImageInput}
            onClick={handleShowImageInput}
            placeholder={
              selectedImageName ? selectedImageName : "Upload Photos"
            }
            readOnly
          />
          <textarea
            className={styles.waveMessageInput}
            name="message"
            placeholder="Write something..."
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.message}
          />
          {Formik.errors.message && Formik.touched.message ? (
            <p className="form-errors formik-errors">{Formik.errors.message}</p>
          ) : null}

          <button type="submit" id="create-wave-button">
            Create Wave
          </button>
        </form>
        <div className={styles.searchWave}>
          <img className={styles.searchIcon} src={searchIcon} alt="Search" />
          <input
            className={styles.inputSearchWave}
            type="text"
            placeholder="Search"
            onChange={handleWaveSearch}
          />
        </div>
        {/*  Display the waves that match the search */}

        {searchWaveList.length < 1 ? (
          <h1>No waves created</h1>
        ) : (
          searchWaveList.map((item, key) => (
            <div key={key} className={styles.parentUser}>
              <div className={styles.waveHistoryContainer}>
                <img src={profileIcon ? profileIcon : "/user.png"} alt="Icon" />
                <div className={styles.invitedUserDetail}>
                  <p className={styles.userName}>{name}</p>
                  <p className={styles.waveMessage}>{item.waveMessage}</p>
                </div>
                <div
                  className={styles.status}
                  style={{
                    background: item.status ? "#02480d" : "#B50E03",
                  }}
                  onClick={() => handleStatusChange(item.id, item.status)}
                >
                  <p>{item.status ? "Active" : "In Active"}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CreateWaves;
