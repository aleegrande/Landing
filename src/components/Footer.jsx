import React from "react";
import facebook from "../utils/assets/img/facebook.png";
import whatsapp from "../utils/assets/img/whatsapp.png";
import phone from "../utils/assets/img/phone.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <label className="labelSocial">
          Cualquier duda o aclaración, comunícate con nosotros a través de
          nuestras redes sociales.
        </label>
      </div>
      <div className="divSocial">
        <img src={facebook} className="imgSocial" alt="Facebook" />
        <img src={whatsapp} className="imgSocial" alt="WhatsApp" />
        <img src={phone} className="imgSocial" alt="PhoneNumber" />
      </div>
    </div>
  );
};

export default Footer;
