/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

let test = 'Philosophy'

console.log('\n', test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = 10 + 20
console.log('\n', sum)

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20) // I use math.floor() function to ensure it starts from 0

console.log('\n', random)

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: 'Diogo',
    surname: 'Teixeira',
    age: 27
}

// me.name === me['name']
console.log('\n', me)

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age

console.log('\n', me)

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before, an array called skills, containing the programming languages you know right now.
*/

//let newMe = {} // I created a new, empty, object in order to add all information to this new one
//let skills = ['HTML', 'CSS', 'JAVASCRIPT']
//console.log('\n', skills)

//newMe [skills] = me // this is a possible way to add elements such as an array to an object

//console.log('\n', newMe)
/* 
let skills = ['HTML', 'CSS', 'JAVASCRIPT']

skills.push(me)
/* me./* skills */

/* console.log('\n', skills) */ 

me.skills = ['HTML', 'CSS', 'JAVASCRIPT']

console.log(me)

console.log(me.skills) // now I can call the array with the dot notation

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

/* skills.splice(2,1) // if I add a 0 after the 1, it shows on the console, so I'm opting not to put it there

console.log('\n', skills) */

me.skills.pop()

console.log(me) // removing last skill from array

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice () {
    let randomNumber = Math.ceil(Math.random() * 6) // I'm using Math.ceil to certify that the count starts from 1
    return randomNumber 
}
console.log('\n', dice())

/* const dice = function () {
  return Math.floor(Math.random() * 6 + 1);
}; */ // THIS IS ALSO A GOOD SOLUTION

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(a, b) {
    if (a >= b) {
        return a
    } else {
        return b
    }
}
    // return a > b ? a : b ------ Same Operation Using Ternary Operator

console.log('\n', whoIsBigger(33, 23))

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
let text = 'I\'m loving to learn Javascript'

const splitMe = function(string1) {
    let result = string1.split(' ')
    console.log('\n', result)
}

splitMe(text)

// const splitMe = function (str) {
//  return str.split(" ");
// }; ------------------- Also a Good shorter solution that receives a str as a parameter

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = function (str, first) {
  if (first) {                                    // it assumes true by default
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);  // taking last character if false
  }
};

console.log(deleteOne('String', true)) // takes first character
console.log(deleteOne('String', false)) // takes last character

/* const deleteOne = function(_string, _boolean) {
  if (true) {
    let str = _string.slice(0, -1)
      console.log(_string)
  } else {


   }
}
deleteOne('difficult', true)
 */

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
 */

   let text1 = 'This 1 week of work has been intensive'

   const onlyLetters = function(str) {
       let result = str.replace(/[0-9]/g, '') // I found this solution on stackoverflow, and as I understood, use excatly this function to remove digits from a string
       console.log('\n', result)              // https://stackoverflow.com/questions/4993764/how-to-remove-numbers-from-a-string
   }
   
   onlyLetters('7867786fesjhbfgjyrsgb78786789rsgjuhvberwzi78')

/*    const onlyLetters = function (str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str[i];
      if (currentLetter !== "0" 
      && currentLetter !== "1" 
      && currentLetter !== "2" 
      && currentLetter !== "3" 
      && currentLetter !== "4" 
      && currentLetter !== "5" 
      && currentLetter !== "6"
      && currentLetter !== "7"
      && currentLetter !== "8"
      && currentLetter !== "9"
      ) {
        result += currentLetter;
      }
    }
    return result;
    //isNan
  
  };
  
  
  
  let lett = onlyLetters("Hello 3 World")
  console.log(lett); */
/* 
  function onlyLetters(str) {
    let result = ''
    for( let i = 0; i < str.length; i++){
      let currentLetter = str[i]
      if (isNaN(currentLetter))
      result += currentLetter
    }

    return result
  }

  console.log(onlyLetters('3253463dfyity7u4674q67gtftgj')) */

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

/* const isThisAnEmail = function(string){
  let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
   if(string == string.match(pattern)) {
    console.log('\n', true)
  } else {
    console.log('\n', false)
  }
}

isThisAnEmail('fejsuwyhfgjuys@£fglkbnildk.pt')
 */ // I'm gonna find a better solution

 const isThisAnEmail = function (email) {
  return email.indexOf("@") > 0 && email.indexOf(".") > 0;
  // /^S+@\S+\.\S+$/.test()
};

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/

/* const weekDay= new Array(7)
weekDay[0] = 'Sunday' 
weekDay[1] = 'Monday'
weekDay[2] = 'Tuesday'
weekDay[3] = 'Wednesday'
weekDay[4] = 'Thursday'
weekDay[5] = 'Friday'
weekDay[6] = 'Saturday'
 */
/* function whatDayIsIt(x){
  return (x < 1) || (x > 7) ? null : weekDAY[x];  // This is the same as below, but using ternary operator
} */
/* 
function whatDayIsIt(x){            // Here I'm using for me a more readable code with the if else statement
  if((x < 1) || (x > 7)) {
    return null
  } 
  else {
    return weekDay[date.getday()]
  }
}

console.log('\n', whatDayIsIt());
 */  

const whatDayIsIt = function () {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date().getDay()]; // .getDay() will alwasy give a number between 0 - 6 which corresponds to the array
};

console.log(whatDayIsIt()) // Simpler and much more effective way of doing this exercice


/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* function dice () {
  let randomNumber = Math.ceil(Math.random() * 6) // I'm using Math.ceil to certify that the count starts from 1
  return randomNumber
}
console.log('\n', dice()) */

/* const rollTheDices = function() {
let resultOfDice = dice() * 3
}
console.log(rollTheDices())

 */

const rollTheDices = function (numberOfDices) {
  let result = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < numberOfDices; i++) {
    let diceRoll = dice();
    result.sum += diceRoll;
    result.values.push(diceRoll);
  }

  return result;
};


console.log(rollTheDices(23))

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

function howManyDays(start, end) {
  let date1 = new Date(start)
  let date2 = new Date(end)

  // One day in milliseconds
  let oneDay = 1000 * 60 * 60 * 24

  // Calculating the time difference between two dates
  let diffInTime = date2.getTime() - date1.getTime()

  // Calculating the no. of days between two dates
  let diffInDays = Math.round(diffInTime / oneDay)

  return diffInDays
}
                            //Mo D.Year
console.log('\n', howManyDays("9/23/1994", "1/02/2022"))
/* 
const howManyDays = function(selectedDate) {
  let today = Date.now();
  let selectedInMilliseconds = Date.parse(selectedDate) //ms
  return Math.floor((today - selectedInMilliseconds) / (1000 * 60 * 60 * 24))
};

let date = howManyDays(("23 Sep 1994"))

console.log(date) */

/* function howManyDays (selectedDate) {
  let today = new Date()
  let difference = today - selectedDate
  return difference / (1000 * 60 * 60 * 24)
}

console.log(howManyDays(30 12 2021)) */
/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

/* const isTodayMyBirthday = function(date){
  let date1 = '9/23'
  let date2 = '23/9'
    if(date1 || date2) {
    console.log('\n', true)
  } else {
    console.log('\n', false)
  }
}

isTodayMyBirthday() */

const isTodayMyBirthday = function () {
  let today = new Date();
  let myBirthday = new Date(1986, 8, 2); // 3 sep 86
  let isTodayMyBirthday = false;
  if (
    today.getDay() === myBirthday.getDay() &&
    today.getMonth() === myBirthday.getMonth()
  ) {
    isTodayMyBirthday = true;
  }
  return isTodayMyBirthday;
};

console.log(isTodayMyBirthday())


// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

/* function deleteProp (obj, str1) {
    this.obj = obj
    this.str1 = str1
    this.getDetails = function () {
      return this.obj + " removed by " + this.str1
    }
  }
let newProp = new deleteProp("Prop", "Company");

console.log('\n', newProp.getDetails());  */

const user = {
  name: "Diogo",
  surname: "Teixeira"
}

const deleteProp = function (obj /* object */, prop /*string*/) {
delete obj[prop];
return obj;
};

let newuser = deleteProp(user, "name")

console.log(newuser)

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
/* 
let oldestMovie = movies.sort(function(a, b) {
  return Date.parse(a) - Date.parse(b)
})
console.log(oldestMovie[0]);
 */
// I'm not pleased with this answer

/* const oldestMovie = function() {
  if(movies) {
    return movies.sort()
  }
}
console.log(oldestMovie()) */

const oldestMovie = function () {
  let result = { Year: 2100 };
  for (let i = 0; i < movies.length; i++) {
    let currentYear = parseInt(movies[i].Year);
    if (currentYear < result.Year) {
      result = movies[i];
    }
  }

  return result;
};

console.log(oldestMovie())

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

const countMovies = function() {
  let moviesCounted = movies.length
  console.log('\n My Array has', moviesCounted, 'movies.')
}

countMovies()


/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
/* const onlyTheTitles = function() {
  let titlesCounted = movies[0].Title
  console.log('\n My Array these movies:', titlesCounted)
}
onlyTheTitles() */

/* const onlyTheTitles = function() {
  for (let i=0; i<movies.length; i++)
  console.log('\n My Array these movies:', movies[i])
}
onlyTheTitles() */

// Couldn't find a way to separate the titels


const onlyTheTitles = function () {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    result.push(movies[i].Title);
  }

  return result;
};

console.log(onlyTheTitles())

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

const onlyInThisMillennium = function () {
  let result = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 1999) {
      result.push(movies[i]);
    }
  }

  return result;
};

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */