import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper";

import 'swiper/css';
import './carrossel.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import novoTemplo from '../../images/home/novoTemplo.png';
import orafadi from '../../images/carrossel/orafadi.jpg';
import ensino from '../../images/carrossel/ensino.jpg';
import oferta from '../../images/carrossel/oferta.jpg';

function Carrossel(){

    const slides = [novoTemplo,ensino,orafadi,oferta];

    return(
        <div className="container">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination
        loop
        fadeEffect={true}
        autoplay={{delay:2000}}
        >
            {slides.map(slide => (
                <SwiperSlide>
                    <img src={slide} alt={slides} width='100%'/>
                </SwiperSlide>
            ))}
        </Swiper>            
        </div>
    )
}

export default Carrossel;