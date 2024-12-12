import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cover } from "../../components/ui/cover";
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
    <div className="container mx-auto px-4 py-8 ">
      <div className="text-center mb-8 pt-3">
        <h1 className="text-4xl md:text-4xl pb-6 lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-purple-700">
          Empower Your Journey with our
          <br />
        </h1>
        <Cover className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20">
          Resources
        </Cover>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.a
            key={index}
            href={card.href}
            className="flex items-start p-6 bg-white dark:bg-zinc-900 rounded-3xl shadow-md dark:hover:shadow-zinc-600 transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-4xl mr-4">{card.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-2 dark:text-zinc-300">
                {card.title}
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                {card.description}
              </p>
            </div>
            <div className="ml-auto text-zinc-400">
              <Image
                src="/arrow-top.svg"
                width={60}
                height={60}
                alt="LinkedIn"
                className="dark:filter dark:invert dark:brightness-0 dark:contrast-200"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
