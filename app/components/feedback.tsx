"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { InfiniteRight } from "./ui/infinite-right";

export function FeedBack() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl dark:text-zinc-300 lg:text-5xl font-semibold">
        Success Stories
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-zinc-800 dark:text-zinc-400 md:mt-3 mb-8">
        How our resources have transformed student lives
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteRight items={testimonialsRight} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This platform has been a game-changer for my study routine. The resources are top-notch and really easy to access. Since using this site, my grades have improved dramatically.",
    name: "Arjun Reddy",
    title: "Engineering Student at RGUKT RK Valley",
  },
  {
    quote:
      "I was really struggling with my engineering courses until I found this website. The study materials are clear and comprehensive. I highly recommend it to all students!",
    name: "Sita Lakshmi",
    title: "Engineering Student at RGUKT SKLM",
  },
  {
    quote:
      "The range of materials here is amazing! I’ve found resources for every topic I’ve needed, from basics to more advanced concepts. It’s been a total lifesaver!",
    name: "Kavya Nair",
    title: "Engineering Student at RGUKT Nuzvid",
  },
  {
    quote:
      "This platform is fantastic. The interface is super user-friendly, and the study materials are always up-to-date and relevant. It’s really helped with my studies.",
    name: "Vikram Raju",
    title: "ECE Student at RGUKT RK Valley",
  },
  {
    quote:
      "This website has been incredibly useful for understanding complex computer science concepts. If you’re studying engineering, you definitely need to check it out!",
    name: "Lakshmi Priya",
    title: "Engineering Student at RGUKT Ongole",
  },
];

const testimonialsRight = [
  {
    quote:
      "The study resources here are just perfect. They’re comprehensive and easy to use, which has really enhanced my learning experience.",
    name: "Krishna Reddy",
    title: "Student at RGUKT RK Valley",
  },
  {
    quote:
      "I’ve found this site to be indispensable for my exam prep. It offers exactly what I need and has exceeded all my expectations.",
    name: "Venkat Kumar",
    title: "Engineering Student at RGUKT RK Valley",
  },
  {
    quote:
      "The variety and quality of study materials are impressive. Whether you’re covering basics or tackling advanced topics, this site has you covered.",
    name: "Deepika Nair",
    title: "Student at RGUKT Nuzvid",
  },
  {
    quote:
      "I really appreciate how user-friendly this platform is and how frequently it’s updated. It makes studying much more efficient.",
    name: "Kiran Raju",
    title: "MBA Student at RGUKT Ongole",
  },
  {
    quote:
      "Finding reliable study materials used to be a challenge, but this site has made it so much easier. It’s now a key part of my study routine.",
    name: "Ravi Kumar",
    title: "CSE Student at RGUKT SKLM",
  },
];
