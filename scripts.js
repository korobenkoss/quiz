const questions = [
    {
        question: "What is 10 + 10",
        options: ["8", "28", "20", "30"],
        answer: "20"
    },
    {
        question: "What is Ihor's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    }
];


let questionNumber = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});

function loadQuestion(){
    document.querySelector("#question").innerHTML = questions[questionNumber].question;
    const options = document.querySelector("#options");
    for(const option of questions[questionNumber].options){
        options.innerHTML += `<button class="option">${option}</button>`;    
    }
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            alert(option.textContent);
        }
    });
}