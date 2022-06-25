
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var base, leftSide, rightSide;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:true,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	var ground_options={
		isStatic:true
	}


	//Create the Bodies Here.

	ball = Bodies.circle(250,250,200,ball_options);
	World.add(world,ball);

	base = new ground(400,650,2200,20)
	leftSide = new ground(1200,540,20,240)
	rightSide = new ground(800,540,20,240)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  base.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,50);
  rect(ground.position.x,ground.position.y,1500,20);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1500,20);

  keyPressed()


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}



