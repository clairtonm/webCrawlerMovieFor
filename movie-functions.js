const helper = require('./helper');
var _ = require("lodash");
const moviesTypes = require('./const/movies-types');

//((Aventura|Terror).*?(Aventura|Terror))

function getMovie(text){
    
    const typesText = _.reduce(moviesTypes.types, (a,b) => {
        return a + "|" + b
    });

    const regexString = "(" + typesText + ").*?(" + typesText + ")";
    const movieText = text.search(regexString)[0];
    
}

// function getMoviesFromText(text){

// }

module.exports = {
    getMovie: getMovie
};