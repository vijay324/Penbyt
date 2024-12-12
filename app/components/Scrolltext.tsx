// ScrollText.tsx
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Interactive Study Tools",
    description:
      "Enhance your learning experience with our interactive study tools. Collaborate with peers, access practice quizzes, and use flashcards to reinforce your knowledge. Our platform is designed to make studying more engaging and effective.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Interactive Study Tools
      </div>
    ),
  },
  {
    title: "Real-time Updates",
    description:
      "Stay updated with the latest study materials and resources. Our platform ensures that all content is current and relevant, providing you with the most up-to-date information for your exams. Say goodbye to outdated resources and stay ahead of the curve.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/study-materials.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="study materials demo"
        />
      </div>
    ),
  },
  {
    title: "Comprehensive Resource Library",
    description:
      "Access a vast library of study materials, including textbooks, lecture notes, and practice exams. Our resource library is designed to cover a wide range of subjects and topics, ensuring that you have everything you need to succeed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Comprehensive Resource Library
      </div>
    ),
  },
  {
    title: "Personalized Study Plans",
    description:
      "Create personalized study plans tailored to your specific needs and goals. Our platform allows you to set study schedules, track your progress, and receive recommendations based on your performance. Make your study sessions more productive and focused.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Personalized Study Plans
      </div>
    ),
  },
];

export default function ScrollText() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
