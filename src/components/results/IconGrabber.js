import React from "react";
import { connect } from "react-redux";
import {Platform} from "../../reducers";


const IconGrabber = ({ind, platform}) => {
    // TODO: add no results message (possibly with email link)

    return (
        <img
            className="appIcon" alt="icon"
            src={platform===Platform.ANDROID
                 ? process.env.PUBLIC_URL + '/icons_png/' + ind.toString() + '.png'
                 : process.env.PUBLIC_URL + '/apple_icons/' + ind.toString() + '.png'
                }
        />
    )
};

const mapStateToProps = (state) => {
    return {
        platform: state.platform,
    }
}

export default connect(mapStateToProps)(IconGrabber)
