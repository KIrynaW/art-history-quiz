
//-- Create variables and store elements there --//
const startBtn = document.getElementById("start");
const introArea = document.getElementById("intro");
const questionsArea = document.getElementById("questions");
const scoreBox = document.getElementById("score-box");
const optionOneBtn = document.getElementById("option-one");
const optionTwoBtn = document.getElementById("option-two");
const optionThreeBtn = document.getElementById("option-three");
const optionFourBtn = document.getElementById("option-four");
const nextQuestionBtn = document.getElementById("next-question");
const factsArea = document.getElementById("art-facts");
const quizEndArea = document.getElementById("quiz-end");
const scoreMessage = document.getElementById("score-message");
const tryAgainBtn = document.getElementById("try-again");

// Start the Quiz event listener
startBtn.addEventListener("click", startQuiz);

//current question numer sequence
let currentNumber = 0;
// the users points score
let score = 0;


//--- Create Quiz functions to run the game ---//
// --- Start and Display the Quiz ---//
function startQuiz() {
    introArea.classList.add("hidden");
    questionsArea.classList.remove("hidden");
    scoreBox.classList.remove("hidden-two")
    imageNumber();
    getImage();
    optionOneBtn.addEventListener("click", checkAnswer);
    optionTwoBtn.addEventListener("click", checkAnswer);
    optionThreeBtn.addEventListener("click", checkAnswer);
    optionFourBtn.addEventListener("click", checkAnswer);
    shuffleQuestions();
    getFacts();
}

//--- Display Painting/Question Number, after 11th Image, go to Quiz End ---//
function imageNumber() {

}

//-- Display Image of the Painting --//
function getImage() {

}

//-- Shuffle through the questions/images arrays --//
function shuffleQuestions() {

}

//-- Display answer options --//
function getAnswerOptions() {

}

//-- Check correct answer and display the correct one if wrong and activate the facts text --//
function checkAnswer() {

}

function getFacts() {

}

//-- Generate next question when button pressed --//
function getNextQuestion() {

}

//--- Add to the score if answer correct ---//
function addScore() {

}

//--- Final End of Quiz Message with a score and play again option ---//
function endQuiz() {

}

function playAgain() {

}

// --- Arrays --- //
const questionContent = [
    {
        number: 1,
        image: "assets/images/alphonse-mucha.jpg",
        answers: ["Gustav Klimt", "Aubrey Beardsley", "Alphonse Mucha", "Egon Schiele"],
        facts: "'Fruit' by Alphonse Mucha. he was a Czech painter, illustrator, and graphic artist. Living in Paris during the Art Nouveau period, he was widely known for his distinctly stylized and decorative theatrical posters",
        correctAnswer: "Alphonse Mucha"
    },
    {
        number: 2,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 3,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 4,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 5,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 6,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 7,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 8,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 9,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 10,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 11,
        image: "assets/images/andy-warhal.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    }

]