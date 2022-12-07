import React from "react";
import postgres from "../img/postgres.png"
import sequelize from "../img/sequelize.png"
import mongodb from "../img/mongodb.png"
import javascriptimg from "../img/javascript.png"
import typescript from "../img/typescript.png"
import jQuery from "../img/jQuery.png"
import html from "../img/html.png"
import reactlog from "../img/reactlogo.png"
import css from "../img/css.png"
import sql from "../img/sql.png"
import express from "../img/express.png"
import node from "../img/node.png"
import s from "../componentsStyles/Technologies.module.css"
import babel from "../img/babel.png"
import mongoose from "../img/mongoose.png"
import nextjs from "../img/nextJs.png"
import reactNative from "../img/reactNative.png"
import { useState } from "react";

export default function Technologies(){
    
    let [state ,setState] = useState("front")
    //console.log(state)

    function onClickFront(e){
        e.preventDefault()
        if(state !== "front"){
            setState("front")
        }
    }
    function onClickBack(e){
        e.preventDefault()
        if(state !== "back"){
            setState("back")
        }
    }
    return(
        <div className={s.main}>
            <div className={s.buttons}>
                <button className={state === "front" ? s.btnOnL :s.btnOffL} onClick={onClickFront}>Front End</button>
                <button className={state === "back" ? s.btnOnR : s.btnOffR} onClick={onClickBack}>Back End</button>
            </div>

            {state === "back" ? 
            <div className={s.container}>
            
                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={postgres} alt="" className={s.img} />
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Postgres</h5>
                        <a className={s.btn} href="https://www.postgresql.org/">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={sql} alt="" className={s.imgSQL}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>MySQL</h5>
                        <a className={s.btn} href="https://www.mysql.com/">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={sequelize} alt="" className={s.img}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Sequelize</h5>
                        <a className={s.btn} href="https://sequelize.org/">What`s is?</a>
                    </div>
                </div>
                
                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={mongodb} alt="" className={s.img}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>MongoDB</h5>
                        <a className={s.btn} href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-ar_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624305&adgroup=115749712783&gclid=CjwKCAiAp7GcBhA0EiwA9U0mtteQs_InOguzuEX55pmcO2w9A1POAPEpTnFrp5j7jQxI8pfwwj1uTBoCV4MQAvD_BwE">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={express} alt="" className={s.img}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Express JS</h5>
                        <a className={s.btn} href="https://nodejs.org/es/about/">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={node} alt="" className={s.img}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Node js</h5>
                        <a className={s.btn} href="https://nodejs.org/es/about/">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={mongoose} alt="" className={s.img} />
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Mongoose</h5>
                        <a className={s.btn} href="https://mongoosejs.com/">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={javascriptimg} alt="" className={s.img}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Javascript</h5>
                        <a className={s.btn} href="https://developer.mozilla.org/es/docs/Web/JavaScript">What`s is?</a>
                    </div>
                </div>

                <div className={s.card} data-aos="flip-left" data-aos-duration="2000">
                    <div className={s.imgc}>
                        <img src={typescript} alt="" className={s.img}/>
                    </div>
                    <div className={s.minicard}>
                        <h5 className={s.techTitle}>Typescript</h5>
                        <a className={s.btn} href="https://www.typescriptlang.org/">What`s is?</a>
                    </div>
                </div>
            </div>
            :
        <div className={s.container}> 
           <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={javascriptimg} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>Javascript</h5>
                    <a className={s.btn} href="https://developer.mozilla.org/es/docs/Web/JavaScript">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={typescript} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>Typescript</h5>
                    <a className={s.btn} href="https://www.typescriptlang.org/">What`s is?</a>
                </div>
            </div>

           <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={nextjs} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>Next js</h5>
                    <a className={s.btn} href="/huy">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={reactNative} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>React Native</h5>
                    <a className={s.btn} href="/huio">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={jQuery} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>JQuery</h5>
                    <a className={s.btn} href="https://jquery.com/">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={html} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>Html</h5>
                    <a className={s.btn} href="https://developer.mozilla.org/es/docs/Web/HTML">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={css} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>Css</h5>
                    <a className={s.btn} href="https://developer.mozilla.org/es/docs/Web/CSS">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={reactlog} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>React JS</h5>
                    <a className={s.btn} href="https://es.reactjs.org/">What`s is?</a>
                </div>
            </div>

            <div className={s.card} data-aos="flip-left" data-aos-duration="1000">
                <div className={s.imgc}>
                    <img src={babel} alt="" className={s.img}/>
                </div>
                <div className={s.minicard}>
                    <h5 className={s.techTitle}>Babel</h5>
                    <a className={s.btn} href="https://babeljs.io/">What`s is?</a>
                </div>
            </div>

            </div>
            }
        </div>
    )
}