'use strict'

var dataModule = (function () {
    var festival = createFestival();

    function Festival() {
        this.listOfAllMovies = [];
        this.listOfPrograms = [];
    };

    function createFestival() {
    }

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
    };
    
    Movie.prototype.getData = function() {
        return this.title + ', ' + this.length + 'min ' + this.getGenre();
    };
    
    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    function addMovie(movie) {
        return festival.listOfAllMovies.push(movie) -1;
    }

    function isValidMovie(title, length, genre) {

    }

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
        }

        getData() {
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var formatedDate = day + ', ' + (this.movieList.length) + ' movies, duration ' + this.getTotalMoviesLength() + 'min';
        }
    }

    /*class Festival {}*/

    
})();
