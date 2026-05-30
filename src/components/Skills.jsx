'use client';
import styles from './Skills.module.css';
import SectionTitle from './SectionTitle';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Skills() {
  const ref = useScrollAnimation();

  const computerSkills = ['Text Processor', 'Spreadsheet', 'Slide Presentation'];
  const languages = ['HTML', 'CSS', 'JavaScript', 'Java'];

  return (
    <section id="skills" ref={ref}>
      <SectionTitle label="Skills" />
      
      <div className={styles.categories}>
        <div className={styles.category} data-animate data-delay="1">
          <h4 className={styles.catTitle}>Computer Skills</h4>
          <div className={styles.badgeGrid}>
            {computerSkills.map(skill => (
              <span key={skill} className={styles.badge}>{skill}</span>
            ))}
          </div>
        </div>
        
        <div className={styles.category} data-animate data-delay="2">
          <h4 className={styles.catTitle}>Programming Languages</h4>
          <div className={styles.badgeGrid}>
            {languages.map(lang => (
              <span key={lang} className={styles.badge}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
