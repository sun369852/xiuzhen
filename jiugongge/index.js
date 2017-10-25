var wrap = document.getElementsByClassName('wrap')[0];
var divs = wrap.getElementsByTagName('div');
var bling = document.getElementById('bling');
var noBling = document.getElementById('noBling');
var arr = [];
// 创建随机数
function creatNum(max) {
	return Math.floor(Math.random()*max);
}
// 判断创建的数是否在数组中
function inArray(v,arr) {
	for (var i = 0; i < arr.length; i++) {
		if (v == arr[i]) {
			return i;
		}
	}
	return -1;
}
// num为需要创建的随机数数量，max为随机数最大值
function ranNum(num,max) {
	var temp = creatNum(max);
	if ( inArray(temp,arr) == -1) {
		arr.push(temp);
	}
	if (arr.length < num ) {
		ranNum(num,max);
	}
	return arr;
}
// 创建随机颜色
function ranColor() {
	return "rgb("+ parseInt(Math.random()*256) +","+ parseInt(Math.random()*256) +","+ parseInt(Math.random()*256) +")"
}
var timer = null;
var isBling = false;
bling.onclick = function () {
	if (isBling) {
		return;
	}
	isBling = true;
	timer = setInterval(function () {
		for (var i = 0; i < divs.length; i++) {
			divs[i].style["background-color"] = "orange";
		}
		arr = [];
		ranNum(3,9);
		for (var i = 0; i < arr.length; i++) {
			divs[arr[i]].style["background-color"] = ranColor();
		}
	},1000)
}
noBling.onclick = function () {
	isBling = false;
	clearInterval(timer);
	for (var i = 0; i < divs.length; i++) {
		divs[i].style["background-color"] = "orange";
	}
}
