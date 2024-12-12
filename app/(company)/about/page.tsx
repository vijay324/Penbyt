"use client";
import React from "react";
import Header from "./Header";
import MissionSection from "./MissionSection";
import GroupPhoto from "./GroupPhoto";
import { FeaturesSectionDemo } from "./OurValues";
import TrustedBy from "./TrustedBy";
import TeamSection from "./TeamSection";
import { motion } from "framer-motion";

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <div>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <MissionSection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <GroupPhoto />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <FeaturesSectionDemo />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <TeamSection />
      </motion.div>
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={sectionTransition}
      >
        <TrustedBy />
      </motion.div> */}
    </div>
  );
};

export default AboutPage;
