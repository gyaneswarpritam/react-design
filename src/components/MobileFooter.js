// MobileFooter.js
import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import EmailIcon from '@material-ui/icons/Email';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './MobileFooter.css';

const MobileFooter = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={'mobile-footer'}>
      <div
        className={`${'footer-item'} ${activeItem === 'home' ? 'active' : ''}`}
        onClick={() => handleItemClick('home')}
      >
        <HomeIcon />
        <span>Home</span>
      </div>
      <div
        className={`${'footer-item'} ${activeItem === 'catalog' ? 'active' : ''}`}
        onClick={() => handleItemClick('catalog')}
      >
        <ListIcon />
        <span>Catalog</span>
      </div>
      <div
        className={`${'footer-item'} ${activeItem === 'enquiry' ? 'active' : ''}`}
        onClick={() => handleItemClick('enquiry')}
      >
        <EmailIcon />
        <span>Enquiry</span>
      </div>
      <div
        className={`${'footer-item'} ${activeItem === 'cart' ? 'active' : ''}`}
        onClick={() => handleItemClick('cart')}
      >
        <ShoppingCartIcon />
        <span>Cart</span>
      </div>
      <div
        className={`${'footer-item'} ${activeItem === 'more' ? 'active' : ''}`}
        onClick={() => handleItemClick('more')}
      >
        <MoreHorizIcon />
        <span>More</span>
      </div>
    </div>
  );
};

export default MobileFooter;
