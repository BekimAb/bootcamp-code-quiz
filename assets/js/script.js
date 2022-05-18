var timerDiv = document.getElementById("timer");
let finalScore;
var timerId;
var timer = 60;
var correct = 0;
var startScreen = document.getElementById("startScreen")
var startBtn = document.getElementById("startBtn");
var questionsDiv = document.getElementById("questions");
var endScreen = document.getElementById("endScreen");
var currentQuestionIndex = 0;

startBtn.addEventListener("click", function () {
    startScreen.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class");
    showQuestions()
    timerId = setInterval(countDown,1000)
})

function countDown(){
    timer--
    timerDiv.textContent = timer;

    if(timer <= 0){
        endQuiz()
    }
}

const questions = [
    {
        title: "What characters represent an array?",
        choices: ["{}", "<>", "''", "[]"],
        answer: "[]"
    },
    {
        title: "What tag is required in all HTML documents, and is used to define the title?",
        choices: ["<br></br>", "<body></body>", "<td>", "<head></head>"],
        answer: "<head></head>"
    },
    {
        title: "What tag is used to define the bottom section (footer) of an HTML document?",
        choices: ["<button>", "<td>", "<h1> to <h6>", "<footer>"],
        answer: "<footer>"
    },
    {
        title: "which of the headings is the largest",
        choices: ["h3", "h4", "h0", "h1"],
        answer: "h1"
    },
    {
        title: "which tag would bold the text",
        choices: ["em", "p", "abbr", "strong"],
        answer: "strong"
    },
]

function showQuestions() {

    var currentQuestion = questions[currentQuestionIndex]
    var questionTitle = document.getElementById("question-title");
    var choicesDiv = document.getElementById("choices")

    questionTitle.textContent = currentQuestion.title;

    choicesDiv.innerHTML = '';

    currentQuestion.choices.forEach(function (choice) {

        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.setAttribute("class", "choice btn-primary btn-lg");

        choiceBtn.textContent = choice;

        choiceBtn.onclick = handleClick;

        choicesDiv.append(choiceBtn);
    })
}

function handleClick() {

    if (this.value === questions[currentQuestionIndex].answer) {
        correct++
    } else {
        // remove 10 seconds from timer
        timer -= 10

        if (timer <= 0) {
            timer = 0;
            endQuiz()
        } 

    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        showQuestions()
    }
}

// set up timer to countdown from 60 seconds
setTimeout(function () {
    console.log();
}, 60000);

console.log("setTimeout() example...");


// set up endQuiz function
// in endQuiz() stop timer, calculate final score, get initials
function endQuiz() {
    clearInterval(timerId);
    questionsDiv.setAttribute("class", "hide")
    endScreen.removeAttribute("class")

    let division =(correct / questions.length).toFixed(2);
    console.log("division", division)
    let noZero = division.split(".")[1]

    if(correct === questions.length){
        finalScore = "100%"
    } else {
        finalScore = noZero + "%"
    } 

    let score = document.querySelector("#finalScore")
    score.textContent = "You scored " + finalScore + "! Great Job!";
}

function saveScore(){
    var initialsValue = document.getElementById("initials").value 

    if(initialsValue != ""){
        var highScores = JSON.parse(localStorage.getItem("highscores")) || []

        var newScore = {
            initials: initialsValue,
            score: finalScore
        }

        highScores.push(newScore)
        localStorage.setItem("highscores", JSON.stringify(highScores))

        window.location.href = "highscore.html"
    }


}

// onclick Save button will save score and initials to localstorage
var saveBtn = document.getElementById("saveBtn");
saveBtn.onclick = saveScore;

