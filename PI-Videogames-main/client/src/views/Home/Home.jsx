import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Search } from '../../components/search/Search'
import { filterByCreation, filterByGenre, orderByName, orderByRating, getGenres, getVideogames, cleanSearch } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { Paginate } from '../../components/paginate/Paginate'
import style from "./Home.module.css"
import Card from '../../components/card/Card'



const Home = () => {


     const dispatch = useDispatch()
     const history = useHistory()
    const [search, setSearch] = useState('')
const genres = useSelector(state => state.genres)
const videogames = useSelector(state => state.videogames)


const [alfabetical, setAlfabetical] = useState('')
	const [rating, setRating] = useState('')

	 const [currentPage, setCurrentPage ] = useState(1);
	const videogamesPerPage = 15
	const ultimo = currentPage * videogamesPerPage
	const primero = ultimo - videogamesPerPage
    const games = videogames.slice(primero, ultimo)

	const setPagination = (page) => {
		return setCurrentPage(page)
	} 

	useEffect(() =>{
		if(!videogames.length)dispatch(getVideogames())
		dispatch(getGenres())
	 },[dispatch, videogames.length])


     /* */
/*      console.log("games", games) */









/* useEffect(() =>{
    dispatch(getVideogames())
},[dispatch])


const handleName = () => {
    
dispatch(getVideogames());
    
  };



  return (
    <div>
        <h1>Video Games</h1>
        <Search handleName={handleName}/>
        <CardsCointaner/>
    </div>
  )
} */

const handlerRating = (event) => {
    event.preventDefault()
    dispatch(orderByRating(event.target.value))
    setRating(`Order ${event.target.value}`)
}

const handlerName = (event) => {
    event.preventDefault()
    dispatch(orderByName(event.target.value))
    setAlfabetical(`Order ${event.target.value}`)
}

const handlerGenre = (event) => {
    event.preventDefault()
    dispatch(filterByGenre(event.target.value))
}

const handleCreatedAt = (event) => {
    event.preventDefault()
    dispatch(filterByCreation(event.target.value))
}

const handleClick = () => {
    history.go(0);
}

return (
    <div className={style.divimg}>
       
            <h1>Home</h1>
            <div className="search-bar">
                <Search/>
            </div>
            <div className="f-container">
                <div className="filters-container">
                    <div className='filter'>
                        <label>Filter by Name: </label>
                            <select key='selectFilterName' name="FilterByName" onChange={(event) => handlerName(event)}>
                                    <option key='ALLBYNAME'defaultValue='ALL'></option>
                                    <option key='A-Z' value='A-Z'>A-Z</option>
                                    <option key='Z-A' value='Z-A'>Z-A</option>
                            </select>
                    </div>
                    <div className='filter'>
                        <label> Rating: </label>
                            <select  key='selectFilterRating' name="FilterByRating" onChange={(event) => handlerRating(event)}>
                                    <option key='ALLRATING' defaultValue='ALL'></option>
                                    <option key='0-5' value='0-5'>0-5</option>
                                    <option key='5-0' value='5-0'>5-0</option>
                            </select>
                    </div>
                    <div className='filter'>
                        <label>Genre: </label>
                            <select key='selectFilterGenre' onChange={(event) => handlerGenre(event)}>
                                <option key='ALLGENRE' defaultValue='ALL'></option>
                                { genres && genres.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))}
                            </select>
                    </div>
                    <div className='filter'>
                        <label>Created At:</label>
                            <select key='selectFilterCreation' onChange={(event) => handleCreatedAt(event)}>
                                <option key='ALLCREATION' defaultValue='ALL'></option>
                                <option key='db' value='db'>Database</option>
                                <option key='api' value='api'>API</option>
                            </select>
                    </div>
                    <div className='filter'>
                            <button className='clear-btn' onClick={() => handleClick()}>Reload Videogames</button> 
                    </div>
                </div>
            </div >
            <div className={style.con}>
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
</div>
                {/* <CardsCointaner/> */}
                {/* {games.map(v =>  <CardsCointaner
                    key={v.id}
                    id={v.id}
                    name={v.name}
                    genre={v.genre || (v.Genres && v.Genres.map(g => g.name))}
                    image= {v.image ? v.image : v.image = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'}
                    rating= {v.rating}
                />)} */}
          
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





export default Home



