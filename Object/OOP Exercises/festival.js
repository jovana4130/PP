'use strict';

(function () {
  /*console.log('hi'); */
  function Genre(n) {
    this.name = n;
  }
  function Movie(t, g, l) {
    if (!(g instanceof Genre)) {
        throw new Error('Invalid genre input!');
    }
    this.title = t;
    this.genre = g;
    this.length = l;
  }

  var action = new Genre('action');
  console.log(action);
  var rushHour = new Movie('Rush Hour', action, 95);
  console.log(rushHour);
})();

