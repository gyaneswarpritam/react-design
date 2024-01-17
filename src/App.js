import logo from './logo.svg';
import './App.css';
import MobileFooter from './components/MobileFooter';
import MobileMenu from './components/MobileMenu';
import { useState } from 'react';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState();

  const handleMoreMenu = (value) => {
    setShowMobileMenu(value);
  }

  return (
    <div >
      <MobileMenu showMobileMenu={showMobileMenu}/>
      <MobileFooter moreMobileFooter={(value) => handleMoreMenu(value)}/>
    </div>
  );
}

export default App;
