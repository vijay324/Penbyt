"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useTheme } from "../../components/ThemeContext"; // Adjust the path
import Content from "./Content";
import { useState, useEffect } from "react";

// Import the announcements array and Announcement type
import { announcements, type Announcement } from "../announcementData";

const AnnouncementPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] =
    useState<Announcement | null>(null);

  useEffect(() => {
    // Select a random announcement when component mounts
    const randomIndex = Math.floor(Math.random() * announcements.length);
    setCurrentAnnouncement(announcements[randomIndex]);

    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      } else {
        setCanClose(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  if (!isOpen || !currentAnnouncement) return null;

  const handleSubscribe = () => {
    window.open(currentAnnouncement.subscribeUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-md mx-4 relative animate-fadeIn">
        {/* Close button */}
        {canClose && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-white mb-4">
          {currentAnnouncement.title}
        </h2>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              src={currentAnnouncement.channelLogo}
              alt="Channel Logo"
              width={100}
              height={180}
              className="rounded-full shadow-lg"
            />
          </div>

          <p className="text-center text-zinc-700 dark:text-zinc-300 text-lg">
            {currentAnnouncement.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-row gap-3 justify-center">
          <button
            onClick={() => setIsOpen(false)}
            disabled={!canClose}
            className={`px-6 py-2 rounded-xl font-semibold ${
              canClose
                ? "bg-zinc-200 hover:bg-zinc-300 text-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-white"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed dark:bg-zinc-700 dark:text-zinc-500"
            }`}
          >
            Cancel {!canClose && `${countdown}s`}
          </button>

          <button
            onClick={handleSubscribe}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};
const ContentPage = () => {
  const { user } = useUser();
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <button onClick={toggleDarkMode} className="absolute top-4 right-4">
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <SignedIn>
        <div
          className={`pb-14 pt-10 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <Content />
          <AnnouncementPopup />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default ContentPage;
