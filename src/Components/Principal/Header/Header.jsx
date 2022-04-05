import React from 'react';
import Logo from '../../../assets/img/Amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../config/Provaider/StateProvider';
import { auth } from '../../../Firebase/Firebase';


function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {

        if (user) {
            auth.signOut();
        } 
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src={Logo}
                    alt=""
                />
            </Link>


            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <Link to={!user && './login'} >
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello 
                            {
                                !user ? ' Guest' : user.email
                            }
                        </span>
                        <span className="header__optionLineTwo">
                            {
                                user ? 'Sign Out' : 'Sign In'
                            }
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__optionbasketCount">
                            {/* Add num a cart */}
                            {cart?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header