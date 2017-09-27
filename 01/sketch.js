/*
 * @name Geometries
 * @description There are six 3D primitives in p5 now.
 */



//Creé variables
var a
var b
var c

function setup(){
  createCanvas(710, 400, WEBGL);
}


//Dí valor a la variables

a= -10
b= -20


//Cambié el color de background
function draw(){
    a++
    b++


  background(a/3, b, a);


// Dí movimiento a la variable



  // Eliminé los otros objetos tridimensionales y limité la rotación al eje X y Y

//Cambié la velocidad de rotación en eje X y Y
  //Cambié las dimensiones del cubo y su posición en la profundidad del canvas


  translate(-110, -50, -500);
  push();
  rotateX(frameCount / 60);
  rotateY(frameCount /.00000001);
  box(500,50, 10);
  pop();

   if(a > -3){
   b=50;




     }




}