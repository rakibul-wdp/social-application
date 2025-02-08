import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GroupsIcon from "@mui/icons-material/Groups";
import React from "react";
import "../css/Card.css";
import "../css/Common.css";

const ContentHeader = () => {
  return (
    <div className="body">
      <div className="body-sub1">
        <a href="/" className="active">
          All Post(32)
        </a>
        <a href="/">Article</a>
        <a href="/">Event</a>
        <a href="/">Education</a>
        <a href="/">Job</a>
      </div>
      <div className="body-sub1-mobile">
        <a href="/" className="active">
          Posts(168)
        </a>
      </div>
      <div className="body-sub2">
        <button className="button-post">
          <span className="button-text">
            Write a Post <ArrowDropDownIcon />
          </span>
        </button>
        <button className="button-join">
          <span className="button-text">
            <GroupsIcon className="group-icon" /> Join group
          </span>
        </button>
      </div>
      <div className="body-sub2-mobile">
        <button className="button-post">
          <span className="button-text">
            Filter:All <ArrowDropDownIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;
