
//-- Create variables and store elements there --//
const startBtn = document.getElementById("start");
const introArea = document.getElementById("intro");
const imageBox = document.getElementById("art-work");
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
function getImage(url) {
imageBox.innerHTML = '';
const img = document.createElement("img");
img.src = url;
img.alt = "A famous painting";
imageBox.appendChild(img);
shuffleQuestions(url);
}

//-- Shuffle through the questions/images arrays by using Fiher-Yates methods--//
function shuffleQuestions() {
for(let i= questionContent.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i + 1));
    let k = questionContent[i];
    questionContent[i] = questionContent[j];
    questionContent = k;
}
return questionContent;
}

//-- Display question option --//
function getOptions() {


}

//-- Engages option selection and triggers an event --//
function chooseOption() {

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
        url: "assets/images/alphonse-mucha.jpg",
        answers: ["Gustav Klimt", "Aubrey Beardsley", "Alphonse Mucha", "Egon Schiele"],
        facts: "'Fruit' by Alphonse Mucha. he was a Czech painter, illustrator, and graphic artist. Living in Paris during the Art Nouveau period, he was widely known for his distinctly stylized and decorative theatrical posters",
        correctAnswer: "Alphonse Mucha"
    },
    {
        number: 2,
        url: "assets/images/andy-warhal.jpg",
        answers: ["Roy Lichtenstein", "Andy Warhal", "Keith Haring", "Jeff Koons"],
        facts: "'Campbell's Soup Cans I: Onion' by Andy Warhal. The works were Warhol's hand-painted depictions of printed imagery deriving from commercial products and popular culture and belong to the pop art movement.",
        correctAnswer: "Andy Warhal"

    },
    {
        number: 3,
        url: ("assets/images/eduard-manet.jpg"),
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 4,
        url: "assets/images/georges-seurat.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 5,
        url: "assets/images/henri-matisse.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 6,
        url: "assets/images/johannes-vermeer.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 7,
        url: "assets/images/pablo-picasso.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 8,
        url: "assets/images/paul-gauguin.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 9,
        url: "assets/images/salvador-dali.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 10,
        url: "assets/images/vincent-van-gogh.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    },
    {
        number: 11,
        url: "assets/images/wassiliy-kandinsky.jpg",
        answers: ["", "", "", ""],
        facts: "",
        correctAnswer: ""

    }

]