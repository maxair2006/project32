const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg ;

function preload() {
    getTime();
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}


async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson=await response.json();
    var dt=responseJson.datetime;
    var rh=dt.slice(11,13);
    console.log(rh);
    if(rh>4&&rh<=6){
      bg="sunrise1.png"
    }
    else if(rh>06&&rh<=08){
        bg="sunrise2.png"
      }
    else if(rh>23&&rh<=0){
        bg="sunset10.png"
      }
    else if(rh>0&&rh<=3){
        bg="sunset11.png"
      }
    else{
        bg="sunset12.png"
      }
      backgroundImg=loadImage(bg)
}
