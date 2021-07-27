
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground;
var world;

var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,670,width,20);

    ball1= new Ball(200,320,20,20);
	//wall1 = new Dustbin(400,320,50,20);
    

	


	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  
  ground.display(); 
  ball1.display();
 
     
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-50});
		//Matter.Body.setStatic(ball1.Body,false);
		
	} 
 }



