window.onload=function(){
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var pagewidth=innerWidth;
	var train = slideshow.getElementsByClassName('train').item(0);
	var lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var currentSlide = 0;
	
	rnd=function(a,b){
		return Math.floor(Math.random()*(b-a+1))+a;
	}
	
	slideshow.style.width=pagewidth+'px';
	
	go2slide = function (n) {
		if(n>lists.length-1) n=0;
		if(n<0) n=lists.length-1;
		train.style.left=(-pagewidth*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(currentSlide).style.webkitTransform='rotate('+rnd(-10,10)+'deg)';
		lists.item(n).className = 'active';
		lists.item(n).style.webkitTransform='rotate('+rnd(0,0)+'deg)';		
		currentSlide=n;
	}
	
		nextSlide = function(){
			go2slide(currentSlide+1);
		}
		
		prvSlide = function(){
		go2slide(currentSlide-1);
	   }

	var autoPlayIv = false;
	autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,4000);
	}

	autoPlayStop = slideshow.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	slideshow.getElementsByClassName('nxt').item(0).onclick=nextSlide;
	slideshow.getElementsByClassName('pvs').item(0).onclick=prvSlide;
	
	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).style.webkitTransform='rotate('+rnd(-10,10)+'deg)';
			lists.item(j).style.mozTransform='rotate('+rnd(-10,10)+'deg)';
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
	go2slide(0);
	autoPlayStart();
}