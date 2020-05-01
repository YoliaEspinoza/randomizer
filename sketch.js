//places i love
let names = [{
  name: "morelia",
  // color: "brown"
}, {
  name: "big sur",
  // color: "green"
}, {
  name: "yosemite",
  // color: "gold"
}, {
  name: "santa cruz",
  // color: "orange"
}, {
  name: "grand canyon",
  // color: "mauve"
}, {
  name: "sf",
  // color: "red"
}, {
  name: "oakland",
  // color: "black"
}, {
  name: "zion",
  // color: "yellow"
}, {
  name: "patzcuaro",
  // color: "bronze"
}];
let randomIndex;
let animating = false;
let imageCounter = 1;
let button;
let places = []

function preload() {
  for (let i = 0; i <= 8; i++) {
    places[i] = loadImage(`assets/places_${i+1}.jpg`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(143, 188, 143);
  textSize(35);
  textFont('Apercu');
  textAlign (CENTER); 
  imageMode(CENTER);
  frameRate(10);

  button = select('#randbutton')
  button.mousePressed(buttonPressed);
  button.class("mainbutton");
  console.log(places);
}

function draw() {
  background(143, 188, 143);
  if (animating == true) {
    // clear();
    image(places[imageCounter], width / 2, height / 2);
    if (imageCounter < places.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 1;

    }
  }
}

function randomizer() {
  animating = false;
  if (names[0]) {
    // background(random(200, 255));
    clear();
    randomIndex = int(random(places.length));
    image(random(places), width / 2, height / 2);
    text(names[randomIndex].name, width / 2, height - 25);
    places.splice(randomIndex, 1);
  } else {
    background(random(200, 255));

  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 3000);
}




//
// places[1]= "big sur";
// places[2]= "ukiah";
// places[3]= "yosemite";
// places[4]= "santa cruz";
// places[5]= "grand canyon";
// places[6]= "sf";
// places[7]= "oakland";
// places[8]= "zion";
// places[9]= "patzcuaro";

// console.log("initial array is");
// console.log(places);
//
// places.pop();
// console.log("array after pop");
// console.log(places);
//
// console.log ("array after push");
// console.log(places);

// text("click to play", width / 2, height / 2);
// setInterval(changeBackground, 600);
// button = createButton("click to play");
// console.log(places);

//this displays random name/splices it out of array
// background(random(100, 200));
// console.log(places[randomIndex].name);
// console.log(places);
