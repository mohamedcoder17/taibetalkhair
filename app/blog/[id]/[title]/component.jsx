"use client";
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import Banner from "@/app/component/banner";
import { Fragment } from "react";

export default function Blog ({ data }) {

    return (

        <Fragment>

            <Nav settings={data.settings}/>
            
            <Chat settings={data.settings}/>

            <Banner images={data.data.images}/>

            <main>

                <div className="title">{data.data.title}</div>

                <div className="content" dangerouslySetInnerHTML={{__html: data.data.content}}></div>

            </main>

            <Footer page="تفاصيل المقالة" settings={data.settings}/>

        </Fragment>

    )

}
