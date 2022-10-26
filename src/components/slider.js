import React from "react";
import { useState, useEffect } from "react";
import "../css/Slider.css";
import Slider from "react-slick";

export default function Slideshow(){
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay:true,
        arrows:false,
        dots:false
      };
    return (
        <>
        
        <div className="introduce">
			<div className="introduce-header">TESTIMONIALS</div>
			<div className="introduce-hr"></div>
            <Slider {...settings}>
                <div className="slides" id="slide-1">
                    <div className="introduce-content">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
			        <div className="introduce-aut">- Morgan F. -</div>
                </div>
                <div class="slides" id="slide-2">
                    <div className="introduce-content">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
			        <div className="introduce-aut">- John K. -</div>
                </div>
                <div class="slides" id="slide-3">
                    <div className="introduce-content">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
			        <div className="introduce-aut">- Jim P. -</div>
                </div>
            </Slider>
        </div>
        </>
    );   
}

