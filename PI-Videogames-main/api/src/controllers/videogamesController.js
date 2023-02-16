const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;
const {Op} = require("sequelize");


const createVideogame = async (name, description, released_date,rating,platforms) => {
return  await Videogame.create({ name, description, released_date, rating,platforms});

};

const cleanArray = (arr) => 
    arr.map((e) => {
      return {
        id: e.id,
        name: e.name,
        description: e.description,
        release_date: e.release_date,
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
    const basadate = await Videogame.findAll({where:{name:{[Op.like]:`${name}`}}})
    const getAllVgApi =  (
        await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page_size=15&search=${name}`)
      ).data; 
      const data = getAllVgApi.results
      



      

    return [...basadate, ...data]

};

const videogameByID = async (id, source) => {
  let response 
  

  
  
if(source === "bdd") {
  response =  await Videogame.findByPk(id,{
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    ]
  })
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
