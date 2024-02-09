import Ellipse from "../../images/Ellipse.png";
import "../../css/waveinfo.css";
import rectangle from "../../images/Rectangle.png";
import { IoCloseCircle } from "react-icons/io5";

const WaveInfo = (props) => {

  return (
    <div className="waveinfo-section">
      <div className="container">
        <div className="wave-head">
          <div>
            <img src={Ellipse} alt="error" className="userphoto" />
          </div>
          <div className="userdetail">
            <p className="newphoto id">Carmen Smith</p>
            <p className="photoname id">@carmen_G12</p>
          </div>
          <div>
            <button className="close" onClick={() => props.closeWaveInfo()}>
              <IoCloseCircle />
            </button>
          </div>
        </div>
        <div className="horizontal">
          <div className="about-wave">
            <div>
              <h2 className="message-heading">Message</h2>
              <p className="msg-value">Being good, being careful</p>
            </div>
            <button className="comments">
              <span className="update-btn-p">Add Comments</span>
            </button>
          </div>
          <div className="vl-img">
            <div className="vl-wave"></div>
            <img src={rectangle} alt="error" className="modalphoto" />
          </div>
        </div>
        <div className="comment">
          <div class="quote-container">
            <div class="user-quote">
              <strong>Jasmine:</strong> &nbsp;A healthy outside starts from the
              inside.
            </div>
            <div class="links">
              <button class="edit actions">Edit</button>
              <button href="#" class="delete actions">
                Delete
              </button>
            </div>
          </div>

          <div class="quote-container">
            <div class="user-quote">
              <strong>John:</strong> &nbsp;A healthy outside starts from the
              inside.
            </div>
            <div class="links">
              <button class="edit actions">Edit</button>
              <button class="delete actions">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WaveInfo;
