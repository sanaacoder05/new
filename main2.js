img="";

function preload(){
    img = loadImage("desk.jpeg");
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
    text("unread newspaper for chapathi",170,168);
    noFill();
    stroke("black");
    rect(200,198,95,55);

    fill(randomColor);
    text("laptop which has faced a lot",372,130);
    noFill();
    stroke("black");
    rect(364,139,85,70);
}