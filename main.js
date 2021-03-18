function preload() {
	world_start = loadSound("world_start.wav");
	mario_collect = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	mario_over = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');

	poseNet = ml5.poseNet(video,loaded);
	poseNet.on('pose',result);

	instializeInSetup(mario);
}
function result(results){
	if(results.length>0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}
function loaded(){
	console.log("loaded!!");
}
function draw() {
	game()
}






