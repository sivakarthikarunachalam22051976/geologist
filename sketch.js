const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone, rubberball;
var ground

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(10,100);

    ground = new Ground(600,height,1200,20)
    
    stone = new Stone(700,320,50,50);
    
    rubberball=new Rubberball(900,450,50);
    

    
}

function draw(){
    background("yellow");
    Engine.update(engine);
	hammer.display();
    stone.display();
    ground.display();
    
    rubberball.display();

    

    
}