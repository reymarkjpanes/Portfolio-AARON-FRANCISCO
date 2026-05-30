'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Small delay to trigger CSS transition on mount
    const timer = setTimeout(() => setIsMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.glow} />
      
      <div className={`${styles.container} ${isMounted ? styles.mounted : ''}`}>
        <div className={styles.statusBadge} style={{ transitionDelay: '0s' }}>
          <span className={styles.pulseDot} />
          Open to opportunities
        </div>

        <div className={styles.profilePicWrapper} style={{ transitionDelay: '0.05s' }}>
          <img src="/profile.png" alt="Aaron Francisco" className={styles.profilePic} />
        </div>
        
        <p className={styles.greeting} style={{ transitionDelay: '0.1s' }}>
          Hello, I'm
        </p>
        
        <h1 className={styles.name} style={{ transitionDelay: '0.2s' }}>
          Aaron<br />Francisco
        </h1>
        
        <p className={styles.bio} style={{ transitionDelay: '0.3s' }}>
          Undergrad student. I consider myself a responsible and orderly person. I am looking forward to my first work experience.
        </p>
        
        <div className={styles.ctaRow} style={{ transitionDelay: '0.4s' }}>
          <a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>View Resume</a>
        </div>
      </div>
    </section>
  );
}
