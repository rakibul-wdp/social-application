import EventIcon from "@mui/icons-material/Event";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState } from 'react';
import avatar3 from "../assets/images/avatar3.png";
import card3 from "../assets/images/card3.png";
import "../css/Card.css";
import "../css/Common.css";

const MeetupCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="card" style={{position: showDetails && "relative"}}>
            <img src={card3} alt="card1" />
            <p className="article-text">
              <span className="article-emoji">&#128467; </span>{" "}
              <span className="article-text-inner">Meetup</span>
            </p>
            <div className="card-title">
              <p>Finance & Investment Elite Social Mixer @Lujiazui</p>
              <MoreHorizIcon
                className={showDetails && "active-more-icon"}
                onClick={() => setShowDetails(!showDetails)}
              />
            </div>
            {showDetails && (
              <div className="card-info">
                <p>Edit</p>
                <p>Report</p>
                <p>Option 3</p>
              </div>
            )}
            <div className="card-extras">
              <div className="section1">
                <div className="section1-subsection">
                  <EventIcon />{" "}
                  <span className="section1-subsection-text">
                    Fri, 12 Oct, 2018
                  </span>
                </div>
                <div className="section1-subsection">
                  <LocationOnOutlinedIcon />
                  <span className="section1-subsection-text">
                    Ahmedabad, India
                  </span>
                </div>
                <div></div>
              </div>
              <div className="section2">
                <p className="section2-text">Visit Website</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="footer-info-sub1">
                <img src={avatar3} alt="avatar" className="image-avatar" />
                <p>
                  Ronal Jones <br />
                  <span className="view-text-mobile">800 Views</span>
                </p>
              </div>
              <div className="footer-info-sub2">
                <div className="view-icon">
                  <VisibilityIcon />{" "}
                  <span className="view-text">800 Views</span>
                </div>
                <div className="share">
                  <ShareIcon /> <span className="share-text-mobile">Share</span>
                </div>
              </div>
            </div>
          </div>
  );
};

export default MeetupCard;