import React, {useState} from 'react'
import Card from '../card/Card'
import style from "./CardsCointaner.module.css"
import { useSelector } from 'react-redux'
import { Paginate } from '../paginate/Paginate'


function CardsCointaner() {
     
    const videogames = useSelector(state => state.videogames) 
/* console.log(videogames) */


const [currentPage, setCurrentPage ] = useState(1);
	const videogamesPerPage = 15
	const ultimo = currentPage * videogamesPerPage
	const primero = ultimo - videogamesPerPage
  const games = videogames.slice(primero, ultimo)
	

	const setPagination = (page) => {
		return setCurrentPage(page)
	}


  return (
    <div className={style.CardsCointaner}>
        
{games?.length > 0 && games?.map(a => {
  /* {props?.length > 0 && props?.map(a => { */
    return <Card
    key={crypto.randomUUID()}

    background_image= {a.background_image}
    id= {a.id}
    name={a.name}
    genre={a.genre}
   
   />
    


})}
<div>
<Paginate
videogamesPerPage={videogamesPerPage}
allVideogames={videogames.length}
setPagination={setPagination}
currentPage={currentPage}
setCurrentPage= {setCurrentPage}
/>
</div>







        
    </div>
  )
}

export default CardsCointaner