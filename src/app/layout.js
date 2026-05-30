import { Syne, Figtree } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Aaron Francisco — Portfolio',
  description: 'BS Information Technology student at STI College Global City. Responsible, detail-oriented, and looking forward to my first work experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        <Navbar />
        <main style={{ 
          width: '100%',
          overflowX: 'hidden'
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}
