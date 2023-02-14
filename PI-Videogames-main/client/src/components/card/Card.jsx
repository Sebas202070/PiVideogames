import React from 'react'
import { NavLink } from "react-router-dom"
import style from "./Card.module.css"


function Card(props) {
  
  return (
    <div className={style.container}>
    <NavLink to={`/detail/${props.id}`}>
        <img src={props.background_image} alt="Not found" height="320px" width= "420px"  />
        </NavLink>
        <p>id: {props.id}</p>
        <p >name:  {props.name} </p>
        <p>genre: {props.genre}</p>
   
    </div>
  )
}

export default Card