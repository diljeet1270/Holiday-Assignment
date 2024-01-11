import React, {useState, useRef} from "react";
import styles from "./CreateWaves.module.css";
import Button from "../Button/Button";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import profilePic from "../../assets/maleLogo.jpg";
import SearchBar from "../SearchBar/SearchBar";

const CreateWaves = () => {
    const employees = [
        { name: 'John Doe', age: 32, profession: 'Engineer' },
        { name: 'Jane Doe', age: 28, profession: 'Designer' },
        { name: 'Sam Smith', age: 45, profession: 'Manager' },
     ];
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
  
    const handleFileChange = (event) => {
      const newFileName = event.target.files[0]?.name || '';
      setFileName(newFileName);
    };
  
    const handleTextInputClick = () => {
      fileInputRef.current.click();
    };


  return (
    <div className={styles.gridContainer}>
      <Sidebar />
      <Header />
      <div className={styles.wavesContainer}>
        <div className={styles.profilePicContainer}>
          <div className={styles.profilePicture}>
            <img src={profilePic} alt="user profile" />
          </div>
          <div>
            <h2>John Doe</h2>
          </div>
        </div>
        <div className={styles.waveInputs}>
          <p>What do you want to share.</p>
          <div>
      {/* Text input to behave like a file input */}
      <input
        type="text"
        value={fileName}
        readOnly
        onClick={handleTextInputClick}
        placeholder="Upload photos"
      />

      {/* Actual file input, visually hidden */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
     <textarea placeholder="Write something" />
     <Button label="Create Wave" type="submit" />
    </div>
        <div className={styles.searchBar}>
           
            <SearchBar employees={employees}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CreateWaves;
