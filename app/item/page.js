'use client';
import { useEffect } from 'react';
import { useLayout } from '../LayoutContext';
import styles from './page.module.css';

export default function Info() {
  const { setShowLayout } = useLayout();
  
  useEffect(() => {
    setShowLayout(true);
  }, [setShowLayout]);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>제작중</h1>
        <p className={styles.content}>제작중</p>
      </div>
    </div>
  );
}