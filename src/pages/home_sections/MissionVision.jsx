import React from "react";
import "./missionVision.css";
import Mission from "../../assets/images/mission.jpg";
import Vision from "../../assets/images/vision.jpg";
import { useTranslation } from "react-i18next";
function MissionVision() {
  const { t } = useTranslation();
  return (
    <div className="missionVision" id="Mission">
      <div>
        <h2>{t("Mission")}</h2>
        <img src={Mission} alt="Mission_Img" />

        <p>
          {t(
            "The purpose of the program is to contribute to the efficiency and long-term growth of businesses through digitalization and innovation, thereby making a meaningful contribution to the overall development of Azerbaijan's economy."
          )}
        </p>
      </div>
      <div>
        <h2>{t("Vision")}</h2>
        <img src={Vision} alt="Mission_Img" />

        <p>
          {t(
            "The Digital Transformation Support Program will facilitate the transformation of 650 Azerbaijan manufacturing companies (500 SMEs and 150 large enterprises) by 2030 under the supervision of 4SIM and Ministry of Economy (MoE)."
          )}
        </p>
      </div>
    </div>
  );
}

export default MissionVision;
