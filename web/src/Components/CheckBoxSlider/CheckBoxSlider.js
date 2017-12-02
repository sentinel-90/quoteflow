import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const CheckBoxSliderComponent = (props) => (
    <Checkbox
        slider
        defaultChecked={props.defaultChecked}
        onChange={props.change}
        label={props.label}
    />
);

export default CheckBoxSliderComponent
