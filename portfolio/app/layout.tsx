import { ThemeProvider } from './context/ThemeContext';
import { ResponsiveProvider } from './context/ResponsiveContext';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Portfolio',
  description: 'Software Engineer Portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ResponsiveProvider>
            {children}
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}