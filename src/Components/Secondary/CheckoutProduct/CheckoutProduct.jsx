import React from 'react';
import { useStateValue } from '../../../config/Provaider/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        /* Remove the item from basket */
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className="checkoutProduct"  >
            <img className='checkoutProduct__image' src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <p>{rating}</p>
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct