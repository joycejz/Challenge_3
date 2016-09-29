//Joyce Zhang
//Shane Park

var xValues=[];
var yValues=[]

function setup() {
	createCanvas(500,500);
	xValues=[30, 60, 90, 120, 150];
	yValues=[40, 80, 120, 160, 200];
	frameRate(30);
}

function draw() {
	background(255);
	fill(0);
	stroke(0);
	rectMode(CENTER);
	for (var i=0;i<5;i++){
		rect(xValues[i],yValues[i],20,20);
	}

	for(var j=0; j<15; j++) {
		xValues[j]= xValues[j]+9;
		yValues[j]= yValues[j]+12;
	}
}