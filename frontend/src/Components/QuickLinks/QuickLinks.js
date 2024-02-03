import { Link, useNavigate } from "react-router-dom";
import "./QuickLinks.css";

const QuickLinks = ({ closeModel }) => {
    const navigate = useNavigate();
    return (
        <>
            <div id="options-model-wrapper" onClick={closeModel}></div>
            <div id="options-model">
                <Link className="options-text" to="/profile">
                    My Profile
                </Link>
                <br />
                <Link className="options-text" to="/preferences">
                    Preferences
                </Link>
                <br />
                <Link className="options-text" to="/friends">
                    Friends
                </Link>
                <br />
                <Link className="options-text" to="/createWaves">
                    Create Waves
                </Link>
                <br />
                <Link className="options-text" to="/changepassword">
                    Change Password
                </Link>
                <br />
                <button
                    className="options-text"
                    id="logout-btn"
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }}
                >
                    Log Out
                </button>
            </div>
        </>
    );
}

export default QuickLinks;
