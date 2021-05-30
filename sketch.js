//defining constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//creating variables
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {

	//creating canvas and defining rectMode (position)
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//creating roof
	roofObject=new roof(400,150,230,20);

	//creating bobs
	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(420,575,40);
	bob5 = new bob(460,575,40);
	
	//creating ropes
	rope1=new rope(bob1.body,roofObject.body,-80, 0);
	rope2=new rope(bob2.body,roofObject.body,-40, 0);
	rope3=new rope(bob3.body,roofObject.body,0,0);
	rope4=new rope(bob4.body, roofObject.body,40,0);
	rope5= new rope(bob5.body, roofObject.body,80,0);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  //displaying objects, ropes, and bobs
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 
}

function keyPressed(){

	//can also write if(keyCode === UP_ARROW){}
	if(keyDown("UP_ARROW")){ 
		Matter.Body.applyForce (bob1.body, bob1.body.position, {x:-60, y:-45});
	} 

	if(keyDown("LEFT_ARROW")){
		Matter.Body.applyForce (bob1.body, bob1.body.position, {x:-60, y:-45});
		Matter.Body.applyForce (bob2.body, bob2.body.position, {x:-60, y:-45});
	}

	if(keyDown("RIGHT_ARROW")){
		Matter.Body.applyForce (bob1.body, bob1.body.position, {x:-60, y:-45});
		Matter.Body.applyForce (bob2.body, bob2.body.position, {x:-60, y:-45});
		Matter.Body.applyForce (bob3.body, bob3.body.position, {x:-60, y:-45});
	}

	if(keyDown("DOWN_ARROW")){
		Matter.Body.applyForce (bob1.body, bob1.body.position, {x:-60, y:-45});
		Matter.Body.applyForce (bob2.body, bob2.body.position, {x:-60, y:-45});
		Matter.Body.applyForce (bob3.body, bob3.body.position, {x:-60, y:-45});
		Matter.Body.applyForce (bob4.body, bob4.body.position, {x:-60, y:-45});
	}
}




