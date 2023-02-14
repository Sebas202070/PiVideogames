const { Genre } = require("../db")
const { YOUR_API_KEY } = process.env;
const axios = require("axios");


async function getAllGenres () {
	let genres = []
	console.log(genres)
	const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
		.then(response => response.data)
			allGenres.results.forEach(g =>{
				genres.push({
					name: g.name,
				})
			})
	/*  genres.forEach(g => {
		 Genre.findOrCreate({
			where: {
				name: g.name,
			}
		})
	}) */
	return genres
}


module.exports = {getAllGenres}