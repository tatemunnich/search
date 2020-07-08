import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import {connect} from "react-redux";
import {setResults, togglePlatform} from "../../actions"
import {Platform} from "../../reducers";

const ToggleButtons = ({platform, dispatch}) => {

    return (
        <div>
            <ToggleButton className="radioButton" type="radio"
                onChange={()=>{
                    dispatch(togglePlatform(Platform.ANDROID))
                    dispatch(setResults([]))
                }}
                value={1}
                checked={platform===Platform.ANDROID}
            >
                Android
            </ToggleButton>

            <ToggleButton className="radioButton" type="radio"
                onChange={()=>{
                    dispatch(togglePlatform(Platform.IOS))
                    dispatch(setResults([]))
                }}
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

export default connect(mapStateToProps, undefined)(ToggleButtons)
