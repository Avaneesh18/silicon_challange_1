var bg
var play
var gameState="wait"

function preload(){

bg =loadImage("waitbg.png")
}

function setup(){
    
createCanvas(windowWidth,windowHeight)
    
//play=createImg("location")
//play.resize(w,h)
  play=createButton("PLAY")  
  play.position(100,100)

about=createButton("About")
about.position(windowWidth-100,100)

}

function draw(){
    background(bg)
if(play.mousePressed(()=>{
  gameState="play";
}))

}