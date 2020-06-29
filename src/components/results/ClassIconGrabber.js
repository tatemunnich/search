import React from "react";

const ClassIconGrabber = ({classification}) => {

    return (
        <img
            className="classIcon" src={process.env.PUBLIC_URL + '/svg_icons/' + classification + '.svg'} alt="class"
        />
    )
};

export default ClassIconGrabber
