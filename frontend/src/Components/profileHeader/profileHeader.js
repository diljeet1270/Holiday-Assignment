import React, { useState, useRef,useEffect } from "react";
import "./profileHeader.css";
import dummyPic from "../../assets/maleLogo.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const ProfileHeader = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileIcon, setProfileIcon] = useState(null);
  let token = localStorage.getItem("token");
  // Get user's profile picture when the component mounts
  // If no image is found, display a default one
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


  const postImage = async (file) => {
    const formData = new FormData();
    formData.append("profileIcon", file);

    try {
      const response = await axios.put(`http://localhost:3001/profile/v1/profilePicture`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      if (response.data.status) {
        setProfileIcon(response.data.data.profilePic);
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
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <div><h3>Upload a new photo</h3><br/><br/><br/><br/><br/>
        <p>
          {selectedImage && selectedImage.name
            ? selectedImage.name
            : "Profile-pic.jpg"}
        </p></div>
      </div>
      <button id="change-pic" onClick={handleShowImageInput}>
        Change Picture
      </button>
    </div>
  );
};
export default ProfileHeader;
