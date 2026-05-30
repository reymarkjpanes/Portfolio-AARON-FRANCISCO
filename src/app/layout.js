import { Syne, Figtree } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import SmoothScroll from '../components/SmoothScroll';

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
  openGraph: {
    title: 'Aaron Francisco — Portfolio',
    description: 'BS Information Technology student at STI College Global City. Responsible, detail-oriented, and looking forward to my first work experience.',
    url: 'https://aaronfrancisco.dev', // Replace with actual domain when deployed
    siteName: 'Aaron Francisco Portfolio',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g5B32o4lWp8Q4yE7gR7Q5rQ5rQ5rQ5.png', // Fallback to profile image for OG
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main style={{ 
            width: '100%'
          }}>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
