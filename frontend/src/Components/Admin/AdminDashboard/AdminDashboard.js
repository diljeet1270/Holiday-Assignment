import React from 'react'
import "./dashboard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

    const [data, setData] = useState([]);
    const [totalUser, setTotalUsers] = useState(0);
    const [totalActiveUser, setTotalActiveUsers] = useState(0);
    const [inactive, setInactive] = useState()
    const [totalWaves, setTotalWaves] = useState();
    const GetListData = async () => {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      const result = await axios.get(`http://localhost:3001/admin/v1/count-user`);
      const activeUsers = await axios.get('http://localhost:3001/admin/v1/active-user');
      const totalWaves = await axios.get('http://localhost:3001/admin/v1/count-waves');
      setTotalUsers(parseInt(result.data.data));
      setTotalActiveUsers(parseInt(activeUsers.data.data));
      setInactive(totalUser-totalActiveUser)
      setTotalWaves(totalWaves)
    };
    useEffect(() => {
      GetListData();
    }, []); 
  return (
    <div>
        <div className='sectiondashboard1'>
            <h1>Overview</h1>
            <div className='overview'>
                <div className='overview-list'>
                    <div className='overview-elements'>
                        <h4>Total Users</h4>
                        <h4>{totalUser}</h4>
                    </div>
                    <div className='overview-elements'>
                        <h4>Active Users</h4>
                        <h4>{totalActiveUser}</h4>
                    </div>
                    <div className='overview-elements'>
                        <h4>Inactive Users</h4>
                            <h4>{inactive}</h4>
                    </div>
                    <div className='overview-elements'>
                        <h4>Total Waves</h4>
                        <h4>{totalWaves}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='sectiondashboard2'>
            <div>
                <h1>Manage List</h1>
            </div>
            <div>
                <Link to="/wavelist">
                    <button>Manage Wave List</button>
                </Link>
                <Link to="/wavelist">
                    <button>Manage User Data</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard;