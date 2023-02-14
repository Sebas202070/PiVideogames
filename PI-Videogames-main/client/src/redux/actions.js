import axios from "axios"



export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL"
export const POST_VIDEOGAME = "POST_VIDEOGAME"
export const GET_GENRES = 'GET_GENRES'
export const GET_VIDEOGAMES_BY_NAME = "GET_VIDEOGAMES_BY_NAME"
export const ORDER_BY_NAME = " ORDER_BY_NAME"
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const ORDER_BY_RATING = "ORDER_BY_RATING"
export const CLEAN_DETAIL = "CLEAN_DETAIL"
export const FILTER_BY_CREATION = "FILTER_BY_CREATION"
export const CLEAN_SEARCH = "CLEAN_SEARCH"
export const SET_SEARCH = "SET_SEARCH "



export const getGenres =  () => {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/genres').catch(error => alert(error.message))
			return dispatch({type: GET_GENRES, payload: response.data})

    }
}

export const getVideogames =  () => {
    return async function(dispatch) {
   const apidata= await axios.get("http://localhost:3001/videogames")
   const {result} = apidata.data
   dispatch({
    type: GET_ALL_VIDEOGAMES,
    payload: result
   })
    
   

}
}

export const getVideogameDetail=  (id) => {
    return async function(dispatch) {
   const apidata= await axios.get(`http://localhost:3001/videogame/${id}`)
   const {videogame} = apidata.data
   dispatch({
    type: GET_VIDEOGAME_DETAIL,
    payload: videogame
   })
    
   

}
}


export const createVideogame = (videogame) => {
    return function (dispatch)    {
        return axios
        .post("http://localhost:3001/videogames",videogame).then((data) => {
            return dispatch({type: POST_VIDEOGAME, payload: data})
        })
    }
}


export function getVideogamesByName (name) {
	return async function (dispatch) {
		const response = await axios.get(`http://localhost:3001/videogames?name=${name}`).catch(error => alert(error.message))
			return dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: response.data})
	}
}

export function orderByName (payload) {
	return {
		type: ORDER_BY_NAME,
		payload
	}
}

export function filterByGenre (payload){
	
	return {
		type: FILTER_BY_GENRE,
		payload
	}
}

export function orderByRating(payload){
	return {
		type: ORDER_BY_RATING,
		payload
	}
}

export function cleanDetail () {
	return {type :CLEAN_DETAIL}
}

export function filterByCreation (payload) {
	return {
		type: FILTER_BY_CREATION,
		payload
	}
}

export function cleanSearch () {
	return {
		type: CLEAN_SEARCH,
	}

}

export function setSearch (payload) {
    return {
        type: SET_SEARCH,
        payload
    }
}