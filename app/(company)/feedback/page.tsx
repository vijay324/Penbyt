"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";

import Header from "./Header";
import FeedbackPage from "./feedBack";

export default () => {
  const { user } = useUser();
  return (
    <div>
      <SignedIn>
        <div className="bg-white dark:bg-black">
          <Header />
          <FeedbackPage />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};
