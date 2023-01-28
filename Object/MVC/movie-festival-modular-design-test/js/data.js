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
            
        }
    }












    var festival = createFestival();

    function Festival() {
        this.listOfAllMovies = [];
        this.listOfPrograms = [];
    }
    function createFestival(){
        return new Festival();
    }
    class Movie(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;
    };
    Movie.prototype.getGenre
}
)

