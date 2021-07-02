const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball_options={ restitution :0.8}

  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball)
  
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    pointB: {x:0, y:0},
    bodyB: ball,
    length:100,
    stiffness:0.1

  })

  World.add(world,con)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse (ball.position.x, ball.position.y, 10);

  push ();
  strokeWeight(2);
  stroke (255);
  line(con.pointA.x, con.pointA.y,ball.position.x, ball.position.y)
  pop ()
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05,y:0})
  }
}