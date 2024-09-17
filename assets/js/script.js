
//-- Create variables and store elements there --//
const startBtn = document.getElementById("start");
const introArea = document.getElementById("intro");
const imageBox = document.getElementById("art-work");
const imageIndex = document.getElementById("paintingNum");
const questionsArea = document.getElementById("questions");
const scoreBox = document.getElementById("score-box");
const scoreIndex = document.getElementById("score-num")
const optionOneBtn = document.getElementById("option-one");
const optionTwoBtn = document.getElementById("option-two");
const optionThreeBtn = document.getElementById("option-three");
const optionFourBtn = document.getElementById("option-four");
const nextQuestionBtn = document.getElementById("next-question");
const factsArea = document.getElementById("art-facts-container");
const facts = document.getElementById("art-facts");
const quizEndArea = document.getElementById("quiz-end");
const scoreMessage = document.getElementById("score-message");
const tryAgainBtn = document.getElementById("try-again");

// Start the Quiz event listener
startBtn.addEventListener("click", startQuiz);

// Next Question Button event listener
nextQuestionBtn.addEventListener("click", getNextQuestion);

//current question number sequence
let currentNumber = 0;
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
    if (currentNumber >= 12) {
        endQuiz();
    } else {
        imageIndex.innerHTML = currentNumber;
    }
}

//-- Display Image of the Painting --//
function getImage() {
    let imageDiv = document.getElementById('art-work')
    imageDiv.innerHTML = "<img id='art-works' alt='Famous Paintings' src=" + questionContent[currentNumber].img + ">"
}

//-- Shuffle through the questions/images arrays by using Fiher-Yates methods--//
function shuffleQuestions() {
for(let i= questionContent.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i + 1));
    let k = questionContent[i];
    questionContent[i] = questionContent[j];
    questionContent[j] = k;
}
return questionContent;
}

//-- Display question option text in option elements --//
function getOptions() {
    const quizData = questionContent[currentNumber].answers;
    optionOneBtn.innerText = quizData[0];
    optionTwoBtn.innerText = quizData[1];
    optionThreeBtn.innerText = quizData[2];
    optionFourBtn.innerText = quizData[3];
}


//-- Engages option selection and triggers an event --//
function chooseOption() {
    ;
}


//-- Check correct answer and display the correct one if wrong and activate the facts text --//
function checkAnswer(event) {
    let selectedOption = questionContent[currentNumber];
    let correctAnswer = selectedOption.correctAnswer;
    let optionText = event.target.innerHTML;
    if (optionText == correctAnswer) {
        addScore();
    }
    getFacts();
}

function getFacts() {
    facts.innerText = questionContent[currentNumber].facts;
    factsArea.classList.remove("hidden-two");
    nextQuestionBtn.classList.remove("hidden-two");
    optionOneBtn.removeEventListener("click", checkAnswer);
    optionTwoBtn.removeEventListener("click", checkAnswer);
    optionThreeBtn.removeEventListener("click", checkAnswer);
    optionFourBtn.removeEventListener("click", checkAnswer);
}

//-- Generate next question when button pressed --//
function getNextQuestion() {
    currentNumber += 1;
    factsArea.classList.add ("hidden-two");
    nextQuestionBtn.classList.add("hidden-two");
    imageNumber();
    getImage();
    getOptions();
    optionOneBtn.addEventListener("click", checkAnswer);
    optionTwoBtn.addEventListener("click", checkAnswer);
    optionThreeBtn.addEventListener("click", checkAnswer);
    optionFourBtn.addEventListener("click", checkAnswer);
}

//--- Add to the score if answer correct ---//
function addScore() {
    score += 1
    scoreIndex.innerText = score
}

//--- Final End of Quiz Message with a score and play again option ---//
function endQuiz() {
    console.log('quiz should end')
}

function playAgain() {

}

// --- Arrays --- //
const questionContent = [
    {
        number: 1,
        img: "assets/images/alphonse-mucha.jpg",
        answers: ["Gustav Klimt", "Aubrey Beardsley", "Alphonse Mucha", "Egon Schiele"],
        facts: "'Fruit' by Alphonse Mucha. He was a Czech painter, illustrator, and graphic artist. Living in Paris during the Art Nouveau period, he was widely known for his distinctly stylized and decorative theatrical posters",
        correctAnswer: "Alphonse Mucha"
    },
    {
        number: 2,
        img: "assets/images/andy-warhal.jpg",
        answers: ["Roy Lichtenstein", "Andy Warhal", "Keith Haring", "Jeff Koons"],
        facts: "'Campbell's Soup Cans I: Onion' by Andy Warhal. The works were Warhol's hand-painted depictions of printed imagery deriving from commercial products and popular culture and belong to the pop art movement.",
        correctAnswer: "Andy Warhal"

    },
    {
        number: 3,
        img: "assets/images/eduard-manet.jpg",
        answers: ["Edouard Manet", "Edgar Degas", "Claude Monet", "Paul Cezanne"],
        facts: "'A Bar at the Folies-Bergere' by Edouard Manet. It was painted in 1882 in the era of Impressionism and depicts a scene in the Folies Bergère nightclub in Paris.",
        correctAnswer: "Edouard Manet"

    },
    {
        number: 4,
        img: "assets/images/georges-seurat.jpg",
        answers: ["Camille Pissarro", "Charles Angrand", "Georges Seurat", "Paul Signac"],
        facts: "'Bathers at Asnières' by Georges Seurat. The canvas is of a suburban, placid Parisian riverside scene, created in post-impressionist era of art.",
        correctAnswer: "Georges Seurat"

    },
    {
        number: 5,
        img: "assets/images/henri-matisse.jpg",
        answers: ["Henri Matisse", "Othon Friesz", "Andre Derain", "Georges Braque"],
        facts: "'Blue Nude II' by Henri Matisse. One of the series of collages, and related color lithographs, made from paper cut-outs depicting nude figures in various positions. Restricted by his physical condition after his surgery for stomach cancer, Matisse began creating art by cutting and painting sheets of paper by hand.",
        correctAnswer: "Henri Matisse"

    },
    {
        number: 6,
        img: "assets/images/johannes-vermeer.jpg",
        answers: ["Anthony van Dyck", "Frans Hals", "Johannes Vermeer", "Peter Paul Rubens"],
        facts: "'Girl with a Pearl Earring' is an oil painting by Dutch painter Johannes Vermeer, dated c. 1665. It depicts a European girl wearing 'exotic dress', an 'oriental turban', and what appears to be a very large pearl as an earring",
        correctAnswer: "Johannes Vermeer"

    },
    {
        number: 7,
        img: "assets/images/pablo-picasso.jpg",
        answers: ["Paul Cezanne", "Juan Gris", "Pablo Picasso", "Piet Mondrian"],
        facts: "'Portrait of Dora Mar' is a 1937 oil on canvas painting by Pablo Picasso.In this portrait It depicts Dora Maar, the painter's lover, seated on a chair; her face is particularly remarkable for its experimental style, as the image depicts both the profile of the face and the frontal face in conjunction, which provides an opportunity to convey several perspectives.",
        correctAnswer: "Pablo Picasso"

    },
    {
        number: 8,
        img: "assets/images/paul-gauguin.jpg",
        answers: ["Vincent Van Gogh", "Paul Gauguin", "Edgar Degas", "Henri Matisse"],
        facts: "'What's New?' by Paul Gauguin. He was a French painter, sculptor, printmaker, ceramist, and writer, whose work has been primarily associated with the Post-Impressionist and Symbolist movements. This painting is part of series created during his trip to Tahiti, depicting local villegers",
        correctAnswer: "Paul Gauguin"

    },
    {
        number: 9,
        img: "assets/images/salvador-dali.jpg",
        answers: ["Salvador Dali", "Rene Magritte", "Max Ernst", "Joan Miro"],
        facts: "'The Persistence of Memory' is a 1931 painting by artist Salvador Dali and one of the most recognizable works of Surrealism.It epitomizes Dali's theory of 'softness' and 'hardness', which was central to his thinking at the time.",
        correctAnswer: "Salvador Dali"

    },
    {
        number: 10,
        img: "assets/images/vincent-van-gogh.jpg",
        answers: ["Claude Monet", "Paul Gauguin", "Eduard Manet", "Vincent Van Gogh"],
        facts: "'Sunflowers ' is the title of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, made a year later in Arles, shows a bouquet of sunflowers in a vase.",
        correctAnswer: "Vincent Van Gogh"

    },
    {
        number: 11,
        img: "assets/images/wassily-kandinsky.jpg",
        answers: ["Kazimir Malevich", "El Lissitzky", "Wassily Kandinsky", "Paul Klee"],
        facts: "'Composition IV' created by Wassily Kandinsky in 1913. It is part of series inspired by music; he theorised that (for example), yellow is the colour of middle C on a brassy trumpet; black is the colour of closure, and the end of things; and that combinations of colours produce vibrational frequencies, akin to chords played on a piano. Kandinsky is generally credited as one of the pioneers of abstraction in western art.",
        correctAnswer: "Wassily Kandinsky"

    }

]