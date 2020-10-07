import React from 'react'

import '../Checkout/checkout.css';
import { getBasketSubTotal } from '../Reducer';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../User/CheckoutProduct';

export default function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    const subtotal = 0;
    return (
      <div className="checkout">
        <img
          className="checkout_image"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout_emptybasket">
            <p> Your Basket is Empty</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            <hr />
            <div className="checkout_right">
              <h3 className="checkout_subtotal">
                SubTotal( {basket.length} item): <small>$</small>
                <strong>{getBasketSubTotal(basket)}</strong>
              </h3>
            </div>
          </div>
        )}
        ;
      </div>
    );
}
