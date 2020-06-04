import React from 'react';

//Stateless because it does not have clas
//Stateless because it does not contain this.state variable

const UserOutput = (props) => {
    return (
        <div onClick={ props.clickFunc }>
            <h3>The props coming down from App.js: { props.username }</h3>            
            <p>This is first paragraph</p>
            <p>this is second paragraph</p>
         </div>
    )};

export default UserOutput;