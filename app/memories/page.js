'use client';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        <p className={styles.title}>이엘 추억 <br /> <br /> <br /></p>
        <div className={styles.mediaItem}>
          <video 
            className={styles.video}
            controls
            autoPlay
            muted
            loop
          >
            <source src="/video/v1.mp4" type="video/mp4" />
            브라우저가 동영상을 지원하지 않습니다.
          </video>
          <p className={styles.caption}>
            새돌 공연<br />
            <a href="https://youtu.be/Y6Urr5TAsA4?si=-0F-uwuGc-Nsqb4y" target="_blank" rel="noopener noreferrer">
              https://youtu.be/Y6Urr5TAsA4?si=-0F-uwuGc-Nsqb4y <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </a>
          </p>
        </div>
        <div className={styles.mediaItem}>
          <video 
            className={styles.video}
            controls
            autoPlay
            muted
            loop
          >
            <source src="/video/v2.mp4" type="video/mp4" />
            브라우저가 동영상을 지원하지 않습니다.
          </video>
          <p className={styles.caption}>
            이엘 MT (1)<br />
          </p>
        </div>
      </div>
    </div>
  );
}