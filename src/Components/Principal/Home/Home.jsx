import React, { useEffect, useState } from 'react';
import Banner1 from '../../../assets/BannerImages/Banner1.jpg';
import Banner2 from '../../../assets/BannerImages/Banner2.jpg';
import Banner3 from '../../../assets/BannerImages/Banner3.jpg';
import Banner4 from '../../../assets/BannerImages/Banner4.jpg';
import Banner5 from '../../../assets/BannerImages/Banner5.jpg';
import Banner6 from '../../../assets/BannerImages/Banner6.jpg';
import Product from '../../Secondary/Product/Product';
import Slider from '../../Secondary/Slider/Slider';
import axios from 'axios';
import './Home.css';
import Header from '../Header/Header';


function Home() {
    const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
    const API_URL = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function fetchData() {
            const result = await axios(API_URL);
            return result.data;
        }
        fetchData().then(pro => {
            setProduct(pro)
        })
    }, [])

    return (
        <div className='home' >
            {/* <Header /> */}

            <Slider className="home-img" images={bannerImages} />

            <div className="home__row">
                {
                    product.slice(10, 13).map(pro => {
                        return (
                            <Product
                                className="home__product"
                                key={pro.id}
                                id={pro.id}
                                title={pro.title}
                                price={pro.price}
                                image={pro.image}
                                rating={pro.rating.rate}
                            />
                        )
                    })
                }

            </div>

            <div className="home__row">
                {
                    product.slice(16, 18).map(pro => {
                        return (
                            <Product
                                className="home__product"
                                key={pro.id}
                                id={pro.id}
                                title={pro.title}
                                price={pro.price}
                                image={pro.image}
                                rating={pro.rating.rate}
                            />
                        )
                    })
                }
            </div>

            <div className="home__row">
                {
                    product.slice(13, 14).map(pro => {
                        return (
                            <Product
                                className="home__product"
                                key={pro.id}
                                id={pro.id}
                                title={pro.title}
                                price={pro.price}
                                image={pro.image}
                                rating={pro.rating.rate}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home