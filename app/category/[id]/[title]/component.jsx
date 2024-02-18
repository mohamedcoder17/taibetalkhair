"use client"
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import Cards from "@/app/component/cards";
import { Fragment, useEffect } from "react";
import { host } from "@/public/script/public";
import $ from "jquery";

export default function category ({ data }) {

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

            <div className="banner-div category"><img src={`${host}${data.data.image}`}/></div>

            <main className="home">

                <div className="title">{data.data.name}</div>

                <div className="describe">{data.data.description}</div>

            </main>

            <div className="relative all-cards category-cards">

                <div className="full-width cards hide">

                    <Cards data={JSON.parse(data.data.products)} title={`قسم ${data.data.name} - ${JSON.parse(data.data.products).length} نتائج`}/>

                </div>

                <div className="loader"></div>

            </div>

            <Footer page={data.data.name} settings={data.settings}/>

        </Fragment>

    )

}
