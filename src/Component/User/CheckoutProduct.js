import React from 'react'
import { useStateValue } from '../StateProvider';

import '../User/CheckoutProduct.css';

export default function CheckoutProduct(props) {

    const [{ basket}, dispatch] = useStateValue();

    const removecart = () => {
       console.log(props.id);
        dispatch({
          type: 'Remove item from Basket',
          id: props.id,
        });
    }
    return (
      <div className="checkout_product">
        <img src={props.image} alt="" />

        <div className="checkoutproduct_details">
          <p className="checkoutproduct_title">{props.title}</p>
          <p className="checkoutproduct_price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="checkout_rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          
          <button onClick={removecart}>Remove from Basket</button>
        </div>
        
      </div>
    );
}
