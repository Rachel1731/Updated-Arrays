const nums = [2, 4, 18]
console.log(nums)

const movies = ['Barbie', 'Interstellar', 'Get Out'];

// recall that movies is ['Barbie', 'Interstellar', 'Get Out']

// let's update the 2nd movie (index of 1)
movies[1] = 'Arrival';
// movies is now ['Barbie', 'Arrival', 'Get Out']

// attempting to change the movies constant to a string
movies = 'Barbie and Arrival';
// attempting to change the movies constant to a different array (even if the contents of that array are identical)
movies = ['Barbie', 'Arrival', 'Get Out'];

movies.push('Parasite', 'Dune');
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite', 'Dune']

const Parasite = movies.pop();

const firstMovie = movies[0];

const movies = ['Barbie', 'Interstellar', 'Get Out'];
console.log(movies.length);
console.log(movies[3])
// `3` is logged to the console

const lastMovie = movies[movies.length - 1];
// lastMovie is 'Get Out'

//const firstMovie = movies[0]
//const secondMovie = movies[1]
//const thirdMovie = movies[2]
//console.log(firstMovie)
//console.log(secondMovie)
//console.log(thirdMovie)

//console.log(movies[0])
//console.log(movies[1])
//console.log(movies[2])

// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

//for(let movie of movies{
//  console.log('${movie}!')
// }

for(let num = 0; num < 5; num++){
    console.log(num)
}

  for (let idx = 0; idx < movies.length; idx++) {
    console.log(`${idx + 1}. ${movies[idx]}`);
  }

//const colors = ['red', 'green', 'blue'];
//let color = colors[1];

// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']



movies.forEach((movie, index) => {
    if(index === 2) console.log("This is the third movie:");
    console.log(movie);
  });



// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
let movieString = movies.join();
// movieString is 'Barbie,Arrival,Get Out,Coco'

movieString = movies.join(' -- ');
// movieString is 'Barbie -- Arrival -- Get Out -- Coco'

movies[-1];  // undefined

// movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
const lastMovieAt = movies.at(-1);  
// lastMovieAt is 'Coco'

movies.unshift('Dune', 'John Wick');
// movies is ['Dune', 'John Wick', 'Barbie', 'Arrival', 'Get Out', 'Coco']

movies.shift();
// movies is ['John Wick', 'Barbie', 'Arrival', 'Get Out', 'Coco']

const removedMovie = movies.shift();
// movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
// removedMovie is 'John Wick'

const logElements = (element) => {
    console.log(element);
  };
  
  movies.forEach(logElements);
  books.forEach(logElements);

  movies.forEach(function (movie) {
    console.log(movie);
  });


numsToSum.forEach((num) => {
  let sum = 0;
  sum = sum + num;
  // sum will not be retained between iterations and will not 
  // be available outside of the callback function
});

console.log(sum);
// sum will be undefined

const numsToSum = [2, 4, 6];
let sum = 0 ;

numsToSum.forEach((num) => {
  sum = sum + num;
  // sum will not be retained between iterations and will not 
  // be available outside of the callback function
});

console.log(sum);
// sum will be 12

// assuming `movies` is ['Barbie', 'Arrival', 'Get Out', 'Coco']
for (let movie of movies) {
    if (movie === 'Get Out') break;
    console.log(movie);
  }

  Barbie
Arrival

for (let movie of movies) {
    console.log("Another iteration");
    if (movie === 'Barbie') continue;
    if (movie === 'Get Out') break;
    console.log(movie);
  }

  for (let movie of movies) {
    console.log("Another iteration");
    if (movie === 'Barbie') continue;
    if (movie === 'Get Out') break;
    console.log(movie);
  }



// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

const moviesCopy = [...movies];
// movies copy is ['Barbie', 'Arrival', 'Get Out', 'Coco']

slice();
slice(start);
slice(start, end);

// movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
const twoMovies = movies.slice(1);
// twoMovies is ['Arrival', 'Get Out', 'Coco']

const moreMovies = ['The Matrix', ...movies];
// moreMovies is ['The Matrix', 'Barbie', 'Arrival', 'Get Out', 'Coco']

console.log(movies);
console.log(twoMovies);

movies[1] = 'Spider-man';

console.log(movies);
console.log(twoMovies);

// movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']
let deepCopy = structuredClone(movies);

deepCopy[1] = 'Prometheus';

console.log(movies);      
// Output: ['Barbie', 'Arrival', 'Get Out', 'Coco']
console.log(deepCopy);
// Output: ['Barbie', 'Prometheus', 'Get Out', 'Coco']




