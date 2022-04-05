import React, { useEffect, useState } from 'react';
import Home from './Components/Principal/Home/Home';
import Cheackout from './Components/Principal/Checkout/Checkout';
import LoginPage from './Components/Principal/LoginPage/LoginPage';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { auth } from './Firebase/Firebase';
import { useStateValue } from './config/Provaider/StateProvider';
import Payment from './Components/Principal/Payment/Payment';
import Header from './Components/Principal/Header/Header';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



function App() {
  const [{ }, dispatch] = useStateValue();
  const [stripePromise, setStripePromise] = useState(() => loadStripe("pk_test_51Kl27xIaGrc95MHWrhCGyBPyzQzfn12AEdkOeTOu3rd7udb0ful4lmPT6itLVSu9JjWTdlvsDzdSkFhaiOlOZ8G1004qFjHKFM"));

  useEffect(() => {
    /* will only run once when the app component loads... */
    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>>>>', authUser);
      if (authUser) {
        /* The user just logged in / the user was logged in */
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        /* the user logged out */
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <BrowserRouter>
      <div className='app' >
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Header />
                <Payment />
              </Elements>
            } />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Cheackout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App