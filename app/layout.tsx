import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/context/themeContext";
/* import { Head } from "next/document"; */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HerbVed",
  description: "HerbVed For SIH 2024. ",
  icons: {
    icon: '/favicon.ico',
  }
 
};

function setInitialTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This script will run before the page fully loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setInitialTheme.toString()})();`,
          }}
        />
      </head>
      <ThemeProvider><body className={inter.className}>{children}</body></ThemeProvider>
    </html>
  );
}
