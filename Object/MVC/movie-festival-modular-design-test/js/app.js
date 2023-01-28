'use strict'

var mainModule = (function (ui, data) {
    var createMovieButton = document.querySelector('#create-movie'),
    createProgramButton = documetn.querySelector('#create-program'),
    addMovieToProgramButton = document.querySelector('#add-movie');

    var onMovieCreateClickHandler = function () {
        var formData = ui.collectProgramData();
        var isValid = data.isValidProgram(formData.date);
        if (!isValid) {
            ui.setProgramError('Invalid input');
            return;
        }
        var createdMovie = data.createMovie(formData.title, formData.length, formData.genre
        );
        var index = data.addMovie(createdMovie);
        ui.updateMovieList(createdMovie, index);
        ui.clearInputs();
    };

    var onProgramCreateClickHandler = function() {
        var formData = ui.collectProgramData();
        var isValid = data.isValidProgram(formData.date);
        if (!isValid) {
            ui.setProgramError('Invalid input');
            return;
        }
        var createdProgram = data.createProgram(formData.date)
        var index = data.addProgram(createdProgram);
        ui.updateProgramList(createdProgram, index);
        ui.clearInputs();
    };

    var onAddMovieToProgramClickHandler = function() {
        var formData = ui.collectAddMovieFormData();
        var updatedProgram = data.addMovieToProgram(formData.movieIndex, formData.programIndex);
        if (!updatedProgram) {
            ui.setMovieProgramError('Invalid input');
            return;
        }
        ui.updateProgramData(updatedProgram.program, updatedProgram.oldProgram);
    };

    createMovieButton.addEventListener('click', onMovieCreateClickHandler);

    createProgramButton.addEventListener('click', onProgramCreateClickHandler);

    addMovieToProgramButton.addEventListener('click', onAddMovieToProgramClickHandler);
    
})(uiModule, dataModule);



 /* createMovieButton.addEventListener('click', function () {
    });
    createProgramButton.addEventListener('click', function () {
        var formData = ui.collectProgramData();
        var isValid = data.isValidProgram(formData.date);
        if (!isValid) {
            ui.setProgramError('Invalid input');
            return;
        }
        createMovie = data.createMovie(
            formData.title,
            formData.length,
            formData.genre
        );
        var index = data.addMovie(createdMovie);
        ui.updateMovieList(createdMovie, index);
        ui.clearInputs();
    });

    addMovieToProgramButton.addEventListener('click', function () {
        var formData = ui.collectAddMovieFormData();
        var updatedProgram = data.addMovieToProgram(
            formData.movieIndex,
            formData.programIndex
        );
        }

    })(uiModule, dataModule);*/