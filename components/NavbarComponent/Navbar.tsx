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
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          MyWebsite
        </Link>
        
        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link href="/" style={{textDecoration:'none', color:'white'}}>Главная</Link>
          <Link href="/materials" style={{textDecoration:'none', color:'white'}}>Материалы</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link href="/" style={{textDecoration:'none', color:'white'}} onClick={() => setMenuOpen(false)}>Главная</Link>
          <Link href="/Materials" style={{textDecoration:'none', color:'white'}} onClick={() => setMenuOpen(false)}>Материалы</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
