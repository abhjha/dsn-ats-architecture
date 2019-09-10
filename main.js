// var request = new XMLHttpRequest();
// request.open('GET', 'questionnaire.json');
// request.responseType = 'json';
// var superHeroes = [];
// request.onload = function() {
//     superHeroes = JSON.parse(this.response);
// }
// request.send();

var myQuestions = [
    {
        "question": "Variety of devices the product will be used on?",
        "choices": {
            "a": "Single type of Device",
            "b": "Multiple types of Devices"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Volume of data the product will deal with?",
        "choices": {
            "a": "Option 1",
            "b": "Option 2",
            "c": "Option 3",
            "d": "Option 4"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Type of data the product will deal with?",
        "choices": {
            "a": "Raw Sensor Data",
            "b": "Processed Data"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Notification system?",
        "choices": {
            "a": "Have Alarms to notify",
            "b": "Use Edge Computing"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Type of sensor to be used?",
        "choices": {
            "a": "RFID",
            "b": "GPS",
            "c": "Industrial",
            "d": "Medical Consumer"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Load?",
        "choices": {
            "a": "<10 users",
            "b": "10 - 1000 users",
            "c": ">1000 users"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Security?",
        "choices": {
            "a": "Option 1",
            "b": "Option 2",
            "c": "Option 3",
            "d": "Option 4"
        },
        "correctAnswer": "a"
    },
    {
        "question": "Kind of Storage?",
        "choices": {
            "a": "PostGRE SQL",
            "b": "SQL DB",
            "c": "SQL Server",
            "d": "NoSQL"
        },
        "correctAnswer": "a"
    },
];

//Sideber menu (questionnaire) functions
var count = 0;
function openNav(x) {
    x.classList.toggle("change");
    document.getElementById("logo").style.opacity = "0.1";
    document.getElementById("toplogo").style.opacity = "1";
    if (count%2 == 0){
        document.getElementById("menu").style.width = "30%";
        document.getElementById("arch").style.marginLeft = "350px";
        document.getElementById("pc").style.marginLeft = "250px";
        count++;
    }
    else{
        document.getElementById("menu").style.width = "0";
        document.getElementById("arch").style.marginLeft = "100px";
        document.getElementById("pc").style.marginLeft = "0";
        if(currentSlide == 0){
            document.getElementById("logo").style.opacity = "1";
            document.getElementById("toplogo").style.opacity = "0";
        }
        count++;
    }
    
}

// Questionnaire functions
function buildQuiz() {

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // store the list of choices
        const choices = [];

        // and for each available choice...
        for (letter in currentQuestion.choices) {
            // ...add an HTML radio button
            choices.push(
            `
            <label class="container">
                <input type="radio" name="question${questionNumber}" value="${letter}" onclick="showNextSlide(letter)">
                ${currentQuestion.choices[letter]}
                <span class="checkmark"></span>
            </label>
            `
            );
        }

        // add this question and its answers to the output
        output.push(
            `
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${choices.join("")} </div>
            `
        );
    });

    // finally combine output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
}

const answerSelected = [];
function showNextSlide(x) {
    //showSlide(currentSlide + 1);
    if (currentSlide < slides.length){
        answerSelected[currentSlide] = x;
        currentSlide = currentSlide + 1;
    }
    //slides[currentSlide].classList.remove("prev-slide");
    var nextSlide = slides[currentSlide];
    if (currentSlide < slides.length){
        nextSlide.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
    //else{
    //    numCorrect = 0;
        check();
    //}
    //slides[currentSlide-1].classList.add("prev-slide");
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// we'll need a place to store the HTML output
const output = [];


// display quiz right away
buildQuiz();

const slides = document.querySelectorAll(".answers");
let currentSlide = 0;
// keep track of user's answers
var numCorrect;
var ans = 0;

function check() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    ans = answerContainers;
    numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
        }

        if (questionNumber == 0 && !!userAnswer) {
            document.getElementById("op1").style.opacity = "1";
            document.getElementById("div1").style.opacity = "1";
            // document.getElementById().setAttribute('style', 'overflow-y: scroll');
        }
        else if (questionNumber == 1 && !!userAnswer) {
            document.getElementById("op2").style.opacity = "1";
            document.getElementById("div2").style.opacity = "1";
            document.getElementById("a1").style.opacity = "1";
        }
        else if (questionNumber == 2 && !!userAnswer) {
            document.getElementById("op3").style.opacity = "1";
            // document.getElementById("a2").style.opacity = "1";
        }
        else if (questionNumber == 3 && !!userAnswer) {
            document.getElementById("op4").style.opacity = "1";
            document.getElementById("div3").style.opacity = "1";
            document.getElementById("a3").style.opacity = "1";
            document.getElementById("cap").style.opacity = "1";
        }
        else if (questionNumber == 4 && !!userAnswer) {
            document.getElementById("op5").style.opacity = "1";
            document.getElementById("div4").style.opacity = "1";
            document.getElementById("a4").style.opacity = "1";
        }
    });
}

var a, d = "";
function arch() {
    a = document.getElementById("architecture").value;
    var x = document.getElementById("details");
    if ((a != "ph1" || d != "ph2") && d != "") {
        if (a == "thingworx") {
            for (var i = 1; i <= x.length; i++) {
                x.remove(i);
            }
            var option = document.createElement("option");
            option.text = "IIOT";
            option.value = "iiot";
            x.add(option, x[1]);
            var option1 = document.createElement("option");
            option1.text = "PLM";
            option1.value = "plm";
            x.add(option1, x[2]);
        }
        else if (a == "aws") {
            for (var i = 1; i <= x.length; i++) {
                x.remove(i);
            }
            var option = document.createElement("option");
            option.text = "Asset Tracking";
            option.value = "at";
            x.add(option, x[1]);
        }
        else if (a == "azure") {
            for (var i = 1; i <= x.length; i++) {
                x.remove(i);
            }
            var option = document.createElement("option");
            option.text = "Asset Tracking";
            option.value = "at";
            x.add(option, x[1]);
        }
    }
}

function details() {
    d = document.getElementById("details").value;
    if (a != "ph1" || d != "ph2") {
        document.getElementById("logo").style.opacity = "0.1";
        document.getElementById("toplogo").style.opacity = "1";
        if (a == "thingworx" && d == "iiot") {
            document.getElementById("i1").style.display = "block";
            document.getElementById("i1").style.opacity = "1";
            document.getElementById("i2").style.display = "none";
            document.getElementById("i3").style.display = "none";
            document.getElementById("i4").style.display = "none";
        }
        else if (a == "thingworx" && d == "plm") {
            document.getElementById("i4").style.display = "block";
            document.getElementById("i4").style.opacity = "1";
            document.getElementById("i2").style.display = "none";
            document.getElementById("i3").style.display = "none";
            document.getElementById("i1").style.display = "none";
        }
        else if (a == "aws" && d == "at") {
            document.getElementById("i2").style.display = "block";
            document.getElementById("i2").style.opacity = "1";
            document.getElementById("i1").style.display = "none";
            document.getElementById("i3").style.display = "none";
            document.getElementById("i4").style.display = "none";
        }
        else if (a == "azure" && d == "at") {
            document.getElementById("i3").style.display = "block";
            document.getElementById("i3").style.opacity = "1";
            document.getElementById("i1").style.display = "none";
            document.getElementById("i2").style.display = "none";
            document.getElementById("i4").style.display = "none";
        }
    }
}