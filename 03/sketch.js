/*
 * @name Interactivity 1
 * @frame 720,425
 * @description The circle changes color when you click on it.
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>.
 * </em></p>
 */

// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(40);
  g = random(255);
  b = random(140);
}

function draw() {


  //Apliqué las variables al background para cambiar su color con el click
  background(g, b, r);
  // Draw a circle


  //Dibujé otro circulo y un rectángulo
  //Asigné nuevas dimensiones a las figuras


  //Modifiqué valores espaciales
  //Modifiqué sus valores de fill y stroke utilizando las variables
  strokeWeight(40);
  stroke(g, b, b);
  fill(b, g, r, 127);
  ellipse(340, 200, 350, 350)

  strokeWeight(40);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(340, 200, 200, 200);

  strokeWeight(40);
  stroke(r, g, b);
  fill(g, b, b, 127);
  rect(100, 200, 480, 4);

}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values

    //Reasigné valores random
    r = random(234);
    g = random(2);
    b = random(255);
  }
}