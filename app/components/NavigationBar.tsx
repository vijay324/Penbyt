"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { NAV_LINKS } from "./Data/data";
import Image from "next/image";
import { useTheme } from "./ThemeContext"; // Adjust the import path as needed
import { motion, AnimatePresence } from "framer-motion";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use the theme context
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const rotationTransition = {
    duration: 0.7, // Slow down the duration for a smoother effect
    ease: "easeInOut", // Ease in and out for a nice smooth transition
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Stagger each item by 0.1 seconds
        duration: 0.3,
      },
    }),
  };

  const headerHeight = 64; // Adjust this value if your header height is different

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-8 pt-2 ${
        isDarkMode ? "bg-zinc-950 text-zinc-200" : "bg-white text-black"
      } bg-opacity-50 backdrop-blur-md z-50`}
      style={{ height: headerHeight }}
    >
      <div className="flex items-center text-lg font-bold">
        <Link href="/">
          <Image
            src={isDarkMode ? "/logo-white.svg" : "/logo.svg"}
            width={110}
            height={50}
            alt="Penbyt-logo"
          />
        </Link>
      </div>
      <nav
        className={`hidden md:flex space-x-4 ${
          isDarkMode ? "text-neutral-300" : "text-neutral-600"
        } font-medium hover:text-black dark:hover:text-zinc-200`}
      >
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <motion.button
          ref={menuButtonRef}
          className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-200"
          }`}
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isMobileMenuOpen ? 360 : 0 }}
          transition={rotationTransition}
        >
          {isMobileMenuOpen ? (
            <Image
              src="/close.svg"
              width={20}
              height={20}
              alt="close"
              className={`${
                isDarkMode
                  ? "dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                  : ""
              }`}
            />
          ) : (
            <Image
              src="/menu.svg"
              width={20}
              height={20}
              alt="menu"
              className={`${
                isDarkMode
                  ? "dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                  : ""
              }`}
            />
          )}
        </motion.button>

        <motion.button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-200"
          }`}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isDarkMode ? 360 : 0 }}
          transition={rotationTransition}
        >
          {isDarkMode ? (
            <Image
              src="/sun.svg"
              width={20}
              height={20}
              alt="light mode"
              className={`${
                isDarkMode
                  ? "dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                  : ""
              }`}
            />
          ) : (
            <Image
              src="/moon.svg"
              width={20}
              height={20}
              alt="dark mode"
              className={`${
                isDarkMode
                  ? "dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                  : ""
              }`}
            />
          )}
        </motion.button>

        <SignedOut>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <SignInButton />
          </motion.div>
        </SignedOut>
        <SignedIn>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <UserButton />
          </motion.div>
        </SignedIn>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col space-y-2 md:hidden absolute left-0 w-full h-screen overflow-y-auto ${
              isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-black"
            } bg-opacity-95 backdrop-blur-md p-4 z-50`}
            style={{ top: headerHeight }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.key}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex justify-center space-x-2 p-4 rounded-lg ${
                    isDarkMode
                      ? "dark:hover:bg-purple-800"
                      : "hover:bg-purple-100"
                  }`}
                >
                  <Image
                    src={link.icon}
                    alt={`${link.label} icon`}
                    width={20}
                    height={20}
                    className={`${
                      isDarkMode
                        ? "dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                        : "hover:text-purple-500"
                    }`}
                  />
                  <span>{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationBar;
