// Questions
const questions = [
    {
        q: "What does HTML stand for?",
        a: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        ans: 0
    },

    {
        q: "Which language is used for styling web pages?",
        a: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        ans: 1
    },

    {
        q: "Which tag is used to create a paragraph?",
        a: [
            "<p>",
            "<h1>",
            "<br>",
            "<div>"
        ],
        ans: 0
    },

    {
        q: "Which keyword declares a variable in JavaScript?",
        a: [
            "var",
            "int",
            "string",
            "define"
        ],
        ans: 0
    },

    {
        q: "Which method displays output in the browser console?",
        a: [
            "print()",
            "console.log()",
            "display()",
            "write()"
        ],
        ans: 1
    }
];


// Variables
let current = 0;
let score = 0;
let time = 20 * 60;
let timer;


// Start Quiz
function startQuiz() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;

    if (name == "" || roll == "" || section == "") {
        alert("Please enter all details!");
        return;
    }

    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();

    startTimer();
}


// Show Question
function showQuestion() {

    let q = questions[current];

    document.getElementById("qno").innerText =
        "Question " + (current + 1) + " of 5";

    document.getElementById("question").innerText = q.q;

    document.getElementById("text0").innerText = q.a[0];
    document.getElementById("text1").innerText = q.a[1];
    document.getElementById("text2").innerText = q.a[2];
    document.getElementById("text3").innerText = q.a[3];

    // Unselect all answers
    document.getElementById("answer0").checked = false;
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
}


// Next Question
function nextQuestion() {

    let answer;

    if (document.getElementById("answer0").checked) {
        answer = 0;
    }
    else if (document.getElementById("answer1").checked) {
        answer = 1;
    }
    else if (document.getElementById("answer2").checked) {
        answer = 2;
    }
    else if (document.getElementById("answer3").checked) {
        answer = 3;
    }
    else {
        alert("Please select an answer!");
        return;
    }


    // Check answer
    if (answer == questions[current].ans) {
        score++;
    }


    // Next question
    if (current < 4) {

        current++;

        showQuestion();

    }
    else {

        clearInterval(timer);

        finishQuiz();
    }
}


// Timer
function startTimer() {

    timer = setInterval(function () {

        let minutes = Math.floor(time / 60);

        let seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerText =
            minutes + ":" + seconds;

        time--;

        // Time finished
        if (time < 0) {

            clearInterval(timer);

            finishQuiz();
        }

    }, 1000);
}


// Finish Quiz
function finishQuiz() {

    document.getElementById("quiz").innerHTML =
        "<h2>Quiz Completed!</h2>" +
        "<p>Your Score: " + score + " / 5</p>";
}