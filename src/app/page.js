import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
      
      <footer style={{
        paddingTop: 'var(--s12)',
        borderTop: '1px solid var(--border)',
        marginTop: 'var(--s20)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--s2)',
        color: 'var(--text-muted)',
        fontSize: '12.5px'
      }}>
        <p>© {new Date().getFullYear()} Aaron Francisco.</p>
      </footer>
    </>
  );
}
