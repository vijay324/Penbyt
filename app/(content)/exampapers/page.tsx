"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useTheme } from "../../components/ThemeContext"; // Adjust the path
import Content from "./Content";

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
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default ContentPage;
