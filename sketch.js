
var ball;
var paperObj;
var groundObj;
var dustbinObj;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	engine = Engine.create();
	world = engine.world;



paperObj = new Paperball(200,450,40)
groundObj = new Ground(600,670,width,20)
dustbinObj = new Dustbin(1200,650)
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paperObj.display();
  groundObj.display();
  dustbinObj.display();



}




