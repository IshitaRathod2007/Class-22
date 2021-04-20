const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,380,400,20,option);
  World.add(world,ground);

  var option1 = {
    restitution:1
  }

  ball = Bodies.circle(200,3,20,option1);
  World.add(world,ball);
 // console.log(box);
  //console.log(box.position.x);
  //console.log(box.position.y);
}

function draw() {
  background("lightgreen"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,20,20)

}