import React from 'react';
import 'swiper/css';
import classes from "./TopSwiper.module.css"


// import required modules
import {Autoplay} from 'swiper';
import {SwiperSlide, Swiper} from 'swiper/react';


export default function TopSwiper() {
    const url = [1, 2, 3, 4]

    const swiperSlides = url.map((img) => {
        return (
            <SwiperSlide key = {img}>
                <div className = ''>
                    <video  className={classes.videoContent} autoPlay loop playsInline muted
                           src = "https://static.sybaritejewellery.com/video/home_page.webm"
                           type = "video/mp4">
                        <source src = "https://static.sybaritejewellery.com/video/home_page.webm" type = "video/mp4"/>
                    </video>
                </div>
            </SwiperSlide>
        )
    })
    return (
        <div className = {classes.topSwiperWrapper}>
            <Swiper
                loop = {true}
                modules = {[Autoplay]}
                className = {classes.topSwiper}
                autoplay = {{delay: 3000}}
                onSlideChange = {s => s.autoplay.run()}
            >
                {swiperSlides}
            </Swiper>
        </div>
    );
}
