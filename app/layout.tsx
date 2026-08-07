import { ThemeProvider } from "./context/ThemeContext";
import { ResponsiveProvider } from "./context/ResponsiveContext";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import MainContentWrapper from "./components/MainContentWrapper";
import { darkTheme } from "./theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const DEFAULT_TITLE = "James Wanjiku - AI/ML Engineer";
const DEFAULT_DESCRIPTION =
  "James Wanjiku builds and ships AI systems that run in production: voice agents, computer vision, and LLM pipelines. AI/ML Engineer and Team Lead at AAI Labs.";

export const metadata = {
  metadataBase: new URL("https://garnet-owl.github.io"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | James Wanjiku",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "AI/ML Engineer",
    "Machine Learning",
    "Voice AI",
    "LLM",
    "Computer Vision",
    "Python",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "James Wanjiku" }],
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "https://garnet-owl.github.io/",
    siteName: "James Wanjiku Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: darkTheme.backgroundMain,
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleAnalytics gaId="G-VVW80YL13K" />
      <body className={inter.className}>
        <ThemeProvider>
          <ResponsiveProvider>
            <Box
              component="a"
              href="#main-content"
              sx={{
                position: "absolute",
                left: 8,
                top: -48,
                zIndex: 2000,
                px: 2,
                py: 1,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 1,
                transition: "top 0.15s ease",
                "&:focus": { top: 8 },
              }}
            >
              Skip to main content
            </Box>
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
