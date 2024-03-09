const questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
        {text:"Shark",correct:false},
        {text:"Blue whale",correct:true},
        {text:"Elephant",correct:false},
        {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is smallest country in the world?",
        answers:[
        {text:"Vatican City",correct:true},
        {text:"Bhutan",correct:true},
        {text:"Nepal",correct:false},
        {text:"Sri Lanka",correct:false},
        ]

    },
    {
        question:"which is largest desert in the world?",
        answers:[
        {text:"Kalahari",correct:false},
        {text:"Gobi",correct:false},
        {text:"Sahara",correct:false},
        {text:"Antartica",correct:true},
        ]
    },
    {
        question:"which is smallest continent in the world?",
        answers:[
        {text:"Asia",correct:false},
        {text:"Australia",correct:true},
        {text:"Arctic",correct:false},
        {text:"Africa",correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}


function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". "+currentQuestion.question;
}