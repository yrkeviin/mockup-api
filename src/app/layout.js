import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Mockup App",
  icon: {
    icon: "/favicon.ico",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${font.variable}`}>
        {children}
      </body>
    </html>
  );
}
