
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper_roll;
var Handle1,Handle2,Base;

function preload()
{
	
}
function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	  ground_options = {
		isStatic: true
	  }

	  base_options = {
        isStatic: true
	  }

	  //Create the Bodies Here
	  paper_roll = new Paper
	  paper_roll.shapeColor = "white";

	  ground = createSprite(400,650,1000,40,ground_options);
	  ground.shapeColor = "green";
	  
	  Handle1 = createSprite(550,585,20,100);
	  Handle1.shapeColor = "brown";
	  Handle2 = createSprite(750,585,20,100);
	  Handle2.shapeColor = "brown";

	  Base = createSprite(650,625,200,20,base_options);
	  Base.shapeColor = "brown";

	 Engine.run(engine);
}
function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1000,40);

  paper_roll = ellipse(150, 603, 55, 55);
  
  drawSprites();
  KeyControlls();
 
}

function KeyControlls() {

	if(keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper_roll.body,paper_roll.body.positionx,{x: 85, y:-85});
	}
}



