import React from "react";
import s from "../componentsStyles/Experience.module.css"
import coderCert from "../img/certificado coder.jpg"
import henryCert from "../img/1.jpg"
import yoprogramCert from "../img/certificado yoprogramo.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience (){
    AOS.init()
    return(
        <div className={s.container}>
            <h1 className={s.title}>Studies</h1>

          <div className={s.minicontainer}>
             <div className={s.certs}>
                 <img src={coderCert} alt="" className={s.coderCert} data-aos="fade-right" data-aos-duration="2000" />
                 <img src={henryCert} alt="" className={s.coderCert} data-aos="fade-right" data-aos-duration="2000"/>
                 <img src={yoprogramCert} alt="" className={s.coderCert} data-aos="fade-right" data-aos-duration="2000"/>
             </div>

             <div className={s.linea} data-aos="fade-down" data-aos-duration="2000">
                <span className={s.puntito1}>°</span>
                <span className={s.puntito2}>°</span>
                <span className={s.puntito3}>°</span>
                 </div> 

             <div className={s.textConteiner}>
                <div className={s.desCText} data-aos="fade-left" data-aos-duration="2000">
                    <span className={s.textCoder}>I learned to use databases using mongo DB with its Mongoose ORM, I also strengthened my knowledge in javascript, html, css and Node js</span> 
                 </div> 

                <div className={s.desHText} data-aos="fade-left" data-aos-duration="2000">
                    <span className={s.textCoder}>I learned frameworks such as React and its variants (React Redux - React Native), I improved my techniques in Node thanks to express js, I also learned other types of databases such as postgres sql and its ORM sequelize, testing libraries and JQuery</span>
                </div>

                <div className={s.desAText} data-aos="fade-left" data-aos-duration="2000">
                    <span className={s.textCoder}>In the first stage I learned to use javascript ES6, ruby, frameworks like angular, use libraries like bootstrap, tailwind, and in the second stage (still in progress) I am learning to use Java</span>
                </div>

              </div>     

           </div>

        </div>
    )
}
