"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import GateBooks from "./gate";
import Header from "./Header";
import NotFound from "@/app/not-found";

export default () => {
  const { user } = useUser();
  return (
    <div>
      <SignedIn>
        <div className="bg-white dark:bg-black">
          <Header />
          <NotFound />
          {/* <GateBooks /> */}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};
