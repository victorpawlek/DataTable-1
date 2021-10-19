const model = require('../model/movies');

const getMovies = async (req, res) => res.status(200).json(await model.getMovies());

module.exports = { getMovies };
