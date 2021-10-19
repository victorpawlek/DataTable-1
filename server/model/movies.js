const db = require('../db');

async function getMovies() {
  const { rows } = await db.query('SELECT * FROM movies');
  return {
    code: 200,
    data: rows,
  };
}



module.exports = { getMovies };
