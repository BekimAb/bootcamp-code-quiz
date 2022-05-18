function printScores(){

    var scores = JSON.parse(localStorage.getItem("highscores")) || []

    scores.forEach(function(score){

        var li = document.createElement("li" )
        li.textContent = score.initials + "-" + score.score;

        let ol = document.getElementById("highscores");
        ol.append(li)
    })
}

function clearScores(){
    localStorage.removeItem("highscores");
    window.location.reload()
}

var clearBtn = document.getElementById("clearBtn")

clearBtn.onclick = clearScores;


printScores()