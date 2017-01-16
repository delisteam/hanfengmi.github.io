$(function(){
	$(".buy-pop-wrap").on("click","a.close",function(){
		$(this).parents(".buy-pop-wrap").hide();
	});
	
	$("input.agree").click(function(){
		var bg = $(this).siblings(".check-bg");
		if($(this).prop("checked")){
			bg.addClass("active");
		}else{
			bg.removeClass("active");
		}
	});
	$("#use-code").click(function(){
		var wrap = $(".code-wrap");
		if($(this).prop("checked")){
			wrap.show();
			$(this).parents(".apply-num").children(".apply-num-l").hide();
			$(".apply-tit").css("visibility","hidden");
			$(".code-intro").hide();
		}else{
			$("#code-list").html("");
			addCode();
			wrap.hide();
			$(this).parents(".apply-num").children(".apply-num-l").show();
			$(".apply-tit").css("visibility","visible");
			$(".code-intro").show();
		}
	});
	$(".code-wrap").on("click","a.cancel",function(){
		var len = $("#code-list").children().length;
		document.title = len;
		if(len > 1){
			$(this).parent().remove();
		}else if(len == 1){
			$(".code-wrap").hide();
			$("#use-code").prop("checked",false);
			$("#use-code").siblings(".check-bg").removeClass("active");
			$(this).parents(".apply").find(".apply-num-l").show();
			$(".apply-tit").css("visibility","visible");
			$(".code-intro").show();
		}
	});
	$("#add-code").click(function(){
		addCode();
	});
	
	function addCode () {
		var str = '<li class="clear">';
			str += '<div class="input-wrap">';
			str += '<input type="text" name="" id="" value="" placeholder="12位码">';
			str += '<p>免审核额度增加10万</p>';										
			str += '</div>';
			str += '<a class="cancel" href="javascirpt:;">取消使用此摩利码</a>';
			str += '</li>';
		$("#code-list").append(str);
	}
	
	
	var applyInp = $("#apply-inp");
	var applyList = $("#apply-list");
	var applyVal = "";
	applyInp.click(function(){
		if(applyList.is(":hidden")){
			applyList.show();
		}else{
			applyList.hide();
		}
	});
	
	$(document).click(function(){
		applyList.hide();		
	});
	$(".apply-num-l").click(function(e){
		e.stopPropagation();
	});
	
	applyList.on("click","li",function(){
		var val = $(this).attr("value");
		var txt = $(this).text();
		applyInp.val(txt);
		applyVal = val;
		applyList.hide();
	});
});
