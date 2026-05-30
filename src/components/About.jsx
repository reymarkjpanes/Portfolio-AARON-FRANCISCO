'use client';
import styles from './About.module.css';
import SectionTitle from './SectionTitle';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref}>
      <SectionTitle label="About" />
      
      <div className={styles.content}>
        <p data-animate data-delay="1">
          I am an Information Technology student focused on software development and continuous learning. 
          I consider myself a responsible and orderly person, always looking to improve my technical skills through hands-on practice.
        </p>
        <p data-animate data-delay="2">
          Currently pursuing my degree at STI College Global City, I am eager to apply my academic foundation to real-world problems and looking forward to my first professional work experience.
        </p>
        
        <div className={styles.stats} data-animate data-delay="3">
          <div className={styles.statItem}>
            <span className={styles.statValue}>2021</span>
            <span className={styles.statLabel}>Started studying</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>2027</span>
            <span className={styles.statLabel}>Expected graduation</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>IT</span>
            <span className={styles.statLabel}>Specialization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
