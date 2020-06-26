import React from "react";

const IconGrabber = ({ind}) => {
    return (
        <img src={process.env.PUBLIC_URL + '/icons_webp/' + ind.toString() + '.webp'} alt="icon"/>
    )
};

export default IconGrabber
