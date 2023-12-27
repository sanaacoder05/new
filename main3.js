img="";

function preload(){
    img = loadImage("bottle.jpeg");
}

function setup(){
    canvas = createCanvas(950,650);

   
    objectDetection = ml5.objectDetector('cocossd',Modelloaded);
    document.getElementById('status').innerHTML="status :  detecting objects";
}
function Modelloaded(){
   console.log('model loaded**');
   checkbox = true;

   objectDetection.detect(img,gotresults);
   
}

function gotresults(error,result){
   if(error){
       console.log(error);

   }

   else{
       console.log(result);
   }
}
colors = [];

for (let i = 0; i < 10; i++) {
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}


function draw(){
    image(img,0,0,650,450);
    fill(randomColor);
    text("bottle",180,368);
    noFill();
    stroke('black');
    rect(88,80,180,320);

    
}