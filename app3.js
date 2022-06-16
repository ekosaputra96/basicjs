// array method

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

movies.forEach(function (movie){
    console.log(`${movie.title.toUpperCase()} - ${movie.score}/100`);
})

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const Names = fullNames.map(function(fName){
    return fName.first +' ' + fName.last;
})

// greeting function using function expression
const greet = (name) => {
    console.log(`Hey ${name}!`);
}

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// const id2 = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// function validUserNames(usernames) {
//         return usernames.filter((user) => {
//         return user.length < 10;
//     })
//   }

const validUserNames = usernames => {
    return usernames.filter(user => {
        return user.length < 10;
    })
}

  console.log(validUserNames(["eko", "cintami", "kiki12321321312", "coraamdaaladhaf"]));

  const allEvens = nums => {
    return nums.every(num => {
        return num % 2 === 0;
    })
  }

  console.log(
    allEvens([2,4,6,8,]),
    allEvens([1,4,6,8]),
    allEvens([1,2,3])
  )

  const scores = [73, 56,89,21,54,90,45,91];

  const highestScore = scores.reduce((bestScore, curretScore) => {
    if(bestScore > curretScore){
        return bestScore;
    }
    return curretScore;
  })

  const person = {
    firstName : 'eko',
    lastName : 'saputra',
    fullName :  function() {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
  }

  const cats = ['blacky', 'doggo', 'chris'];
  const dogs = ['domino', 'alex', 'young'];
  