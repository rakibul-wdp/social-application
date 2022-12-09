import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import "../css/Navbar.css";
import LoginModal from "./LoginModal";

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
          <button onClick={() => setIsOpen(true)}>Create Account</button> <span className="header-left-blue">It's Free!</span>
          <ArrowDropDownIcon />
        </p>
      </header>
      {isOpen && <LoginModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;