const express = require('express');
const asyncHandler = require('express-async-handler');
const { getMovies } = require('../controllers/movies');

const router = express.Router();

router.get('/movies', asyncHandler(getMovies));
module.exports = router;
