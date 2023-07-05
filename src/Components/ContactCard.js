import React from "react";

// function ContactCard(props){ 
//     return (
//         <div className="contact-card">
//             <img src={props.contact.imgUrl} alt="" width={200}/>
//             <h3>{props.contact.name}</h3>
//             <p>{props.contact.email}</p>
//         </div>
//     );
// }

class ContactCard extends React.Component {
    render() {
        return (
            <div className="contact-card">
                <img src={this.props.contact.imgUrl} alt="" width={200} />
                <h3>{this.props.contact.name}</h3>
                <p>{this.props.contact.email}</p>
            </div>
        );
    };
};

export default ContactCard