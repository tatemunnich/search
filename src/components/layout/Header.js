import React from "react";
import styles from "./Styles";
import ToggleButtons from "./ToggleButtons";

const Header = () => {
    return (
        <header style={styles.headerStyle}>
            <img src={process.env.PUBLIC_URL + "/logos/Asset 1.svg"} alt="logo"/>
            <ToggleButtons></ToggleButtons>
        </header>
    )
}

export default Header
