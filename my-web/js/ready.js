window.onload = function(){
(function(){
	var wrap = document.getElementById('wrap');
	var box = document.getElementById('box');
	var cMove = document.getElementsByClassName('cMove')[0];
	var timer = 0;
	cMove.style.display = "none";
	reset();
	window.onresize = reset;

	function SeeWrong(){
		this.wrap = document.getElementById('wrap');
		this.box = document.getElementById('box');
		this.yMove = this.wrap.getElementsByClassName('y-move')[0];
		this.yWait = this.wrap.getElementsByClassName('y-wait')[0];
		this.tip = this.wrap.getElementsByClassName('tip')[0];
		this.tipMove = this.wrap.getElementsByClassName('tip-move')[0];
		this.seeH = document.documentElement.clientHeight;
		this.seeW = document.documentElement.clientWidth;
		this.disX = 0;
		this.disY = 0;
		this.Cn = 0;
		this.timer = 0;
	}

	SeeWrong.prototype.init = function(){
		var _this = this;
		document.addEventListener('mousemove',function(e){
			_this.move(e);
		});
		document.addEventListener('click',function(e){
			_this.dian(e);
		});
		this.yMove.addEventListener('mousedown',function(e){
			_this.mDown(e);
			return false;
		});
		this.yMove.addEventListener('mouseover',function(){
			_this.mOver();
		});

	};


	SeeWrong.prototype.mDown = function(e){
		var _this = this;
		this.disX = e.pageX - this.yMove.offsetLeft;
		window.addEventListener('mousemove',moveFn);
		window.addEventListener('mouseup',upFn);
		function moveFn(e){
			_this.mMove(e);
		}
		function upFn(){
			_this.mUp(moveFn,upFn);
		}

		$('.y-wait').animate({
			opacity:.3
		})
		$('.tip').animate({
			opacity:0
		})
		$(this.yMove).css('background','#fff');
		e.preventDefault();
	}

	SeeWrong.prototype.mOver= function(){
		//console.log(this.tipMove );
		var _this = this;
		var n = 0;
		var to = 1;
		clearInterval(this.timer);
		this.timer = setInterval(function(){
			n = n+to;
			if(n>7){
				to = -1;
			}
			if(n<-7){
				to = 1;
			}
			_this.tipMove.style.top = n + 'px';
		},10)
		this.yMove.addEventListener('mouseout',function(){
			_this.mOut(this.timer);
			_this.tipMove.style.top = 0;
		});
	}
	SeeWrong.prototype.mOut = function(){
		clearInterval(this.timer);
	}
	SeeWrong.prototype.mMove = function(e){
		e.preventDefault();
		var l = e.pageX - this.disX;
		if(l<0){
			l = 0;
		}
		if(l>(cMove.offsetWidth - this.yMove.offsetWidth)){
			l = cMove.offsetWidth - this.yMove.offsetWidth;
		}
		//console.log(cMove.offsetWidth - this.yMove.offsetWidth);
		this.yMove.style.left = l + "px";
	}

	SeeWrong.prototype.mUp = function(moveFn,upFn){
		// e.preventDefault();
		window.removeEventListener('mousemove',moveFn);
		window.removeEventListener('mouseup',upFn);
		$('.y-wait').animate({
			opacity:1
		});
		$('.tip').animate({
			opacity:1
		});
		$(this.yMove).animate({
			left:0
		});
		$(this.yMove).css('background','');
		if(this.duang(this.yMove,this.yWait)){
			window.location.href = 'index1.html';
		};
	}

	SeeWrong.prototype.duang = function(obj1,obj2){
		var r1 = obj1.offsetLeft + obj1.offsetWidth;
		var l2 = obj2.offsetLeft;
		console.log(r1,l2);
		if(r1<l2){
			return false;
		}else{
			return true;
		}
	}


	SeeWrong.prototype.move = function(e){
//		背景颜色(e.pageX/this.seeW)----(0-1).3-.8
		var Cr = parseInt((e.pageX/this.seeW+0.2)*180);
		var Cg = parseInt((e.pageY/this.seeH+0.2)*150);
		this.wrap.style.background = 'rgba('+Cr+','+Cg+','+this.Cn+',.7)';
	}

	SeeWrong.prototype.dian = function(e){
		this.Cn = parseInt((e.pageX/this.seeW+0.2)*200);
	}




	var see = new SeeWrong;
	see.init();
	var n = 0;
	timer = setInterval(function(){
		n++;
		$('.roll').html(n+'%');
		if(n > 99){
			n = 100;
			clearInterval(timer);
			timer = null;
		}
		if(!timer){
			temp();
		}
	},20);

	function temp(){
		$('#box').fadeOut(400);
		$('.cMove').fadeIn(1000);
	}
	function reset(){
		var seeH = document.documentElement.clientHeight;
		var seeW = document.documentElement.clientWidth;
		wrap.style.backgroundSize = `${seeW}px ${seeH}px`;
		box.style.left = seeW/2 - (box.offsetWidth/2) + 'px';
		box.style.top = seeH/2 - (box.offsetHeight/2) + 'px';
		cMove.style.left = seeW/2 - ($(cMove).width()/2) + 'px';
		cMove.style.top = seeH/2 - ($(cMove).height()/2) + 'px';
	}
})();
}
