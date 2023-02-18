const Movie = require('../models/Movie');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/movies
    storedMovies(req, res, next) {
        // res.json(res.locals._sort);
        let movieQuery = Movie.find({});
        if(req.query.hasOwnProperty('_sort')){
            movieQuery = movieQuery.sort({
                [req.query.column]: req.query.type
            });
        }
        Promise.all([movieQuery, Movie.countDocumentsDeleted()])
            .then(([movies, deletedCount]) =>
                res.render('me/stored-movies', {
                    deletedCount,
                    movies: mutipleMongooseToObject(movies),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/movies
    trashMovies(req, res, next) {
        Movie.findDeleted({})
            .then((movies) =>
                res.render('me/trash-movies', {
                    movies: mutipleMongooseToObject(movies),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
