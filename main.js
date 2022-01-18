songOne = "";
songTwo = "";


leftWristX = 0;
leftWristY = 0;


rightWristX = 0;
rightWristY = 0;


scoreLeftWrist = 0;
scoreRightWrist = 0;


songOneStatus = "";
songTwoStatus = "";


function setup(){
     canvas = createCanvas(600,500);
     canvas.center();


     video = createCapture(VIDEO);
     video.hide();


     poseNet = ml5.poseNet(video, modelLoaded); 
     poseNet.on('pose', gotPoses);
}


function draw(){
    image(video, 0, 0, 600, 500);

    
    song1Status = songOne.isPlaying();
    song2Status = songTwo.isPlaying();
    fill("#E40618");
    stroke("#E40618");


    if (scoreLeftWrist > 0.2){ 
        circle( leftWristX, leftWristY, 20);
        songTwo.stop();
        if ( songOneStatus == false){
            songTwo.play();
            document.getElementById("play").innerHTML = " Song Name : Love Nwanti"
        }
        
    }


    if (scoreRightWrist > 0.2){ 
        circle( rightWristX, rightWristY, 20);
        songOne.stop();
        if ( songTwoStatus == false){
            songOne.play();
            document.getElementById("play").innerHTML = " Song Name : Git Up"
        }
        
    }
}
 

function preload(){
    songOne = loadSound("gitup.mp3");
    songTwo = loadSound("smooth.mp3");
}


function play(){
    songOne.play();
}


function modelLoaded(){
    console.log( " POSENET HAS BEEN INITIALIZED " );
}


function gotPoses(results){
    if( results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" Left wrist x = " + leftWristX + " Left wrist y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log( " Right wrist X = " + rightWristX + " Right wrist y = " + rightWristY);
    }
}

 


























