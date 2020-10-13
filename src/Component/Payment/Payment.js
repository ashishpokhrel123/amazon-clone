
import React, { useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import  '../Payment/Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../User/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketSubTotal } from '../Reducer';
import axios from 'axios';


export default function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const element = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [erros, setError] = useState(null);
    const[disabaled, setDisabled] = useState(true);
    
    const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
       
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                 url: `http://localhost:5000/clone-a3117/us-central1/api/payments/create?total=${getBasketSubTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
     
    const handlesubmit =  async(event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method :{
                card: element.getElement(CardElement)

            } 
        
        }).then((paymentIntent)=>{
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders');

        })

    }
    const handlechange = (e) => {
        setDisabled(e.empty)
        setError(e.erros? e.erros.message:"");

    }
    return (
       
        <div className="payment">
             <Header />
            <div className="payment_container">
                 <h1>
                     Total CheckOut <Link to ="/checkout">({ basket?.length}  items)</Link>
                     
                     </h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Shipping address</h3>
                    </div>
                    <div className="payment_address">
                         <p>{user?.email}</p>
                         <p>4005 Software House</p>
                         <p>Rabbi Marga 23</p>
                         <p>Nepal </p>
   
                    </div>
                    
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and deliver</h3>
                    </div>
                    <div className="payment_details">
                         { basket.map((item=>
                              <CheckoutProduct
                               id={item.id}
                               title={item.title}
                                image={item.image}
                                 price={item.price}
                                  rating={item.rating}
                                    />
            ))}
            </div>
            </div>
                <div className="payment_section">
                     <div className="payment_title">
                        <h3>Payment</h3>
                    </div>
                     <div className="payment_details">
                         <form onSubmit={handlesubmit}>
                             <h6>Add debit or credit Card Details</h6>
                             <CardElement onChange={handlechange} className="payment_card" />
                             <div className="payment_price">
                         <h4>Total price: ${getBasketSubTotal(basket)}</h4>
                             
                             <button disabled = {processing || disabaled || succeeded } style={{background: "#f0c14b"}} >
                         <span> { processing ? <p>Processing....</p>:
                          "Buy Now"
                         }
                         </span>
                             </button>
                             </div>
                        { erros && <div className="error">{erros}</div>}
                         </form>

                     </div>
                    
                    
                </div>

                </div>
         
        </div>
    )
}
