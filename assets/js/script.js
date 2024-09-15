
//-- Load DOM content and Activate buttons through event listeners --//
    const start = document.getElementById("start");
    const intro = document.getElementById("intro");
    const questions = document.getElementById("questions");
    const scoreBox = document.getElementById("score-box");
    start.addEventListener("click", startQuiz);

// --- Start and Display the Quiz ---//
function startQuiz() {
    intro.classList.add("hidden");
    questions.classList.remove("hidden");
    scoreBox.classList.remove("hidden-two")
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

//-- Handle answer selection --//
function chooseAnswer() {

}

//-- Check correct answer and display the correct one if wrong and activate the facts text --//
function checkRightAnswer() {

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
