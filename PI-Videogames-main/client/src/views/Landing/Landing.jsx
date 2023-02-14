import React from "react";
import { NavLink } from "react-router-dom";
import style from './Landing.module.css'

export default function Landing(){
	return(
        <div>
        <div>
        <NavLink to="/home"><h1>Welcome to the Videogames App!</h1></NavLink>
        </div>
			<div className={style.landing_container}>
             
                <img src="https://hips.hearstapps.com/hmg-prod/images/most-popular-video-games-of-2022-1642612227.png" alt="Not found" />
			</div>
            </div>
	)
}

