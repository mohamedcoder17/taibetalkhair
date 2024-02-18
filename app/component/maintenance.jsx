"use client";
import { Fragment } from "react";

export default function Maintenance () {

    return (

        <Fragment>

            <div className="flex flex-wrap error-page config no-select">

                <div className="flex flex-column">

                    <h1 className="flex flex-end">... الموقع تحت الصيانة</h1>

                    <p className="flex flex-end text-right">
                        عذرا - الموقع تحت الصيانة والتحسين الان<br/> نحن نعمل بكل جهدنا فى تطوير وتحسين النظام 
                        <br/> من فضلك زورنا لاحقا أو أعد تحميل الصفحة أدناه
                    </p>

                    <div className="text-right flex flex-end full-width">
                        <a href="" className="flex">إعادة تحميل الصفحة</a>
                    </div>
                    
                </div>

                <div className="image flex layer"><img src="/media/public/error.png"/></div>

            </div>

        </Fragment>

    )

}
