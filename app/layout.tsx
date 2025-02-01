import { ThemeProvider } from './context/ThemeContext';
import { ResponsiveProvider } from './context/ResponsiveContext';
import { Inter } from 'next/font/google';
import Analytics from './components/Analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'James Wanjiku - Software Engineer Portfolio',
  description: 'Portfolio of James Wanjiku, a Junior Software Engineer passionate about crafting robust and scalable solutions with modern technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <ThemeProvider>
          <ResponsiveProvider>
            {children}
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}