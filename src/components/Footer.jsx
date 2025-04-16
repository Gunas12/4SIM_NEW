import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import LogoAz from "../assets/images/4simlogoaz.svg";
import LogoEn from "../assets/images/4simlogoen.png";

function Footer() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const logo = i18n.language === "az" ? LogoAz : LogoEn;
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="4SIM_logo" className="footer-logo-img" />
        </div>
        <p>&copy; {t("2025. All rights reserved.")}</p>
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
