import React from "react";
import ToggleButtons from "./ToggleButtons";


const Header = () => {
    return (
        <header className="header" >
            <img src={process.env.PUBLIC_URL + "/logos/Asset 1.svg"} alt="logo"/>
            <ToggleButtons/>
        </header>
    )
}

export default Header
