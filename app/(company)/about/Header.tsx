import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div
      className={` dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.06]  mx-auto px-4 py-16 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-white text-white"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl pt-12 md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-black dark:text-zinc-300 md:pt-20 lg:pt-24 xl:pt-28">
            Empowering Students with Quality Study Resources
          </h1>

          <p
            className={`text-lg ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Our platform provides a vast array of study materials to help
            students excel in their academic pursuits. Join our community to
            access resources, share knowledge, and achieve your educational
            goals.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/i1.png"
              alt="Study Resource 1"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i3.png"
              alt="Study Resource 3"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/i2.png"
              alt="Study Resource 2"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i4.png"
              alt="Study Resource 4"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/i5.png"
              alt="Study Resource 5"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
