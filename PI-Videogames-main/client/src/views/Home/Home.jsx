import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardsCointaner from '../../components/cardsCointainer/CardsCointaner'
import Search from '../../components/search/Search'
import { getAllVideogames } from '../../redux/actions'

const Home = () => {

    const [search, setSearch] = useState('')


const dispatch = useDispatch()
useEffect(() =>{
    dispatch(getAllVideogames())
},[dispatch])


const handleName = () => {
    
dispatch(getAllVideogames());
    
  };



  return (
    <div>
        <h1>Video Games</h1>
        <Search handleName={handleName}/>
        <CardsCointaner/>
    </div>
  )
}

export default Home