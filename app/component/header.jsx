"use client";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Fragment } from 'react';
import Link from "next/link";

export default function Header ({ settings }) {

    return (

        <Fragment>

            <main className="flex flex-space hero">

                <ul>

                    <li className="flex">
                        <Link href={`tel:${settings.phone}`}>{settings.phone}</Link>
                        <span className="material-symbols-outlined">call</span>
                    </li>
                    
                    <li className="flex margin-top">
                        <Link href={`mailto:${settings.email}`}>{settings.email}</Link>
                        <span className="material-symbols-outlined">mail</span>
                    </li>

                    {/* <li className="flex margin-top">
                        <p>
                            <span>السبت - الخميس</span> , 
                            <span>9 صباحاً - 5 ومساءً</span>
                        </p>
                        <span className="material-symbols-outlined">schedule</span>
                    </li> */}
                    
                </ul>

                <ul className="flex">
                    
                    <Link href="/" className="flex flex-end">

                        <span>{settings.name}</span>

                        <div className="image"><img src="/media/public/logo.png"/></div>

                    </Link>

                </ul>

            </main>

            <header className='relative'>

                <Swiper modules={[Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} pagination={{clickable: true}}
                    autoplay={{delay: 5000}} speed={500} loop={true} className="header-slider">
                    <SwiperSlide key={1}>
                        <video src="/media/header/video.mp4" autoPlay muted loop></video>
                        <div className="data">
                            <h1>{settings.name}</h1>
                            <p className='heading'>تزهو فى كنفها الاستثمارات</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="nav">

                    <main className="flex">

                        <ul className="full-width flex flex-end">

                            <div className="flex">

                                <Link href="/manager" className="flex nav-icon">المدير العام</Link>
                                <Link href="/blogs" className="flex nav-icon">اخر الأخبار</Link>
                                <Link href="/categories" className="flex nav-icon">فروع الشركة</Link>
                                <Link href="/auctions" className="flex nav-icon">المزادات</Link>
                                <Link href="/" className="flex nav-icon">الرئسية</Link>

                            </div>

                            <div className="flex">

                                <Link href="/" className="logo">
                                    <span>{settings.name}</span>
                                    <img src="/media/public/logo.png"/>
                                </Link>
                                
                                <div className="show-side flex flex-start pointer">
                                    <span className="material-symbols-outlined go-icon">menu</span>
                                </div>

                            </div>

                        </ul>

                    </main>

                </div>

            </header>

        </Fragment>

    )

}
