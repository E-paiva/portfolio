import React, { useState } from 'react';
import styles from '@/styles/homePage.module.css'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (<div className={`${styles[menuOpen ? 'overlay' : '']}`}>
    <nav className={`${styles[menuOpen ? 'hamburgerMenuOpen' : 'hamburgerMenu']}`}>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
      {menuOpen ?<img src="./icons/close_icon.svg" alt="" height={50}/>:<img src="./icons/logo_menu.svg" alt="" />}
      </button>
      <div className={styles.menuContainer}>
       
      {menuOpen && (
        <div className={`${styles[menuOpen ? 'classOpen' : 'classClose']}`}>
          <ul className={styles.navLinks}>
            <li><a href="#home" className={styles.link} onClick={closeMenu}>Home</a></li>
            <li> <a href="#about_me" className={styles.link} onClick={closeMenu}>About me</a></li>
            <li><a href="#projects" className={styles.link} onClick={closeMenu}>Projects</a></li>
            <li> <a href="#contacts" className={styles.link} onClick={closeMenu}>Contacts</a></li>
            
          </ul>
        </div>
      )}</div>
    </nav>
  </div>);
};

export default Menu;