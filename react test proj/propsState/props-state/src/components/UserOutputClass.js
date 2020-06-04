import React, { Component } from 'react';

//Stateful because it does have class
//Stateful because it does contain this.state variable

class UserOutputClass extends Component {

    constructor() {
        super();
        this.state = {
          childState: "This is state in child component"  //match this key with setState below
        };
    }

    render() {
        return (
            <div>
                <h3>State in child component: { this.state.childState }</h3>            
             </div>
        );
    }
}   

export default UserOutputClass;