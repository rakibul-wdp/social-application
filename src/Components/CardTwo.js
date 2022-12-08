import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from 'react';
import avatar2 from "../assets/images/avatar2.png";
import card2 from "../assets/images/card2.png";
import "../css/Card.css";
import "../css/Common.css";

const CardTwo = () => {
  return (
    <div className="card">
            <img src={card2} alt="card1" />
            <p className="article-text">
              <span className="article-emoji">&#128300; </span>
              <span className="article-text-inner">Education</span>
            </p>
            <div className="card-title">
              <p>
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </p>
              <MoreHorizIcon />
            </div>
            <div className="card-content">
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="card-extras"></div>
            <div className="card-footer">
              <div className="footer-info-sub1">
                <img src={avatar2} alt="avatar" className="image-avatar" />
                <p>
                  Sarah West <br />
                  <span className="view-text-mobile">1.4k Views</span>
                </p>
              </div>
              <div className="footer-info-sub2">
                <div className="view-icon">
                  <VisibilityIcon />{" "}
                  <span className="view-text">1.4k Views</span>
                </div>
                <div className="share">
                  <ShareIcon /> <span className="share-text-mobile">Share</span>
                </div>
              </div>
            </div>
          </div>
  );
};

export default CardTwo;