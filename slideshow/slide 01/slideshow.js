window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var pagewidth=innerWidth;
	var train = slideshow.getElementsByClassName('train').item(0);
	
	rnd=function(a,b){
		return Math.floor(Math.random()*(b-a+1))+a;
	}
	go2slide = function (n) {
		if(n>lists.length-1) n=0;
		slideshow.style.width=pagewidth+'px';
		train.style.left=(-pagewidth*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide=n;
	}
	
		nextSlide = function(){
		go2slide(currentSlide+1);
	}


	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).style.webkitTransform='rotate('+rnd(-25,25)+'deg)';
			lists.item(j).style.mozTransform='rotate('+rnd(-25,25)+'deg)';
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
	go2slide(0);
	
	setInterval(nextSlide,2000);
}