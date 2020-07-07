import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {useDispatch} from "react-redux";
import {setResults, togglePlatform} from "../../actions"
import {Platform} from "../../reducers";

const ToggleButtons = () => {
    const dispatch = useDispatch()

    return (
        <ToggleButtonGroup type="radio" name="platform" defaultValue={1}>
            <ToggleButton className="radioButton"
                onChange={()=>{
                    dispatch(togglePlatform(Platform.ANDROID))
                    dispatch(setResults([]))
                }}
                value={1}
            >
                Android
            </ToggleButton>

            <ToggleButton className="radioButton"
                onChange={()=>{
                    dispatch(togglePlatform(Platform.IOS))
                    dispatch(setResults([]))
                }}
                value={2}
            >
                iOS
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleButtons
