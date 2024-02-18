"use client";
import Nav from "@/app/component/nav";
import Banner from "@/app/component/banner";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import Features from "@/app/component/features";
import { Fragment } from "react";

export default function About ({ settings }) {

    return (

        <Fragment>

            <Nav settings={settings}/>
            
            <Chat settings={settings}/>

            <Banner title="من نحن" 
                details="تبدأ الحكاية بتأسيس شركة طيبة الخير عام 2008 لتكون أحد أهم الشركات الرائدة في تقديم منظومة متكاملة من
                 المنتجات والخدمات العقارية، ومنذ أن تأسست الشركة وهي تحمل على عاتقها النهضة بالسوق العقاري بتقديم
                 أجود المنتجات وأفضل الحلول العقارية لتكون بذلك العلامة الفارقة في مجالها مستندة على ما لها من خبرة
                 في مجال المزادات وإدارة الإملاك والمقاولات والحراسات القضائية و كذلك بيع المنتجات الإسمنتية."
            />

            <div className="home about"><Features settings={settings}/></div>
            
            <Footer page="من نحن" settings={settings}/>

        </Fragment>

    )

}
