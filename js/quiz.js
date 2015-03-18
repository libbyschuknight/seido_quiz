// to add - an option to quit out of the questions

var questions = [
  ["Who is the principal instructor at Seido Karate Wellington? (use full title)", "Sei Shihan Ben"],
  ["Who founded Seido Karate?", "Kaicho Nakamura"],
  ["In what year was Seido Karate founded?", "1976"],
  ["What is Kaicho's first name?", "Tadashi"],
  ["Where is Honbu based?", "New York"],
  ["When did Seido Wellington begin?", "1983"],
  ["What does 'Seido' translate as?", "Sincere way"],
  ["What are the three cornerstone principles of Seido? (separate each with a comma and space)", "love, respect, obedience"],
  ["What was the first style that Kaicho trained in?", "Goju"],
  ["Who did Kaicho train under in Goju?", "Kei Miyagi Sensei"],
  ["What was the second style of karate that Kaicho trained in?", "Kyokushin "]
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
    questionsHTML += "<li>" + questionsprint[i] + " A: " + questions[i][1] + "</li>";
  }
  questionsHTML += "</ol>";
  return questionsHTML
}

//Ask questions, store correct answers, store quesions right & wrong
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);

  if ( response === answer) {
    correctAnswers += 1;
    correctQuestions.push(question);
  } else {
    wrongQuestions.push(question);
  }
}





// Print to screen
html = "<h2>You got " + correctAnswers + " question(s) right.</h2>";
// html = "<h2>You have scored " + correctAnswers + " out of " + question[i] + "</h2>";
html += "<h2>You got these questions right:</h2>";
html += buildQuestions(correctQuestions);
html += "<h2>You got these questions wrong:</h2>";
html += buildQuestions(wrongQuestions);
print(html);








