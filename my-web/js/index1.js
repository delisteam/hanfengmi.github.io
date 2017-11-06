(function(){
		var wrap = document.getElementById('wrap');
		var box = document.getElementById('box');
		var HDown = document.getElementsByClassName('down-hide')[0];
		var takeIn = document.getElementsByClassName('takeIn')[0];
		var baImg = ['linear-gradient(136deg, #ff9e7f 0%, #ffc86d 100%)',
					'linear-gradient(136deg, #7e7bd3 0%, #bc7bd3 100%)',
					'linear-gradient(136deg, #ff7a7a 0%, #ff7ab6 100%)',
					'linear-gradient(136deg, #8ec8e1 0%, #8ee1b9 100%)'
				];
		var cc = ['#7e7bd3','#ff7a7a','#8ec8e1','#ffc66e'];
		var animateC = ['M 388.03 0 C 384.82 20.57 388.03 259.62 388.03 275.23 C 388.03 394.5 304.94 457.5 206.22 515.53 C 107.51 573.56 10.29 763 0 980.12 C 72.82 980.59 364.97 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 406.49 0 388.03 0 Z M 388.03 0;M 388.03 0 C 384.82 20.57 388.03 259.62 388.03 275.23 C 388.03 394.5 365 545.5 192 515.5 C 19 485.5 10.29 763 0 980.12 C 72.82 980.59 364.97 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 406.49 0 388.03 0 Z M 388.03 0;M 388.03 0 C 384.82 20.57 388.03 259.62 388.03 275.23 C 388.03 394.5 304.94 457.5 206.22 515.53 C 107.51 573.56 10.29 763 0 980.12 C 72.82 980.59 364.97 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 406.49 0 388.03 0 Z M 388.03 0',
										'M 379.08 0.21 C 374.98 20.78 379.1 370.1 379.08 385.71 C 378.99 499.21 306.03 535.21 152.38 602.71 C 70.43 647.21 0 734.71 0 980.8 C 93.19 980.27 349.57 980.8 420 980.8 C 420 596.6 420 253.41 420 0.21 C 420 0.21 402.71 0.21 379.08 0.21 Z M 379.08 0.21;M 379.08 0.21 C 374.98 20.78 379.1 370.1 379.08 385.71 C 378.99 499.21 285 455 188 501 C 37.5 573 12 626 0 980.8 C 93.19 980.27 349.57 980.8 420 980.8 C 420 596.6 420 253.41 420 0.21 C 420 0.21 402.71 0.21 379.08 0.21 Z M 379.08 0.21;M 379.08 0.21 C 374.98 20.78 379.1 370.1 379.08 385.71 C 378.99 499.21 306.03 535.21 152.38 602.71 C 70.43 647.21 0 734.71 0 980.8 C 93.19 980.27 349.57 980.8 420 980.8 C 420 596.6 420 253.41 420 0.21 C 420 0.21 402.71 0.21 379.08 0.21 Z M 379.08 0.21',
						'M 379.15 0 C 375.05 20.57 379.15 259.62 379.15 275.23 C 379.15 394.5 388.67 526 177.72 619.5 C 54.98 668 0 712 0 980.59 C 93.05 980.06 349.68 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 402.74 0 379.15 0 Z M 379.15 0;M 379.15 0 C 375.05 20.57 379.15 259.62 379.15 275.23 C 379.15 394.5 153.5 433.5 127 645.5 C 109 761.5 0 712 0 980.59 C 93.05 980.06 349.68 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 402.74 0 379.15 0 Z M 379.15 0;M 379.15 0 C 375.05 20.57 379.15 259.62 379.15 275.23 C 379.15 394.5 388.67 526 177.72 619.5 C 54.98 668 0 712 0 980.59 C 93.05 980.06 349.68 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 402.74 0 379.15 0 Z M 379.15 0',
						'M 379.08 0 C 374.98 20.57 379.08 152.39 379.08 168 C 379.08 220 334.85 359 147.25 494.5 C 12.16 575.5 0 734.5 0 980.59 C 93.19 980.06 349.57 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 402.71 0 379.08 0 Z M 379.08 0;	M 379.08 0 C 374.98 20.57 379.08 152.39 379.08 168 C 379.08 367 176.5 346 160.06 524.5 C 143.5 723 0 734.5 0 980.59 C 93.19 980.06 349.57 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 402.71 0 379.08 0 Z M 379.08 0;M 379.08 0 C 374.98 20.57 379.08 152.39 379.08 168 C 379.08 220 334.85 359 147.25 494.5 C 12.16 575.5 0 734.5 0 980.59 C 93.19 980.06 349.57 980.59 420 980.59 C 420 596.39 420 253.2 420 0 C 420 0 402.71 0 379.08 0 Z M 379.08 0'
					];
		reset();
		console.log(document.documentElement.clientWidth);
		$('.Hlogin').click(function(){
			$('.Hcont').hide();
			var seeW = document.documentElement.clientWidth;
			$('.login').show();
			setTimeout(function(){
				takeIn.style.left = seeW/2 - 300 + 'px';
				takeIn.style.opacity = 1;
			},50)
		})

		if(document.cookie){
			weIn();
		}
		$('.close-login').click(function(){
			//==============================================关闭动画
			$('.v1').val('').blur();
			$('.Hcont').show();
			takeIn.style.left =-400 + 'px';
			takeIn.style.opacity = 0;
			setTimeout(function(){
				$('.login').hide();
			},550)
		})
		window.onresize = reset;
		function reset(){
			var seeH = document.documentElement.clientHeight;
			var seeW = document.documentElement.clientWidth;
			wrap.style.backgroundSize = `${seeW}px ${seeH}px`;
			HDown.style.left = seeW/2 - (HDown.offsetWidth/2) + 'px';
			$('#svg-unlock').css("fill",'#7e7bd3');
			$('.animation-to-section').eq(0).attr('values',animateC[0]);
		}

		function Move(){
			this.wrap = document.getElementById('wrap');
			this.Hpagen = this.wrap.getElementsByClassName('Hpagen')[0];
			this.changeP = this.wrap.getElementsByClassName('changeP')[0];
			this.yMove = this.wrap.getElementsByClassName('y-move')[0];
			this.yWait = this.wrap.getElementsByClassName('y-wait')[0];
			this.cMove = this.wrap.getElementsByClassName('cMove')[0];
		}

		Move.prototype = {
			init:function(){
				var _this = this;
				this.Hpagen.onclick = function(){
					_this.Fnclick();
				},
				this.yMove.addEventListener('mousedown',function(e){
					_this.mDown(e);
					return false;
				})
			},
			Fnclick:function(){
				var _this = this;
				this.changeP.style.display = "block";
				setTimeout(function(){
					_this.changeP.children[0].style.left = 0;
					_this.changeP.children[0].style.opacity = 1;
				},50)
			},
			mDown:function(e){
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
				$(this.yMove).css('background','rgba(0,0,0,.6)');
				e.preventDefault();
			},
			mMove:function(e){
				var l = e.pageX - this.disX;
				if(l<0){
					l = 0;
				}
				if(l>(this.cMove.offsetWidth - this.yMove.offsetWidth)){
					l = this.cMove.offsetWidth - this.yMove.offsetWidth;
				}
				this.yMove.style.left = l + "px";
			},
			mUp:function(moveFn,upFn){
				var _this = this;

				window.removeEventListener('mousemove',moveFn);
				window.removeEventListener('mouseup',upFn);
				$('.y-wait').animate({
					opacity:1
				});
				$(this.yMove).animate({
					left:0
				});
				$(this.yMove).css('background','');
				if(this.duang(this.yMove,this.yWait)){
					this.changeP.children[0].style.left = -800+'px';
					this.changeP.children[0].style.opacity = 0;
					setTimeout(function(){
						_this.changeP.style.display = "none";
					},300)
				};
			},
			duang:function(obj1,obj2){
				var r1 = obj1.offsetLeft + obj1.offsetWidth;
				var l2 = obj2.offsetLeft;
				if(r1<l2){
					return false;
				}else{
					return true;
				}
			}
		}


		var newJs = new Move;
		newJs.init();

		$('.HpartF').css('opacity',0);
		window.location.hash = 1;
		$('.HpartF').eq(0).css('opacity',1);
		function Little(){
			this.Hcont = document.getElementsByClassName('Hcont')[0];
			this.seeW = document.documentElement.clientWidth;
			this.seeH = document.documentElement.clientHeight;
			this.HDown = document.getElementsByClassName('H-down')[0];
			this.HReol = document.getElementsByClassName('H-reol')[0];
			this.yemaNum = document.getElementsByClassName('yema-num')[0];
			this.innerBtn = document.getElementsByClassName('inner-btn')[0];
			this.eyeBall = document.getElementsByClassName('eye-ball');
			this.isTab = true;
		}

		Little.prototype = {
			init:function(){
				var _this = this;
				window.addEventListener('mousemove',Fnmove);
				function Fnmove(e){
					_this.Lmove(e);
					_this.EyeMove(e);
				}
				this.yemaNum.addEventListener('click',Yclick);
				function Yclick(e){
					_this.ymmove(e);
				}
				this.HReol.addEventListener('click',HRlick);
				function HRlick(){
					_this.Hclick();
				}
				this.HReol.addEventListener('mouseover',HRover);
				function HRover(){
					_this.HRmover();
				}

				//console.log(this.seeW/2 - (this.HDown.offsetWidth/2));
				if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
					document.addEventListener('DOMMouseScroll',Fns);
				}else{
					document.addEventListener('mousewheel',Fns);
				}
				function Fns(e){
					_this.Fnscroll(e);
				}
				this.innerBtn.addEventListener('click',INclick);
				function INclick(e){
					_this.FninnerClick(e);
				}
			},
			Lmove:function(e){
				var MaxD = 70;
				var MaxT = 30;
				var L = e.pageX/(this.seeW/2)-1;
				var T = 1-e.pageY/(this.seeH/2);
				this.Hcont.style.transform = 'rotateY('+L*MaxD+'deg) rotateX('+T*MaxT+'deg)';
			},
			ymmove:function(e){
				window.location.hash = e.target.innerHTML;
				$('.cont-four').css('top',-(e.target.innerHTML-1)*972+"px");
				$('.HpartF').eq(e.target.innerHTML-1).css('opacity',1).siblings().css('opacity',0);
				$(e.target).addClass('active').siblings().removeClass('active');
			},
			Hclick:function(){
				var _this = this;
				if(this.isTab){
					var nH = window.location.hash.split('#')[1];
					nH++;
					if(nH>4){
						nH=4;
					}
					window.location.hash = nH;
					this.isTab = false;
					setTimeout(function(){
						_this.isTab = true;
					},700);
//					$('.cont-four').css('top',-(nH-1)*972+"px");
//					$('.HpartF').eq(nH-1).css('opacity',1).siblings().css('opacity',0);
				}
			},
			HRmover:function(){
				var nH = window.location.hash.split('#')[1];
				$('.H-reol').css('background',baImg[nH]);
				this.HReol.addEventListener('mouseout',function(){
					$('.H-reol').css('background','');
				});
			},
			Fnscroll:function(e){
				var _this = this;
				var down = true;
				if(e.wheelDelta){
					down = e.wheelDelta > 0 ? true : false;
				}else{
					down = e.detail < 0 ? true : false;
				}
				if(down){
					if(this.isTab){
						var nH = window.location.hash.split('#')[1];
						if(this.isTab == true){
							nH--;
						}
						if(nH<1){
							nH=1;
						}
						window.location.hash = nH;
						this.isTab = false;
						setTimeout(function(){
							_this.isTab = true;
						},700);
//						$('.cont-four').css('top',-(nH-1)*972+"px");
//						$('.HpartF').eq(nH-1).css('opacity',1).siblings().css('opacity',0);
					}
				}else{
					_this.Hclick();
				}
			},
			FninnerClick:function(e){
				$(e.target).animate({
					transform:'rotateY(300deg)'
				})
			},
			EyeMove:function(e){
				var Max = 30;
				var L = e.pageX/(this.seeW/2)-1;
				var T = e.pageY/(this.seeH/2)-1;
				this.eyeBall[0].style.left = Max*L + 48 +'px';
				this.eyeBall[1].style.left = Max*L + 48 +'px';
				this.eyeBall[0].style.top = Max*T + 48 +'px';
				this.eyeBall[1].style.top = Max*T + 48 +'px';
			}
		}

		var mouse = new Little;
		mouse.init();

		//$('.H-reol').css('background',baImg[window.location.hash.split('#')[1]]);
		window.onhashchange = function(){
			var nH = window.location.hash.split('#')[1];
			//var HpartF = document.getElementsByClassName('HpartF');
			document.getElementsByTagName('body')[0].style.background = baImg[nH-1];
			//console.log(nH);
			if(nH == 4){
				$('.H-down').animate({
					bottom:-150
				});
			}else{
				$('.H-down').animate({
					bottom:0
				});
			}
			$('.nowPage').css('left',-(nH-1)*185);
			$('.cont-four').css('top',-(nH-1)*972+"px");
			$('.HpartF').eq(nH-1).css('opacity',1).siblings().css('opacity',0);
			$('.yema-num').children().eq(nH-1).addClass('active').siblings().removeClass('active');
			$('#svg-unlock').css('fill',cc[nH-1]);
			//$('.animation-to-section').eq(nH-1).show().siblings().hide();
			$('.animation-to-section').eq(0).attr('values',animateC[nH-1]);
		}

		$('.searchBtn').click(function(){
			window.location.hash = 4;
		})
		$('.mnbaid').keyup(function(){
			var val = $('.mnbaid').val();
			$('.goFind')[0].href = 'https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+val;
			$('.goFind')[0].target = "_block";
			$.ajax({
				url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
				data:{
					wd:val
				},
				dataType:'jsonp',
				jsonp: "cb",
				success:function(json){
					$('#ul').html('');
					json.s.forEach(function(e,i){
						var li = $('<li>');
						li.html('<a href="javascript:;">'+e+'</a>');
						$('#ul').append(li);
					})
					$('#ul').click(function(e){
						console.log(e.target.nodeName);
						if(e.target.nodeName === 'A'){
							$('.mnbaid').val(e.target.innerHTML);
							$('.goFind')[0].href='https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+e.target.innerHTML;
							$('.goFind')[0].target = "_block";
						}
					})
					$('.goFind').click(function(){
						if($('.mnbaid').val()){
							$('.mnbaid').val('');
						}
					});
					$('#ul').css('height',json.s.length*30);
				}
			})
		})
		$('.mnbaid').blur(function(){
			$('#ul').css('height',0);
		});

		var ul = wrap.querySelector('.list-ul');
		var a = $('.Hlist')[0];
		var eleTake = null;
		var timer = 0;
		for(var i=0;i<ul.children.length;i++){
			css(ul.children[i],"rotateY",'90');
			css(ul.children[i],"opacity",'0');
		}
		var isTab = true;//管理开关
		a.onclick = comeul;
		function comeul(){
			a.onclick = null;
			if(isTab){
				$(ul).show();
				come(ul.children[0]);
			}else{
				clearTimeout(timer);
				for(var i=0;i<ul.children.length;i++){
					if(css(ul.children[i],'opacity') != 0){
						eleTake = ul.children[i];
					}
				}
				out(eleTake);
			}
			isTab = !isTab;
			console.log(isTab);
			if(isTab){
				setTimeout(function(){
					$(ul).hide();
				},1000);
			}
			setTimeout(function(){
				a.onclick = comeul;
			},1000);

		}
		function come(ele){
			mTween(ele,{opacity:100,rotateY:0},300,'linear');
			timer = setTimeout(function(){
				if(ele.nextElementSibling){
					come(ele.nextElementSibling);
				}
			},100);

			console.log(1);
		}
		function out(ele){
			mTween(ele,{opacity:0,rotateY:90},300,'linear');
			setTimeout(function(){
				if(ele.previousElementSibling){
					out(ele.previousElementSibling);
				}
			},100);
			console.log(2);
		}

		$('.v1').focus(function(){
			$(this).prev().css({
				bottom:30,
				fontSize:10,
			});
			$(this).css('borderColor','red');
		});
		$('.v1').blur(function(){
			if(this.value === ''){
				$(this).prev().css({
					bottom:0,
					fontSize:26
				});
				$(this).css('borderColor','pink');
			}

		});

	$(".addUser").click(function(){
		$('.v1').val('');
		$('.v1').blur();
		$(".denglu").css('left',-600);
		$('.zhuce').css('left',0);
	})
	$(".addfh").click(function(){
		$('.v1').val('');
		$('.v1').blur();
		$(".denglu").css('left',0);
		$('.zhuce').css('left',600);
	})
	//登陆注册
	var $adduser = $('#add_user');
	var $addpass = $('#add_pass');

	$adduser.on('blur',function(){
		var val = $(this).val();
		$.ajax({
			url:'php/user_view.php',
			dataType:'xml',
			success:function(str){
				var name = $(str).find('.name');
				name.onOff = true;
				name.each(function(i,e){
					if($(e).text() === val){
						alert('用户名已被注册');
						$adduser.css('color','red');
						name.onOff = false;
						return;
					}
				});

				if(name.onOff){
					$adduser.css('color','green');
				}
			}
		});
	});


	$('#add_btn').click(function(){
		var userVal = $adduser.val();
		var passVal = $addpass.val();

		if(userVal && passVal){
			ajax({
				url:'php/user.php',
				data:{
					act:'add',
					user:userVal,
					pass:passVal
				},
				succ:function(json){
					if(json.error){
						alert('不能注册！！！！！！！！')
					}else{
						//alert(json.desc);
						$(".denglu").css('left',0);
						$('.zhuce').css('left',600);
					}
				}
			});
		}else{
			alert('请填写完整!!!');
		}
	});
	$('#login_btn').click(function(){
		var $login_user = $('#login_user').val();
		var $login_pass = $('#login_pass').val();

		if($login_user && $login_pass){
			ajax({
				url:'php/user.php',
				data:{
					act:'login',
					user:$login_user,
					pass:$login_pass
				},
				succ:function(json){
					if(json.error){
						alert(json.desc);
					}else{
						alert('登陆成功!!!');
						setCookie('name',$login_user,1);
						weIn();
					}
				}
			});
		}else{
			alert('请填写完整!!!');
		}
	});
	$('.take-out').click(function(){
		var c = document.cookie;
		removeCookie(c.split('=')[0],c.split('=')[1]);
		console.log(c.split('=')[0],c.split('=')[1]);
		$('.v1').val('');
		$('.v1').blur();
		$('.take-in').hide();
		$('.denglu').show();
	});
	function setCookie(key,val,time){
		time = time?time:0;
		var day = new Date();
		day.setDate(day.getDate()+time);
		document.cookie = key+'='+val+';expires='+day;
	}
	function removeCookie(key,value){
		setCookie(key,value,-1);
	}
	function weIn(){
		$('.take-in').show();
		$('.take-in').children().eq(0).children().html(document.cookie.split('=')[1]);
		$('.denglu').hide();
	}


	document.onmousemove = function(ev){

	}
})();
