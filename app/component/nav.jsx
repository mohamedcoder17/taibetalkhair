"use client";
import Sidebar from "@/app/component/sidebar";
import { Fragment } from "react";
import Link from "next/link";

export default function Nav ({ settings, hide }) {

    return (

        <Fragment>

            <div className={`nav base-nav ${hide && 'hide home'}`}>

                <main className="flex">

                    <ul className="full-width flex flex-space">

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

            <div className={`nav-sep ${hide && 'hide'}`}></div>

            <Sidebar settings={settings}/>

        </Fragment>

    )

}
