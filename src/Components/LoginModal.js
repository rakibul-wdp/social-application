import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import "../css/LoginModal.css";

const LoginModal = ({setIsOpen}) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <CancelIcon style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;