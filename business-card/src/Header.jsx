import React from "react";
import HeaderImg from "./assets/thomas.jpg";

export default function Header() {
    return (
        <header>
            <img src={HeaderImg} className="header-img" />
        </header>
    )
}