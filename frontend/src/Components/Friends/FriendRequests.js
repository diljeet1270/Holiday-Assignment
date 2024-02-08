import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FriendRequests() {
    const [requests, setRequests] = useState([]);
    const { id } = useParams();

    const fetchRequests = async () => {
        try {
            let response = await axios.get(
                `http://127.0.0.5:3000/user/${id}/friend-requests`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );
            console.log("REs : ", response);
            if (response && response.data.status) {
                setRequests(response.data.data);
            }
        } catch (err) {
            console.log("Error : ", err);
            toast.error(err.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 300,
            });
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    return (
        <div id="friends-container-main">
            <p id="friend-label">Requests</p>
            <div id="parent-user">
                <div id="invited-user-container">
                    <img src="/user1.png" />
                    <div id="invited-user-detail">
                        <p id="user-name">John Doe</p>
                        <p id="user-email">johndeo@example.com</p>
                    </div>
                    <div id="status">
                        <p>Pending</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendRequests;
