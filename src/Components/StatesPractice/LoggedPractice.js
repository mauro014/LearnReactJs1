import React from "react";

class LoggedPractice extends React.Component {

    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let wordToDisplay;
        if(this.state.isLoggedIn){
            wordToDisplay = "In";
        }
        else {
            wordToDisplay = "Out";
        }
        return (
            <div>
                <h1>You are corrently Logged { wordToDisplay }</h1>
            </div>
        );
    }
}

export default LoggedPractice