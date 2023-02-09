const { Videogame } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const createVideogame = async (name, description, released_date) => {
  await Videogame.create({ name, description, released_date });
};

const cleanArray = (arr) => 
    arr.map((e) => {
      return {
        id: e.id,
        name: e.name,
        description: e.description,
        released_date: e.released_date,
        rating: e.rating,
        platforms: e.platforms,
      };
    });
   


const getAllVideogames = async () => {
  
  const getAllVgApi = (
    await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page_size=100`)
  ).data;
  
  const data = getAllVgApi.results

  const results = data.map(e => { return {
       
        name: e.name,
        background_image: e.background_image,
        genre: e.genres.map((el) => el.name).toString(),
        id: e.id,
        created: false,
        
  }
})

  const getAllDatabaseVg = await Videogame.findAll();
  const getAll = [...results, ...getAllDatabaseVg];
  return getAll;
};

const searchByVideogame = async (name) => {
    const basadate = await Videogame.findAll({where:{name:name}})
    const getAllVgApi = (
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`)
      ).data;
      const data = getAllVgApi.results
      const dataFilter = data.filter((e) => e.name === name



      )

    return [...basadate, ...dataFilter]

};

const videogameByID = async (id, source) => {
  let response 
  

  
  
if(source === "bdd") {
  response =  await Videogame.findByPk(id)
}
else {
  const dataApi = await axios.get(
   
    `https://api.rawg.io/api/games/${Number(id)}?key=${YOUR_API_KEY}` 
 )
response = dataApi.data
}

   /*  const api = (
        await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`
        )
      ).data */

    /*   const apiFilter = api.map(e => { return {
        name: e.name,
        description: e.description,
        released_date: e.released
      }}) */
  
 /*  
    const videogame =
 
    source === "api"
      ? apiFilter
      : await Videogame.findByPk(id);
     

  return videogame; */
  return response;
};

module.exports = {
  createVideogame,
  videogameByID,
  getAllVideogames,
  searchByVideogame
};
