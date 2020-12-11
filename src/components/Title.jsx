import React from "react";
import facebook from "../utils/assets/img/facebook.png";

export default function Title() {
  return (
    <div className="header">
      <div className="divTitle">
        <div>
          <text className="title">¡Participa en el  </text>
        </div>
        <div>
          <text className="title">gran sorteo navideño</text>
        </div>
        <div>
          <text className="title"> de Corporativo Metacoaching!</text>
        </div>
      </div>

      <div className="titledistribuidor">
        <text>DISTRIBUIDOR AUTORIZADO</text>
      </div>

      <div className="divRP">
        <text className="RP">ROYAL PRESTIGE</text>
      </div>

      <div className="premio">
        <text className="subtitle">Gana hasta </text>
        <text className="subtitle2">$36,000</text>
      </div>

      <div>
        <text className="subtitle"> mil pesos en productos.</text>
      </div>
      <div className="divDesPremio">
        <div><text className="subtitle3"> Habrán 3 ganadores, se rifarán 3 sartenes Easy Release</text></div>
        <div><text className="subtitle3"> de 8 pulgadas con tapa  valorados en $12,000 mil pesos cada uno.</text></div>
        <div><text className="subtitle3"> Transmisión del sorteo en: </text></div>
        <div className="divFacebook"><img src={facebook} className="imgSocial" alt="Facebook" /><a className="subtitle4" href="https://www.facebook.com/CorporativoMetacoaching/" target="_blank"> Corporativo Metacoaching</a></div>
      </div>
    </div>
  );
}
