'use strict'

var dataModule = (function () {
    class Movie {
        constructor (title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        };

    getGenre() {
        var firstLetter = this.genre[0].toUpperCase();
        var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
        return firstLetter + lastLetter;
        };

    getData() {
        return this.title + ', ' + this.length + 'min ' + this.getGenre();
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
