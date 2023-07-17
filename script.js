const questions=[
    {
        question: "fsdgfhjkuytfghjfdgvhbjh",
        answers: [
            {text:"sfdgh", correct:false},
            {text:"sfdgh", correct:true},
            {text:"sfdgh", correct:false},
            {text:"sfd gh", correct:false}
        ]
    },
    {
        question: "fsdgfh jkuytfghjfdgvhbjh",
        answers: [
            {text:"sfd gh", correct:false},
            {text:"sfdgh", correct:true},
            {text:"sfdgh", correct:false},
            {text:"sfdgh", correct:false},
        ]
    },
    {
        question: "fsdgfhj kuy tfghjfdg vhbjh",
        answers: [
            {text:"sfdgh", correct:false},
            {text:"s fdgh", correct:true},
            {text:"sfdgh", correct:false},
            {text:"sfdgh", correct:false},
        ]
    },
    {
        question: "fsd gfhjkuytf ghjfdgv hbjh",
        answers: [
            {text:"sfdgh", correct:false},
            {text:"sfdgh", correct:true},
            {text:"sfdg h", correct:false},
            {text:"sfdgh", correct:false},
        ]
    }
]

const ques=document.getElementById("question");
const ansbtn=document.getElementById("answer");
const nxt = document.getElementById("next-btn");

let score=0;
let currquesnum=0;

function startQuiz(){
    currquesnum = 0;
    score= 0;
    nxt.innerHTML = "NEXT";
    showQues();
}
function showQues(){
    resetState();
    let currQues = questions[currquesnum];
    let quesNo= currquesnum+1;
    ques.innerHTML = quesNo + "." + currQues.question;

    currQues.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAns);
    });
}
function resetState(){
    nxt.style.display = "none";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nxt.style.display = "block";
}
function handlenxtBtn(){
    currquesnum++;
    if(currquesnum < questions.length){
        showQues();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    ques.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nxt.innerHTML = "play Again";
    nxt.style.display = "block";
}

nxt.addEventListener("click" ,() =>{
    if(currquesnum < questions.length){
        handlenxtBtn();
    }else{
        startQuiz();
    }
})

startQuiz();
