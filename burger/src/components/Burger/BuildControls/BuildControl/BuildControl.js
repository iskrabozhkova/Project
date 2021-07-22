import React from 'react'
import '../BuildControl/BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className="Label">{props.label}</div>
        <button className="BuildControl Less"  onClick={props.removed}>Less</button>
        <button className="BuildControl More" onClick={props.added}>More</button>
    </div>
);

export default buildControl;   