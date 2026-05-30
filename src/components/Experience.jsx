'use client';
import styles from './Experience.module.css';
import SectionTitle from './SectionTitle';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" ref={ref}>
      <SectionTitle label="Experience" />
      
      <div className={styles.card} data-animate data-delay="1">
        <div className={styles.iconWrap}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.title}>Undergraduate Student</h3>
          <p className={styles.subtitle}>Undergrad / Inexperienced</p>
          <p className={styles.description}>
            No formal work experience yet, determined to learn fast and contribute from day one.
          </p>
          <span className={styles.tag}>Entry Level · Open to Work</span>
        </div>
      </div>
    </section>
  );
}
