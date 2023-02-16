import './Search.module.css'
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName, cleanSearch } from "../../redux/actions";


/* export default function Search({handleName}) {
  const [searchText, setSearchText] = useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    handleName(searchText)
  }
  console.log(searchText)

  return (
      <form className={style.searchBox} onSubmit={handleSubmit}>
        <button  type='submit' className={style.searchBtn} >
          <i className="material-icons">search</i>
        </button>
        <input
          className={style.searchTxt}
          type="text"
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value)}
          placeholder="Search Gallery"
        />
      </form>
  );
} */

export function Search (){
	const dispatch = useDispatch()
	const [name, setName] = useState('');
	const handlerChange = (event) => {
		event.preventDefault()
		setName(event.target.value)
	}
	const handlerSubmit = (event) => {
		event.preventDefault();
		if(!name.length) alert('Insert a name!');
		else if (!/^[a-zA-Z0-9 ]{0,25}$/.test(name)){
			alert('Name invalid')
		}
		else {
			/* dispatch(cleanSearch())  */
			dispatch(getVideogamesByName(name));
			setName('')
			 
		
		}
	}
	return(
			<form  className="search-container" onSubmit={handlerSubmit}>
				<input className="search-input" type="text" placeholder=" Insert name..." value={name} onChange={handlerChange}/>
				<div className='search-btn'>
					<button onChange={(event)=> handlerSubmit(event)} className="s-btn" type="submit">Search</button>
				</div>
			</form>
	)
}
