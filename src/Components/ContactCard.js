import React from "react";

function ContactCard(props){ 
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt="" width={200}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.email}</p>
        </div>
    );
}

export default ContactCard