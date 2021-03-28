var canvas, backgroundImage;

var gameState = 0;

var contestantCount, allContestants;

var distance  = 0;

var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(900,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


