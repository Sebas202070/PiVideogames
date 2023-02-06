const {Router} = require("express")
const genreRouter = Router()

genreRouter.get("/", (req, res) => {
    res.send("estoy en genre")
})


module.exports = genreRouter