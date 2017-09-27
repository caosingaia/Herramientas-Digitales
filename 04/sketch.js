/*
 * @name Geometries
 * @description There are six 3D primitives in p5 now.
 */



//Creé variables
var a
var b
var c

function setup(){
  createCanvas(600, 400, WEBGL);
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


  translate(0, -50, -500);
  rotateX(frameCount / 60);
  rotateY(frameCount /.00000001);
  box(300, 100, 10);
  

   if(a > -3){
   b=50;




     }


translate(300, -5, -100);
  rotateX(frameCount / 60*2);
  rotateY(frameCount / 2);
  box(2,20, 80);
  

   if(a > -7){
   b=50;




     }
  
  translate(300, -5, -100);
  rotateX(frameCount / 6);
  rotateY(frameCount / 2);
  box(2,20, 100);
  

   if(a > -70){
   b=90;




     }

}