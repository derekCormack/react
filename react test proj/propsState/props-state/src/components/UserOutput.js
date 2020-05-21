import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <h3>The props coming down from App.js: { props.userName }</h3>            
            <p>This is first paragraph</p>
            <p>this is second paragraph</p>
            <p>this is third paragraph</p>
        </div>
    )};

export default UserOutput;