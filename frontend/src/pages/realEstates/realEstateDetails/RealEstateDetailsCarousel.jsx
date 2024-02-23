import React from "react";
import Slider from "react-slick";

import styles from "./RealEstateDetailsCarousel.module.css";
import house_image from "../../../assets/pexels-aaron-cook-19277901 1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = (props) => {
    const {height, width, images} = props || []
    if (images.length === 0) images.push(house_image);

    const settings = {
        useCSS: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <Slider {...settings}>
            {images.map((i, index) =>   <div style={{height:height, width:width}} key={"div"+i}>
                                            <img key={`image_carousel_${index}`} 
                                                 className={styles.rounded} 
                                                 src={i}
                                                 style={{height:height, width:"auto", margin:"auto"}} />
                                        </div>)}
        </Slider>
    )
};

export default Carousel;