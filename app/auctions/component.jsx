"use client"
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import Card from "@/app/component/card";
import { diff_date, date } from "@/public/script/public";
import { Fragment, useEffect, useState } from "react";
import $ from "jquery";

export default function Auctions ({ data }) {

    const [all, setAll] = useState([]);
    const [active, setActive] = useState([]);
    const [disabled, setDisabled] = useState([]);
    const [type, setType] = useState('all');

    useEffect(() => {

        setAll(data.data);
        setActive(data.data.filter(_ => diff_date(date(), _.expire_date) > 0));
        setDisabled(data.data.filter(_ => diff_date(date(), _.expire_date) < 0));

        setTimeout(_ => {
            $(".all-cards .cards").fadeIn(500);
            $(".all-cards .loader").hide();
        }, 300);

    }, []);

    return (

        <Fragment>

            <Nav settings={data.settings}/>
            
            <Chat settings={data.settings}/>

            <div className="banner-div category"><img src="/media/public/auctions.png"/></div>

            <main className="home">

                <div className="title">المزادات</div>

                <div className="describe" dir="rtl">
                    ( حكاية نجاح ومسيرة ازدهار ) - 
                    تحمل هذه القصة في طياتها أبوابًا متنوعة وفصولًا سطرت بأجمل عبارات الإبداع
                    تكلل هذا النجاح بإقامة ما يزيد عن 250 مزادًا في مختلف مناطق المملكة جمعت أكثر من 400 عقار تجاري 
                    وسكني وتقدر قيمة المبيعات بأكثر من ملياري ريال، كما تتميز شركة طيبة الخير 
                    بقاعدة عملاء ضخمة لتقديم خدمات تسويقية احترافية، تجعل من المزادات العلنية
                     واحدة من أفضل الوسائل لتحقيق أجود وأفضل القيم لمختلف الجهات أصحاب العلاقة.
                </div>

            </main>

            <div className="relative all-cards category-cards">

                <div className="full-width cards hide">

                    <main>

                        <ul className="tabs">

                            <li onClick={_ => setType('disabled')} className={`${type === 'disabled' && 'active'}`}>
                                <span>{disabled.length}</span>
                                <span>مزادات منتهية</span>
                            </li>

                            <li onClick={_ => setType('active')} className={`${type === 'active' && 'active'}`}>
                                <span>{active.length}</span>
                                <span>مزادات جارية</span>
                            </li>

                            <li onClick={_ => setType('all')} className={`${type === 'all' && 'active'}`}>
                                <span>{all.length}</span>
                                <span>الكل</span>
                            </li>

                        </ul>

                        <div className={`list-cards disabled ${type !== 'all' && 'hide'}`}>
                            { all.map((item, index) => <Card key={index} data={item} auction/>) }
                        </div>

                        <div className={`list-cards active ${type !== 'active' && 'hide'}`}>
                            { active.map((item, index) => <Card key={index} data={item} auction/>) }
                        </div>

                        <div className={`list-cards disabled ${type !== 'disabled' && 'hide'}`}>
                            { disabled.map((item, index) => <Card key={index} data={item} auction/>) }
                        </div>

                    </main>
                    
                </div>

                <div className="loader"></div>

            </div>

            <Footer page="المزادات" settings={data.settings}/>

        </Fragment>

    )

}
