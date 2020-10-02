import { Button } from '@material-ui/core';
import React from 'react'
import dell from '../assets/delllaptop.jpg';
import '../Products/product.css';

export default function Product() {
    return (
        <div className="product">
            <div className="product_details">
                <p>Dell Laptop</p>
                <div className="product_price">
                    <small>$</small>
                    <strong>80</strong>
                </div>
                <div className="product_rating">
                    <p>🌟</p>
                </div>
                </div>
            <img src={dell} />
            <Button>Add to Basket</Button>
            
        </div>
    )
}
