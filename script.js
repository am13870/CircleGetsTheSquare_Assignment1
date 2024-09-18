// scrolling style for buttons
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

}

// self-portrait for the about section
let angle = 0 ;
let canvas;

function setup() {
  canvas = createCanvas(800, 800);
  canvas.parent('p5-container');
}

function draw() {
  background('#266138');
  noStroke();
  scale(2);
  
  // hairstyle shape
  fill("#11120C");
  circle(100, 190, 100);
  circle(300, 190, 100);
  circle(125, 120, 130);
  circle(275, 120, 130);
  circle(200, 100, 130);

  // face shape
  fill('#F39CB2');
  rectMode(CENTER);
  rect(200, 230, 200, 220, 0, 0, 100, 100);

  // eyewhites 
  fill('rgb(206,220,224)');
  arc(145, 190, 70, 35, 0, 2 * PI);
  arc(255, 190, 70, 35, 0, 2 * PI);

  // right pupil
  fill('#2D96BC');
  circle(255, 190, 25);

  // nose
  fill('#EC7391');
  arc(200, 270, 25, 150, PI, 2 * PI);
  arc(200, 270, 25, 15, -2 * PI, -PI);
  arc(190, 270, 30, 30, PI, 2 * PI);
  arc(210, 270, 30, 30, PI, 2 * PI);

  // ears outer part
  fill('#EC7391');
  arc(100, 190, 60, 60, 1/2 * PI, -1/2 * PI);
  arc(300, 190, 60, 60, -1/2 * PI, 1/2 * PI);

  // ears inner part
  fill('#D14266');
  arc(100, 190, 30, 30, 1/2 * PI, -1/2 * PI);
  arc(300, 190, 30, 30, -1/2 * PI, 1/2 * PI);

  // earrings rotated
  fill('#E2BD56');
  push();
  translate(80, 210);
  rotate(PI / 12);
  rect(0, 0, 10, 20, 5);
  pop();

  push();
  translate(320, 210);
  rotate(-PI / 12);
  rect(0, 0, 10, 20, 5);
  pop();

  // bangs
  fill("#11120C");
  circle(125, 120, 50);
  circle(175, 120, 50);
  circle(225, 120, 50);
  circle(275, 120, 50);

  // mouth rotated
  fill('#D14266');
  push();
  translate(215, 300);
  rotate(-PI / 12);
  arc(0, 0, 40, 20, 0, 2 * PI);
  pop();

  // eyebrows rotated
  fill("#11120C");
  push();
  translate(140, 158);
  rotate(-PI / 12);
  arc(0, 0, 50, 20, PI, 0);
  pop();

  push();
  translate(260, 158);
  rotate(PI / 12);
  arc(0, 0, 50, 20, PI, 0);
  pop();

  // left pupil-star animated
  push();
  translate(145, 190);
  rotate(angle);
  fill('#FFBB00');
  triangle(-12.5, 0, 12.5, 0, 0, 30);
  triangle(-12.5, 0, 12.5, 0, 0, -30);
  triangle(0, 12.5, 0, -12.5, 30, 0);
  triangle(0, 12.5, 0, -12.5, -30, 0);
  pop();

  angle += radians(1);
}

