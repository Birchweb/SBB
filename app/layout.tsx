import './globals.css';
import Navbar from '../components/Navbar'; // Zorg dat het pad klopt
import Footer from '../components/Footer'; // Zorg dat het pad klopt

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}