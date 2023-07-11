import React from "react";

class LoggedInOutPractice extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            (prevState) => { 
                return (
                    {isLoggedIn: !prevState.isLoggedIn}
                )
            }
        )
    }

    render() {

        let labelText = "Log In";
        if(this.state.isLoggedIn){
            labelText = "Log out";
        }

        return (
            <div>
                <h1>LoggedInOutPractice</h1>
                <button onClick={this.handleClick}>{labelText}</button>
            </div>
        );
    }
}

export default LoggedInOutPractice