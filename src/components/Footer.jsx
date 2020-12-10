import React from "react";
import facebook from "../utils/assets/img/facebook.png";
import whatsapp from "../utils/assets/img/whatsapp.png";
import phone from "../utils/assets/img/phone.png";

export default function () {
  return (
    <div className="footer">
      <div>
        <label className="labelSocial">
          Cualquier duda o aclaración, comunícate con nosotros a través de
          nuestras redes sociales.
        </label>
      </div>
      <div className="divSocial">
        <img src={facebook} className="imgSocial" />
        <img src={whatsapp} className="imgSocial" />
        <img src={phone} className="imgSocial" />
      </div>
    </div>
  );
}
