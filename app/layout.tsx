import { ThemeProvider } from "./context/ThemeContext";
import { ResponsiveProvider } from "./context/ResponsiveContext";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import MainContentWrapper from "./components/MainContentWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "James Wanjiku - Software Engineer Portfolio",
  description:
    "Portfolio of James Wanjiku, a Junior Software Engineer passionate about crafting robust and scalable solutions with modern technologies.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "James Wanjiku" }],
  openGraph: {
    title: "James Wanjiku - Software Engineer Portfolio",
    description:
      "Portfolio of James Wanjiku, a Junior Software Engineer passionate about crafting robust and scalable solutions",
    url: "https://garnet-owl.github.io/",
    siteName: "James Wanjiku Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="WxFqIjvlT8IrfaIGo5sdwK3hZcdrXMjcLrJPEnyivAc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0817" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleAnalytics gaId="G-VVW80YL13K" />
      <body className={inter.className}>
        <ThemeProvider>
          <ResponsiveProvider>
            <Box
              component="div"
              sx={{
                width: "100%",
                minHeight: "100dvh",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                overflowY: "auto",
                position: "relative",
                WebkitOverflowScrolling: "touch",
                bgcolor: "background.default",
              }}
            >
              <Header />
              <MainContentWrapper>{children}</MainContentWrapper>
            </Box>
          </ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
