import Navbar from '@/lib/components/organisms/Navbar';
import HamburgerMenu from '@/lib/components/organisms/HamburgerMenu';
import Footer from '@/lib/components/organisms/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={`grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased`}>
        <Navbar />
        <HamburgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
