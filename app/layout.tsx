import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HVAC Design Engineering Resources | Omar Rojas",
  description: "Practical HVAC design tools and engineering references by Omar Rojas.",
  icons: { icon: "/or-logo.png", shortcut: "/or-logo.png", apple: "/or-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
