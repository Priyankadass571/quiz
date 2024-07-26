const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

// Sample quiz data (can be fetched from a server or hardcoded)
const quizData = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "Madrid",
      c: "Rome"
    },
    correctAnswer: "a"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: {
      a: "Charles Dickens",
      b: "Jane Austen",
      c: "William Shakespeare"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the largest mammal in the world?",
    answers: {
      a: "Elephant",
      b: "Blue whale",
      c: "Giraffe"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  const output = [];

  quizData.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}: ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="choices">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.choices');
  let numCorrect = 0;

  quizData.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  alert(`You got ${numCorrect} out of ${quizData.length} questions correct!`);
}

// Display quiz right away
buildQuiz();

// Event listener for submit button
submitButton.addEventListener('click', showResults);