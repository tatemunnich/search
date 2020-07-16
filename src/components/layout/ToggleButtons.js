import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import {connect} from "react-redux";
import {setResults, togglePlatform, toggleToggled} from "../../actions"
import {Platform} from "../../reducers";

const ToggleButtons = ({platform, onButtonChange}) => {

    return (
        <div className="radioButtons">
            <ToggleButton className="radioButton" type="radio"
                onChange={()=>onButtonChange(Platform.ANDROID)}
                value={1}
                checked={platform===Platform.ANDROID}
            >
                Android
            </ToggleButton>

            <ToggleButton className="radioButton" type="radio"
                onChange={()=>onButtonChange(Platform.IOS)}
                value={2}
                checked={platform===Platform.IOS}
            >
                iOS
            </ToggleButton>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        platform: state.platform
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onButtonChange: (platform) => {
            dispatch(togglePlatform(platform))
            dispatch(setResults([]))
            dispatch(toggleToggled())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons)
