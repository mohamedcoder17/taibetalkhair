"use client";
import { Fragment } from "react";
import { host } from "@/public/script/public";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner ({ title, details, images }) {

    return (

        <Fragment>
            {
                images ? images.length > 1 ?
                <Swiper modules={[Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} pagination={{clickable: true}} 
                    autoplay={{delay: 5000}} speed={500} loop={true} className="banner-div blog">
                    {
                        images.map((image, index) =>
                            <SwiperSlide key={index}>
                                {
                                    image[0] === "image" ? <img src={`${host}${image[1]}`}/> : 
                                    image[0] === "iframe" ? <iframe src={image[1]} allowFullScreen></iframe> : 
                                    <video src={`${host}${image[1]}`} onClick={_ => _.target.paused ? _.target.play() : _.target.pause()}></video>
                                }
                            </SwiperSlide>
                        )
                    }
                </Swiper> : 
                <div className="banner-div">
                    {
                        images[0][0] === "image" ? <img src={`${host}${images[0][1]}`}/> : 
                        images[0][0] === "iframe" ? <iframe src={images[0][1]} allowFullScreen></iframe> : 
                        <video src={`${host}${images[0][1]}`} onClick={_ => _.target.paused ? _.target.play() : _.target.pause()}></video>
                    }
                </div>:
                <div className="banner-div">
                    
                    <div className="heading full-width flex">

                        <main className="flex flex-column default">

                            <h1>{title}</h1>

                            <p>{details}</p>

                        </main>

                    </div>

                    <svg width="15" height="15" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg1">
                        <g clipPath="url(#clip0_234_869)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M50 0H0V100H50C22.3858 100 0 122.386 0 150V200H100V150C100 177.614 
                            122.386 200 150 200H200V100H150C177.614 100 200 77.6142 200 50V0H100V50C100 22.3858 77.6142 0 50 0ZM100 100H50C77.6142 
                            100 100 122.386 100 150V100ZM100 100V50C100 77.6142 122.386 100 150 100H100Z" fill="url(#paint0_linear_234_869)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_234_869" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="15" height="15" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg2">
                        <g clipPath="url(#clip0_105_284)">
                            <path fillRule="evenodd" clipRule="evenodd"
                            d="M0 0H50V50H0V0ZM100 50H50V100H0V150H50V200H100V150H150V200H200V150H150V100H200V50H150V0H100V50ZM100 
                            100H150V50H100V100ZM100 100V150H50V100H100Z" fill="url(#paint0_linear_105_284)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_105_284" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg3">
                        <g clipPath="url(#clip0_105_300)">
                            <path fillRule="evenodd" clipRule="evenodd"
                            d="M188.941 100C192.769 100 196.477 99.4861 200 98.5234C197.199 97.9327 194.295 97.622 191.319 97.622H141.855C133.685 
                            97.622 126.061 95.2811 119.619 91.2334C121.027 82.9896 124.913 75.0866 131.277 68.7229L162.891 37.1094C165.598 
                            34.4024 167.856 31.4169 169.667 28.2452C167.268 29.8079 164.995 31.6416 162.891 33.7463L127.914 68.7229C122.137 
                            74.4999 115.091 78.2351 107.674 79.9285C102.84 73.1033 100 64.7671 100 55.7675V11.0593C100 7.23107 99.4861 
                            3.5229 98.5234 0C97.9327 2.80071 97.622 5.70466 97.622 8.68118L97.622 58.1456C97.622 66.3155 95.2811 
                            73.9388 91.2335 80.3812C82.9897 78.9727 75.0866 75.0865 68.7229 68.7228L37.1094 37.1094C34.4024 34.4024 
                            31.4169 32.1437 28.2452 30.3334C29.8079 32.7315 31.6416 35.0047 33.7463 37.1094L68.7229 72.086C74.4999 
                            77.8631 78.2352 84.9088 79.9285 92.3263C73.1033 97.1596 64.7671 100 55.7675 100H11.0593C7.23105 100 
                            3.52289 100.514 0 101.477C2.80073 102.067 5.70469 102.378 8.68122 102.378H58.1456C66.3156 102.378 
                            73.9388 104.719 80.3812 108.767C78.9727 117.01 75.0866 124.913 68.7229 131.277L37.1094 162.891C34.4025 
                            165.598 32.1438 168.583 30.3335 171.755C32.7316 170.192 35.0047 168.358 37.1094 166.254L72.086 131.277C77.863 
                            125.5 84.9088 121.765 92.3263 120.071C97.1596 126.897 100 135.233 100 144.233V188.941C100 192.769 100.514 
                            196.477 101.477 200C102.067 197.199 102.378 194.295 102.378 191.319V141.854C102.378 133.684 104.719 126.061 
                            108.767 119.619C117.01 121.027 124.913 124.913 131.277 131.277L162.891 162.891C165.598 165.598 168.583 167.856 
                            171.755 169.667C170.192 167.268 168.358 164.995 166.254 162.891L131.277 127.914C125.5 122.137 121.765 115.091 
                            120.072 107.674C126.897 102.84 135.233 100 144.233 100H188.941Z" fill="url(#paint0_linear_105_300)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_105_300" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg4">
                        <g clipPath="url(#clip0_118_208)">
                            <path d="M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 
                            100C105.262 102.91 102.91 105.233 100 200Z" fill="url(#paint0_linear_118_208)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_118_208" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg5">
                        <g clipPath="url(#clip0_105_351)">
                            <path d="M156.064 143.936L112.127 100L156.064 56.0636L200 100L156.064 143.936ZM43.9364 143.936L0 100L43.9364 
                            56.0636L87.8728 100L43.9364 143.936ZM100 200L56.0636 156.064L100 112.127L143.936 156.064L100 
                            200ZM100 87.8728L56.0636 43.9364L100 0L143.936 43.9364L100 87.8728Z" fill="url(#paint0_linear_105_351)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_105_351" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg6">
                        <g clipPath="url(#clip0_116_139)">
                            <path d="M100 0L105.94 94.0603L200 100L105.94 105.94L100 200L94.0603 105.94L0 100L94.0603 94.0603L100 0Z"
                            fill="url(#paint0_linear_116_139)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_116_139" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg7">
                        <g clipPath="url(#clip0_227_43)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M188 100C188 148.601 148.601 188 100 188C51.3989 188 12 148.601 12 
                            100C12 51.3989 51.3989 12 100 12C148.601 12 188 51.3989 188 100ZM200 100C200 155.228 155.228 200 100 200C44.7715 200 0 
                            155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 
                            106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z" fill="url(#paint0_linear_227_43)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_227_43" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0509862" stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-svg8">
                        <g clipPath="url(#clip0_238_1161)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0C27.6142 0 50 22.3857 50 50C22.3858 50 0 27.6143 0 0ZM100 0C72.3858 
                            0 50 22.3857 50 50C22.3858 50 0 72.3857 0 100C0 127.614 22.3858 150 50 150C22.3858 150 0 172.386 0 200C27.6142 200 
                            50 177.614 50 150C50 177.614 72.3858 200 100 200C127.614 200 150 177.614 150 150C150 177.614 172.386 200 200 200C200 
                            172.386 177.614 150 150 150C177.614 150 200 127.614 200 100C200 72.3857 177.614 50 150 50C177.614 50 200 27.6143 200 
                            0C172.386 0 150 22.3857 150 50C150 22.3857 127.614 0 100 0ZM150 150C150 122.386 127.614 100 100 100C100 127.614 
                            122.386 150 150 150ZM100 100C127.614 100 150 77.6143 150 50C150 77.6143 172.386 100 200 100C172.386 100 150 
                            122.386 150 150C122.386 150 100 172.386 100 200C100 172.386 77.6142 150 50 150C77.6142 150 100 127.614 100 
                            100ZM100 100C72.3858 100 50 122.386 50 150C50 122.386 27.6142 100 0 100C27.6142 100 50 77.6143 50 50C50 
                            77.6143 72.3858 100 100 100ZM100 100C100 72.3857 122.386 50 150 50C122.386 50 100 27.6143 100 0C100 27.6143 
                            77.6142 50 50 50C77.6142 50 100 72.3857 100 100Z" fill="url(#paint0_linear_238_1161)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_238_1161" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff"/>
                                <stop offset="1" stopColor="#fff"/>
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
            }
        </Fragment>

    )

}
