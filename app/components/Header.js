// app/components/Header.js
'use client';
import Link from 'next/link';
import { useLayout } from '../LayoutContext';
import { useState } from 'react';
import styles from '../layout.module.css';

export function Header() {
  const { showLayout, resetLayout } = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    resetLayout();
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // 스크롤 없애기
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto'; // 스크롤 활성화
  };

  return showLayout ? (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>YIEL</div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            <li>
              <Link href="/" onClick={(e) => { handleHomeClick(e); closeMenu(); }} style={{ textDecoration: 'none', color: 'inherit' }}>
                홈
              </Link>
            </li>
            <li>
              <Link href="/info" style={{ textDecoration: 'none', color: 'inherit' }} onClick={(e) => { closeMenu(); anotherFunction(e); }}>
                소개
              </Link>
            </li>
            <li>
              <Link href="/item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
                굿즈
              </Link>
            </li>
            <li>
              <Link href="/memories" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
                추억
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              <li>
                <Link href="/" onClick={(e) => { handleHomeClick(e); closeMenu(); }} style={{ textDecoration: 'none', color: 'inherit' }}>
                  홈
                </Link>
              </li>
              <li>
                <Link href="/info" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
                  소개
                </Link>
              </li>
              <li>
                <Link href="/item" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
                  굿즈
                </Link>
              </li>
              <li>
                <Link href="/memories" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
                  추억
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  ) : null;
}