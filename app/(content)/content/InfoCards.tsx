import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Grid } from "../../(company)/about/OurValues"; // Import the Grid component from Our Values

const InfoCards = () => {
  const cards = [
    {
      title: "Content",
      description:
        "Explore a wide range of educational content from P1 to E4 to enhance your learning experience.",
      icon: "📚",
      href: "/sm",
    },
    {
      title: "Exam Papers",
      description:
        "Access past exam papers to practice and prepare effectively for your exams.",
      icon: "📑",
      href: "/exampapers",
    },
    {
      title: "Gate Materials",
      description:
        "Get comprehensive materials and resources for your GATE exam preparation.",
      icon: "📔",
      href: "/gate",
    },
    {
      title: "Resources",
      description:
        "Find additional resources including books, articles, and guides to support your studies.",
      icon: "📖",
      href: "/resources",
    },
    {
      title: "Internship Certificate Verification",
      description:
        "Verify your penbyt internship certificates easily and efficiently.",
      icon: "💳",
      href: "/intern",
    },
    {
      title: "Useful Communities",
      description:
        "Join communities that provide valuable resources and support for your learning journey.",
      icon: "💻",
      href: "/training",
    },
  ];

  return (
    <div className="py-20 lg:py-40 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center pb-8">
        <h2 className="text-base font-semibold tracking-wide uppercase text-purple-600">
          Our Resources
        </h2>
        <p className="mt-1 text-4xl font-extrabold dark:text-white text-zinc-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Empowering Your Learning Journey
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl dark:text-white text-zinc-500">
          Access comprehensive resources for academic and professional success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.a
            key={index}
            href={card.href}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-md dark:shadow-zinc-800 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Grid size={20} /> {/* Adds the grid background */}
            <div className="relative z-20 flex items-start space-x-4">
              <div className="text-4xl">{card.icon}</div>
              <div>
                <h2 className="text-xl font-bold dark:text-white text-neutral-800">
                  {card.title}
                </h2>
                <p className="mt-2 text-base dark:text-neutral-400 text-neutral-600">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <Image
                src="/arrow-top.svg"
                width={20}
                height={20}
                alt="Arrow Icon"
                className="dark:invert"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
