import React from 'react'

const userOutput = (props) => {
    return (
        <div className="UserInput">
        <p>Username: {props.username}</p>
        <p>Other paragraph</p>
        </div>
    )
};

export default userOutput;
