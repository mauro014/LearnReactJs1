import React from "react";

function Product(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <p><b>Price:</b> {props.product.price.toLocaleString("en-US",{style: "currency", currency: "USD"})}</p>
            <p><b>Descripcion:</b> {props.product.description}</p>
        </div>
    );
};

export default Product