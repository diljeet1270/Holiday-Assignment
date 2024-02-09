import Ellipse from "../../images/Ellipse.png";
import "../../css/waveinfo.css";
import "../../css/friendinfo.css";
import { IoCloseCircle } from "react-icons/io5";


const FriendInfo = (props) => {
  return (
    <div className="frndinfo-section">
      <div className="container">
        <div className="frnd-head ">
          <div>
            <img src={Ellipse} alt="error" className="frndphoto" />
          </div>
          <div className="frnddetail">
            <p className="newphoto id">Carmen Smith</p>
            <p className="photoname id">@carmen_G12</p>
          </div>
          <button className="cross" onClick={() => props.closeFriendInfo()}>
            <IoCloseCircle />
          </button>
        </div>
        <p className="basic">Basic Details</p>
      </div>
      <div>
        <div class="user-info">
          <div>
            <p>
              <strong>Name :</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; john
            </p>
            <p>
              <strong>Email ID :</strong>&nbsp;&nbsp;&nbsp;john@gmail.com
            </p>
            <p>
              <strong>Mobile No. :</strong>&nbsp;&nbsp;&nbsp; +1245678901
            </p>
            <p>
              <strong>Gender :</strong>&nbsp;&nbsp;&nbsp; Male
            </p>
            <p>
              <strong>State :</strong>&nbsp;&nbsp;&nbsp; Punjab
            </p>
          </div>
          <div className="vl-frnd"></div>
          <div>
            <p>
              <strong>DOB :</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 05/25/1990
            </p>
            <p>
              <strong>Social Security :</strong>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 567812
            </p>
            <p>
              <strong>Address :</strong>&nbsp;&nbsp;&nbsp;lorem, gta city, 1234
            </p>
            <p>
              <strong>City :</strong>&nbsp;&nbsp;&nbsp; Florida
            </p>
            <p>
              <strong>Zip Code :</strong>&nbsp;&nbsp;&nbsp;10420
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FriendInfo;
