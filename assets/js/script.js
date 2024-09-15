
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

//--- Create Quiz functions to run the game ---//
// --- Start and Display the Quiz ---//
function startQuiz() {
    introArea.classList.add("hidden");
    questionsArea.classList.remove("hidden");
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
