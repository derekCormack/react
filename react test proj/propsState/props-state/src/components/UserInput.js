import React from 'react';

//Stateless because it does not have clas
//Stateless because it does not contain this.state variable

const UserInput = (props) => {
    return (
        <div>
            <span>username:  </span>
            <input type="text" onChange={ props.changeUN }/>
            {/* <button onClick = { props.changeUN } > push IT</button> */}
        </div>
    )};

export default UserInput;


// onchange is the EVENT on changeUserName METHOD.

// changeUserName method is being passed as a reference from parent component to UserInput child component!