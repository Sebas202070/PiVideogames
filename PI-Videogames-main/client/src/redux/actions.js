import axios from "axios"



export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES"
export const GET_ALL_VIDEOGAMESBYID = "GET_ALL_VIDEOGAMESBYID"



export const getAllVideogames =  () => {
    return async function(dispatch) {
   const apidata= await axios.get("http://localhost:3001/videogames")
   const {result} = apidata.data
   dispatch({
    type: GET_ALL_VIDEOGAMES,
    payload: result
   })
    
   

}
}

export const getAllVideogamesById =  (id) => {
    return async function(dispatch) {
   const apidata= await axios.get(`http://localhost:3001/videogames/${id}`)
   const {videogame} = apidata.data
   dispatch({
    type: GET_ALL_VIDEOGAMESBYID,
    payload: videogame
   })
    
   

}
}
