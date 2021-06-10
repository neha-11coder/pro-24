
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ground;
var rect1;
var rect2;
var paperball;
function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

ground=new Ground();
rect1=new Rect(1000,380,190,20);
rect2=new Rect(900,325,20,120);
rect3=new Rect(1100,325,20,120);
paperball=new Paperball();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("pink");
ground.display();
rect1.display();
rect2.display();
rect3.display();
paperball.display();


drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:90,y:-75})
	
}
}

