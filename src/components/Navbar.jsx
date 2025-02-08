import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../css/Navbar.css";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="header-input">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search for other favorite groups in ATG"
          />
        </div>
        <p className="header-left">
          <span onClick={() => setIsOpen(true)}>Create Account</span>{" "}
          <span className="header-left-blue">It's Free!</span>
          <ArrowDropDownIcon />
        </p>
      </header>
      {isOpen && <SignupModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
