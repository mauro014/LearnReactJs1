import React from "react";

class StatePractice extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Mauricio",
            years: 13
        }
    }

    render() {
        return ( 
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.years} years old</h3>
            </div>
        )
    };
};

export default StatePractice