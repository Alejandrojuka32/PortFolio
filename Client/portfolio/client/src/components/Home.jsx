import React from "react";
import img from "../img/alejuka.jpg"
import s from "../componentsStyles/Home.module.css"
import javascriptimg from "../img/javascript.png"
import typescript from "../img/typescript.png"
import jQuery from "../img/jQuery.png"
import html from "../img/html.png"
import reactlog from "../img/reactlogo.png"
import css from "../img/css.png"
import sql from "../img/sql.png"
import express from "../img/express.png"
import postgres from "../img/postgres.png"
import node from "../img/node.png"
import frontlogo from "../img/frontlogo.png"
import backlogo from "../img/backlogo.png"
import mascotappLogo from "../img/mascotapp home.png"
import countriesAppLogo from "../img/countriesapp.png"
import Cv from "../img/Copia de Curriculum .pdf"
import sequelize from "../img/sequelize.png"
import mongodb from "../img/mongodb.png"

export default function Home(){
    return(
        <div className={s.container}>
            <div className={s.landing}>
                <div className={s.minilanding}>
                    <h1 className={s.titlePresent}>Hi, im Alejandro </h1>
                    <span className={s.presentacion}>im a full stack developer and this is my portfolio</span>
                    <a className={s.cv} href={Cv} download="Curriculum Ale Juka">Descargar CV</a>
                </div>
            </div>

            <div className={s.bioBackgound}>
                <div className={s.bio}>
                    <div className={s.portBackground}>
                        <img src={img} alt="" className={s.port} />
                    </div>
                    <div className={s.minicontainer}>
                    <h2 className={s.aboutTitle}>About me</h2>
                    <span className={s.textBio}>Hi, my name is Alejandro Juka. I'm from Argentina, Formosa,im 18 years old and I'm a web developer with experience in front end and backend development. I am currently looking for new knowledge and work experiences to help me improve in these fields. 
                 </span>
                 <span className={s.textBio}>I've +1000 hours of studies in the most important technologies in web development and teamwork and organization methodologies</span>
                 <span className={s.textBio}>I took an intensive course at the Henry Academy where I learned React, Node js, Sql, Typescript, among the highlights
                    I also did a career called argentina program where I consolidated my knowledge and learned database structure with Java and next js.</span>
             </div>
            </div>

            </div>
            <div className={s.background2}>
            <div className={s.devContainer}>
               <div className={s.frontDep}>
                    <h2 className={s.titleLogo}>Front end Development</h2>
                    <img src={frontlogo} alt="" className={s.frontLogo}/>
                    <span className={s.textoDev}>I can make the design of the web page, both in creativity and in the use of tools for its development, make requests to the database, develop interactions between users using libraries such as React, React redux , Css, and Frameworks such as bootstrap.</span>
                </div>

                <div className={s.backDep}>
                    <h2 className={s.titleLogo}>Back end Development</h2>
                    <img src={backlogo} alt="" className={s.backlogo}/>
                    <span className={s.textoDev}>I can work on the logical aspects of a web page. Developing myself in tasks such as generating a connection with the database, facilitating the use of web server libraries, combining information, transforming it and returning it to the user. All this working with Javascript, Typescript, node.js, mySql, etc.</span>
                </div>  
             </div>
             </div>
             <div className={s.imageBack}>
                <div className={s.divTech}>
                <h2 className={s.techTitle}>Technologies</h2>
                </div>
            <div className={s.expContainer}>
                <div className={s.background3}>
                <div className={s.expFront}>
                    <h2 className={s.titleIcons}>Front End Technologies</h2>
                    <div className={s.logocontainer}>

                        <div className={s.afd}>
                        <img src={javascriptimg} alt="" className={s.javascript}/>
                        <div className={s.namehidden}>JAVASCRIPT</div>
                        </div>

                        <div className={s.afd}>
                        <img src={typescript} alt="" className={s.javascript} />
                        <div className={s.namehidden}>TYPESCRIPT</div>
                        </div>

                        <div className={s.afd}>
                        <img src={jQuery} alt="" className={s.javascript} />
                        <div className={s.namehidden}>JQUERY</div>
                        </div>

                        <div className={s.afd}>
                        <img src={html} alt="" className={s.javascript} />
                        <div className={s.namehidden}>HTML</div>
                        </div>

                        <div className={s.afd}>
                        <img src={reactlog} alt="" className={s.javascript} />
                        <div className={s.namehidden}>REACT JS</div>
                        </div>

                        <div className={s.afd}>
                        <img src={css} alt="" className={s.javascript} />
                        <div className={s.namehidden}>CSS</div>
                        </div>


                    </div>
                 </div>
                 </div>
                <div className={s.background3}>
                <div className={s.expBack}>
                    <h2 className={s.titleIcons2}>Back End Technologies</h2>
                    <div className={s.logocontainer2}>

                       <div className={s.afd}>
                        <img src={postgres} alt="" className={s.javascript2} />
                        <div className={s.namehidden}>POSTGRES SQL</div>
                        </div>

                        <div className={s.afd}>        
                        <img src={sql} alt="" className={s.javascript3} />
                        <div className={s.namehidden}>SQL</div>
                        </div>

                        <div className={s.afd}>
                        <img src={node} alt="" className={s.javascript2} />
                        <div className={s.namehidden}>NODE JS</div>
                        </div>
                        
                        <div className={s.afd}>
                        <img src={express} alt="" className={s.javascript2} />
                        <div className={s.namehidden}>EXPRESS JS</div>
                        </div>

                        <div className={s.afd}>
                        <img src={sequelize} alt="" className={s.javascript2}/>
                        <div className={s.namehidden}>SEQUELIZE</div>
                        </div>

                        <div className={s.afd}>
                        <img src={mongodb} alt="" className={s.javascript2}/>
                        <div className={s.namehidden}>MONGO DB</div>
                        </div>

                    </div>
                 </div>
                 </div>
               </div>
            <div className={s.otherTech}>
            I also have knowledge in other fields such as authentication, testing, bootstrap, tailwind, jwt tokens, next js and workers, which I use in the development of my more recent projects
            </div>
            </div>
       <div className={s.carrucelBackground}>
        <h1 className={s.projectTitle}> Projects</h1>
         <div className={s.bootContainer}>

                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">

                     <div class="carousel-item active">
                          <h3 className={s.project}>Mascotapp</h3>
                          <a href="https://mascotapps.vercel.app/"><img src={mascotappLogo} class="d-block w-100" alt="..."/></a>
                          <div className={s.spanMascotapp}><span>A complete project aimed at connecting each pet with its owner, with a user authentication and interaction system, here you can post lost pets or pets that are up for adoption. Users close to the publication will be notified of this. It has a point exchange system, a chat among other features detailed in the project, Technologies such as React, Typescript, Javascript, Express, JWT Token, Postgres sql, Auth0 and React Redux were used.</span></div>
                     </div>

                     <div class="carousel-item">
                        <h3 className={s.project}>CountriesApp</h3>
                        <a href="https://countriesappjuka.vercel.app/"><img src={countriesAppLogo} class="d-block w-100" alt="..."/></a>
                        <div className={s.spanMascotapp}><span>My first project, It is a page with all the countries of the world, in which all the places and tourist activities of this are detailed, Users can also add tourist activities in the country they choose, This project was made with React redux, Express, Postgres sql, the design was made with pure Css</span></div>
                     </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
         </div>
        </div>
        <div className={s.end}></div>
     </div>
    )
}