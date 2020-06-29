import React from "react";

const IconGrabber = ({ind}) => {
    return (
        <img
            className="appIcon" src={process.env.PUBLIC_URL + '/icons_png/' + ind.toString() + '.png'} alt="icon"
        />
    )
};

export default IconGrabber
