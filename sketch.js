//write all the variables
var canvas;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var car1, car2, car3, car4;

var car2Group;
var car3Group;
var car4Group;

var checkLives = 5;
var score = 0;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
//load all the images
Track = loadImage("raceTrack.jpg");
car1_img = loadImage("images/car1.png");
car2_img = loadImage("images/car2.png");
car3_img = loadImage("images/car3.png");
car4_img = loadImage("images/car4.png");
}

function setup(){

canvas = createCanvas(displayWidth , displayHeight-140);

track = createSprite(700,300,500,500);
track.addImage(Track);
track.velocityY = 2;
track.scale = 2.0;

car1 = createSprite(600,550,20,20);
car1.addImage(car1_img);

car2Group = new Group();
car3Group = new Group();
car4Group = new Group();  
}

function draw(){
background("white");

console.log(gameState)

//define the PLAY state
if (gameState = PLAY){

//make the track move
track.velocityY = 4;
if (track.y > 800) {
track.y = track.height/2;
}

//add controls to the movement of the player
if (keyDown(LEFT_ARROW)){
car1.velocityX = -4;
car1.velocityY = 0;
}

if (keyDown(RIGHT_ARROW)){
car1.velocityX = 4;
car1.velocityY= 0;
}

if (keyWentUp(RIGHT_ARROW)){
car1.velocityX = 0;
car1.velocityY = 0;
}

if (keyWentUp(LEFT_ARROW)){
car1.velocityX = 0;
car1.velocityY = 0;
}

//display the score
textSize(20)
textFont("Algerian")
text("score:"+ score,1000,50);

//display the lives
textSize(20)
textFont("Algerian")
text("lives:"+ checkLives,1000,30);

//display the message
textSize(18)
fill("purple");
text("press the right and left arrow keys to save the car ",10,70);

//define the scoring
score = score + Math.round(getFrameRate()/60);

}

//define the scoring system
if (car1.isTouching(car2Group)){
//checkLives = checkLives-1;
track.velocityY = 0;
car1.destroy();
car2Group.destroy();
car3Group.destroy();
car4Group.destroy();
}

if (car1.isTouching(car3Group)){
//checkLives = checkLives-1;
track.velocityY = 0;
car1.destroy();
car2Group.destroy();
car3Group.destroy();
car4Group.destroy();
}


if (car1.isTouching(car4Group)){
//checkLives = checkLives-1;
track.velocityY = 0;
car1.destroy();
car2Group.destroy();
car3Group.destroy();
car4Group.destroy();
}

//spawn the game objects
spawnCars2();
spawnCars3();
spawnCars4();
drawSprites();

}

//spawn the game objects
function spawnCars2(){
if (frameCount%150 === 0){
car2 = createSprite(random(550,800),50,20,20);
car2.addImage(car2_img);
car2.velocityY = 6;
car2Group.add(car2);
}
}  

function spawnCars3 (){
if (frameCount%200 === 0){
car3 = createSprite(random(550,800),50,20,20);
car3.addImage(car3_img);
car3.velocityY = 6;
car3Group.add(car3);

}
}

function spawnCars4(){
if (frameCount%300 === 0){
car4 = createSprite(random(550,800),50,20);
car4.addImage(car4_img);
car4.velocityY = 6;
car4Group.add(car4);
}
}




  












 
 
 










  

 

  

  








    


