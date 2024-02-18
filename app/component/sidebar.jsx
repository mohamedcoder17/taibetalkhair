"use client";
import { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";

export default function Sidebar ({ settings }) {

    const show_side = () => {

        $(".sidebar").fadeIn(100).css("display", "flex");
        setTimeout(_ => $(".sidebar > div").css("margin", "0"));
        
    }
    const hide_side = () => {

        $(".sidebar > div").css("margin-right", "-20rem");
        
        setTimeout(_ => $(".sidebar").fadeOut(200));
        
    }
    useEffect(() => {

        $(document).on('click', '.show-side', show_side);
        $(document).on('click', '.hide-side', hide_side);

        $(".nav-icon").each(function(){
            let url = `${location.protocol}//${location.host}${$(this).attr("href")}`;
            if ( location.href === url ) return $(this).addClass('active');
        });
        $(".sidebar a").each(function(){
            let url = `${location.protocol}//${location.host}${$(this).attr("href")}`;
            if ( location.href === url ) return $(this).addClass('active');
        });

    }, []);

    return (

        <div className="sidebar" onClick={_ => $(_.target).hasClass('sidebar') && hide_side()}>

            <div>

                <div className="first full-width flex flex-space">

                    <div className="close circle pointer flex" onClick={hide_side}>
                        <span className="material-symbols-outlined go-icon">close</span>
                    </div>

                    <Link href="/" className="flex">{settings.name}</Link>

                </div>

                <ul className="full-width flex flex-column">

                    <Link href="/">
                        <span>الصفحة الرئيسية</span>
                        <span className="material-symbols-outlined icon">home</span>
                    </Link>
                    <Link href="/auctions">
                        <span>المزادات</span>
                        <span className="material-symbols-outlined icon">add_business</span>
                    </Link>
                    <hr />
                    <Link href="/categories">
                        <span>فروع الشركة</span>
                        <span className="material-symbols-outlined icon">category</span>
                    </Link>
                    <Link href="/blogs">
                        <span>اخر الأخبار</span>
                        <span className="material-symbols-outlined icon">pages</span>
                    </Link>
                    <Link href="/manager">
                        <span>المدير العام</span>
                        <span className="material-symbols-outlined icon">manage_accounts</span>
                    </Link>
                    <hr />
                    <Link href="/about">
                        <span>من نحن</span>
                        <span className="material-symbols-outlined icon">help</span>
                    </Link>
                    <Link href="/contact">
                        <span>تواصل معنا</span>
                        <span className="material-symbols-outlined icon">call_log</span>
                    </Link>

                </ul>

            </div>

        </div>

    )

}
