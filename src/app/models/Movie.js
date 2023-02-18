const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        _id: { type: Number, },
        name: { type: String, required: true },
        disc: { type: String },
        videoId: { type: String, required: true },
        image: { type: String },
        team: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);
// Add plugins
mongoose.plugin(slug);
Movie.plugin(AutoIncrement);
Movie.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
module.exports = mongoose.model('Movie', Movie);
