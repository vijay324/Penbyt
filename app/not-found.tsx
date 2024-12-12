import React from "react";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

export default function NotFound() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          We are working on it{" "}
          <div className="relative mx-auto inline-block w-full max-w-4xl">
            <div className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="block text-shadow-lg">Unveiling Soon…</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="block text-shadow-lg">Unveiling Soon…</span>
            </div>
          </div>
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
