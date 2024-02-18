"use client";
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import { Fragment } from "react";
import Link from "next/link";

export default function Error ({ settings }) {

    return (

        <Fragment>

            <Nav settings={settings}/>
            
            <Chat settings={settings}/>

            <div className="flex flex-wrap error-page no-select">

                <div className="flex flex-column">

                    <h1 className="flex flex-end">... خطأ</h1>

                    <p className="flex flex-end text-right">
                        لا يمكن الوصول لهذه الصفحة <br/> بسبب فقدان الصلاحيات أو خطأ غير محدد 
                        <br/> يمكنك الإنتقال إلى الصفحة الرئيسية بالزر أناه
                    </p>

                    <div className="text-right flex flex-end full-width">
                        <Link href="/" className="flex">الصفحة الرئيسية</Link>
                    </div>
                    
                </div>

                <div className="image flex layer"><img src="/media/public/error.png"/></div>

            </div>

            <Footer page="خطأ - 404" settings={settings}/>


        </Fragment>

    )

}
