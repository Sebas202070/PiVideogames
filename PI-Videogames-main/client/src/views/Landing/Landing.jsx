import React from "react";
import { NavLink } from "react-router-dom";
import style from './Landing.module.css'

export default function Landing(){
	return(
        /* 
           <>
          <img src="https://media.wired.com/photos/61770e5c1309ffa6512c62ed/master/pass/Gear-10-Dead-Games-Series-133425591.jpg" alt="Not found" width="1400px" height="700px">
       
      <h1 className={style.divc}>Welcome to the Videogames App!</h1>
        
        <h1 className={style.divc1}>
         <NavLink to="/home"> <button className={style.divc1}>Enter!!</button></NavLink>
         </h1> 
			{ <div className={style.landing_container}> }
             
                
			{ </div> }
       </img>
      </>   */
      <div className={style.divimg}>
  <h1 className={style.divc}>Welcome to the Videogames App!</h1>
  <h1>
         <NavLink to="/home"> <button className={style.divc1}>Enter!!</button></NavLink>
         </h1> 
      </div>
	)
  
}

