var timerDiv = document.getElementById("timerDiv");
var timerId;
var timer= 0;
var correct = 0;
var startScreen = document.getElementById("startScreen")
var startBtn = document.getElementById("startBtn");
var questionsDiv = document.getElementById("questions");
var endScreen = document.getElementById("endScreen");
var currentQuestionIndex = 0;

startBtn.addEventListener("click", function(){
    startScreen.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class");
    showQuestions()
})

const questions = [
    {
        title: "Question 1 goes here",
        choices: ["A1", "B1", "C1", "D1"],
        answer: "D1"
    },
    {
        title: "Question 2 goes here",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        title: "Question 3 goes here",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        title: "Question 4 goes here",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        title: "Question 5 goes here",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
]

function showQuestions(){

    var currentQuestion = questions[currentQuestionIndex]
    var questionTitle = document.getElementById("question-title");
    var choicesDiv = document.getElementById("choices")

    questionTitle.textContent = currentQuestion.title;

    choicesDiv.innerHTML = '';

    currentQuestion.choices.forEach(function(choice){
        
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.setAttribute("class", "choice");

        choiceBtn.textContent = choice;

        choiceBtn.onclick = handleClick;

        choicesDiv.append(choiceBtn);
    })
}

function handleClick(){

    if(this.value === questions[currentQuestionIndex].answer){
        correct++
    } else {
        // remove 10 seconds from timer
    }

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length){
        // fire off endQuiz() function and stop timer
    } else {
        showQuestions()
    }
}

// set up timer to countdown from 60 seconds
// if question is answered WRONG take 10 seconds off timer where comment is
// set up endQuiz function
// in endQuiz() stop timer, calculate final score, get initials
// onclick Save button will save score and initials to localstorage


