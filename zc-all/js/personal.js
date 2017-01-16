$(function(){
	$(".personal-nav").height(function(){
		return $(this).parent().height();
	});
	
	//重置密码&&手机&&邮箱弹窗
	$(".close-over").click(function(){
		var overlay = $(this).parents(".overlay");
		overlay.find("input[type='text']").val("");
		overlay.find(".error").hide();
		clearInterval(timer);
		overlay.find(".over-code").val("获取验证码").removeClass("active").removeAttr("disabled");
		overlay.hide();
		$("body").removeClass("hidden");
		
	});

	$(".over-wrap").click(function(e){
		e.stopPropagation();
	});
	
	//获取验证码
	var num = 50;
	var cur = 0;
	var timer = null;
	$(".over-code").click(function(){
		var _this = $(this);
		cur = num;
		setTime(_this);
		timer = setInterval(function(){
			setTime(_this);
		},1000);
	});
	function setTime(obj){
		if(cur == 0){
			clearInterval(timer);
			obj.removeAttr("disabled");
			obj.val("获取验证码");
			obj.removeClass("active");
		}else{
			obj.attr("disabled","true");
			obj.addClass("active");
			cur--;
			obj.val(cur + "秒后重新获取");
		}
	}
	
	//验证电话
	var mobile = /^(1(3|5|7)\d{9}|18[0-9]\d{8})$/;
	$(".vali-mobile").each(function(){
		var _this = $(this);
		vali(_this,mobile);
	});
	
	//验证邮箱
	var mail = /^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$/;
	$(".vali-mail").each(function(){
		var _this = $(this);
		vali(_this,mail);
	});

	function vali(obj,regu){   
		obj.focus(function(){
			var hint = obj.siblings(".error");
			hint.hide();
		}).blur(function(){
			var val = obj.val();
			var hint = obj.siblings(".error");
			if(val.length == 0)return;
			if(!(regu.test(val))){
				hint.show();
			}else{
				hint.hide();
			}
		});
	}
	
});
