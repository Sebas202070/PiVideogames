import { GET_ALL_VIDEOGAMES, GET_ALL_VIDEOGAMESBYID } from "./actions"


const initialState = {
    videogames: [],
    videogame: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_VIDEOGAMES:
        return {...state, videogames: action.payload}

      case GET_ALL_VIDEOGAMESBYID:
        return {...state, videogame:action.payload}

        default: 
        return {...state}
    }
}

export default rootReducer