function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500);
    canvas.position(700, 150);
    background("white");
    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', got_poses);
}

function modelLoaded(){
    console.log("Pose net is intialised");
}

function got_poses(results){
    if(results.length > 0){
        console.log(results);
    }
}