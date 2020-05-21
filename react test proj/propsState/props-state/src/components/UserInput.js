import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" />
            <button onClick = { props.changeUN } > push IT</button>
        </div>
    )};

export default UserInput;