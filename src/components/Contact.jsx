'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';
import SectionTitle from './SectionTitle';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" ref={ref}>
      <SectionTitle label="Contact" />
      
      <div className={styles.grid}>
        <a href="mailto:aaronzach2213@gmail.com" className={styles.card} data-animate data-delay="1">
          <div className={styles.iconWrap}>
            <Mail size={20} strokeWidth={1.5} />
          </div>
          <h4 className={styles.label}>Email</h4>
          <p className={styles.value}>aaronzach2213@gmail.com</p>
        </a>
        
        <div className={styles.card} data-animate data-delay="2">
          <div className={styles.iconWrap}>
            <Phone size={20} strokeWidth={1.5} />
          </div>
          <h4 className={styles.label}>Phone</h4>
          <p className={styles.value}>0906 099 2679</p>
        </div>

        <div className={styles.card} data-animate data-delay="3">
          <div className={styles.iconWrap}>
            <MapPin size={20} strokeWidth={1.5} />
          </div>
          <h4 className={styles.label}>Location</h4>
          <p className={styles.value}>
            103 Lauan Building, Ivorywoods Acacia Estates, Bambang, Taguig, Manila, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}
