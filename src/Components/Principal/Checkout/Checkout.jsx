import React from 'react';
import { useStateValue } from '../../../config/Provaider/StateProvider';
import CheckoutProduct from '../../Secondary/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../Secondary/Subtotal/Subtotal';
import Header from '../Header/Header';
import './Checkout.css';

function Cheackout() {

  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <>
      {/* <Header /> */}
      <div className="checkout">
        <div className="checkout__left">
          <img
            className='checkout__add'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Your shopping Cart
          </h2>
          <hr />
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
        <div className="checkout__right" >
          <Subtotal />
        </div>
      </div>
    </>


  )
}

export default Cheackout