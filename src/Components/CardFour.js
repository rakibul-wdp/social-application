import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import React from 'react';
import avatar4 from "../assets/images/avatar4.png";

const CardFour = () => {
  return (
    <div className="card">
            <p className="article-text">
              <span className="article-emoji">&#128188; </span>{" "}
              <span className="article-text-inner">Job</span>
            </p>
            <div className="card-title">
              <p>Software Developer</p>
              <MoreHorizIcon />
            </div>
            <div className="card-extras">
              <div className="section1">
                <div className="section1-subsection">
                  <WorkOutlineIcon />
                  <span className="section1-subsection-text">
                    Innovaccer Analytics Private Ltd.
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
                <p className="section2-text-green">Apply on Timeline</p>
              </div>
            </div>
            <div className="card-footer">
              <div className="footer-info-sub1">
                <img src={avatar4} alt="avatar" className="image-avatar" />
                <p>
                  Joseph Gray <br />
                  <span className="view-text-mobile">1.7k Views</span>
                </p>
              </div>
              <div className="footer-info-sub2">
                <div className="view-icon">
                  <VisibilityIcon />{" "}
                  <span className="view-text">1.7k Views</span>
                </div>
                <div className="share">
                  <ShareIcon /> <span className="share-text-mobile">Share</span>
                </div>
              </div>
            </div>
          </div>
  );
};

export default CardFour;