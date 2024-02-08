import "./Friend.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import sort from '../../assets/sort.png';
import rotatedSort from '../../assets/rotated-sort.png';
import { toast } from "react-toastify";
import searchIcon from '../../assets/search.png';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import { FaArrowLeftLong, FaLeftLong } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";

function Friends() {
    const [friendList, setFriendList] = useState([]);
    const [searchFriend, setSearchFriend] = useState([]);
    const [sortIcon, setSortIcon] = useState(sort);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const fetchFriends = async () => {
        try {
            let response = await axios.get(
                `http://127.0.0.5:3000/user/friends`,
                {
                    headers: {
                        Authorization: `Bearer ${ token}
                        )}`,
                    },
                }
            );
            if (response && response.data.status) {
                setFriendList(response.data.data);
                setSearchFriend(response.data.data);
            }
        } catch (err) {
            if (err.response.status === 404) {
                setFriendList([]);
                setSearchFriend([]);
            } else {
                toast.error(err.response.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 300,
                });
            }
        }
    };

    // useEffect(() => {
    //     fetchFriends();
    // }, []);

    const handleFriendSort = () => {
        setSortIcon(
            sortIcon === sort ? rotatedSort : sort
        );
        const reversedFriendArray = [...searchFriend].reverse();
        setSearchFriend(reversedFriendArray);
    };

    const handleFriendSearch = (event) => {
        const filteredFriends = friendList.filter(
            (item) =>
                item.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) ||
                item.email
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
        );
        setSearchFriend(filteredFriends);
    };

    return (
            <div className="grid-container">
                <Sidebar/>
                <Header/>
            <div id="friend-dashboard">
                <div className="user-wrapper">
                    <div id="friends-header">
          <FaArrowLeftLong />
                        <h2>Friends</h2>
                    </div>
                    <div id="friends-container-main">
                        <div id="search-friend-container">
                            <div id="search-friend">
                                <img
                                    id="search-icon"
                                    src={searchIcon}
                                    alt="Search"
                                />
                                <input
                                    id="input-search"
                                    type="text"
                                    placeholder="Search"
                                    onChange={handleFriendSearch}
                                />
                            </div>
                            <img
                                id="sort-icon"
                                src={sortIcon}
                                alt="Sort"
                                onClick={handleFriendSort}
                            />
                            <button
                                type="submit"
                                id="update-button"
                                onClick={() =>
                                    navigate("/user/10/friends/invite")
                                }
                            >
                                Invite Friends
                            </button>
                        </div>
                        <div id="parent-user">
                            {searchFriend.map((item, key) => (
                                <div
                                    key={key}
                                    id="invited-user-container"
                                    style={{ cursor: "default" }}
                                >
                                    <img
                                        src={
                                            item.icon ? item.icon : "/user.png"
                                        }
                                        alt="Icon"
                                    />
                                    <div id="invited-user-detail">
                                        <p id="user-name">{item.name}</p>
                                        <p id="user-email">{item.email}</p>
                                    </div>
                                    <div
                                        id="status"
                                        style={{
                                            background: item.isAccepted
                                                ? "#49A15C"
                                                : "#b18d4b",
                                        }}
                                    >
                                        <p>
                                            {item.isAccepted
                                                ? "Accepted"
                                                : "Pending"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {friendList.length === 0 ? (
                                <h1 id="no-friends">No friends yet!</h1>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Friends;
