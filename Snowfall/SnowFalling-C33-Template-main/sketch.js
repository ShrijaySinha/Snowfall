const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var snow = [];
var bg;

function preload() {
  bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  }

function draw() {
  background(bg);
 
  Engine.update(engine);

  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),random(0,800)));
  }
  for(var k=0;k<snow.length;k++){
    snow[k].display();
  }
}