"use client"
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import Cards from "@/app/component/cards";
import { Fragment, useEffect } from "react";
import $ from "jquery";

export default function Categories ({ data }) {

    useEffect(() => {

        setTimeout(_ => {
            $(".all-cards .cards").fadeIn(500);
            $(".all-cards .loader").hide();
        }, 300);
    
    }, []);

    return (

        <Fragment>

            <Nav settings={data.settings}/>

            <Chat settings={data.settings}/>

            <div className="relative all-cards">

                <div className="full-width cards hide">

                    <Cards data={data.categories} title="فروع الشركة" category/>

                </div>

                <div className="loader"></div>

            </div>

            <Footer page="فروع الشركة" settings={data.settings}/>

        </Fragment>

    )

}
