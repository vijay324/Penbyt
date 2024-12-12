"use client";
import React from "react";
import CountUp from "react-countup";
import { useTheme } from "./ThemeContext"; // Adjust the import path based on your project structure
import { useInView } from "react-intersection-observer";

const TrustComponent = () => {
  const { isDarkMode } = useTheme();
  const { ref: studyMaterialsRef, inView: studyMaterialsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: studentsServedRef, inView: studentsServedInView } = useInView({
    triggerOnce: true,
  });
  const { ref: successRateRef, inView: successRateInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contentDownloadsRef, inView: contentDownloadsInView } =
    useInView({ triggerOnce: true });

  return (
    <div
      className={`flex flex-col items-center justify-center h-70vh py-8 ${
        isDarkMode ? "bg-zinc-950 text-white" : "bg-zinc-50"
      }`}
    >
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Trusted by students worldwide
        </h1>
        <p
          className={`text-zinc-600 mt-2 ${isDarkMode ? "text-zinc-300" : ""}`}
        >
          Access thousands of study materials and improve your learning
          experience.
        </p>
      </div>
      <div className="w-full max-w-6xl px-4">
        <div
          className={`flex flex-col md:flex-row items-center justify-around ${
            isDarkMode ? "bg-zinc-900" : "bg-white"
          } shadow-lg rounded-lg py-6`}
        >
          <div className="flex-1 p-4 text-center" ref={studyMaterialsRef}>
            <h2
              className={`text-2xl md:text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {studyMaterialsInView && (
                <CountUp end={15000} duration={2} separator="," />
              )}
              +
            </h2>
            <p
              className={`text-zinc-600 mt-2 ${
                isDarkMode ? "text-zinc-300" : ""
              }`}
            >
              Study materials available
            </p>
          </div>
          <div className="flex-1 p-4 text-center" ref={studentsServedRef}>
            <h2
              className={`text-2xl md:text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {studentsServedInView && (
                <CountUp end={100000} duration={2} separator="," />
              )}
            </h2>
            <p
              className={`text-zinc-600 mt-2 ${
                isDarkMode ? "text-zinc-300" : ""
              }`}
            >
              Students served
            </p>
          </div>
          <div className="flex-1 p-4 text-center" ref={successRateRef}>
            <h2
              className={`text-2xl md:text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {successRateInView && (
                <CountUp end={95} duration={2} suffix="%" />
              )}
            </h2>
            <p
              className={`text-zinc-600 mt-2 ${
                isDarkMode ? "text-zinc-300" : ""
              }`}
            >
              Average success rate
            </p>
          </div>
          <div className="flex-1 p-4 text-center" ref={contentDownloadsRef}>
            <h2
              className={`text-2xl md:text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {contentDownloadsInView && (
                <CountUp end={50000} duration={2} separator="," />
              )}
              +
            </h2>
            <p
              className={`text-zinc-600 mt-2 ${
                isDarkMode ? "text-zinc-300" : ""
              }`}
            >
              Content Downloads
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustComponent;
