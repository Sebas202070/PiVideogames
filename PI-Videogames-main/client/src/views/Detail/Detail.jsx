import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllVideogamesById } from '../../redux/actions';
import style from "./Detail.module.css"


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const videogame= useSelector(state => state.videogame)


  useEffect(() => {
/*     if (id !== undefined && Number(id)) { */
      dispatch(getAllVideogamesById (id))

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
   
<div className={style.container}>
  <h1>{videogame?.name}</h1>
  <img src={videogame.background_image} alt="Not found" height="220px" width= "220px" />
  <p>{videogame.description}</p>
  <h1>Released: {videogame.released}</h1>
  <h2>Rating: {videogame.rating}</h2>
  {videogame?.platforms.map(e => {
    return <h1>{e.platform}</h1>})}

</div>
    
)
}


export default Detail