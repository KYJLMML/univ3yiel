// app/info/page.js
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
      <div className={styles.scrollContainer}>
        <h1 className={styles.title}>이엘 소개</h1>
        <div className={styles.content}>
          <p>
          <br /><br /><br /><br />이엘은 사랑의교회 대학 3부 소속이며 2023년에 새돌로 들어온 학년입니다.<br /><br /><br /><br />
          </p>
          <hr />
          <p>
          <br /><br /><br /><br />이엘의 뜻은 &apos하나님의 진한 향기&apos입니다.<br />
            대표 말씀은 &apos우리는 구원 받는 자들에게나 망하는 자들에게나 하나님 앞에서 그리스도의 향기니 -고린도후서 2장 15절-&apos입니다.<br /><br /><br /><br />
          </p>
          <hr />
          <p>
          <br /><br /><br /><br />이엘(새돌때)의 엄마, 아빠는 이은서-이리스, 류승규-딜라이트입니다.<br /><br />역대 학년장<br /><br />
            2023.08.20~2024.02.27<br />박시온, 박민형<br /><br />
            2024.02.28~2024.08.16<br />박의해, 김예준<br /><br />
            2024.08.17~<br />선하은, 배은호<br /><br /><br /><br />
          </p>
          <hr />
          <p>
          <br /><br /><br /><br />2학년 2학기~3학년 1학기<br />하엘 행정팀<br />
            뜻은 하나님의 이엘 입니다.<br /><br />
            구성원<br />박희서 간사님, 백성원 팀장님, 김예준, 문세린, 박시온, 배은호, 선하은, 신서영, 이은서, 변정현입니다.<br />
            맡은 역할<br /><br />
            박희서 간사님-간사<br />
            백성원 팀장님-팀장<br />
            김예준-주보, 프린트, 출석 체크<br />
            문세린-출석체크, 재정<br />
            박시온-디자인, 교재 큐티 관리<br />
            배은호-집회실 관리<br />
            선하은-군지체, 행정팀 관리<br />
            신서영-도서대출, 기도제목 관리<br />
            이은서-광고<br />
            변정현-비품 관리<br /><br /><br /><br />
          </p>
          <hr />
          <p>
            제작자: 김예준<br />문의: univ3.yiel@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}