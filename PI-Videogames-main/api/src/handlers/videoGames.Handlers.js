const { createVideogame, videogameByID, getAllVideogames, searchByVideogame } = require("../controllers/videogamesController")




const getVideogamesHandler = async (req, res) => {
    try {
        const {name} = req.query
        const result = name ? await searchByVideogame(name) :await getAllVideogames()

          res.status(200).json({result, status: "succes"})
    
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
    
    }

    const getVideogamesHandlerById = async (req, res) => {
        const {id} = req.params
        const source = isNaN(id)? "bdd" : "api"
        try {
         const videogame = await videogameByID(id,source)
       
        res.status(200).json({videogame, status: "succes"})
     
        } catch (error) {
            res.status(400).json({error: error.message})
           
        }
        
        
    }


    const postVideogamesHandler = async (req, res) => {
        try {
            const {name, description, released_date, rating,platforms, image} = req.body
       const newVideogame = await createVideogame(name, description, released_date, rating, platforms, image)
       console.log(newVideogame)
       res.status(201).json({newVideogame, status:"success"})
        } catch (error) {
            res.status(400).json({error: error.message})
            
        }
        
       
    }


    module.exports = {
        getVideogamesHandler,
        getVideogamesHandlerById,
        postVideogamesHandler
    }