import { Container } from "@mui/material";
import { type ReactNode } from "react";
import Header from "@/components/main/Header";

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
