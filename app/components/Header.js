// app/components/Header.js
'use client';
import Link from 'next/link';
import { useLayout } from '../LayoutContext';
import styles from '../layout.module.css';

export function Header() {
  const { showLayout, resetLayout } = useLayout();
  
  // 홈 링크 클릭 핸들러
  const handleHomeClick = (e) => {
    e.preventDefault();
    resetLayout();
    window.location.href = '/';
  };

  return showLayout ? (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>YIEL</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/" onClick={handleHomeClick} style={{ textDecoration: 'none', color: 'inherit' }}>
                홈
              </Link>
            </li>
            <li>
              <Link href="/info" style={{ textDecoration: 'none', color: 'inherit' }}>
                소개
              </Link>
            </li>
            <li>
              <Link href="/item" style={{ textDecoration: 'none', color: 'inherit' }}>
                굿즈
              </Link>
            </li>
            <li>
              <Link href="/memories" style={{ textDecoration: 'none', color: 'inherit' }}>
                추억
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  ) : null;
}