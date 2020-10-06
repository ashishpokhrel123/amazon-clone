import React from 'react'

import '../Checkout/checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../User/CheckoutProduct';

export default function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            
            <img className="checkout_image"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""/>

            {basket?.length === 0 ? (


                <div className="checkout_emptybasket">
                    <p> Your Basket is Empty</p>
                </div>

            ): (
                
                <div> 
                        <h2 className="checkout__title">Your shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                </div>
                 )};
                  </div>
    )
}
