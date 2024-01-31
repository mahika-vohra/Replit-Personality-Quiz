var questionCount = 0;


var katnissScore = 0;
var peetaScore = 0;
var finnickScore = 0;
var snowScore = 0;
var johannaScore = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", johanna);
q1a2.addEventListener("click", peeta);
q1a3.addEventListener("click", snow);
q1a4.addEventListener("click", katniss);
q1a5.addEventListener("click", finnick);

q2a1.addEventListener("click", johanna);
q2a2.addEventListener("click", peeta);
q2a3.addEventListener("click", snow);
q2a4.addEventListener("click", finnick);
q2a5.addEventListener("click", katniss);

q3a1.addEventListener("click", johanna);
q3a2.addEventListener("click", katniss);
q3a3.addEventListener("click", peeta);
q3a4.addEventListener("click", snow);
q3a5.addEventListener("click", finnick);

q4a1.addEventListener("click", snow);
q4a2.addEventListener("click", katniss);
q4a3.addEventListener("click", finnick);
q4a4.addEventListener("click", peeta);
q4a5.addEventListener("click", johanna);


function katniss (){
  katnissScore +=1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " katnissScore = " + katnissScore);

  if (questionCount > 3){
    console.log("The quiz is done!");

    updateResults();
  }
}

function peeta (){
  peetaScore +=1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " peetaScore = " + peetaScore);

  if (questionCount > 3){
    console.log("The quiz is done!");

    updateResults();
  }
}

function finnick (){
  finnickScore +=1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " finnickScore = " + finnickScore);

  if (questionCount > 3){
    console.log("The quiz is done!");

    updateResults();
  }
}

function snow() {
  snowScore +=1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " snowScore = " + snowScore);

  if (questionCount > 3){
    console.log("The quiz is done!");

    updateResults();
  }
}

function johanna() {
  johannaScore +=1;
  questionCount +=1;

  console.log("questionCount = " + questionCount + " johannaScore = " + johannaScore);

  if (questionCount > 3){
    console.log("The quiz is done!");

    updateResults();
  }
}

function updateResults(){
  if (katnissScore > peetaScore && katnissScore > finnickScore && katnissScore > snowScore && katnissScore > johannaScore){
    result.innerHTML = "You are Katniss Everdeen!";
    console.log("You are Katniss Everdeen!");
  }else if (peetaScore > katnissScore && peetaScore > finnickScore && peetaScore > snowScore && peetaScore > johannaScore){
    result.innerHTML = "You are Peeta Melark!";
    console.log("You are Peeta Melark!");
  }else if (finnickScore > katnissScore && finnickScore > peetaScore && finnickScore > snowScore && finnickScore > johannaScore){
    result.innerHTML = "You are Finnick Odair!";
    console.log("You are Finnick Odair!");
  }else if (snowScore > katnissScore && snowScore > peetaScore && snowScore > finnickScore && snowScore > johannaScore){
    result.innerHTML = "You are Coriolanus Snow!";
    console.log("You are Coriolanus Snow!");
  }else if (johannaScore > katnissScore && johannaScore > peetaScore && johannaScore > finnickScore && johannaScore > snowScore){
    result.innerHTML = "You are Johanna Mason!";
    console.log("You are Johanna Mason!");
  }
}

  function restartQuiz() {
    result.innerHTML = "Your result is...";
    questionCount = 0;
    katnissScore = 0;
    peetaScore = 0;
    finnickScore = 0;
    snowScore = 0;
    johannaScore = 0;
}