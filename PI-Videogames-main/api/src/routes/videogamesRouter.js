const {Router} = require("express")
const { getVideogamesHandler, getVideogamesHandlerById, postVideogamesHandler } = require("../handlers/videoGames.Handlers")
const videogamesRouter = Router()

videogamesRouter.get("/", getVideogamesHandler
)

videogamesRouter.get("/:id", getVideogamesHandlerById )

videogamesRouter.post("/", postVideogamesHandler)

module.exports = videogamesRouter