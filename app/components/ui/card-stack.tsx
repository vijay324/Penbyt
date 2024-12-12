"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[280px] sm:h-[320px] md:h-[360px]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full h-full rounded-3xl p-4 sm:p-6 
                     bg-white dark:bg-black
                     border border-neutral-200 dark:border-neutral-800
                     shadow-lg dark:shadow-2xl
                     transition-colors duration-200
                     flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="text-sm sm:text-base font-normal text-zinc-700 dark:text-zinc-300">
              {card.content}
            </div>
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-medium text-zinc-900 dark:text-white">
                {card.name}
              </p>
              <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
