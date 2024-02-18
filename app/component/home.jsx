"use client";
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Features from "@/app/component/features";
import Cards from "@/app/component/cards";
import { Fragment, useEffect } from "react";
import $ from "jquery";
import Link from "next/link";

export default function Home ({ data }) {

    const set_header = () => {

        if ( $(window).scrollTop() > 150 ) { $('header .nav').hide(); $('.base-nav.home').show(); }
        else { $('.base-nav.home').hide(); $('header .nav').show(); }

    }
    useEffect(() => {

        set_header();
        $(window).on("load scroll resize", set_header);

    }, []);

    return (

        <Fragment>

            <Nav settings={data.settings} hide/>
            
            <Chat settings={data.settings}/>

            <Header settings={data.settings}/>

            <div className="home">

                <Features settings={data.settings}/>

                <Cards data={data.categories} title="فروع الشركة" category/>

                <main className="more">

                    <div className="full-width flex flex-end">

                        <Link href="/categories">
                            <span className="material-symbols-outlined">arrow_back</span>
                            <p>المزيد من الفروع</p>
                        </Link>
                        
                    </div>
                    
                    <div className="hr"><p>تابع أحدث العروض - والمزادات الجديدة</p></div>

                </main>

                { data.auctions.length > 0 && <Cards data={data.auctions} title="أحدث المزادات" slider auction/> }

                { data.blogs.length > 0 && <Cards data={data.blogs} title="اخر الأخبار" slider blog count={3}/> }

            </div>

            <Footer settings={data.settings}/>

        </Fragment>

    )

}
