import type { Metadata } from "next";
<<<<<<< HEAD
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TTV",
  description: "Where Films and Music Meet the Future",
};

=======
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

>>>>>>> a7e3686 (Initial commit for Virtual Garden project)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
=======
      <head>
        {/* This script will run before the page fully loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(${setInitialTheme.toString()})();`,
          }}
        />
      </head>
      <ThemeProvider><body className={inter.className}>{children}</body></ThemeProvider>
>>>>>>> a7e3686 (Initial commit for Virtual Garden project)
    </html>
  );
}
