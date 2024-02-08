import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FriendList() {
    return (
        <div id="friends-container-main">
            <p id="friend-label">Friends</p>
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

export default FriendList;
