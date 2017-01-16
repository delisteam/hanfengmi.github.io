$(function(){
	$("#login-check").click(function(){
		if($(this).prop("checked")){
			$(this).siblings(".check-bg").addClass("active");
		}else{
			$(this).siblings(".check-bg").removeClass("active");
		}
	});
	
	
	//个人机构注册切换
	$("#register-tit>div").click(function(){
		var index = $(this).index();
		var tab = $("#register-tab").children();
		$(this).parent().children().addClass("active");
		$(this).removeClass("active");
		tab.hide();
		tab.eq(index).show();
	});
	
	
	//获取验证码
	var num = 60;
	var cur = 0;
	var timer = null;
	$(".code-btn").click(function(){
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
			obj.val(cur + "秒");
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
	$("#user-id").focus(function(){
		var hint = $(this).siblings(".error");
		hint.hide();
	});

	$("#user-id").blur(function(){
		var val = $(this).val();
		var hint = $(this).siblings(".error");
		if(val.length == 0)return;
		if($("#login-check").prop("checked")){
			if(!(mail.test(val))){
				hint.show();
				hint.text("邮箱错误");
			}else{
				hint.hide();
			}
		}else if(!$("#login-check").prop("checked")){
			if(!(mobile.test(val))){
				hint.show();
				hint.text("手机号码错误");
			}else{
				hint.hide();
			}
		}
	});
	
	
});





