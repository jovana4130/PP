'use strict'

var uiModule = (function() {
selectGenreElement = document.querySelector('#genre');
movieSelectElement = document.querySelector('#movie-select');
ulMovieListElement = document.querySelector('#movie-list');
inputDateElement = document.querySelector('#date');
programErrorElement = document.querySelector('#program-error');
ulProgramListElement = document.querySelector('#program-list');
movieToProgramErrorElement = document.querySelector('#movie-to-program-error'),
programSelectElement = document.querySelector('#program-select');

function collectMovieData(){

}
function clearInputs() {
    movieErrorElement.textContent = '';
    inputTitleElement.value = '';
    inputLenghtElement.value = '';
    selectGenreElement.value = '';
}
function collectProgramData() {

}

function setProgramError(error) {

}

function updateProgramData(program, oldProgramData) {

}

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
}());


