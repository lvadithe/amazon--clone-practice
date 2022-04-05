import React from 'react';
import { useStateValue } from '../../../config/Provaider/StateProvider';
import './Product.css';

function Product({ id, title, price, image, rating }) {
    const [{ cart }, dispatch] = useStateValue();
 
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {rating}
                </div>

                <img className='img__product' src={image} alt="" />
                <div className="container__button">
                    <button className='btn_product' onClick={addToCart} >Add to</button>
                </div>

            </div>
        </div>

    )
}

export default Product