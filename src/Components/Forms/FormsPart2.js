import React from "react";

class FormsPart2 extends React.Component {
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value, type, checked} = event.target;
        if(type === "checkbox"){
             this.setState({
                     [name]: checked
             });
        }
        else{
            this.setState({[name]: value})
        }
    }

    render(){
        return (
            <div>
                <form>
                    <input 
                        name="firstName"
                        onChange={this.handleChange} 
                        placeholder="First Name" />
                        <br />
                    <input 
                        name="lastName"
                        onChange={this.handleChange} 
                        placeholder="Last Name" />
                        <br />
                    <input 
                        name="age"
                        onChange={this.handleChange} 
                        placeholder="Age" />
                        <br />

                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male"
                            checked={this.state.gender === "male"} 
                            onChange={this.handleChange} /> Male
                        <br />
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange} /> Female
                    </label>
                    <br />
                    <br />
                    <select 
                        values={this.state.destination} 
                        name="destination" 
                        onChange={this.handleChange} >
                        <option value=""></option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>
                    <br />
                    <br />
                    <label>
                        <input type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange} 
                            checked={this.state.isVegan}
                            /> Vegan? 
                            <br />
                        <input type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange} 
                            checked={this.state.isKosher}
                            /> Kosher? 
                            <br />
                        <input type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange} 
                            checked={this.state.isLactoseFree}
                            /> Lactose Free? 
                            <br />
                    </label>
                    <br /><br />
                    <h2 >Entered Information</h2>
                    <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your Age: {this.state.age}</p>
                    <p>Your Gender: {this.state.gender}</p>
                    <p>Your Destination: {this.state.destination}</p>
                    <p>Your Dietary Restrictions<br />
                        Vegan: {this.state.isVegan ? "Yes": "No" }<br />
                        Kosher: {this.state.isKosher ? "Yes": "No" }<br />
                        Lactose Free: {this.state.isLactoseFree ? "Yes": "No" }
                    </p>
                </form>
            </div>
        )
    }
}

export default FormsPart2