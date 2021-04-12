
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , dustbin , paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 400)

   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);

	//Create the Bodies Here.
   dustbin1 = new Dustbin(600,390,200,20);
   dustbin2 = new Dustbin(710,350,20,100);
   dustbin3 = new Dustbin(510,350 , 20,100);
   paper  = new Paper(100 , 300 , 40 );
   ground = Bodies.rectangle(width/2 , 400 , width , 10 ,
    {  isStatic :true})
    World.add(world ,  ground);
   


	
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed(){
   if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body, paper.body.position, {
       x: 50,
       y: -50
     });
   }
 }


