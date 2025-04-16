import React from "react";
import "./contact.css";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <div className="page_content" style={{ backgroundColor: "#0F3567" }}>
      <div className="contact_container">
        <div className="contact_info">
          <h2
            style={{
              fontSize: "38px",
              marginTop: "28px",
              marginBottom: "10px",
              textAlign: "left",
              color: "white",
            }}
          >
            {t("Contact us")}
          </h2>

          <h2>{t("Address :")}</h2>
          <p>{t("Baku, Azerbaijan, AZ1000")}</p>
          <p>{t("84, U.Hajibeyli Street ")}</p>
          <p>{"(Government House)"}</p>

          <h2>{t("Contact number :")}</h2>
          <p>{t("+ 99412 310 28 00 (ext. 2418)")}</p>

          <h2>{t("E-mail:")}</h2>
          <p>office@4sim.gov.az</p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5831174554064!2d49.8516962488609!3d40.373767139534536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dabc3b06953%3A0x64d0daa228312c9e!2zSMO2a3VtyZl0IEV2aQ!5e0!3m2!1saz!2s!4v1665042850931!5m2!1saz!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
