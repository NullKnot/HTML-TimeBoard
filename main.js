var count, currentImgNum, timeLabel;
var bgImage = new Array("images/Board0.png", "images/Board1.png", "images/Board2.png", "images/Board3.png", "images/Board4.png");

var locX, locY, fSize, fColor, rAngle
//建立一個物件模板，物件裡面有四項屬性
//(文字的位置x、文字的位置y、大小、顏色、傾斜度)
function labelStyle(locX, locY, fSize, fColor, rAngle){
	this.locX = locX;
	this.locY = locY;
	this.fSize = fSize;
	this.fColor = fColor;
	this.rAngle = rAngle;
}
var labelStyle0 = new labelStyle("280px","390px","55px","gray",10);
var labelStyle1 = new labelStyle("220px","290px","80px","red",13);
var labelStyle2 = new labelStyle("300px","360px","100px","brown",358);
var labelStyle3 = new labelStyle("230px","250px","100px","green",2);
var labelStyle4 = new labelStyle("290px","450px","65px","deeppink",0);

var labelStyleArray = [labelStyle0, labelStyle1, labelStyle2, labelStyle3, labelStyle4];

window.onload = function(){
	count = 0;	
	timeLabel=document.getElementById("timeLabel");
	
	//讓圖片跟時間在第一次就可以出現並配合
	changeBgImage();
	updateTimeLabel(); 
	
	setInterval(changeBgImage, 1000);
	setInterval(updateTimeLabel, 1000);
}

function changeBgImage(){
	currentImgNum = count%5;
	count++;
	timeLabel.style.top = labelStyleArray[currentImgNum].locY;
	timeLabel.style.left = labelStyleArray[currentImgNum].locX;
	timeLabel.style.fontSize = labelStyleArray[currentImgNum].fSize;
	timeLabel.style.color = labelStyleArray[currentImgNum].fColor;
	timeLabel.style.transform = "rotate(" + labelStyleArray[currentImgNum].rAngle + "deg)"; 

	document.body.background = bgImage[currentImgNum];
}

function addZero(timeString){
	timeString = "0" + timeString;
	return timeString.slice(-2);
}

function updateTimeLabel(){
	var now = new Date();
			   
	timeLabel.innerHTML = addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds());
}