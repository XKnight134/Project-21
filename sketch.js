

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
		isStatic:false,
		restitution:0.8,
		friction:0.9,
		density:1
	}

	var ground_options={
		isStatic:true
	}


	//Create the Bodies Here.

	ball = Bodies.circle(250,250,20,ball_options);
	World.add(world,ball);

	base = new ground(400,650,2200,20, ground_options)
	leftSide = new ground(1200,540,20,240, ground_options)
	rightSide = new ground(800,540,20,240, ground_options)


	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS)
  
}


function draw() {
 

  background(0);
  fill("yellow")
  base.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  
  
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-55})
	}
}


