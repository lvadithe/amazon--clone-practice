import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../config/Provaider/StateProvider';
import CheckoutProduct from '../../Secondary/CheckoutProduct/CheckoutProduct';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../../config/Reducer/Reducer';
import { useNavigate } from 'react-router-dom';


function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    /* useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getCartTotal(cart) * 100}`,
            })
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [cart]) */

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        /* const payload = await stripe.createPaymentMethod({ */
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            /* paymentIntent = payment confirmation */
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate("/orders");
        })
    }

    const handleChange = e => {
        /* Listen for changes in the CardElemnt */
        /* and display any errors as the customer types their card details */
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className='payment' >
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to='/checkout'>
                        {cart?.length} items
                    </Link>
                    )
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>
                            {user?.email}
                        </p>
                        <p>4-7, Nihonbashi Kayaba-cho 1-chome</p>
                        <p>Tokyo, Japan</p>
                    </div>
                </div>
                {/* Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            cart.map((item, id) => (
                                <CheckoutProduct
                                    key={id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                {/* Payment section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                        {
                                            processing ? <p>Processing</p> :
                                                'Buy Now'
                                        }
                                    </span>
                                </button>
                            </div>
                            {/* Erros */}
                            {
                                error && <div>{error}</div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment