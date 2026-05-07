import './globals.css';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';
import { Blinker, Inria_Sans, Jaldi } from 'next/font/google';

const blinker = Blinker({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-blinker',
});

const inriaSans = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inria-sans',
});

const jaldi = Jaldi({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jaldi',
});

export const metadata = {
  title: 'G.K Select',
  description: 'G.K Select - Fashion Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${blinker.variable} ${inriaSans.variable} ${jaldi.variable}`}>
        <Navbar />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
