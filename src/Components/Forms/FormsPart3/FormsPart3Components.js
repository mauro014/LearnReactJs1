import React from "react";

function FormsPart3Component(props) {

    return (
        <div>
            <form>
                <input
                    name="firstName"
                    onChange={props.handleChange}
                    placeholder="First Name" />
                <br />
                <input
                    name="lastName"
                    onChange={props.handleChange}
                    placeholder="Last Name" />
                <br />
                <input
                    name="age"
                    onChange={props.handleChange}
                    placeholder="Age" />
                <br />

                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange} /> Male
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange} /> Female
                </label>
                <br />
                <br />
                <select
                    values={props.data.destination}
                    name="destination"
                    onChange={props.handleChange} >
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
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> Vegan?
                    <br />
                    <input type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> Kosher?
                    <br />
                    <input type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose Free?
                    <br />
                </label>
                <br /><br />
                <h2 >Entered Information</h2>
                <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your Age: {props.data.age}</p>
                <p>Your Gender: {props.data.gender}</p>
                <p>Your Destination: {props.data.destination}</p>
                <p>Your Dietary Restrictions<br />
                    Vegan: {props.data.isVegan ? "Yes" : "No"}<br />
                    Kosher: {props.data.isKosher ? "Yes" : "No"}<br />
                    Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}
                </p>
            </form>
        </div>
    )
}

export default FormsPart3Component