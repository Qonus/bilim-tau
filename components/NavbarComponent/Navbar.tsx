'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.navbar__head}>
        <Image
          className={styles.navbar__header__logo}
          src="/Users/gulmiraamangeldiyeva/Desktop/bilim-tau/public/favicon.ico"
          width={50}
          height={50}
          alt="logo"
        />
        <Link href="/" className={styles.logo}>
          Placeholder
        </Link>
        </div>
        
        
        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link href="/" style={{textDecoration:'none', color:'white'}}>Главная</Link>
          <Link href="/materials" style={{textDecoration:'none',color:'white'}}><p>Материалы</p></Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link href="/" style={{textDecoration:'none',color:'white'}} onClick={() => setMenuOpen(false)}><p>Главная</p></Link>
          <Link href="/materials" style={{textDecoration:'none',color:'white'}} onClick={() => setMenuOpen(false)}><p>Материалы</p></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;