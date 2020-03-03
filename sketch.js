//places i love

let places = [{
  name: "morelia",
  color: "brown"
}, {
  name: "big sur",
  color: "green"
}, {
  name: "ukiah",
  color: "dark red"
}, {
  name: "yosemite",
  color: "gold"
}, {
  name: "santa cruz",
  color: "orange"
}, {
  name: "grand canyon",
  color: "mauve"
}, {
  name: "sf",
  color: "red"
}, {
  name: "oakland",
  color: "black"
}, {
  name: "zion",
  color: "yellow"
}, {
  name: "patzcuaro",
  color: "silver"
}];

let randomIndex;

function setup() {
  createCanvas(1000, 1000);
  background(200);
  textSize(35);

  text("click to randomize");
}


function draw() {}

function mousePressed() {

  if (places[0]) {
    //this displays random name/splices it out of array
    background(random(100, 200));
    randomIndex = int(random(places.length));

    // console.log(places[randomIndex].name);
    text(places[randomIndex].name, 50, 50);
    places.splice(randomIndex, 1);
    // console.log(places);

  } else {
    background(random(111, 222));
    text("GAME OVER");
  }
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
// places.push("forks from twilight");
//
// console.log ("array after push");
// console.log(places);
