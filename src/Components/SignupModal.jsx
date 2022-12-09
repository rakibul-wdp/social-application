import CancelIcon from "@mui/icons-material/Cancel";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import SignupIcon from "../assets/images/icn.png";
import "../css/LoginModal.css";

const SignupModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <CancelIcon style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <div className="signup-heading-container">
              <h5 className="signup-header">Create Account</h5>
              <span>
                Already have an account?{" "}
                <span className="signup-to-signin">Sign In</span>
              </span>
            </div>
            <div className="form-container">
              <div className="main-form-container">
                <form className="signup-form-container">
                  <div className="signup-input-collapse">
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="signup-input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    className="signup-input"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                  <input
                    className="signup-input"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                  <input
                    className="signup-input"
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                  />
                  <input
                    className="signup-input create-account-button"
                    type="button"
                    value="Create Account"
                  />
                </form>
                <button className="signup-social">
                  <FacebookIcon className="facebook-icon" />
                  <span>Sign up with Facebook</span>
                </button>
                <button className="signup-social">
                  <GoogleIcon className="google-icon" />
                  <span>Sign up with Google</span>
                </button>
              </div>
              <div className="signup-image">
                <img src={SignupIcon} alt="" />
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
