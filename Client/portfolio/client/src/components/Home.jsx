import React from "react";
import img from "../img/alejuka.png"
import s from "../componentsStyles/Home.module.css"
import Cv from "../img/new Cv .pdf"
import Technologies from "./Technologies";
import Carousel from "./Carousel";

export default function Home(){
    return(
        <div className={s.container}>
            <div className={s.miniminiconteiner}>
            <div className={s.landing}>
                <div className={s.contImgBio}>
                    <img src={img} alt="" className={s.port} />
                    <div>
                        <div className={s.minilanding}>
                        <h1 className={s.titlePresent}>Hi, im Alejandro </h1>
                            <span className={s.textBio}>I'm from Argentina, Formosa,im 19 years old and I'm a web developer with experience in front end and backend development. I am currently looking for new knowledge and work experiences to help me improve in these fields.</span>
                            <span className={s.textBio}>I've 2 years of studies in the most important technologies in web development and SCRUM methodologies</span>
                            <span className={s.textBio}>I took an intensive course at the Henry Academy where I learned React, Node js, Sql, Typescript, among the highlights I also did a career called argentina program where I consolidated my knowledge and learned database structure with Java and next js.</span>
                            <a className={s.cv} href={Cv} download="Curriculum Ale Juka">Download resume</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        <div className={s.divTech}>
          <h2 className={s.techTitle} id="technologies">Technologies</h2>
        </div>

         <Technologies/>

       <div className={s.carrucelBackground}>
         <h1 className={s.titlePresent} id="projects"> Projects</h1>
            <div className={s.bootContainer}>
             <Carousel/>
            </div>
        </div>

        <div className={s.end}>

        </div>

     </div>
    )
}