import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = ({ items }) => {
    if (items) {
        return items.map(i => (
            <div key={i.product.id}>
                {i.product.name} JUST {i.listPrice} {i.product.skus[0].numberOfBottles}
            </div>
        ));
    }
};


function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://www.wsjwine.com/api/offer/0033008').then(response => {
            setProducts(products.concat(response.data.response.mainItems));
        });
    }, []);


    return (
        <div className="container">
            <h1>Step 1: Which Case Would You Like?</h1>
            <Product items={products} />
        </div>)
}




export default App;