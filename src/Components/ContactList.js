import React from "react";

import ContactCard from "./ContactCard";

function ContactList() {
    return (
        <div>
            <h1>Contact List</h1>
            <ContactCard
                contact={{ name: "Name 1", imgUrl: "https://www.ugpp.gov.co/sites/default/files/imagenes/noticia%20%281%29.png", email: "mauro0141@gmail.com" }}
            />
            <ContactCard
                contact={{ name: "Name 2", imgUrl: "https://www.ugpp.gov.co/sites/default/files/imagenes/noticia.png", email: "mauro0142@gmail.com" }}
            />
            <ContactCard
                contact={{ name: "Name 3", imgUrl: "https://www.ugpp.gov.co/sites/default/files/imagenes/noticia%20%281%29.png", email: "mauro0143@gmail.com" }}
            />
            <ContactCard
                contact={{ name: "Name 3", imgUrl: "https://www.ugpp.gov.co/sites/default/files/imagenes/noticia.png", email: "mauro0144@gmail.com" }}
            />
        </div>
    );
}

export default ContactList;