window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var pagewidth=innerWidth;
	var train = slideshow.getElementsByClassName('train').item(0);
	
	go2slide = function (n) {
		slideshow.style.width=pagewidth;
		train.style.left=(-pagewidth*n)+'px';
	}

	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
}