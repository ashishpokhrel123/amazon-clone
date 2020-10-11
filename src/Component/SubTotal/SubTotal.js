import React from 'react'
import { getBasketSubTotal } from '../Reducer';
import { useStateValue } from '../StateProvider';
import { useHistory } from "react-router-dom";

import '../SubTotal/SubTotal.css';

export default function SubTotal() {
    const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
    return (
       <div className="subtotal">
      
            <p>
            
              Subtotal ({basket.length} items): <strong>{getBasketSubTotal(basket)}</strong><br/>
            </p>
           
       
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
    )
}
