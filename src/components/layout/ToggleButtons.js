import React from "react";
import {Button, ToggleButtonGroup} from "react-bootstrap";


const ToggleButtons = () => {
    return (
        <ToggleButtonGroup type="checkbox" className="radioButton">
            <Button value={false}>
                IOS
            </Button>
            <Button value={true}>
                Android
            </Button>
        </ToggleButtonGroup>
    );
}

export default ToggleButtons
