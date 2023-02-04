'use strict'

var dataModule = (function () {
    /*function createFestival() { 
        return new Festival()
    };*/

    class Festival {
        constructor() {
        this.listOfAllMovies = [];
        this.listOfPrograms = [];
        };
    };

    var festival = new Festival();

    /*var Movie = new Movie();*/

    class Movie {
        constructor (title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
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
    
        /*function createMovie(title, length, genre) {
            return new Movie(title, length, genre);
        };*/

        addMovie(Movie) {
            return festival.listOfAllMovies.push(Movie) - 1;
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

        /*var Program = createProgram(date) {
        return new Program(date);
        }; */

        addMovie(movie) {
            this.movieList.push(movie);
            };
        /*function function addProgramToFestival(program){
        return festival.programList.push(program) -1;
        };*/
        /*function addMovieToFestival(movie) {
            return festival.movieList.push(movie) - 1;
        }*/

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

        isValidProgram(date){
            if (!date) {
                return false;
            } else {
                return true;
            };
        };

    };

    function addToFestival(movieIndex, programIndex) {
        var Movie = festival.movieList[movieIndex]
        var program = festival.programList[programIndex]
        program.movieList.push(Movie);
        var programList = document.querySelector("#program-item-" + programIndex);
        programList.textContent = program.getData();  
    };


    return {
        isValidMovie: isValidMovie,
        isValidProgram: isValidProgram,
        addMovie: addMovie,
        addMovieToFestival: addMovieToFestival,
        createProgram: createProgram,
        addProgramToFestival: addProgramToFestival,
        isValidMovieAndProgram: isValidMovieAndProgram,
        addToFestival: addToFestival
    };

})();
