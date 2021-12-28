songOne = " ";
songTwo = " ";



function setup(){
     canvas = createCanvas(600,500);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();
}


function draw(){
    image(video, 0, 0, 600, 500);
}
 

function preload(){
    songOne = loadSound("gitup.mp3");
    songTwo = loadSound("smooth.mp3");
}


function play(){
    songTwo.play();
}

























