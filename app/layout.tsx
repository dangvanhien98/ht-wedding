import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation - Văn Hiền & Thị Thuận",
  description: "Trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&family=Montserrat:wght@300;400&family=Playfair+Display:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}