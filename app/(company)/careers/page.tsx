"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";

import Header from "./Header";
import CareersPage from "./careers";

export default () => {
  const { user } = useUser();
  return (
    <div>
      <SignedIn>
        <div className="bg-white dark:bg-black">
          <Header />
          <CareersPage />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};
