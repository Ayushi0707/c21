const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1,b2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var props={
    restitution:0.99,
    frictionAir:0.01
  }
  ball = Bodies.circle(40,50,30,props);
  World.add(world,ball);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  b1 = createImg("right.png");
  b1.position(20,40);
  b1.size(50,50);
  b1.mouseClicked(forceright);

  b2 = createImg("up.png");
  b2.position(200,40);
  b2.size(50,50);
  b2.mouseClicked(forceup);
 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30)
}

function forceup(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function forceright(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}

