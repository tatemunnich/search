import React from "react";
import Pic from "../../app_data/pic.webp";
import Unnamed from "../../app_data/unnamed.png"
import styles from "./Styles";

const Header = () => {
    return (
        <header style={styles.headerStyle}>
            <h1>App Search</h1>
            <picture>
                <source srcSet={Pic} type="image/webp"/>
                <img src={Unnamed} alt=""/>
            </picture>
        </header>
    )
}

export default Header
