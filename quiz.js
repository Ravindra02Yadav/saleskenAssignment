
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}
const myQuestions = [
    {
        question: "Which type of JavaScript language is",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "b",
      },
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
      },
      {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
      },
      {
        question: "What does CSS stands for?",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        correct: "d",
      },
      {
        question: "Which one of the following also known as Conditional Expression",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
      },
      {
        question: "In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        correct: "b",
      },
      {
        question: "When interpreter encounters an empty statements, what it will do",
        a: "Shows a warning",
        b: "Prompts to complete the statement",
        c: "Throws an error",
        d: "Ignores the statements",
        correct: "d",
      },
      {
        question: "The function and var are known as:",
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
        correct: "c",
      },
      {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        correct: "d",
      },
      {
        question: "Which of the following option is used as hexadecimal literal beginning?",
        a: "00",
        b: "0x",
        c: "0X",
        d: "Both 0x and 0X",
        correct: "d",
      },
  ];
  let reportList = JSON.parse(localStorage.getItem("report")) || [];
const question = document.querySelector(".question");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");
const next = document.querySelector("#next");
const skip = document.querySelector("#skip");
const answers = document.querySelectorAll(".answer")

let page = 0;
let score = 0;

function quizQuestions(){
const questionList = myQuestions[page];
question.innerText = questionList.question;
opt1.innerText = questionList.a;
opt2.innerText = questionList.b;
opt3.innerText = questionList.c;
opt4.innerText = questionList.d;

}
quizQuestions()
function checkAnswer(){
let answer;
answers.forEach((el)=>{
if(el.checked){
    answer = el.id;
   
}
})
return answer;
}
next.addEventListener("click",()=>{
    const FinalAnswer = checkAnswer()
    let reportObj = {
        question : myQuestions[page].question,
        answer : myQuestions[page].correct,
        FinalAnswer : FinalAnswer
    }
    reportList.push(reportObj)
    localStorage.setItem("report", JSON.stringify(reportList)) 
    // localStorage.setItem("answer" , FinalAnswer)
    if(FinalAnswer === myQuestions[page].correct){
        score++;
        
    }
    page++;
    if(page < myQuestions.length){
        quizQuestions();
    }
    else{
        window.location.href = "report.html"
    }
    
})
skip.addEventListener("click",()=>{
    page++;
    quizQuestions();
})
