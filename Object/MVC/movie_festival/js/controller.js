var festival = new Festival();

var createMovieButton = document.querySelector('#create-movie');
var createProgramButton = document.querySelector('#create-program');
var addMovieToProgramButton = document.querySelector('#add-movie');
var inputTitleElement = document.querySelector('#title');
var inputLengthElement = document.querySelector('#length');
var selectGenreElement = document.querySelector('#genre');
var movieErrorElement = document.querySelector('#movie-error');
var movieSelectElement = document.querySelector('#movie-select');
var ulMovieListElement = document.querySelector('#movie-list');
var inputDateElement = document.querySelector('#date');
var programErrorElement = document.querySelector('#program-error');
var ulProgramListElement = document.querySelector('#program-list');
var programSelectElement = document.querySelector('#program-select');
var selectMovieElement = document.querySelector('#movie-select');
var selectProgramElement = document.querySelector('#program-select');
var addMovieErrorElement = document.querySelector('#add-movie-error');


function addMovie() {
  //collect data from user
  var titleValue = inputTitleElement.value;
  var lengthValue = inputLengthElement.value;
  var genreValue = selectGenreElement.value;

  //validate input
  if (!titleValue) {
    movieErrorElement.textContent = 'Title is required!';
    return;
  }
  if (!genreValue) {
    movieErrorElement.textContent = 'Genre is required!';
    return;
  }
  if (!lengthValue) {
    movieErrorElement.textContent = 'Length is required!';
    return;
  }
  movieErrorElement.textContent = '';

  //create movie instance and add it to festival instance
  var movie = new Movie(titleValue, lengthValue, genreValue);
  festival.listOfAllMovies.push(movie);

  //add movie to DOM movie list
  var movieDataLi = document.createElement('li');
  movieDataLi.textContent = movie.getData();
  ulMovieListElement.appendChild(movieDataLi);

  //create new move DOM select option
  var movieOption = document.createElement('option');
  movieOption.textContent = movie.title;
  var index = festival.listOfAllMovies.length - 1;
  movieOption.setAttribute('value', index);
  movieSelectElement.appendChild(movieOption);

  // Clear inputs
  inputTitleElement.value = '';
  inputLengthElement.value = '';
  selectGenreElement.value = '';
}

function addProgram() {
  //collect data from user
  var dateInputValue = inputDateElement.value;

  //validate input
  if (!dateInputValue) {
    programErrorElement.textContent = 'Date required!';
    return;
  }
  var date = new Date(dateInputValue);

  if (date.getTime() < Date.now()) {
    programErrorElement.textContent = 'Invalid date!';
    return;
  }
  hasProgramWithSameDate = festival.listOfPrograms.some(function (program) {
    return date.getTime() === program.date.getTime();
  });

  if (hasProgramWithSameDate) {
    programErrorElement.textContent = 'Program for same date already exists';
    return;
  }
  programErrorElement.textContent = '';

  //create program instance and add it to festival instance
  var program = new Program(date);
  festival.listOfPrograms.push(program);

  //
  //li.setAttribute('id', 'movie-item-' + index);

  //add program to DOM program list
  var index = festival.listOfPrograms.length - 1;
  var li = document.createElement('li');
  li.setAttribute('id', 'program-item-' + index);
  li.textContent = program.getData();
  ulProgramListElement.appendChild(li);

  var option = document.createElement('option');
  option.setAttribute('value', index);
  option.textContent = program.getData();
  programSelectElement.appendChild(option);
}

function addMovieToProgram() {
  //collect data
  var movieIndex = selectMovieElement.value;
  var programIndex = selectProgramElement.value;

  //validate inputs
  if (!movieIndex || !programIndex) {
    addMovieErrorElement.textContent = 'Invalid input';
  }

  var movie = festival.listOfAllMovies[movieIndex];
  var program = festival.listOfPrograms[programIndex];

  program.addMovie(movie);

  var liToUpdateNode = document.querySelector('#program-item-' + programIndex);
  liToUpdateNode.textContent = program.getData();
}

createMovieButton.addEventListener('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
addMovieToProgramButton.addEventListener('click', addMovieToProgram);