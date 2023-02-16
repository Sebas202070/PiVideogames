import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGenres, getVideogameDetail} from '../../redux/actions';
import style from "./Detail.module.css"


const Detail = () => {
  
/*   let hideText = document.getElementById("displayText")
  displayText_btn.addEventListener("click", toggleText)

  function toggleText() {
    hideText.classList.toggle("show")
    if(hideText.classList.contains("show")) {
      displayText_btn.innerHTML = "Read less"
    }
    else {
      displayText_btn.innerHTML = "Read more"
    }

  }
 */

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const videogame= useSelector(state => state.videogameDetail)
 


  useEffect(() => {
/*     if (id !== undefined && Number(id)) { */
      dispatch(getVideogameDetail (id))
   /*    dispatch(getGenres()) */

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
   
<div className={style.divimg}>
<div className={style.container}>
  <h1>{videogame?.name}</h1>
  <div className={style.img}>
  <img src={videogame.background_image} alt="Not found" width="400" height={"400"}/>
  </div>
  <details>{videogame.description}</details>
  
  <h1>Released: {videogame.released}</h1>
  <h2>Rating: {videogame.rating}</h2>
  <h2>Genre: {videogame.genre || (videogame.Genres && videogame.Genres.map(g => g.name + ', '))}</h2>
 {/*  <h1>Platform: {videogame.platforms}</h1> */}
  {/* {videogame?.platforms.map(e => {
    return <h1>{e.platform}</h1>})} */}
</div>
</div>
    
)
}


export default Detail