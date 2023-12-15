import React from "react";
import Slider from "react-slick";

import house_image from "../../../assets/pexels-aaron-cook-19277901 1.png"


import styles from "./RealEstateDetailsCarousel.module.css";

const Carousel = () => {

    const images = [house_image, house_image, house_image]
    const settings = {
        useCSS: true,
        dots: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,

    };

    return (
        <Slider {...settings}>
            {images.map((i, index) => <img key={`image_carousel_${index}`} className={styles.rounded} src={i} />)}
        </Slider>

    )
};

export default Carousel;