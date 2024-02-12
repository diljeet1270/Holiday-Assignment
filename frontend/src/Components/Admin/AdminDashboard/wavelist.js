import React from 'react'
import "./dashboard.css"
import axios from "axios";
import { useState, useEffect } from "react";
// import {Link,} from 'react-router-dom';
import { Link } from "react-router-dom";
import arrowleft from "../images/arrowleft.jpeg";

const Wavelist = () => {

    // const [data, setData] = useState([]);
    // const GetListData = async () => {
    //   const id = localStorage.getItem("id");
    //   const token = localStorage.getItem("token");
    //   const result = await axios.get(`http://localhost:8000/profile/${id}`,{
    //     headers: { 'Authorization': `Bearer ${token}`}
    //   });
    //   setData(result.data.userdetails);
    // };
    // useEffect(() => {
    //   GetListData();
    // }, []); 

  return (
    <div className='sectiondashboard2'>
             <div className="title changeinfo">
            <Link to="/dashboard">
            <img src={arrowleft} alt="error" className="arrowleft" />
            </Link>
            <h1>Manage Wave List</h1>
            </div>
            <div className='manage'>
                <div>
                  <input
                    type="search"
                    name="search"
                    // value={formik.uploadphoto}
                    // onChange={formik.handleChange}
                    className="search"
                    placeholder="Search with name,email,accesscode"/>
                </div>
                <div className='manage-table'>
                <table>
                    <tr>
                    <th>Firstname</th>
                    <th>Wave Message</th>
                    <th>Created on</th>
                    <th>Status</th>
                    <th>Action</th>
                    
                    </tr>
                    {/* <tr>
                        <td>{data.firstname}</td>
                        <td>{data.wavemessage}</td>
                        <td>{data.createdAt}</td>
                        <td>{data.status}</td>
                        <td>{data.Action}</td>
                        
                    </tr> */}
                </table>
                </div>
            </div>
        </div>
  )
}

export default Wavelist