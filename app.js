const Crawler = require('crawler');
const fs = require('fs');
const helper = require("./helper");
const movideFunction = require("./movie-functions");

var c = new Crawler({
    maxConnection:5,
    callback: function(error, res, done) {
        if(error) {
            console.error(error);
        }else{
            const $ = res.$,
            $movieList = $(".cinema__movies__list");
            // saveFile(res.body);

            const newText = helper.replaceEmptySpace($movieList.text(),"/"); 
            console.log(movideFunction.getMovie(newText));
        }
        done();
    }
});

c.queue("https://www.iguatemifortaleza.com.br/cinema/");