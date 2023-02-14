const {Router} = require("express")
const { genresHandler } = require("../handlers/genre.Handlers")
const genreRouter = Router()

genreRouter.get("/", genresHandler)


module.exports = genreRouter