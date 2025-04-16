import React from "react";
import { useTranslation } from "react-i18next";
import "./programScope.css";
import DigitalMaturity from "../home_sections/digital_maturity.mp4";
import DigitalTransformation from "../home_sections/digital_transformation.mp4";
import DigitalSkills from "../home_sections/digital_skills.mp4";
import ImplementationSupport from "../home_sections/implementtation_support.mp4";
import FinancialSupport from "../home_sections/financial_support.mp4";



const ProgramScope = () => {
  const { t } = useTranslation();

  return (
    <div className="program-main-container" id="Scope">
      <div className="program-first-div">
        <h2 style={{ textAlign: "center" }} className="program-title">
          {t('Program Scope')}
        </h2>
        <p style={{ textAlign: "center" }} className="program-descp">
          {t('Target Companies receiving digital transformation support within the program will receive support in five main areas.')}
        </p>
        <p style={{ textAlign: "center" }} className="program-descp">
          {/* {t('will receive tailored support to achieve five key objectives:')} */}
        </p>
      </div>
      <div className="program-second-div">
        <div className="first-scope">
            <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={DigitalMaturity} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
                      <h3 className="scope-title">{t('Assessment of digital readiness level')}</h3>
          <p className="scope-descp">
            {t('Assessment of the existing digital potential, infrastructure, and readiness level of target companies, as well as identifying relevant gaps and opportunities for improvement.')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={DigitalTransformation} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Preparation of a digital transformation roadmap')}</h3>
          <p className="scope-descp">
            {t('Preparation of a strategic plan that includes initiatives, technology usage, estimated financial requirements, and an implementation plan, as well as support in identifying vendors and establishing cooperation.')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={DigitalSkills} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Strengthening digital knowledge and skills')}</h3>
          <p className="scope-descp">
            {t('Enhancing employees’ knowledge and skills through trainings and resources to ensure successful adoption of digital technologies.')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={ImplementationSupport} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Provision of implementation support')}</h3>
          <p className="scope-descp">
            {t('Provision of methodological and technical support to ensure effective implementation of digitalization initiatives.')}
          </p>
        </div>
        <div className="first-scope">
        <video 
               className="scope-video"
               autoPlay muted loop>
                 <source src={FinancialSupport} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
          <h3 className="scope-title">{t('Provision of evaluation and financial support')}</h3>
          <p className="scope-descp">
            {t('Providing support to target companies in conducting digital transformation assessments, adopting technologies, and determining and attracting the necessary funding for implementation.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramScope;
