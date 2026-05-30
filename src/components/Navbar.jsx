'use client';
import styles from './Navbar.module.css';
import useActiveSection from '../hooks/useActiveSection';

export default function Navbar() {
  const activeSection = useActiveSection(['hero', 'about', 'education', 'skills', 'experience', 'contact']);

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Edu' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className={styles.dockWrapper}>
      <nav className={styles.dock}>
        <ul className={styles.navList}>
          {links.map(link => (
            <li key={link.id} className={styles.navItem}>
              <a 
                href={`#${link.id}`} 
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              >
                {activeSection === link.id && <span className={styles.activeBackground} />}
                <span className={styles.linkLabel}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
