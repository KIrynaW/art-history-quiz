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

// Question Arrays
const questionContent = [
    {
        number: 1,
        img: "assets/images/alphonse_mucha.webp",
        alt: "An art print of a girl, holding grapes.",
        answers: ["Gustav Klimt", "Aubrey Beardsley", "Alphonse Mucha", "Egon Schiele"],
        facts: "'Fruit'(1897), by Alphonse Mucha. He was a Czech painter, illustrator, and graphic artist. Living in Paris during the Art Nouveau period, he was widely known for his distinctly stylized and decorative theatrical posters.",
        correctAnswerIndex: 2
    },
    {
        number: 2,
        img: "assets/images/andy_warhal.webp",
        alt: "A painting of an onion soup can.",
        answers: ["Roy Lichtenstein", "Andy Warhal", "Keith Haring", "Jeff Koons"],
        facts: "'Campbell's Soup Cans I: Onion'(1962), by Andy Warhal. The works were Warhol's hand-painted depictions of printed imagery deriving from commercial products and popular culture and belong to the pop art movement.",
        correctAnswerIndex: 1
    },
    {
        number: 3,
        img: "assets/images/eduard_manet.webp",
        alt: "A painting of a woman standing at a bar stand.",
        answers: ["Edouard Manet", "Edgar Degas", "Claude Monet", "Paul Cezanne"],
        facts: "'A Bar at the Folies-Bergere'(1882), by Edouard Manet. It was painted in the era of Impressionism and depicts a scene in the Folies Bergère nightclub in Paris.",
        correctAnswerIndex: 0
    },
    {
        number: 4,
        img: "assets/images/georges_seurat.webp",
        alt: "A painting of a hunched over boy, sitting at the bank of a river",
        answers: ["Camille Pissarro", "Charles Angrand", "Georges Seurat", "Paul Signac"],
        facts: "'Bathers at Asnières'(1884), by Georges Seurat. The canvas is of a suburban, placid Parisian riverside scene, created in post-impressionist era of art.",
        correctAnswerIndex: 2
    },
    {
        number: 5,
        img: "assets/images/henri_matisse.webp",
        alt: "An art piece of an abstract blue figure.",
        answers: ["Henri Matisse", "Othon Friesz", "Andre Derain", "Georges Braque"],
        facts: "'Blue Nude II'(1952), by Henri Matisse. One of the series of collages, and related color lithographs, made from paper cut-outs depicting nude figures in various positions.",
        correctAnswerIndex: 0
    },
    {
        number: 6,
        img: "assets/images/johannes_vermeer.webp",
        alt: "A portrait painting of a girl, wearing a big pearl earring.",
        answers: ["Anthony van Dyck", "Frans Hals", "Johannes Vermeer", "Peter Paul Rubens"],
        facts: "'Girl with a Pearl Earring'(1665), by Johannes Vermeer. He was a Duch painter. This oil pinting depicts a European girl wearing 'exotic dress', an 'oriental turban', and what appears to be a very large pearl as an earring.",
        correctAnswerIndex: 2
    },
    {
        number: 7,
        img: "assets/images/pablo_picasso.webp",
        alt: "An abstract portrait painting of a woman sitting on a chair.",
        answers: ["Paul Cezanne", "Juan Gris", "Pablo Picasso", "Piet Mondrian"],
        facts: "'Portrait of Dora Mar'(1937), by Pablo Picasso. This oil on canvas portrait is of the painter's lover, seated on a chair; it depicts both the profile and the frontal face in conjunction, which provides an opportunity to convey several perspectives.",
        correctAnswerIndex: 2
    },
    {
        number: 8,
        img: "assets/images/paul_gauguin.webp",
        alt: "A painting of two women sitting on the ground, wearing flowers in their hair.",
        answers: ["Vincent Van Gogh", "Paul Gauguin", "Edgar Degas", "Henri Matisse"],
        facts: "'What's New?'(1892), by Paul Gauguin. He was a French artist and a writer, associated with the Post-Impressionist and Symbolist movements. This painting is part of series created during his trip to Tahiti, depicting local villegers.",
        correctAnswerIndex: 1

    },
    {
        number: 9,
        img: "assets/images/salvador_dali.webp",
        alt: "A painting of a dream-like landscape with melting clocks.",
        answers: ["Salvador Dali", "Rene Magritte", "Max Ernst", "Joan Miro"],
        facts: "'The Persistence of Memory'(1931), by Salvador Dali. It is one of the most recognizable works of Surrealism; depicting Dalis phylosophy regarding the consept of 'time'.",
        correctAnswerIndex: 0
    },
    {
        number: 10,
        img: "assets/images/vincent_van_gogh.webp",
        alt: "A still-life painting of vase with sunflowers.",
        answers: ["Claude Monet", "Paul Gauguin", "Eduard Manet", "Vincent Van Gogh"],
        facts: "'Still-Life Vase with Fifteen Sunflowers'(1888), Vincent van Gogh. It is part of two series of still life paintings by the Dutch painter; being one of the second series, executed in Paris, depicts a still-life bouquet of sunflowers in a vase.",
        correctAnswerIndex: 3
    },
    {
        number: 11,
        img: "assets/images/wassily_kandinsky.webp",
        alt: "An abstract painting, full of vivid colours and different random shapes.",
        answers: ["Kazimir Malevich", "El Lissitzky", "Wassily Kandinsky", "Paul Klee"],
        facts: "'Composition IV'(1913), by Wassily Kandinsky. It is part of series inspired by music; he theorised that the combinations of colours produce vibrational frequencies, akin to chords played on a piano. Kandinsky is generally credited as one of the pioneers of abstraction in western art.",
        correctAnswerIndex: 2
    }
];
