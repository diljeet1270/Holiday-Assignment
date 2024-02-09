import Navigation from "../common/Navigation";
import Header from "../common/Header";
import "../../css/dashboard.css";
import Ellipse from "../../images/Ellipse.png";
import { useState } from "react";
import WaveInfo from "./WaveInfo";
import FriendInfo from "./FriendInfo";


const Dashboard = () => {
  const [showWaveInfo, setShowWaveInfo] = useState(false);
  const [showFriendInfo, setShowFriendInfo] = useState(false);

  const openWaveInfo = () => {
    setShowWaveInfo(true);
  };

  const closeWaveInfo = () => {
    setShowWaveInfo(false);
  };

  const openFriendInfo = () => {
    setShowFriendInfo(true);
  };

  const closeFriendInfo = () => {
    setShowFriendInfo(false);
  };

  return (
    <div className="seperation">
      <Navigation />
      <div>
        <Header />
        <div className="makewave-section">
          <p className="makewave-heading">Making Waves </p>
          <div className="waves">
            <button onClick={openWaveInfo} className="invisible">
              <div className="makewaveshow-sub">
                <div>
                  <img src={Ellipse} alt="error" className="show-profile" />
                </div>
                <div className="wave-detail">
                  <p className="creater">@carmen_G2</p>
                  <p className="wave">Being good, being Careful</p>
                  <button className="creater">Follow</button>
                </div>
              </div>
            </button>
            {showWaveInfo && <WaveInfo closeWaveInfo={closeWaveInfo} />}

            <div className="vl"></div>
            <div className="makewaveshow-sub">
              <div>
                <img src={Ellipse} alt="error" className="show-profile" />
              </div>
              <div className="wave-detail">
                <p className="dukenile">@dukenile</p>
                <p className="smile">Smiling again...</p>
                <button className="dukenile">Follow</button>
              </div>
            </div>
            <div className="vl"></div>
            <div className="makewaveshow-sub">
              <div>
                <img src={Ellipse} alt="error" className="show-profile" />
              </div>
              <div className="wave-detail">
                <p className="jildeeone">@jildeeone</p>
                <p className="getting">Getting my life back</p>
                <button className="jildeeone">Follow</button>
              </div>
            </div>
          </div>
        </div>

        {/* friends */}
        {showFriendInfo && <FriendInfo closeFriendInfo={closeFriendInfo} />}

        <div className="dasboard-section2">
          <p className="makewave-heading">Friends </p>
          <div>
            <div className="frnd-acpt">
              <button onClick={openFriendInfo} className="invisible">
                <div className="friendshow">
                  <div className="waveshow-sub">
                    <div>
                      <img src={Ellipse} alt="error" className="show-profile" />
                    </div>
                    <div className="wave-detail">
                      <p className="creater-name">Maria De’suza</p>
                      <p className="wave-is">maria@example.com</p>
                    </div>
                  </div>
                  <div className="accept">
                    <p className="status-p">Accepted</p>
                  </div>
                </div>
              </button>
              <div className="friendshow">
                <div className="waveshow-sub">
                  <div>
                    <img src={Ellipse} alt="error" className="show-profile" />
                  </div>
                  <div className="wave-detail">
                    <p className="creater-name">John Deo</p>
                    <p className="wave-is">johndeo@example.com</p>
                  </div>
                </div>
                <div className="accept">
                  <p className="status-p">Accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>Ⓒ 2023 DR. Palig. All rights reserved.</footer>
      </div>
    </div>
  );
};
export default Dashboard;
