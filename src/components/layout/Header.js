import React from "react";
import styles from "./Styles";

const Header = () => {
    return (
        <header style={styles.headerStyle}>
            <img src={process.env.PUBLIC_URL + "/logos/Asset 1.svg"} alt="logo"/>
        </header>
    )
}

export default Header
