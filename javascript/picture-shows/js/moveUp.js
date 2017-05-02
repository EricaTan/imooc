function display(){
	var box = document.getElementById('picList').getElementsByTagName('div');
	var boxHeight = 160;

	for(var i = 0; i < boxHeight; i++){
		box[i].onmouseover = showMsg;
		box[i].onmouseout = hideMsg;
	}

	function showMsg(){
		this.getElementsByTagName('a')[0].style.top = 0;
	}
	function hideMsg(){
		this.getElementsByTagName('a')[0].style.top = boxHeight + 'px';
	}
}

display();
