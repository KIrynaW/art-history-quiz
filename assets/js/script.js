// Create variables and store elements there 
const startBtn = document.getElementById("start");
const introArea = document.getElementById("intro");
const scoreBox = document.getElementById("score-box");
const scoreIndex = document.getElementById("score-num");
const quizContainer = document.getElementById("quiz-container");
const imageIndex = document.getElementById("painting-num");
const imageBox = document.getElementById("painting");
const questionsArea = document.getElementById("questions");
const optionBtns = document.querySelectorAll(".option-barbtn");
const showHidden = document.querySelectorAll(".toggle");
const nextQuestionBtn = document.getElementById("next-question");
const facts = document.getElementById("art-facts");
const quizEndArea = document.getElementById("quiz-end");
const scoreMessage = document.getElementById("score-message");
const scoreTotal = document.getElementById("score-total");
const tryAgainBtn = document.getElementById("try-again");

// Start the Quiz event listener
startBtn.addEventListener("click", startQuiz);

// Global variables
let currentNumber = -1; // Current question number sequence
let score = 0; // the users points score
let answerChosen = false; // Store if option chosen


// Create Quiz functions to run the game 
/** 
 * When start btn is clicked it triggers this function which
 * reveals game area and shuffles through the array of questions
 */ 
    function startQuiz() {
    introArea.classList.add("hidden");
    questionsArea.classList.remove("hidden");
    scoreBox.classList.remove("hidden");
    shuffleQuestions();
    getNextQuestion();
}

/**
 * Displays Painting/Question sequence
 */ 
function imageNumber() {
    imageIndex.innerHTML = currentNumber+1;
}

/** 
 * Clears the div in html file,creates img atribute and syncs it 
 * with the current img in the arrays to display the painting
 */ 
function getImage() {
    imageBox.innerHTML = "";
    const quizImage = document.createElement("img");
    quizImage.src = questionContent[currentNumber].img;
    quizImage.id = "art-works";
    quizImage.alt = questionContent[currentNumber].alt;
    imageBox.appendChild(quizImage);
    imageBox.classList.remove("hidden");
}

/** 
 * Shuffles through the questions/images arrays by using Fisher-Yates algorithm
 */ 
function shuffleQuestions() {
    for(let i= questionContent.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i + 1));
        let k = questionContent[i];
        questionContent[i] = questionContent[j];
        questionContent[j] = k;
    }
}

/** 
 * Display question by syncing the buttons with the answers in the arrays section
 */ 
function getOptions() {
    const quizData = questionContent[currentNumber].answers;
    optionBtns.forEach(
        function(btn, index) {
            btn.innerText = quizData[index];
        });
}

/**
 * Check for the correct answer, display if correct or wrong, activate the facts text
 * if clicked after answer is chosen alert is activated
 */ 
function checkAnswer(event) {
    if (answerChosen) {
        alert("Oops! You have already made your choice. Click 'Next' to continue.");
    }
    else {
        answerChosen = true;
        let selectedOption = questionContent[currentNumber];
        let correctAnswerIndex = selectedOption.correctAnswerIndex;
        let correctAnswer = selectedOption.answers[correctAnswerIndex];
        let optionText = event.target.innerHTML;
        if (optionText == correctAnswer) {
            addScore();
        } else {
            event.target.classList.add('wrong');
        }
        let btnId = 'option-'+(correctAnswerIndex+1);
        let correctOptionBtn = document.getElementById(btnId);
        correctOptionBtn.classList.add('right');
        getFacts();
    }
}

/**
 * Function for toggle option btns to hide and reveal the facts and "Next" btn section
 */
function toggleHidden(arg) {
    showHidden.forEach(element => {
        if (arg == 'show') {
            element.classList.toggle("hidden", false);
        }
        else if (arg == 'hide') {
            element.classList.toggle("hidden", true);
        }
    });
}

/** 
 * Displays next question, clears previous selections and after 11th Image triggers quizEnd
 */ 
function getNextQuestion() {
    currentNumber += 1;
    refreshQuestion();
    answerChosen = false;
    toggleHidden('hide');
    if (currentNumber == 11) {
        endQuiz();
    } else {
        imageNumber();
        getImage();
        getOptions();
    }
}

/**
 * Adds to the score if chosen answer is correct
 */ 
function addScore() {
    score += 1;
    scoreIndex.innerText = score;
}

/**
 * When a user makes an option selection it triggers this function,
 * which reveals a facts paragraph and a "Next" btn, with an eventListener
 * that triggers the next question/painting
 */
function getFacts() {
    facts.innerText = questionContent[currentNumber].facts;
    toggleHidden('show');
    optionBtns.forEach(element => {
        element.classList.remove("hover");
    });
    nextQuestionBtn.addEventListener("click", getNextQuestion);
}

/**
 * Clears the previously selected options, applies hover feature and
 * enables a checkAnswer function
*/
function refreshQuestion() {
   optionBtns.forEach(element => {
        element.classList.remove("wrong");
        element.classList.remove("right");
        element.addEventListener("click", checkAnswer);
        element.classList.add("hover");
        imageBox.classList.add("hidden");
    });
}

/**
 * Reveals the tally of the points in the final score and 
 * displays a one of four messages according to the points scored
 */
function finalScore() {
    scoreTotal.innerHTML = score;
    const scoreIcon = document.getElementById("score-icon");
    if (score < 5) {
        scoreMessage.innerHTML = "Not Great! Maybe try again?";
        scoreIcon.innerHTML = `<i class="fa-regular fa-face-frown-open"></i>`;
    } else if (score < 9) {
        scoreMessage.innerHTML = "Well Done! You have some knowlege in Art History";
        scoreIcon.innerHTML = `<i class="fa-regular fa-face-smile"></i>`;
    } else if (score < 11) {
        scoreMessage.innerHTML = "Excellent! You know your Art History well.";
        scoreIcon.innerHTML = `<i class="fa-regular fa-face-grin"></i>`;
    } else {
        scoreMessage.innerHTML = "Outstanding! You are an Art History Master.";
        scoreIcon.innerHTML = `<i class="fa-regular fa-face-laugh-beam"></i>`;
    }
}

/**
 * End of Quiz function , when applied it hides the scorebox, quiz game and landing section
 * and triggers the finalScore function
 */
function endQuiz() {
    quizContainer.classList.add("hidden");
    introArea.classList.add("hidden");
    questionsArea.classList.add("hidden");
    scoreBox.classList.add("hidden");
    quizEndArea.classList.remove("hidden-end");
    tryAgainBtn.addEventListener("click", playAgain);
    finalScore();
}
/**
 * Executes when the play again button is clicked;
 * it bring the user back to the game section and clears the score
 */  
function playAgain() {
    scoreIndex.innerHTML = 0;
    score = 0;
    currentNumber = -1;
    quizEndArea.classList.add("hidden-end");
    quizContainer.classList.remove("hidden");
    startQuiz();
}
