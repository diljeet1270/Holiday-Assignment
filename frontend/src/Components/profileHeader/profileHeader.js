import React, { useState, useRef } from "react";
import "./profileHeader.css";
import dummyPic from "../../assets/maleLogo.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const ProfileHeader = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileIcon, setProfileIcon] = useState(null);
  // Get user's profile picture when the component mounts
  // If no image is found, display a default one
  const getUserPicture = async () => {
    try {
      let res = await axios.get("/user/picture");
      if (res.data === "") {
        setProfileIcon(dummyPic);
      } else {
        setProfileIcon(
          URL.createObjectURL(new Blob([res.data], { type: "image/jpeg" }))
        );
      }
    } catch (err) {
      console.log("Error getting user picture");
    }
  };

  const postImage = async (file) => {
    const formData = new FormData();
    formData.append("profileIcon", file);

    try {
      const response = await axios.put(`http://127.0.0.5:3000/user`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.status) {
        setProfileIcon(response.data.data.profileIcon);
      }
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 300,
      });
    } catch (err) {
      toast.error(err.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 300,
      });
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    postImage(file);
  };

  const handleShowImageInput = () => {
    fileInputRef.current.click();
  };
  return (
    <div id="img-container" className="profileChangePicture">
      <div>
        <img
          id="profile-user-icon"
          src={profileIcon ? profileIcon : dummyPic}
          alt="icon"
        />
      </div>
      <div id="upload-photo">
        <h3>Upload a new photo</h3>
        <p>
          {selectedImage && selectedImage.name
            ? selectedImage.name
            : "Profile-pic.jpg"}
        </p>
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <button id="change-pic" onClick={handleShowImageInput}>
        Change Picture
      </button>
    </div>
  );
};
export default ProfileHeader;
