const Movie = require('../models/Movie');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        Movie.find({})
            .then((movies) => {
                res.render('home', {
                    movies: mutipleMongooseToObject(movies),
                });
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
