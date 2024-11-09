'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { useLayout } from './LayoutContext';
import styles from './page.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { setShowLayout } = useLayout();

  const startFadeOut = useCallback(() => {
    if (document.querySelector(`.${styles.header}`)) { // null 체크 추가
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setShowLayout(true);
      }, 800);
    }
  }, [setIsVisible, setIsAnimating, setShowLayout]);

  useEffect(() => {
    const timer = setTimeout(startFadeOut, 3000);
    return () => {
      clearTimeout(timer);
      setIsAnimating(false); // 클린업 시 상태 초기화
    };
  }, [startFadeOut]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) {
    return (
      <div className={styles.imageContainer}>
        <Image
          src={isMobile ? "/p2.jpg" : "/p1.png"}
          alt="Main Image"
          fill
          style={{ objectFit: isMobile ? 'contain' : 'cover' }}
          priority
        />
      </div>
    );
  }

  return (
    <div className={styles.container} onClick={startFadeOut}>
      <div className={`${styles.header} ${isAnimating ? styles['fade-out'] : ''}`}>
        <span className={styles.univ3}>univ3</span>
        <span className={styles.yiel}>YIEL</span>
      </div>
    </div>
  );
}