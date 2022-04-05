import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                if (user) {
                    navigate('/');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                if (user) {
                    navigate('/');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }

    return (
        <div className="login">
            <Link to='/' >
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="button_login">
                        <button type='submit' onClick={signIn} >Sign In</button>
                    </div>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use
                    & Sale. Please see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button className='button_account' onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default LoginPage