'use strict'

var mainModule = (function (ui, data) {
    var createMovieButton = document.querySelector('#create-movie'),
    createProgramButton = documetn.querySelector('#add-movie'),
    addMovieToProgramButton = document.querySelector('#add-movie');

    createMovieButton.addEventListener('click', function () {
    });

    createProgramButton.addEventListener('click', function () {
        var formData = ui.collectProgramData();
        var isValid = data.isValidProgram(formData.date);
        if (!isValid) {
            ui.setProgramError('Invalid input');
            return;
        }

        
    });

    addMovieToProgramButton.addEventListener('click', function () {
        var formData = ui.collectAddMovieFormData();
        var updatedProgram = data.addMovieToProgram(
            formData.movieIndex,
            formData.programIndex
        );
        }

)();