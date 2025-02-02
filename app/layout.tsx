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
      <head></head>
      <GoogleAnalytics gaId="G-VVW80YL13K" />
      <body
        className={inter.className}
        style={{ margin: 0, overflowY: "auto" }}
      >
        <ThemeProvider>
          <ResponsiveProvider>
            <Box
              component="div"
              sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                overflowY: "auto",
                position: "relative",
              }}
            >
              <Header />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  pt: { xs: 8, sm: 9 }, // Increased padding-top for header space
                  px: { xs: 2, sm: 3, md: 4 }, // Responsive horizontal padding
                  pb: { xs: 4, sm: 5 }, // Bottom padding
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
