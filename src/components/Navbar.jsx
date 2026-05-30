'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';
import useActiveSection from '../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'education', 'skills', 'experience', 'contact']);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.avatar}>
            <img src="/profile.png" alt="Aaron Francisco" className={styles.avatarImg} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span className={styles.avatarFallback} style={{ display: 'none' }}>AF</span>
          </div>
          <span className={styles.name}>Aaron Francisco</span>
        </div>
        
        <button 
          className={styles.hamburger} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className={`${styles.line} ${isOpen ? styles.open : ''}`} />
          <div className={`${styles.line} ${isOpen ? styles.open : ''}`} />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {links.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={styles.pip} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
