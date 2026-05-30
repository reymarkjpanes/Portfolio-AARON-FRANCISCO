import styles from './SectionTitle.module.css';

export default function SectionTitle({ label }) {
  return (
    <div className={styles.wrap} data-animate>
      <span className={styles.label}>{label}</span>
      <div className={styles.rule} />
    </div>
  );
}
