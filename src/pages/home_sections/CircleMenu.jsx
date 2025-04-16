import React from "react";
import "../home_sections/circlemenu.css";
import videoSource from "../home_sections/home_video.mp4";
import ProgramScope from "../home_sections/ProgramScope";
import AboutProgram from "../home_sections/aboutprogram";
import MissionVision from "./MissionVision";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const VideoComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="video-container">
      <div className="video-div">
        <video className="about-video" autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-sections">
        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <AboutProgram />
        </motion.div>

        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <ProgramScope />
        </motion.div>

        <motion.div
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <MissionVision />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoComponent;
