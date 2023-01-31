'use strict'

var uiModule = (function () {
    var movieErrorElement = document.querySelector('movie-error');
    var inputTitleElement = document.querySelector('title');
    var inputLenghtElement = document.querySelector('length');
    var selectGenreElement = document.querySelector('#genre');
    var ulMovieListElement = document.querySelector('#movie-list');
    var movieSelectElement = document.querySelector('#movie-select');
    var inputDateElement = document.querySelector('#date');
    var programErrorElement = document.querySelector('#program-error');
    var ulProgramListElement = document.querySelector('#program-list');
    var movieToProgramErrorElement = document.querySelector('#movie-to-program-error');
    var programSelectElement = document.querySelector('#program-select');

    function collectMovieData(){
        var titleValue = inputTitleElement.value;
        var lengthValue = inputLenghtElement.value;
        var genreValue = selectGenreElement.value;

        return {
            title: titleValue,
            genre: genreValue,
            length: lengthValue,
        };
    };

    function setMovieError(error){
        movieErrorElement.textContent = error;
    };

    function updateMovieList(movie, index) {
        var movieDataLi = document.createElement('li');
        movieDataLi.textContent = movie.getData();
        ulMovieListElement.appendChild(movieDataLi);

        var movieOption = document.createElement('li');
        movieOption.textContent = movie.title;
        movieOption.setAttribute('value', index);
        movieSelectElement.appendChild(movieOption);
    };

    function clearInputs() {
        movieErrorElement.textContent = '';
        inputTitleElement.value = '';
        inputLenghtElement.value = '';
        selectGenreElement.value = '';
    };

    function collectProgramData() {
        var dateInputValue = inputDateElement.value;
        return {
            dateInputValue: dateInputValue,
        };
    };

    /*function setMovieToProgramError(error) {

    }*/
    function programErrorElement(error) {

    };

    function setProgramError(error) {

    }; 

    function updateProgramList(program, index) {
        var index = festival.programList.length - 1;
        var li = document.createElement("li");
        li.setAttribute("id", "program-item-" + index);
        li.textContent = program.getData();
        ulProgramListElement.appendChild(li);
    
        var option = document.createElement("option");
        option.setAttribute("value", index);
        option.textContent = program.getData();
        selectProgramElement.appendChild(option);
    };

    function programSelectElement() {

    };


    function updateProgramData(program, oldProgramData) {
        var programListElements = document.querySelectorAll('#program-list li');
        var programSelectOptions = document.querySelectorAll('#program-select option');

    programListElements.forEach(function (li) {
        if (li.textContent === oldProgramData) {
            li.textContent = program.getData();
        }
    });

    programSelectOptions.forEach(function (option) {
        if (option.textContent ===oldProgramData) {
            option.textContent = program.getData(); 
        }
    });
    movieToProgramErrorElement.textContent = '';

    
    return {
        collectMovieData: collectMovieData,
        setMovieError: setMovieError,
        updateMovieList: updateMovieList,
        clearInputs: clearInputs,
        collectProgramData: collectProgramData,
        setProgramError: setProgramError,
        updateProgramList: updateProgramList,
        collectAddMovieFormData: collectAddMovieFormData,
        setMovieToProgramError: setMovieToProgramError,
        updateProgramData: updateProgramData,
        };
    };
})();
