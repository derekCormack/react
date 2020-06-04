import React, { Component } from "react";

class FormComp extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        // this.handleChange = this.handleChange.bind(this);  **use this.handleChange.bind(this) INSTEAD
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div> 
            <form>
                <label>Name:
                {/* <input type="text" value={this.state.value}
                        onChange={this.handleChange.bind(this)} /> */}
                    <textarea value={this.state.value} onChange=
                        {this.handleChange.bind(this)} />
                </label>
                {/* <input type="submit" value="Submit" /> */}
                <button onClick={this.handleSubmit.bind(this)}>Submit </button>
            </form>
            {this.props.children}
            {this.props.left}
            <br></br>
            {this.props.right}
            </div>
        );
    }
}
export default FormComp;
