var readlineSync = require("readline-sync")
var userName = readlineSync.question("Please enter your name ")
console.log("Welcome " + userName + " to DO YOU KNOW Noor!")
var score = 0
function play(question, answer) {
 var userAnswer = readlineSync.question(question)
  userAnswer = userAnswer.toLowerCase()
  answer = answer.toLowerCase()
  
  if (userAnswer === answer)
  { 
    console.log("You are right!")
    score = score + 1
            } else {
    console.log("You are wrong!")
    score = score - 1
  }
  console.log("Your score is: " + score)
}
var questionList = [
  {
    question: "What is my full name? ",
    answer: "MOHAMMED NOOR AMAN"
  },
  {
    question: "Which college did i pursue my engineering degree from? ",
    answer: "KSIT"
  },
  {
    question: "What is my favourite colour? ",
    answer: "Red"
  },
  {
    question: "Which city do i live in? ",
    answer: "Bangalore"
  },
  {
    question: "What was my usn in my B.E? ",
    answer: "1KS19CS053"
  },
  {
    question: "Who was my crush? ",
    answer: "Aakriti"
  },
  {
    question: "Which bike do i have? ",
    answer: "Splendor"
  },
  {
    question: "Who is my favourite actor? ",
    answer: "Tiger Shroff"
  }
]
for (var i=0;i<questionList.length;i++) {
  var answerList = questionList[i]
  play(answerList.question,answerList.answer)
}