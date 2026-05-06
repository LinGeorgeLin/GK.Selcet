import './globals.css';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';

export const metadata = {
  title: 'G.K Select',
  description: 'G.K Select - Fashion Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <Navbar />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
