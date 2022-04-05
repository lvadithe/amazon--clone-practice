import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Slider.css';

function Slider({ images }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = images.length - 1;
        if (index === lastIndex) {
            setIndex(0);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, images]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        }
    }, [index]);

    return (
        <div className='section'>
            <div className="section__center">
                {
                    images.map((image, indexImage) => {
                        let position = 'nextSlide';
                        if (indexImage === index) {
                            position = 'activeSlide';
                        }
                        if (indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)) {
                            position = 'lastSlide';
                        }
                        return (
                            <article className={position} key={indexImage}>
                                <img src={image} alt="banner__img" className='banner__img' />
                            </article>
                        )
                    })
                }
                <p className='prev' onClick={() => setIndex(index - 1)}>
                    <ArrowBackIosIcon className='arrowBack'/>
                </p>
                <p className='next' onClick={() => setIndex(index + 1)}>
                    <ArrowForwardIosIcon className='arrowNext'/>
                </p>
            </div>
        </div>
    )
}

export default Slider