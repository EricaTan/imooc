// 封装一个代替getElementById()的方法
function getId(id){
	return typeof(id) === "string" ? document.getElementById(id) : id;
}

var index = 0,
	timer = null,
	pics = getId("banner").getElementsByTagName("div"),
	len = pics.length,
	dots = getId("dots").getElementsByTagName("span"),
	prev = getId("prev"),
	next = getId("next");

function slideImg(){
	var main = getId("main");
	// 鼠标滑过时清除计时器
	main.onmouseover = function(){
		if(timer) clearInterval(timer);
	}

	// 鼠标离开后继续播放
	main.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if(index >= 3){
				index = 0;
			}
			// 切换图片
			changeImg();
		},3000);
	}
	// 自动触发鼠标离开事件
	main.onmouseout();

	// 点击圆点切换图片
	// 遍历所有点击，且绑定点击事件
	for(var j = 0; j < len; j++){
		// 给所有span添加一个id的属性，值为j，作为当前span的索引
		dots[j].id = j; 
		dots[j].onclick = function(){
			// 改变index为当前span的索引
			index = this.id;
			// 切换图片
			changeImg();
		}
	}

	// 下一张
	next.onclick = function(){
		index++;
		if(index >= len) index = 0;
		changeImg();
	}

	// 上一张
	prev.onclick = function(){
		index--;
		if(index < 0) index = len-1;
		changeImg();
	}
}

// 切换图片
function changeImg(){
	// 遍历banner下所有的div及span
	for(var i = 0; i < len; i++){
		pics[i].style.display = "none";
		dots[i].className = "";
	}
	pics[index].style.display = "block";
	dots[index].className = "active";
}

slideImg();