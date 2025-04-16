import React from "react";
import { useTranslation } from "react-i18next";
import AboutVideo from "../home_sections/about_program.mp4";
import "./aboutprogram.css";

const AboutProgram = () => {
  const { t } = useTranslation();

  return (
    <div className="about-program-main-container" id="abouttt">
      <div className="about-first-div">
        <h2 className="about-program-title">{t('About Program')}</h2>
        <p>{t('The overall coordination tasks for the “Industry 4.0 Readiness” program (Program) are carried out by the Fourth Industrial Revolution Analysis and Coordination Center (4SIM).')}</p>
        <p style={{ color: "white" }}>
          {t('The program is implemented under the supervision of the Ministry of Economy (MOE) of the Republic of Azerbaijan.')}
        </p>
        <p>
          {t('The program helps Azerbaijani businesses implement a complex digital transformation process, serving the goals set by the "Socio-Economic Development Strategy of the Republic of Azerbaijan for 2022-2026"')}
          {/* <b className="about-bold-text">{t('the program aims to empower Azerbaijani businesses by supporting their comprehensive digital transformation.')}</b> */}
          {/* {t('It provides funding, capability-building support, and expert guidance to accelerate digital adoption across industries.')} */}
        </p>
        <p>
          {/* {t('Through structured assessments, strategic roadmaps, financial assistance, and ongoing mentorship,')} */}
          <b className="about-bold-text">
          {t("The program includes measures such as assessing companies' existing digital capabilities, developing personalized roadmaps, developing a roadmap for sustainable development readiness, providing financial support, as well as providing methodological support and institutional capacity building on an ongoing basis to ensure the successful implementation of the transformation.")}
          </b>
        </p>
      </div>
      <div className="about-second-div">
 <video autoPlay muted loop>
          <source src={AboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
              </div>
    </div>
  );
};

export default AboutProgram;
