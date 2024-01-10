// MobileFooter.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faEnvelope, faShoppingCart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import "./MobileFooter.css";

const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <div className="footer-item">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faList} />
        <span>Catalog</span>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Enquiry</span>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Cart</span>
      </div>
      <div className="footer-item">
        <FontAwesomeIcon icon={faEllipsisH} />
        <span>More</span>
      </div>
    </div>
  );
};

export default MobileFooter;
