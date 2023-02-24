import React, { Component } from "react";

class CounterClass extends Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this)
        this.state = {
            number : 0
        }
    }

    increment(){
        this.setState({
            number : ++this.state.number
        })
    }    

    render() {
        return(
            <div>
                <h3>This is class based component</h3>
                <h1>counter = {this.state.number}</h1>
                <button onClick={this.increment}>increment</button>
                <hr></hr>
            </div>
        )

    }

}

export default CounterClass;