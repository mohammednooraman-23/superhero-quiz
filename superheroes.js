var readlineSync = require("readline-sync");
var userName = readlineSync.question("Please enter your name: ");
console.log("Welcome " + userName + " to the Superhero Quiz!");
var score = 0;
function playMCQ(question, options, correctAnswer) {
  console.log(question);
  for (var i = 0; i < options.length; i++) {
    console.log((i + 1) + ". " + options[i]);
  }

  var userAnswer = parseInt(readlineSync.question("Your answer : "));
  if (userAnswer === correctAnswer) {
    console.log("You are right!");
    score++;
  } else {
    console.log("You are wrong!");
    score--;
  }
  console.log("Your current score is: " + score);
}

var superheroQuestions = [
  {
    question: "Who is the alter ego of Batman?",
    options: ["Bruce Wayne", "Clark Kent", "Peter Parker", "Tony Stark"],
    correctAnswer: 1 
  },
  {
    question: "Which superhero has the ability to shoot spider-webs from his wrists?",
    options: ["Superman", "Spider-Man", "The Flash", "Wonder Woman"],
    correctAnswer: 2 
  },
  {
    question: "Which superhero is also known as the Man of Steel?",
    options: ["Iron Man", "Batman", "Superman", "Captain America"],
    correctAnswer: 3 
  },
  {
    question: "What is the name of the hammer wielded by Thor?",
    options: ["Stormbreaker", "Gungnir", "Excalibur", "Mjolnir"],
    correctAnswer: 4 
  },
  {
    question: "Which superhero is known for his fast running abilities and is a member of the Flash family?",
    options: ["Black Panther", "Spider-Man", "The Flash", "Green Arrow"],
    correctAnswer: 3 
  },
  {
    question: "What is the real name of the superhero known as Black Widow?",
    options: ["Natasha Romanoff", "Diana Prince", "Carol Danvers", "Barbara Gordon"],
    correctAnswer: 1 
  },
];
for (var i = 0; i < superheroQuestions.length; i++) {
  var questionObj = superheroQuestions[i];
  playMCQ(questionObj.question, questionObj.options, questionObj.correctAnswer);
}
console.log("Thank you for playing! ")
console.log("Your final score is: " + score);
