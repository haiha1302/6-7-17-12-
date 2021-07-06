var qNum = 0
var questions = []
var minutes = 0
var seconds = 0
var questions_temp =
{
    key: "",
    question: "",
    answer: "",
    options: []//this sould be an array
}

export function appendQuestion(){


quizHeader.innerHTML = `<h3 class='quizHeader'>Q${qNum+1}/${questions.length}</h3><span id='timer'${minutes}:${seconds}</span>`
var divBody = `<h3 class='quizHeader'>Q: ${questions[qNum].question}</h3>`
divBody += "<ul class='option_group' id='option_group'>"
for(var i=0; i<questions[qNum].options.length; i++)
    divBody += `<li class='option' onclick='activeOpt(this)'>${questions[qNum].options[i]}</li>`
divBody += "</ul>"
divBody += "<button class='btn btn-primary nxtBtn' onclick='nxtQuestion()'>Next question</button>"
quizBody.innerHTML = divBody
}

export function startQuiz(){ 
    
    document.getElementById("mainBody").style.display = "flex"
    document.getElementById("startBtn").style.display = "none"    
    document.getElementById("adminBtn").style.display = "none"
        
        appendQuestion()
        interval = setInterval(function(){
            if(seconds<59) seconds++
            else{
                seconds=0
                if(minutes<59) minutes++
                else{
                    minutes=0
                    clearInterval(interval)
                }
            }
            formattedSeconds = seconds<10 ? `0${seconds}` : seconds
            formattedMinutes = minutes<10 ? `0${minutes}` : minutes
            document.getElementById("timer").innerHTML = `${formattedMinutes}:${formattedSeconds}`
        }, 1000)
    }

