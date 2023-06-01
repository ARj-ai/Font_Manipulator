lwrist_x = 0;
rwrist_x = 0;   
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500);
    canvas.position(700, 150);
    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', got_poses);
}

function modelLoaded(){
    console.log("Pose net is intialised");
}

function got_poses(results){
    if(results.length > 0){
        console.log(results);
        lwrist_x  = results[0].pose.leftWrist.x;
        rwrist_x = results[0].pose.rightWrist.x;
        difference = floor(lwrist_x - rwrist_x);
        console.log("lwrist_x = " + results[0].pose.leftWrist.x + "leftwrist_y = " + results[0].pose.leftWrist.y);
        console.log("rightwrist_x = " + results[0].pose.rightWrist.x + "rightwrist_y = " + results[0].pose.rightWrist.y);
    }
}

function draw(){
    background("white");
    textSize(difference);
    fill(255, 0, 0);
    text('Arjun', 50, 400);
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
}