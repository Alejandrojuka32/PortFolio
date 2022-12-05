import React from "react";
import s from "../componentsStyles/Nav.module.css"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {FaInstagramSquare} from "react-icons/fa"
import { IconContext } from "react-icons";
export default function Nav(){
    return(
        <div className={s.Nav}>
            <div className={s.container}>
            <a className={s.btn} href="/">Contact</a>
            <a className={s.btn} href="#projects">Projects</a>
            <a className={s.btn} href="/#technologies">Technologies</a>
            </div>
            <h1 className={s.name}>Alejandro Juka</h1>
            <div className={s.links}>
            <IconContext.Provider value={{ color: "white",size: "25px", className: "global-class-name" }}>
                <a classname={s.btn2} href="https://www.linkedin.com/in/alejandro-juka-a20846243/">{ <AiFillLinkedin/>}</a>
                <a classname={s.btn2} href="https://github.com/Alejandrojuka32"><AiFillGithub /></a>
                <a classname={s.btn2} href="https://www.instagram.com/alejandrojuka_/"><FaInstagramSquare /></a>
            </IconContext.Provider>
            </div>
        </div>
    )
}