import React, { useState } from "react";
import "./fag.css";
import fag from "../assets/videos/fag.mp4";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
function Fag() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="Fagg">
      <div className="video-home7">
        <video autoPlay muted loop>
          <source src={fag} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-titlex tt">
          <h3>{t("Frequently")}</h3>
          <h3>{t("Asked Questions")}</h3>
        </div>
      </div>

      <div className="Fag">
        <div className="faq-container">
          <h4 style={{ color: "white" }}>
            <b>{t("Frequently Asked Questions")}</b>
          </h4>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(0)}>
              {t("When will I know if my company is eligible for the program?")}
              <span className={`faq-icon ${activeIndex === 0 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 0 ? "active" : ""}`}>
              {t(
                "You will receive a notification regarding your eligibility within one month after submitting your application. The eligibility assessment will be based on criteria such as your company’s size, sector of activity, and level of digital readiness."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(1)}>
              {t(
                "When will I be informed if my company is selected as a priority participant?"
              )}
              <span className={`faq-icon ${activeIndex === 1 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 1 ? "active" : ""}`}>
              {t(
                "If your company is selected as a priority participant, representatives from 4SIM will contact you at least three months in advance. During this period, detailed discussions will be held on the preparation of the digital transformation roadmap and related preparatory processes."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(2)}>
              {t(
                "How does 4SIM support companies in obtaining financing from SIF?"
              )}
              <span className={`faq-icon ${activeIndex === 2 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 2 ? "active" : ""}`}>
              {t(
                "Throughout this process, 4SIM will provide comprehensive support to companies. In the initial phase of the application, they will assist you with the collection and organization of documents required by SIF, offering methodological and technical guidance. Additionally, 4SIM will facilitate coordination and communication between your company and SIF officials to ensure a smooth application process. Advisory services will also be provided by 4SIM experts to help identify appropriate financing opportunities and ensure that your application aligns with SIF’s requirements and evaluation criteria."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(3)}>
              {t(
                "What type of financial support will my company receive from the program?"
              )}
              <span className={`faq-icon ${activeIndex === 3 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 3 ? "active" : ""}`}>
              <p>
                {" "}
                {t(
                  "The “Industry 4.0 Readiness” Program offers financial support in two areas:"
                )}
              </p>

              <ul>
                <li>
                  <b>{t("Assessment & Roadmap Development:")} </b>
                  {t(
                    "Companies are provided with grant funding to evaluate their digital readiness and to develop a customized digital transformation roadmap."
                  )}
                </li>
                <li>
                  <b>{t("Implementation Phase Support:")} </b>
                  {t(
                    "Participating companies are eligible to apply for low-interest loans from SIF to support the execution of their transformation plans. This funding covers costs related to technology adoption, infrastructure modernization, and other related initiatives."
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(4)}>
              {t("Does the program cover grants for consulting services?")}
              <span className={`faq-icon ${activeIndex === 4 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 4 ? "active" : ""}`}>
              {t(
                "Yes, local digital consulting services are fully funded through grants to support digital readiness assessments, roadmap development, and implementation assistance. Your company will not bear any financial obligations to access these services."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(5)}>
              {t("How long does it take to receive the financial support?")}
              <span className={`faq-icon ${activeIndex === 5 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 5 ? "active" : ""}`}>
              {t(
                "The timeline for receiving financial support may vary depending on the complexity of the transformation plan and the duration of the approval process carried out by SIF. On average, the process from initial application to final approval and disbursement takes 1 to 3 months."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(6)}>
              {t("Will the application portal remain open continuously?")}
              <span className={`faq-icon ${activeIndex === 6 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 6 ? "active" : ""}`}>
              {t(
                "Yes, the application portal will remain open permanently. This is a continuous program designed to provide year-round support for companies. You can apply at any time and join one of the relevant priority periods."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(7)}>
              {t("If my company is not selected, can we apply again?")}
              <span className={`faq-icon ${activeIndex === 7 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 7 ? "active" : ""}`}>
              {t(
                "Yes, if your company is not selected during the current cycle, you may reapply in future rounds. In fact, we encourage companies to address any gaps identified during the selection process and to improve their digital readiness before reapplying."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(8)}>
              {t(
                "How can we determine if our company is ready for digital transformation?"
              )}
              <span className={`faq-icon ${activeIndex === 8 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 8 ? "active" : ""}`}>
              {t(
                "As part of the program, we will conduct a Digital Readiness Assessment to evaluate your current digital capabilities. This assessment will help identify strengths and areas for improvement and will allow us to develop a tailored transformation roadmap based on your specific needs."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleAccordion(9)}>
              {t(
                "What types of training and upskilling support are offered under the program?"
              )}
              <span className={`faq-icon ${activeIndex === 9 ? "active" : ""}`}>
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 9 ? "active" : ""}`}>
              {t(
                "The “Industry 4.0 Readiness” Program includes training workshops, hands-on sessions, and online resources aimed at developing and strengthening your team’s core digital skills. The training covers both general digital literacy and specialized topics such as cloud technologies, artificial intelligence, automation, and cybersecurity. This approach ensures your team can actively participate in the digital transformation process and continue developing over time."
              )}
            </div>
          </div>
          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(10)}
            >
              {t(
                "What activities are covered by the financial support under the program, and are there any usage restrictions?"
              )}
              <span
                className={`faq-icon ${activeIndex === 10 ? "active" : ""}`}
              >
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 10 ? "active" : ""}`}>
              {t(
                "The financial support offered under the program is specifically intended for activities related to digital transformation. These activities include:"
              )}

              <ul>
                <li>{t("Conducting digital assessments")}</li>
                <li>{t("Developing transformation roadmaps")}</li>
                <li>{t("Implementing and adopting relevant technologies")}</li>
                <li>
                  {t(
                    "Covering execution-related costs (e.g., equipment, software, and infrastructure upgrades)"
                  )}
                </li>
              </ul>
              <p>
                {t(
                  "Any use of funds for purposes outside this scope requires prior approval from 4SIM."
                )}
              </p>
            </div>
          </div>
          <div className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(11)}
            >
              {t(
                "Will participation in the program help improve our international competitiveness?"
              )}
              <span
                className={`faq-icon ${activeIndex === 11 ? "active" : ""}`}
              >
                &#9660;
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === 11 ? "active" : ""}`}>
              {t(
                "Absolutely! Embracing digital transformation enables your company to gain a competitive edge in global markets. The program’s core goals include improving operational efficiency, promoting innovation, and enhancing scalability. This approach positions your company for more sustainable and successful operations both locally and internationally."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fag;
