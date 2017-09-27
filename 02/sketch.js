/*
 * @name Interactivity 2
 * @frame 720,425
 * @description The circle changes color when you move the slider.
 * You will need to include the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.
 */

// A HTML range slider
var slider;
var slider2;

function setup() {

//Cambié el tamaño del canvas
  createCanvas(650, 420);
  // hue, saturation, and brightness
  //Cambié el rango de color para variar el tono de la forma
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127

  //Cambié el rango del slider entre 60 y 255
  //Creé un segundo slider para modificar color
	slider = createSlider(60, 255, 60);
	slider2 = createSlider(200, 300, 50);
}

function draw() {

  //Incluí la var Slider para cambiar color background
  background(slider, slider, 50);
  //Cambié la densidad del stroke
  strokeWeight(40);

  // Set the hue according to the slider
  //Agregué variable slider para interactuar con color en el stroke y fill
  stroke(slider.value(), 255, 255);
  fill(slider2.value(), 255, 255, 127);
  ellipse(335, 210, 138, 140);



//Creé	otras estucturas para hacer un diseño y modifiqué los colores y tamaños

  stroke(slider2.value(), 70, 90);
  fill(slider.value(), 255, 255, 127);
  ellipse(225, 100, 80, 80);

	stroke(slider.value(), 70, 90);
  fill(slider2.value(), 255, 255, 127);
  ellipse(190, 210, 50, 50);

	stroke(slider2.value(), 70, 90);
  fill(slider.value(), 255, 255, 127);
  ellipse(225, 320, 80, 80);

	stroke(slider.value(), 70, 90);
  fill(slider2.value(), 255, 255, 127);
  ellipse(332, 355, 50, 50);


	stroke(slider2.value(), 70, 90);
  fill(slider.value(), 255, 255, 127);
  ellipse(440, 320, 80, 80);

	stroke(slider.value(), 70, 90);
  fill(slider2.value(), 255, 255, 127);
  ellipse(480, 210, 50, 50);

	stroke(slider2.value(), 70, 90);
  fill(slider.value(), 255, 255, 127);
  ellipse(440, 100, 80, 80);

	stroke(slider.value(), 70, 90);
  fill(slider2.value(), 255, 255, 127);
  ellipse(332, 65, 50, 50);


}
