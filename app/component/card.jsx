"use client";
import { host, fix_number, fix_date, date, diff_date } from "@/public/script/public";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function Card ({ data, category, blog, auction }) {

    const [counter, setCounter] = useState(`<span></span> : متبقى`);
    let discount = Math.round((data.old_price - data.new_price) / data.old_price * 100);
    discount = discount < 10 ? `0${discount}` : discount;

    const counter_down = (dt) => {
    
        let interval = setInterval(() => {
        
            let sec = diff_date(date(), dt);
            let seconds = sec % 60;
            let minutes = Math.floor(sec / 60) % 60;
            let hours = Math.floor(sec / 60 / 60) % 24;
            let days = Math.floor(sec / 60 / 60 / 24) % 30;
            let months = Math.floor(sec / 60 / 60 / 24 / 30) % 12;
            let years = Math.floor(sec / 60 / 60 / 24 / 365) % 12;
            
            seconds = seconds < 10 ? `0${seconds}`: seconds;
            minutes = minutes < 10 ? `0${minutes}`: minutes;
            hours = hours < 10 ? `0${hours}`: hours;

            let text = `${seconds} ثانية`;
            if ( parseInt(minutes) ) text = `${minutes} دقيقة - ${seconds} ث`;
            if ( parseInt(hours) ) text = `${hours} ساعة - ${minutes} د - ${seconds} ث`;
            if ( parseInt(days) ) text = `${days} أيام - ${hours} س - ${minutes} د`;

            if ( sec <= 0 ) { clearInterval(interval); setCounter(`<span class="red">انتهى</span> : متبقى`); }
            else { setCounter(`<span>${text}</span> : متبقى`); }

        }, 1000);

    }
    useEffect(() => {

        if ( auction ) counter_down(data.expire_date);

    }, []);

    return (

        <Fragment>
            {
                category ?
                <Link href={`/category/${data.id}/${data.name}`} className="card category">

                    <div>
                        
                        <div className="image"><img src={`${host}${data.image}`}/></div>

                        <div className="info">

                            <h3>{data.name}</h3>

                        </div>

                    </div>

                </Link> : blog ?
                <Link href={`/blog/${data.id}/${data.title}`} className="card blog">

                    <div>
        
                        <div className="image"><img src={`${host}${data.images[0][1]}`}/></div>
        
                        <div className="info">
        
                            <h1>{data.title}</h1>
                            
                            <h2>{data.description}</h2>
                            
                            <hr />
        
                            <div className="foot">{fix_date(data.date)}</div>
        
                        </div>
        
                    </div>
        
                </Link> :
                <Link href={`/product/${data.id}/${data.name}`} className="card">
                
                    <div>
                        
                        <div className="image"><img src={`${host}${data.images[0][1]}`}/></div>

                        <div className="info">

                            <p>{data.location}</p>

                            <h1>{data.name}</h1>

                            { auction && <div className="counter" dangerouslySetInnerHTML={{__html: counter}}></div> }

                            <hr />
                            
                            {/* <div className="foot">

                                {fix_number(data.new_price)} R.S

                                { data.old_price > data.new_price && <span>{data.old_price} R.S</span> }
                            
                            </div> */}

                            <div className="foot" style={{ visibility: 'hidden' }}>{fix_date(data.date)}</div>

                        </div>

                        {/* { data.old_price > data.new_price && <div className="discount">{discount}%</div> } */}

                    </div>

                </Link>
            }
        </Fragment>

    )

}
