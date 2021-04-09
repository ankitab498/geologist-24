const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //create the object
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    //display

 
}
