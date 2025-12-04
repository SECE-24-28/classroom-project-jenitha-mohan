
const questions = [
    {
        text: "Which Keyword decares a constant in JavaScript?",
        options: ["var", "let", "const", "static"]
    },
    {
        text: "Which method is used to log to the console in JavaScript?",
        options: ["print()", "log()", "console()", "console.log()"]
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        options: ["number", "string", "boolean", "character"]
    }
];

const question = document.getElementById("ques");
const o1e1 = document.getElementById("o1");
const o2e1 = document.getElementById("o2");
const o3e1 = document.getElementById("o3");   
const o4e1 = document.getElementById("o4");
const pel=document.getElementById("p");
const  nextb = document.getElementById("btn");

var currIndex = 0;

function nextQuestion() {
    currIndex++;
    
     if (currIndex == questions.length) {
        alert("You have completed the quiz");
        location.href = "index.html";  
        return;
    }
    pel.innerHTML=`Question ${currIndex+1} of 3`;
    question.innerHTML = questions[currIndex].text;
    o1el.innerHTML = questions[currIndex].options[0];
    o2el.innerHTML = questions[currIndex].options[1];
    o3el.innerHTML = questions[currIndex].options[2];
    o4el.innerHTML = questions[currIndex].options[3];

  
}