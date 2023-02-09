import React from 'react'
import Card from '../card/Card'
import style from "./CardsCointaner.module.css"
import { useSelector } from 'react-redux'



function CardsCointaner() {
     
    const videogames = useSelector(state => state.videogames)

  return (
    <div className={style.CardsCointaner}>
        
{videogames?.length > 0 && videogames?.map(a => {
    return <Card
    key={crypto.randomUUID()}

    background_image= {a.background_image}
    id= {a.id}
    name={a.name}
    genre={a.genre}
   
   />
    


})}
        
    </div>
  )
}

export default CardsCointaner