import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./SlickSwiper.module.css"


const SlickSlider = () => {
    let settings = {
        //className: 'sample',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000
    }
    return (
        <div className = {classes.SlickWrapper}>
            <Slider {...settings} className = {classes.slickSwiper}>
                <div><img className = {classes.videoContent}
                          src = 'https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif'/></div>
                <div><img className = {classes.videoContent}
                          src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif'/></div>
                <div><img className = {classes.videoContent}
                          src = 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif'/></div>
            </Slider>
        </div>

    );
};

export default SlickSlider;