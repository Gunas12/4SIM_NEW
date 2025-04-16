import React from "react";
import Success from "../assets/videos/succes_v.mp4";
import "./SuccesStories.css";
import Metak from "../assets/images/metak.jpg";
import Stp from "../assets/images/stp.jpg";
import Azerfloat from "../assets/images/azerfloat.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Succ_Video from "../assets/videos/success_story.mp4";
function SuccesStories() {
  const { t } = useTranslation();
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const videoRef = React.useRef(null);

  return (
    <div
      className="succes"
      style={{
        background: "linear-gradient(to bottom, #27306b, #252e66, #151a3f)",
      }}
    >
      <div className="video-home1">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="video-title">{t("Success Stories")}</h2>
      </div>
      <h2
        style={{
          fontSize: "38px",
          marginTop: "28px",
          marginBottom: "0px",
          textAlign: "center",
          color: "white",
        }}
      >
        {t("Success Stories")}
      </h2>
      <section className="description-section">
        <p className="bb">
          {t(
            "The “Industry 4.0 Readiness” Program has already made a significant impact by supporting the digital transformation journeys of three leading manufacturing companies in Azerbaijan. The pilot participants—Metak, Azerfloat, and STP—have successfully completed the program and are currently in the process of securing financial support to implement their transformation initiatives."
          )}
        </p>
      </section>

      <motion.div
        className="sectionx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <section className="stories-section">
          <div className="row">
            <div className="story">
              <img src={Metak} alt="metak_logo" />
              <h2>Metak</h2>
              <p>
                {t(
                  "Metak, one of Azerbaijan’s leading pipe manufacturing companies, participated in the “Industry 4.0 Readiness” Program. As part of the program, the company's digital maturity level was assessed, and a comprehensive digital transformation roadmap was developed. Metak is now preparing to implement advanced automation and smart manufacturing solutions."
                )}
              </p>
            </div>
            <div className="story">
              <img src={Azerfloat} alt="azerfloat_logo" />
              <h2>Azerfloat</h2>
              <p>
                {t(
                  "Specializing in glass production, Azerfloat was provided with a digital transformation roadmap aimed at improving operational efficiency, optimizing manufacturing processes, and enhancing resource management. The company is currently taking steps toward data-driven decision-making and improved production processes as part of the roadmap implementation."
                )}
              </p>
            </div>
            <div className="story">
              <img src={Stp} alt="STP_logo" />
              <h2>{t("STP")}</h2>
              <p>
                {t(
                  "STP, one of Azerbaijan’s largest industrial hubs, has embraced digital transformation by implementing AI-powered monitoring systems and smart logistics solutions. The company’s participation in the program has expanded its productivity and sustainability capabilities through technology-driven innovation."
                )}
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      <div className="responsive-video-wrapper">
        <div className="video-box">
          <video ref={videoRef} className="responsive-video" controls>
            <source src={Succ_Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default SuccesStories;
