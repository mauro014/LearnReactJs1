import React from "react";
import FormsPart3Component from "./FormsPart3Components";

class FormsPart3 extends React.Component {

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

    render () {
        return (
            <FormsPart3Component 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }

}

export default FormsPart3