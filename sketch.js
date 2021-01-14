var gameState = 0;
var database, Game, canvas;
var form, player, playerCount;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    Game = new game();
    Game. getState();
    Game.start();
    }

 function draw(){

 }   