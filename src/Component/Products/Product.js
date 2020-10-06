import { Button } from '@material-ui/core';
import React from 'react'
import dell from '../assets/delllaptop.jpg';
import '../Products/product.css';
import { useStateValue } from '../StateProvider';

export default function Product(props) {
    const [{ basket }, dispatch] = useStateValue();

    const addproduct = () => {
        dispatch({
            type: 'Add to Basket',
            item:{
                title: props.title,
                image: props.image ,
                price: props.price,
                rating: props.rating,

            },

        });
    };
    return (
        <div className="product">
            <div className="product_details">
                <p>{props.title}</p>
                <div className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
                <div className="product_rating">
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}

                </div>
            </div>
            <img src={props.image} />
            <Button onClick={addproduct}>Add to Basket</Button>
    
            
        </div>
    )
}
