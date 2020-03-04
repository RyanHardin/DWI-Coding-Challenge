import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

const Product = ({ items }) => {
    if (items) {
        return items.map(i => (
            <div key={i.product.id} className="product">
                <input type="radio" id={i.product.id} name="listing" value={i.product.name} />
                <label htmlFor={i.product.name}>{i.product.name} JUST {i.listPrice} {i.product.skus[0].numberOfBottles}</label>
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
            <div className="products">
                <Product items={products} />
            </div>
        </div>)
}




export default App;