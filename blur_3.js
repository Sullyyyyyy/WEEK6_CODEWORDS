var img;

function preload() {
    img = loadImage("data/athen.png");
}

let positions = [];

function setup() {
  createCanvas(2000, 1300); // Adjust canvas size as needed
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
   textSize(60); 
  textAlign(CENTER, CENTER); 
  textFont('Courier New');
  
  for (let pos of positions) {
    text("Focus is identified as a class position", pos.x, pos.y);
  }
}

function mousePressed() {
  positions.push({ x: mouseX, y: mouseY });
}
