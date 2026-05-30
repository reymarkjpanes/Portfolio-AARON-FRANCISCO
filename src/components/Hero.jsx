'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.glow} />
      
      <div className={`${styles.container} ${isMounted ? styles.mounted : ''}`}>
        
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.statusBadge} style={{ transitionDelay: '0.1s' }}>
              <span className={styles.pulseDot} />
              Open to opportunities
            </div>
            
            <p className={styles.greeting} style={{ transitionDelay: '0.2s' }}>
              Hello, I'm
            </p>
            
            <h1 className={styles.name}>
              <span className={styles.nameFirst} style={{ transitionDelay: '0.3s' }}>AARON</span>
              <span className={styles.nameLast} style={{ transitionDelay: '0.4s' }}>FRANCISCO</span>
            </h1>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.bioCard} style={{ transitionDelay: '0.5s' }}>
              <p className={styles.bio}>
                Undergrad student. I consider myself a responsible and orderly person. I am looking forward to my first work experience.
              </p>
              <div className={styles.ctaRow}>
                <MagneticButton>
                  <a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
                </MagneticButton>
                <MagneticButton>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>View Resume</a>
                </MagneticButton>
              </div>
            </div>

            <div className={styles.visualContent} style={{ transitionDelay: '0.6s' }}>
              <div className={styles.profilePicWrapper}>
                <img src="/profile.png" alt="Aaron Francisco" className={styles.profilePic} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator} style={{ opacity: isMounted ? 1 : 0 }}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
