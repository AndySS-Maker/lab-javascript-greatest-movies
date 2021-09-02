// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  return moviesArr.map((movies) => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  return moviesArr.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  const scoreAvg = moviesArr.reduce((sum, movie, index, sourceArray) => {
    if (!movie.score) {
      movie.score = 0;
    }

    if (index === sourceArray.length - 1) {
      sum += movie.score;

      return sum / moviesArr.length;
    }

    return sum + movie.score;
  }, 0);

  return parseFloat(scoreAvg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter((movie) =>
    movie.genre.includes('Drama')
  );

  const dramaAvg = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  return parseFloat(dramaAvg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  return moviesArr.map(movie => movie)
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }

      return a.year - b.year;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const onlyTitles = moviesArr.map(movie => movie.title)

  onlyTitles.sort((a,b) => a.localeCompare(b))

  const top20  = onlyTitles.splice(0,20)

  return top20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
