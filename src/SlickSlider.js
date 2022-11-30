import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        <div className = 'wrapper'>
            <Slider {...settings} >
                <div className = "container"><img src = 'https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif'/></div>
                <div className = "container"><img src = 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif'/></div>
                <div className = "container"><img src = 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif'/></div>
            </Slider>
        </div>

    );
};

export default SlickSlider;