'use strict'

var dataModule = (function () {
    var festival = createFestival();

    class Festival {
        constructor() {
        this.listOfAllMovies = [];
        this.listOfPrograms = [];
        };
    };

    /*function createFestival() {
    }*/

    class Movie {
        constructor (title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        };

        getGenreCode() {
        var firstLetter = this.genre[0].toUpperCase();
        var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
        return firstLetter + lastLetter;
        };

        getData() {
            return this.title + ', ' + this.length + 'min ' + this.getGenre();
    };
    
    createMovie() {
        return new Movie(title, length, genre);
    };

    addMovie() {
        return festival.listOfAllMovies.push(movie) -1;
    };

    isValidMovie() {
            if (!title || !genre || !length) {
                return false;
            } return true;
    };   
    };

    class Program {
        constructor(date) {
            this.date = date;
            this.movieList = [];
            };

        addMovie(movie) {
            this.movieList.push(movie);
            };

        getTotalNumOfMovies() {
            return this.movieList.length;
        };

        getTotalMoviesLength() {
            var total = 0;
            this.movieList.forEach(function (movie) {
                total += movie.length;
            }); 
            return total;
        };

        getData() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var formatedDate = day + ', ' + (this.movieList.length) + ' movies, duration ' + this.getTotalMoviesLength() + 'min';
        };
    };
})();
