const quizData = [{
        question: 'Who is the president of USA?',
        a: 'a1',
        b: 'b1',
        c: 'c1',
        d: 'd1'
    },
    {
        question: 'How many oceans are there on our planet?',
        a: 'a2',
        b: 'b2',
        c: 'c2',
        d: 'd2'
    },
    {
        question: 'Who invented electricity?',
        a: 'a3',
        b: 'b3',
        c: 'c3',
        d: 'd3'
    },
    {
        question: 'When did WW2 started?',
        a: 'a4',
        b: 'b4',
        c: 'c4',
        d: 'd4'
    },
    {
        question: 'What is the capital of US?',
        a: 'a5',
        b: 'b5',
        c: 'c5',
        d: 'd5'
    },
    {
        question: 'What is the capital of Belarus?',
        a: 'a6',
        b: 'b6',
        c: 'c6',
        d: 'd6'
    }
]


const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('quiz-question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('quiz-button');
// let answer = undefined;
let score = 0;

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {

    getDiselected()

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuiz++;
}

function getSelected() {

    let answer = undefined;


    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

function getDiselected() {
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    })
}

submitBtn.addEventListener('click', () => {


    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            alert('You finished the quiz')
        }
    }

})