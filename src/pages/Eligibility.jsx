import React, { useState } from "react";
import Success from "../assets/videos/success.mp4";
import Export from "../assets/images/export.jpg";
import Industry from "../assets/images/industry.jpg";
import Leader from "../assets/images/leadership.jpg";
import "./eligibility.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function Eligibility() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const [activeTab, setActiveTab] = useState("eligibility");
  const { t } = useTranslation();
  return (
    <div className="elig">
      <div className="video-home3">
        <video autoPlay muted loop>
          <source src={Success} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-titl">
          <p>{t("Eligibility")} </p>
          <p>&</p>
          <p>{t("Prioritization")}</p>
        </div>
      </div>
      <div className="elig-sections">
        <h2
          style={{
            fontSize: "38px",
            marginTop: "28px",
            marginBottom: "0px",
            color: "white",
          }}
        >
          {t("Eligibility və Prioritization")}
        </h2>
        <motion.div
          className="sectionx section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <section className="eligibility-criteria">
            <h3>{t("Eligibility Criteria")}</h3>
            <p className="description" style={{ color: "white" }}>
              {t(
                "To benefit from the “Industry 4.0 Readiness” Program, companies must meet the following criteria:"
              )}
            </p>
            <div className="criteria-list">
              <div className="criteria-item">
                <h4>{t("Legal Registration Address")}</h4>
                <p>
                  {t(
                    "The company must be legally registered and actively operating in accordance with the laws of the Republic of Azerbaijan."
                  )}
                </p>
              </div>
              <div className="criteria-item">
                <h4>{t("Local Ownership")}</h4>
                <p>
                  {t(
                    "At least 51% of the company’s charter capital must be owned by local individuals or entities."
                  )}
                </p>
              </div>
              <div className="criteria-item">
                <h4>{t("Priority Sectors")}</h4>
                <p>
                  {t(
                    "The company must operate in one of the following priority sectors:"
                  )}
                </p>
                <ul>
                  <li>{t("Manufacturing")}</li>
                  <li>{t("Information Technology and Communications")}</li>
                  <li>{t("Healthcare")}</li>
                  <li>{t("Other relevant fields")}</li>
                </ul>
              </div>
              <div className="criteria-item">
                <h4>{t("Company Size")}</h4>
                <p>
                  {t("The company must meet the following size requirements:")}
                </p>
                <ul>
                  <li>
                    <strong>{t("Number of employees")} : </strong>
                    {t("Minimum 10")}
                  </li>
                  <li>
                    <strong>{t("Annual turnover")} : </strong>
                    {t("Minimum 5 million AZN")}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          className="sectionx section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <section className="prioritization-methodology">
            <h3>{t("Prioritization Methodology")}</h3>
            <p style={{ color: "white" }}>
              {t(
                "Under the program, a limited number of companies will be selected each year and invited to participate. Eligible applicants will be officially notified at least three months prior to the start of their participation. This timeframe provides sufficient opportunity for initial discussions and necessary preparations."
              )}
            </p>

            <div className="prior_cards_section">
              <div className="prior_card">
                <img src={Industry} alt="Industry Focus" />
                <h2>{t("Industrial Focus")}</h2>
                <p>
                  {t(
                    "Preference will be given to manufacturing companies that contribute to economic diversification and industrial development. This includes, in particular, companies operating in the following areas: food and beverage production, refined petroleum products, chemicals, other mineral-based products, basic metals, machinery and equipment maintenance and installation, rubber and plastic products, fabricated metal products, textiles, machinery and equipment, as well as electrical equipment."
                  )}
                </p>
              </div>
              <div className="prior_card">
                <img src={Export} alt="Export Potential" />
                <h2>{t("Export Potential")}</h2>
                <p>
                  {t(
                    "Companies with high export potential those with a strong export ratio and presence in international markets will be prioritized. These companies align more closely with the goals of the program by contributing to enhanced global competitiveness."
                  )}
                </p>
              </div>
              <div className="prior_card">
                <img src={Leader} alt="Leadership Commitment" />
                <h2>{t("Leadership Commitment")}</h2>
                <p>
                  {t(
                    "Strong applications typically demonstrate active support and leadership from top management and other key governance structures in the digital transformation process. Such companies often already have a digital strategy in place or are taking concrete steps toward its development."
                  )}
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

export default Eligibility;
