
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow=[];
var maxsnow=100;
var backgroundImg;
var rand;


function preload() {
backgroundImg= loadImage("snow1.jpg")
  
}
function setup() {

  //create Engine & world
  engine = Engine.create();
	world = engine.world;

  createCanvas(800,400);
  

}

function draw() {
background(backgroundImg);

 if(frameCount%5===0){
     snow.push(new Snow(random(0,800),30,30));
  }
    
  for(var j=0;j<snow.length ;j++){
      snow[j].display;
  }

 Engine.update(engine);
  drawSprites();
}