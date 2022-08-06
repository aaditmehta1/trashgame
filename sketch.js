const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide; 
var rightSide;

function preload()
{

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100, -2, 30, ball_options)
	World.add(world, ball)

	groundObj = new Ground(200,974,16000,20);
	//groundObj = new Ground(windowWidth/2670,windowWidth,20);
	leftSide = new Ground(1550,900,20,120)
	rightSide = new Ground(1700,900,20,120)

	var ball_options ={
		isStatic:false,
		restitution:0.03,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  background(51);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x, ball.position.y, 30)
  rectMode(CENTER);
  Engine.update(engine)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Body.applyForce(ball, {x:0, y:0}, {x:0.035, y:0})
	}
	if (keyCode === LEFT_ARROW) {
		Body.applyForce(ball, {x:0, y:0}, {x:-0.035, y:0})
		}
	if (keyCode === RIGHT_ARROW) {
		Body.applyForce(ball, {x:0, y:0}, {x:0.035, y:0})
	}
}