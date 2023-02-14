const {getAllGenres} = require("../controllers/genresController")



const genresHandler =  async(req, res)=> {
	try {
		const genres = await getAllGenres()
		console.log(genres)
		return res.status(200).send(genres)
	} catch (error) {
		return res.status(404).send(error.message)
	}
}



module.exports = {genresHandler}