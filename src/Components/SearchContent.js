import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from 'react';
import "../css/Card.css";

const SearchContent = () => {
  return (
  <div className="card-left">
    <div className="card-left-title">
      <div className="card-left-text">
        <LocationOnOutlinedIcon />{" "}
        <span className="location-icon-tect">Noida, India</span>
      </div>
      <div>
        <EditIcon />
      </div>
    </div>
    <div className="card-left-info">
      <InfoOutlinedIcon />{" "}
      <span>
        Your location will help us serve better and extend a personalized experience.
      </span>
    </div>
  </div>
  );
};

export default SearchContent;