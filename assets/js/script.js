
//-- Create variables and store elements there --//
const startBtn = document.getElementById("start");
const introArea = document.getElementById("intro");
const scoreBox = document.getElementById("score-box");
const scoreIndex = document.getElementById("score-num");
const quizContainer = document.getElementById("quiz-container");
const imageIndex = document.getElementById("painting-num");
const imageBox = document.getElementById("art-work");
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

// Next Question Button event listener
nextQuestionBtn.addEventListener("click", getNextQuestion);

// Try to play again
tryAgainBtn.addEventListener("click", playAgain);

//current question number sequence
let currentNumber = -1;
// the users points score
let score = 0;


//--- Create Quiz functions to run the game ---//
// --- Start and Display the Quiz ---//
function startQuiz() {
    introArea.classList.add("hidden");
    questionsArea.classList.remove("hidden");
    scoreBox.classList.remove("hidden");
    shuffleQuestions();
    getNextQuestion();
}

//--- Display Painting/Question Number, after 11th Image, go to Quiz End ---//
function imageNumber() {
    imageIndex.innerHTML = currentNumber+1;
}

//-- Display Image of the Painting --//
function getImage() {
    imageBox.innerHTML = "";
    const quizImage = document.createElement("img");
    quizImage.src = questionContent[currentNumber].img;
    quizImage.alt = questionContent[currentNumber].alt;
    quizImage.id = "art-works";
    imageBox.appendChild(quizImage);
}

//-- Shuffle through the questions/images arrays by using Fiher-Yates methods--//
function shuffleQuestions() {
    for(let i= questionContent.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i + 1));
        let k = questionContent[i];
        questionContent[i] = questionContent[j];
        questionContent[j] = k;
    }
}

//-- Display question option text in option elements --//
function getOptions() {
    const quizData = questionContent[currentNumber].answers;
    optionBtns.forEach(
        function(btn, index) {
            btn.innerText = quizData[index];
        });
}

//-- Check correct answer and display the correct one if wrong and activate the facts text --//
function checkAnswer(event) {
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

function toggleOptionBtns(arg) {
    showHidden.forEach(element => {
        if (arg == 'show') {
            element.classList.toggle("hidden", false);
        }
        else if (arg == 'hide') {
            element.classList.toggle("hidden", true);
        }
    });
}

//-- Generate next question when button pressed --//
function getNextQuestion() {
    currentNumber += 1;
    clearPreviousChoice();
    toggleOptionBtns('hide');
    if (currentNumber == 11) {
        endQuiz();
    } else {
        imageNumber();
        getImage();
        getOptions();
    }
}

//--- Add to the score if answer correct ---//
function addScore() {
    score += 1;
    scoreIndex.innerText = score;
}

function getFacts() {
    facts.innerText = questionContent[currentNumber].facts;
    toggleOptionBtns('show');
    optionBtns.forEach(element => {
        element.removeEventListener("click", checkAnswer);
        element.classList.remove("hover");
    });
}

//--- Clears the previously selected option and applied functions ---//
function clearPreviousChoice() {
   optionBtns.forEach(element => {
        element.classList.remove("wrong");
        element.classList.remove("right");
        element.addEventListener("click", checkAnswer);
        element.classList.add("hover");
    });
}

function finalScore() {
    scoreTotal.innerHTML = score;
    const scoreIcon = document.getElementById("score-icon");
    if (score < 5) {
        scoreMessage.innerHTML = "Not Great! Maybe try again?"
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

//--- Final End of Quiz Message with a score and play again option ---//
function endQuiz() {
    quizContainer.classList.add("hidden");
    introArea.classList.add("hidden");
    questionsArea.classList.add("hidden");
    scoreBox.classList.add("hidden");
    quizEndArea.classList.remove("hidden-three");
    finalScore();
}

function playAgain() {
    scoreIndex.innerHTML = 0;
    score = 0;
    currentNumber = -1;
    quizEndArea.classList.add("hidden-three");
    quizContainer.classList.remove("hidden");
    startQuiz();
}

// --- Arrays --- //
const questionContent = [
    {
        number: 1,
        img: "assets/images/alphonse-mucha.jpg",
        alt: "An art print of a girl, holding grapes.",
        answers: ["Gustav Klimt", "Aubrey Beardsley", "Alphonse Mucha", "Egon Schiele"],
        facts: "'Fruit' by Alphonse Mucha. He was a Czech painter, illustrator, and graphic artist. Living in Paris during the Art Nouveau period, he was widely known for his distinctly stylized and decorative theatrical posters",
        correctAnswerIndex: 2
    },
    {
        number: 2,
        img: "assets/images/andy-warhal.jpg",
        alt: "A painting of an onion soup can.",
        answers: ["Roy Lichtenstein", "Andy Warhal", "Keith Haring", "Jeff Koons"],
        facts: "'Campbell's Soup Cans I: Onion' by Andy Warhal. The works were Warhol's hand-painted depictions of printed imagery deriving from commercial products and popular culture and belong to the pop art movement.",
        correctAnswerIndex: 1

    },
    {
        number: 3,
        img: "assets/images/eduard-manet.jpg",
        alt: "A painting of a woman standing at a bar stand.",
        answers: ["Edouard Manet", "Edgar Degas", "Claude Monet", "Paul Cezanne"],
        facts: "'A Bar at the Folies-Bergere' by Edouard Manet. It was painted in 1882 in the era of Impressionism and depicts a scene in the Folies Bergère nightclub in Paris.",
        correctAnswerIndex: 0

    },
    {
        number: 4,
        img: "assets/images/georges-seurat.jpg",
        alt: "A painting of a hunched over boy, sitting at the bank of a river",
        answers: ["Camille Pissarro", "Charles Angrand", "Georges Seurat", "Paul Signac"],
        facts: "'Bathers at Asnières' by Georges Seurat. The canvas is of a suburban, placid Parisian riverside scene, created in post-impressionist era of art.",
        correctAnswerIndex: 2

    },
    {
        number: 5,
        img: "assets/images/henri-matisse.jpg",
        alt: "An art piece of an abstract blue figure.",
        answers: ["Henri Matisse", "Othon Friesz", "Andre Derain", "Georges Braque"],
        facts: "'Blue Nude II' by Henri Matisse. One of the series of collages, and related color lithographs, made from paper cut-outs depicting nude figures in various positions.",
        correctAnswerIndex: 0

    },
    {
        number: 6,
        img: "assets/images/johannes-vermeer.jpg",
        alt: "A portrait painting of a girl, wearing a big pearl earring.",
        answers: ["Anthony van Dyck", "Frans Hals", "Johannes Vermeer", "Peter Paul Rubens"],
        facts: "'Girl with a Pearl Earring' is an oil painting by Dutch painter Johannes Vermeer, dated c. 1665. It depicts a European girl wearing 'exotic dress', an 'oriental turban', and what appears to be a very large pearl as an earring",
        correctAnswerIndex: 2

    },
    {
        number: 7,
        img: "assets/images/pablo-picasso.jpg",
        alt: "An abstract portrait painting of a woman sitting on a chair.",
        answers: ["Paul Cezanne", "Juan Gris", "Pablo Picasso", "Piet Mondrian"],
        facts: "'Portrait of Dora Mar' is a 1937 oil on canvas painting by Pablo Picasso. This portrait is of the painter's lover, seated on a chair; it depicts both the profile and the frontal face in conjunction, which provides an opportunity to convey several perspectives.",
        correctAnswerIndex: 2
    },
    {
        number: 8,
        img: "assets/images/paul-gauguin.jpg",
        alt: "A painting of two women sitting on the ground, wearing flowers in their hair.",
        answers: ["Vincent Van Gogh", "Paul Gauguin", "Edgar Degas", "Henri Matisse"],
        facts: "'What's New?' by Paul Gauguin. He was a French artist and a writer, associated with the Post-Impressionist and Symbolist movements. This painting is part of series created during his trip to Tahiti, depicting local villegers",
        correctAnswerIndex: 1

    },
    {
        number: 9,
        img: "assets/images/salvador-dali.jpg",
        alt: "A painting of a dream-like landscape with melting clocks.",
        answers: ["Salvador Dali", "Rene Magritte", "Max Ernst", "Joan Miro"],
        facts: "'The Persistence of Memory' is a 1931 painting by artist Salvador Dali and one of the most recognizable works of Surrealism; depicting Dalis phylosophy regarding the consept of 'time'.",
        correctAnswerIndex: 0

    },
    {
        number: 10,
        img: "assets/images/vincent-van-gogh.jpg",
        alt: "A still-life painting of vase with sunflowers.",
        answers: ["Claude Monet", "Paul Gauguin", "Eduard Manet", "Vincent Van Gogh"],
        facts: "'Sunflowers ' is the title of two series of still life paintings by the Dutch painter Vincent van Gogh. Part of the second series, executed in Paris in 1888, depicts a still-life bouquet of sunflowers in a vase.",
        correctAnswerIndex: 3
    },
    {
        number: 11,
        img: "assets/images/wassily-kandinsky.jpg",
        alt: "An abstract painting, full of vivid colours and different random shapes.",
        answers: ["Kazimir Malevich", "El Lissitzky", "Wassily Kandinsky", "Paul Klee"],
        facts: "'Composition IV' created by Wassily Kandinsky in 1913. It is part of series inspired by music; he theorised that the combinations of colours produce vibrational frequencies, akin to chords played on a piano. Kandinsky is generally credited as one of the pioneers of abstraction in western art.",
        correctAnswerIndex: 2
    }

]