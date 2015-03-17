var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correctQuestions = [];
var wrongQuestions = [];


function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;  
}


//Return questions for right or wrong
function buildQuestions(questionsprint) {
  var questionsHTML = "<ol>";
  for (var i = 0; i < questionsprint.length; i += 1) {
    questionsHTML += "<li>" + questionsprint[i] + "</li>";
  }
  questionsHTML += "</ol>";
  return questionsHTML
}

//Ask questions, store correct answers, store quesions right & wrong
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers += 1;
    correctQuestions.push(question);
  } else {
    wrongQuestions.push(question);
  }
}





// Print to screen
html = "You got " + correctAnswers + " question(s) right.";
html += "<h2>You got these questions right:</h2>";
html += buildQuestions(correctQuestions);
html += "<h2>You got these questions wrong:</h2>";
html += buildQuestions(wrongQuestions);
print(html);








