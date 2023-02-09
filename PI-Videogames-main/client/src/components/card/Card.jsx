import React from 'react'
import { NavLink } from "react-router-dom"
import style from "./Card.module.css"


function Card(props) {
  console.log(props)
  return (
    <NavLink to={`/detail/${props.id}`} className={style.container}>
        <img src={props.background_image} alt="Not found" height="220px" width= "220px" />
        <p>id: {props.id}</p>
        <p >name:  {props.name} </p>
        <p>genre: {props.genre}</p>
    </NavLink>
  )
}

export default Card