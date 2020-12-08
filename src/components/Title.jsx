import React from 'react'
import Logo from "../utils/assets/img/mc.png";
import RP from "../utils/assets/img/LogoRP.png";

export default function Title() {
    return (
        <div className="header">
            <div>
                <img src={Logo} className="Logo" />
            </div>
            <div>
                <text className="title">¡Participa en el gran</text>
            </div>
            <div>
                <text className="title">sorteo navideño!</text>
            </div>
            <div className="divRP">
                <text className="RP">ROYAL PRESTIGE</text>
            </div>
            <div>
                <text className="titledistribuidor">DISTRIBUIDOR AUTORIZADO</text>
            </div>
            <div className="premio">
                <text className="subtitle">Gana hasta </text>
                <text className="subtitle2">$36,000</text>
                <text className="subtitle"> mil pesos en productos.</text>
            </div>

        </div>
    )
}
