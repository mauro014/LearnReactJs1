import React from "react";

import Product from "./Product";
import productsData from "./ProductsData";

function ProductList(){

    const productsComponents = productsData.map(
        function (item){
            return <Product product={item} key={item.id} />
        }
    );

    return (
        <div>
            <h1>Product List</h1>
            {productsComponents}
        </div>
    );
};

export default ProductList