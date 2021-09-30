const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
tower=new Tower(100,300,40,80)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  tower.display();

 
}

