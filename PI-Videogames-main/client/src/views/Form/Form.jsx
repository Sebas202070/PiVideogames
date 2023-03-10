

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createVideogame, getGenres } from "../../redux/actions";
import style from "./Form.module.css"
/* import './style/Form.css' */

export const validations = (input) => {
	let error ={}

	if(!input.name){
		error.name = 'Name is required'
	} else if (!/^[a-zA-Z0-9 ]{0,25}$/.test(input.name)){
		error.name = 'Name invalid'
	}

	if(!input.description){
		error.description = 'Description is required'
	} else if(!/^[a-zA-Z0-9 ,.]{25,150}$/.test(input.description)){
		error.description = 'Description invalid'
	}

	if(!input.rating){
		error.rating = 'Rating is required'
	} else if(!/^[1-5]\d*(\.\d)?$/.test(input.rating)) error.rating = 'Rating invalid'

	// if(!input.platforms) {
	// 	error.platforms = 'Select a platform!'
	// }
	return error;
}


export default function VideogameCreate(){
	
	const dispatch = useDispatch();
	
	const genreDb = useSelector(state => state.genres)


	const platforms = [
		'PC',
		'Playstation 5',
		'Playstation 4',
		'Playstation 3',
		'Playstation 2',
		'Xbox One',
		'Xbox Series S/X',
		'Xbox 360',
		'Nintendo Switch',
		'iOS',
		'Android',
		'Nintendo 3DS',
		'Nintendo DS',
		'Wii',
	]
	
	const [error, setError] = useState({})

	const [input, setInput] = useState({
		name: '',
		description: '',
		rating: 1,
		released_date: '',
		platforms: '',
		genres: []
	})

	useEffect(() =>{
	   dispatch(getGenres())
	},[dispatch])
	
	const handlerInput = (event) => {
		setInput({
			...input,
			[event.target.name] : event.target.value
		})
		setError(validations({
			...input,
			[event.target.name]: event.target.value
		}))
	}

	const handleSelectGenres = (event) => {
		setInput({
			...input,
			genres: [...input.genres, event.target.value]
		})
	}
	const handleCheckedPlatforms = (event) => {
		if(event.target.checked){
			setInput({
				...input,
				platforms: input.platforms ? input.platforms + ', ' + event.target.value : event.target.value
			})
		}
	}


	const handlerSubmit = (event) => {
		event.preventDefault()
		dispatch(createVideogame(input))
		event.target.reset()
		setInput({
			name: '',
			description: '',
			rating: 1,
			released_date: '',
			platforms: [],
			genres: []
		})
	}


	return (
		<div className={style.divimg}>
		<div className="container-form">
			<div className="form-container">
			<form className="form" onSubmit={(event) => handlerSubmit(event)}>
				<div className="form-item">
					<p className="form-title">Create Your Own Videogame!</p>
				</div>
					<div className="form-item">
						<label>Name: </label>
							<input id="name" className='text-input' type='text' name='name' value={input.name} onChange={(event) => handlerInput(event)} placeholder='Be creative!...'></input>
							{error.name && (<p className="error">{error.name}</p>)}
					</div>
						<label>Description: </label>
					<div className="form-item">
							<textarea  id="descr" name='description' value={input.description} onChange={(event) => handlerInput(event)} placeholder='How would you describe this game?'></textarea>
							{error.description && (<p className="error" >{error.description}</p>)}
					</div>
					<div className="form-item" id="date">
							<label>Release Date: </label>
							<input className="releaseDate" type='date' name='released_date' max='2022-11-30' value={input.release_date} onChange={(event) => handlerInput(event)}></input>
					</div>
					<div className="form-item" id="rat">
						<label>Rating: </label>
							<input  className='rating' type='number' min='1' max='5' step='0.1' name='rating' value={input.rating} onChange={(event) => handlerInput(event)}></input>
							{error.rating && (<p className="error">{error.rating}</p>)}
					</div>
					<div className="form-item" id="gen">
						<label>Genre: </label>
							<select  name='genres' value={input.genres} onChange={(event) => handleSelectGenres(event)}>
								<option>Select Genre</option>
								{
									genreDb && genreDb.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))
								}
							</select>
					</div>
					<div className="form-item-selected">
								<ul><li key='selectedGenres'>Selected genres: {input.genres.map(g => g + ',')}</li></ul>
					</div>
					<label className="form-item">Platforms: </label>
					<div className="form-item" id="plat">
							{/* {error.platforms && (<p className="error">{error.platforms}</p>)} */}
						<div className='platform-selector'>
							{platforms.map(p => (
								<div className="select">
									<input
									type='checkbox'
									name='platforms'
									value={p}
									onChange={(event) => handleCheckedPlatforms(event)}
									></input>
									<label name={p}>{p}</label>
								</div>
									))}
						</div>
					</div>
					<div className="form-item">
						<button className="submit-btn" type="submit" disabled={!input.name || !input.description || !input.platforms.length } >Create</button>
					</div>
				</form>
			</div>
		</div>
		</div>
	)
}



/* const Form = () => {
  const dispatch = useDispatch()
const [form, setForm] = useState({
  name: "",
  description: "",
  released_date: "",
  rating: "",

})

const changeHandler = (e) => {
const property = e.target.name
const value = e.target.value
setForm({...form, [property]: value})
validate(form)
}

const validate = (form) => {
  if((form.Released_date) ===Number){
    console.log("too bienn")
  }
  else{
    console.log("Error")
  }
}

const handleSubmit = (e) => {

e.preventDefault()
  dispatch(createVideogame(form))

}
 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>

      <div>
        <label>Name: </label>
          <input type="text" value={form.Name} onChange={changeHandler} name="name"/>
          </div>
          <div>
        <label>Description: </label>
          <input type="text" value={form.Description} onChange={changeHandler}  name="description"/>
          </div>
          <div>
        <label>Released_date: </label>
          <input type="text" value={form.Released_date} onChange={changeHandler}  name="released_date"/>
          </div>
          <div>
        <label>Rating: </label>
          <input type="text" value={form.Rating} onChange={changeHandler}  name="rating"/>
          </div>
          <button type='submit'>Submit</button>

      
    </form>
  )
}

export default Form */