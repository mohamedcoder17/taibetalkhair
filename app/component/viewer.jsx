"use client"
import { useState } from "react";
import { host } from "@/public/script/public";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from "jquery";

export default function Viewer({ images, title }) {

    const [swiper, setSwiper] = useState('');
    const [index, setIndex] = useState(0);

    const slide_change = (_) => {

        setIndex(_.realIndex+1);
        let left = 160 * _.realIndex - 160 * 4;
        if ( $(window).width() < 800 ) left = 160 * _.realIndex - 160;
        $(".small-image").scrollLeft(left);
        $("video").each(function(){ this.pause(); });

    }
    return (

        <div className="media-show fixed flex flex-column full-width full-height hide">

            <div className="first flex flex-space full-width">

                <div className="close circle flex pointer" title="إغلاق" 
                    onClick={_ => { $(".media-show").fadeOut(100).hide(); $("video").each(function(){ this.pause(); }); }}>
                    <span className="material-symbols-outlined go-icon">close</span>
                </div>

                <h1 title={title}>{title || 'جميع الصور'}</h1>

            </div>

            <div className="shower full-width flex flex-column">

                <div className="flex media-slider relative full-width">

                    <Swiper modules={[Navigation, Pagination, Autoplay]} speed={500} loop={false}
                        navigation={true} onSlideChange={slide_change} onSwiper={setSwiper}
                        pagination= {{
                            el: '.media-show .small-image', clickable: true,
                            renderBullet: function (index, className) {
                                let src = `<video src="${host}${images[index][1]}"></video>`;
                                if ( images[index][0] === 'image' ) src = `<img src="${host}${images[index][1]}">`;
                                else if ( images[index][0] === 'iframe' ) src = `<iframe src=${images[index][1]}></iframe>`;
                                return `<div class="image ${className} layer">${src}<div class="div"></div></div>`;
                            },
                        }}
                        >
                        {
                            images ? images.map((image, index) =>
                                <SwiperSlide key={index}>
                                    {
                                        image[0] === "image" ? <img src={`${host}${image[1]}`}/> : 
                                        image[0] === "iframe" ? <iframe src={image[1]} allowFullScreen></iframe> : 
                                        <video src={`${host}${image[1]}`} 
                                            onClick={_ => _.target.paused ? _.target.play() : _.target.pause()}>
                                        </video>
                                    }
                                </SwiperSlide>
                            ) : null
                        }
                    </Swiper>

                    <div className="count flex absolute no-select">
                        <span className="current">{index}</span> / {images ? images.length: 0}
                    </div>
                    
                </div>

                <div className="small-image full-width"></div>

            </div>

        </div>

    )

}
