import { ThemeProvider } from "./context/ThemeContext";
import { ResponsiveProvider } from "./context/ResponsiveContext";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "./components/Header";
import Box from "@mui/material/Box";
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
      <head>
        <meta
          name="google-site-verification"
          content="WxFqIjvlT8IrfaIGo5sdwK3hZcdrXMjcLrJPEnyivAc"
        />
      </head>
      <GoogleAnalytics gaId="G-VVW80YL13K" />
      <body
        className={inter.className}
        style={{
          margin: 0,
          minHeight: "100dvh",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          position: "relative",
        }}
      >
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
              }}
            >
              <Header />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  pt: { xs: 6, sm: 8 }, // Reduced padding-top for mobile
                  px: { xs: 2, sm: 3, md: 4 }, // Responsive horizontal padding
                  pb: { xs: 6, sm: 6 }, // Increased bottom padding for better spacing
                  overflowY: "auto",
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
