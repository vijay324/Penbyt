import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import FloatingButton from "./components/FloatingButton";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Penbyt",
  description:
    "Welcome to Penbyt your gateway to comprehensive study materials and resources for interns. Explore our user-friendly platform, curated content, and tools designed to enhance your learning experience.",
  keywords:
    "home page, penbyte, Penbyt, study materials, intern resources, educational platform, learning resources, study guides, internship resources",
};

const Lato = localFont({
  src: "./fonts/lato.ttf",
  variable: "--font-Lato",
  weight: "100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <ClerkProvider>
            <NavigationBar />
            <main
              className={`${Lato.variable} antialiased flex-grow font-Lato`}
            >
              {children}
            </main>
            <Footer />
          </ClerkProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
