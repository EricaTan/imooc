// 封装一个代替getElementById()的方法
// function getId(id){
// 	return typeof(id) === "string" ? document.getElementById(id) : id;
// }

// 全局变量
var index = 0,
	timer = null,
	container = document.getElementById("slider-container");
	pics = document.getElementsByClassName("item"),
	len = pics.length,
	menu = document.getElementById("slider-menu"),
	menuItems = menu.getElementsByTagName("li");

function slide(){
	// 鼠标滑过slider-inner清除计时器
	container.onmouseover = function(){
		if(timer) clearInterval(timer);
	}

	// 鼠标移出后继续播放
	container.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if(index >= len) index = 0;

			// 调用切换图片方法
			changeImg();

		},1000);
	}
	// 自动执行
	container.onmouseout();

	// 遍历菜单并绑定点击事件
	for(var j = 0; j < len; j++){
		menuItems[j].onclick = function(){
			// 获取当前菜单项的data-slide-to属性值，并赋值给index
			index = this.getAttribute("data-slide-to");

			changeImg();
		}
	}
}

// 切换图片
function changeImg(){
	// 遍历图片和菜单，并设置图片的display属性和菜单的类名
	for(var i = 0; i < len; i++){
		pics[i].style.display = "none";
		menuItems[i].className = "";
	}
	pics[index].style.display = "block";
	menuItems[index].className = "active";
}

slide();