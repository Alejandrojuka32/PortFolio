import React from "react";
import mascotappLogo from "../img/mascotapp home.png"
import countriesAppLogo from "../img/countriesapp.png"
import s from "../componentsStyles/Home.module.css"
export default function Carousel(){
    return(
        <div>
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
    )
}