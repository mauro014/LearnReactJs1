import React from "react";

class FormsPart1 extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            profile : "",
            isFriendly: true,
            favColor: ""
        }
        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent(event){
        const {name, value, type, checked} = event.target

        if(type === "checkbox"){
            this.setState({[name]: checked})
        }
        else if(type === "textarea"){
            this.setState({[name]: value})
        }
        else{
            this.setState({[name]: value})
        }
    }

    render (){
        return (
            <div>
                <h1>Forms Part 1</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName}
                        placeholder="First Name" 
                        onChange={this.handleEvent}/>
                    <br /> 
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName}
                        placeholder="Last Name" 
                        onChange={this.handleEvent}/>
                    <br />
                    <textarea 
                        name="Profile" 
                        value={this.state.profile}
                        placeholder="Profile" 
                        onChange={this.handleEvent} />
                    <br />
                    <label>
                        <input 
                            checked={this.state.isFriendly}
                            type="checkbox"
                            name="isFriendly" 
                            onChange={this.handleEvent} />
                            Is friendly?
                    </label>
                    <br />
                    <label>
                        <input 
                            checked={this.state.gender === "male"}
                            type="radio"
                            name="gender"
                            value="male" 
                            onChange={this.handleEvent} />
                            Male
                    </label>
                    <label>
                        <input 
                            checked={this.state.gender === "female"}
                            type="radio"
                            name="gender"
                            value="female" 
                            onChange={this.handleEvent} />
                            Female
                    </label>
                    <br />
                    Fav Color:
                    <select 
                            value={this.state.favColor}
                            onChange={this.handleEvent} 
                            name="favColor">
                        <option value=""></option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                    </select>
                    <br />
                    <h2>{this.state.firstName} {this.state.lastName}</h2>
                    <p>{this.state.profile}</p>
                    <p>You are {this.state.gender}</p>
                    <p>You Favorite Color is {this.state.favColor}</p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormsPart1