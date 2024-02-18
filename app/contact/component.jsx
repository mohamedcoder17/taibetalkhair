"use client";
import Nav from "@/app/component/nav";
import Banner from "@/app/component/banner";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import { api, alert_msg } from "@/public/script/public";
import { Fragment, useState } from "react";
import Link from "next/link";
import $ from "jquery";

export default function Contact ({ settings }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const send = async () => {

        let data = {
            name: name, email: email,
            phone: phone, address: address,
            message: message
        }

        if ( !email ) return alert("من فضلك أدخل الإيميل الخاص بك أدناه !");
        if ( !name ) return alert("من فضلك أدخل الاسم الخاص بك أدناه !");
        if ( !phone ) return alert("من فضلك أدخل رقم الهاتف الخاص بك أدناه !");
        if ( !message ) return alert("من فضلك أدخل محتوى الرسالة أو الشكوى الخاصة بك أدناه !");

        $(".loader:not(.main-loader)").css("display", "flex");
        let res = await api('contact', data);

        $(".form, .help-div").hide();
        $(".main-container").scrollTop(0);
        $(".loader").hide()
        $(".success").fadeIn(500).css("display", "flex");
        alert_msg($, "تهانينا - لقد تم إرسال طلبك بنجاح");
        
    }
    return (

        <Fragment>

            <Nav settings={settings}/> <Chat settings={settings}/>

            <Banner title="تواصل معنا"/>

            <main className="contact-us no-select full-width relative">

                <div className="form flex flex-column default">

                    <div className="flex flex-column full-width">

                        <div className="inputs full-width flex flex-space">

                            <div className="input flex flex-column">
                                <label className="full-width flex flex-end">رقم الهاتف</label>
                                <input type="text" dir="rtl" className="full-width" autoComplete="off"
                                    value={phone} onChange={_ => setPhone(_.target.value.trim())}/>
                            </div>

                            <div className="input flex flex-column">
                                <label className="full-width flex flex-end">الاسم</label>
                                <input type="text" dir="rtl" className="full-width" autoComplete="off"
                                        value={name} onChange={_ => setName(_.target.value.trim())}/>
                            </div>

                        </div>

                        <div className="inputs full-width flex flex-space">

                            <div className="input flex flex-column">
                                <label className="full-width flex flex-end">العنوان</label>
                                <input type="text" dir="rtl" className="full-width" autoComplete="off"
                                        value={address} onChange={_ => setAddress(_.target.value.trim())}/>
                            </div>

                            <div className="input flex flex-column">
                                <label className="full-width flex flex-end">الايميل</label>
                                <input type="text" dir="rtl" className="full-width" autoComplete="off"
                                        value={email} onChange={_ => setEmail(_.target.value.trim())}/>
                            </div>

                        </div>

                        <div className="inputs full-width flex">

                            <div className="input flex flex-column full-width">
                                <label className="full-width flex flex-end">الرسالة</label>
                                <textarea dir="rtl" rows="6" className="full-width" 
                                    value={message} onChange={_ => setMessage(_.target.value.trim())}></textarea>
                            </div>

                        </div>

                        <div className="inputs full-width flex">

                            <button className="pointer flex" onClick={send}>إرسال</button>

                        </div>

                    </div>

                </div>

                <div className="success flex flex-column">

                    <div className="image flex layer"><img src="/media/public/check.png"/></div>

                    <h1 className="no-select">تم إرسال الرسالة بنجاح</h1>

                    <p>
                        هذه الرسالة وصلت إلى المدير بنجاح, فى حالة الرد سوف يتم مراسلة حضرتكم فى أقرب وقت
                    </p>

                    <Link href="/" className="button">الصفحة الرئيسية</Link>

                </div>

                <div className="loader hide"></div>

            </main>

            <Footer page="تواصل معنا" settings={settings}/>

        </Fragment>

    )

}
