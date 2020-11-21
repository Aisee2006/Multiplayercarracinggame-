var database;
var form,game,player;
var gamestate=0;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game = new Game();
  game.start();
}

function draw(){
  background("white");
  
}

