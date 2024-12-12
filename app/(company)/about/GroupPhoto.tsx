import Image from "next/image";
import { useEffect, useState } from "react";

const GroupPhoto: React.FC = () => {
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
    <div className="flex justify-center items-center dark:bg-black">
      <div className="max-w-4xl">
        <Image
          src="/team.png"
          alt="Group of people"
          width={1266}
          height={547}
          className="w-full p-3 rounded-3xl h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default GroupPhoto;
