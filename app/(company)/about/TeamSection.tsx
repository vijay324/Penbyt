// TeamSection.tsx
import Image from "next/image";
import React, { useState } from "react";
import { teamMembers, TeamMember } from "./Data/teamMembers"; // Adjust the path if necessary

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            Committed to Excellence
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="m-4 p-4 bg-white dark:bg-black dark:hover:bg-zinc-900 cursor-pointer rounded-3xl hover:shadow-xl transition-shadow"
              onClick={() => handleCardClick(member)}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-black dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 p-2 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-[24px] shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-zinc-700 dark:text-zinc-300 pt-4 pr-6"
              onClick={closePopup}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {selectedMember.name}
            </h3>
            <p className="text-lg mb-4 text-zinc-600 dark:text-zinc-500">
              {selectedMember.title}
            </p>
            <p className="mb-4 text-black dark:text-white">
              {selectedMember.description}
            </p>
            <div className="flex justify-around mb-8">
              <a
                href={selectedMember.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-in-400"
              >
                <Image
                  src="/linkedin-box-fill.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href={selectedMember.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 dark:text-purple-300"
              >
                <Image
                  src="/twitter-x-line.svg"
                  width={20}
                  height={20}
                  alt="Twitter"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
              <a
                href={selectedMember.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 dark:text-purple-300"
              >
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="Instagram"
                  className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
                />
              </a>
            </div>
            <a
              href={selectedMember.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-transparent flex justify-center items-center border-2 bg-purple-100 text-purple-700 border-purple-400 px-4 py-2 rounded-xl text-md border-dotted "
            >
              View Portfolio
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
