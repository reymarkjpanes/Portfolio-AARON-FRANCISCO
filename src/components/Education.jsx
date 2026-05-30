'use client';
import styles from './Education.module.css';
import SectionTitle from './SectionTitle';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" ref={ref}>
      <SectionTitle label="Education" />
      
      <div className={styles.card} data-animate data-delay="1">
        <div className={styles.header}>
          <h3 className={styles.school}>STI College Global City</h3>
          <span className={styles.year}>2021 — 2027</span>
        </div>
        
        <p className={styles.degree}>Bachelor of Science in Information Technology</p>
        
        <div className={styles.tags}>
          <span className={styles.tag}>Status: In Progress</span>
          <span className={styles.tag}>Languages: HTML, CSS, JavaScript, Java</span>
        </div>
      </div>
    </section>
  );
}
