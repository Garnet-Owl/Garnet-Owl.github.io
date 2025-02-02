import { ThemeProvider } from "./context/ThemeContext";
import { ResponsiveProvider } from "./context/ResponsiveContext";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from './components/Header';
import Box from '@mui/material/Box';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "James Wanjiku - Software Engineer Portfolio",
  description:
    "Portfolio of James Wanjiku, a Junior Software Engineer passionate about crafting robust and scalable solutions with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <GoogleAnalytics gaId="G-VVW80YL13K" />
      <body className={inter.className} style={{ margin: 0 }}>
        <ThemeProvider>
          <ResponsiveProvider>
            <Box 
              component="main" 
              sx={{ 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Header />
              <Box 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  pt: { xs: 7, sm: 8 }, // Responsive padding for different screen sizes
                  px: 2 // Add some horizontal padding
                }}
              >
                {children}
              </Box>
            </Box>
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}