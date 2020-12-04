import React from 'react'
import Logo from "../utils/assets/img/LogoRP.png";

export default function Title() {
    return (
        <div className="header">
            <div>
                <img src={Logo} className="Logo" />
            </div>
            <div>
                <text className="title">Gran sorteo</text>
            </div>
            <div>
                <text className="title">navideño</text>
            </div>
            <div className="premio">
                <text className="subtitle">Gana hasta </text>
                <text className="subtitle2">$36,000</text>
                <text className="subtitle"> en productos</text>
            </div>

        </div>
    )
}
