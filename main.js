img="";

function preload(){
    img = loadImage("f.png");
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
function draw(){
    image(img,0,0,650,450);
    fill("#ffffff");
    text("nasty dishes",260,368);
    noFill();
    stroke("black");
    rect(260,368,90,70);

    fill("#ffffff");
    text("lost remote",500,180);
    noFill();
    stroke("black");
    rect(500,180,130,90);

    fill("#ffffff");
    text("mom's lost hangbag",170,168);
    noFill();
    stroke("black");
    rect(170,168,85,60);

    fill("#ffffff");
    text("laptop which has faced a lot",330,90);
    noFill();
    stroke("black");
    rect(330,90,85,60);

    fill("#ffffff");
    text("soup bowl ,which is not washed for days",375,145);
    noFill();
    stroke("black");
    rect(372,139,50,50);
}