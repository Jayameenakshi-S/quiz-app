const quizData = [
    {
        question:"What command do you use to output data to the screen?",
        a:"Cin",
        b:"Cout>>",
        c:"Cout",
        d:"Output>>",
        correct:"b"
    },
    {
        question:"Which data structure uses LIFO?",
        a:"Array",
        b:"Int",
        c:"Stacks",
        d:"Queues",
        correct:"c"
    },
    {
        question:"A memory location that holds a single letter or number?",
        a:"Double",
        b:"Int",
        c:"Char",
        d:"Word",
        correct:"c"
    },
    {
        question:"What dose this equation mean ? a != t",
        a:"A is assinged t",
        b:"A and t are equal",
        c:"A is not equal to t",
        d:"T is add to a",
        correct:"c"
    },
    {
        question:"One loop inside the body of another loop is called?",
        a:"Loop in loop",
        b:"Nested",
        c:"Double loops",
        d:"loop",
        correct:"b"
    }
];

const quiz = document.getElementById('quiz');
const questionEls = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();



function loadQuiz(){
    deselectAnswers();

    const  currentQuizData = quizData[currentQuiz];
    questionEls.innerText = currentQuizData.question;
    answer1.innerText = currentQuizData.a;
    answer2.innerText = currentQuizData.b;
    answer3.innerText = currentQuizData.c;
    answer4.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        console.log(answerEl);
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    console.log("answer is "+answer);
    if (answer){
        
        console.log(quizData[currentQuiz].correct);
        
        if (answer === quizData[currentQuiz].correct){
            console.log("correct answer");
            score++;
            console.log(score);
        }
        currentQuiz++;

        if (currentQuiz < quizData.length){
            loadQuiz();
        }else{
            console.log("final score"+score);
            quiz.innerHTML = `
            <h2>Your score is ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reattempt</button>
            `
        }

    }
});