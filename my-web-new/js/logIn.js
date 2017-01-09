(function(){
	var v1 = document.getElementById('v1');
	var sp1 = document.querySelector('.span1');
	var sp2 = document.querySelector('.span2');
	var sp3 = document.querySelector('.span3');
	var but = document.getElementById('div4');
	but.onclick = function() {
		click();
	}
	v1.onblur = function() {
		if(/^[1-9]\d{4,10}$/g.test(v1.value)){
			v1.style.borderColor = "blue";
			sp1.style.display = "none";
		}else{
			v1.style.borderColor = "red";
			sp1.style.display = " inline";
		}
	}
	v2.onblur = function() {
		if(/^[a-z]\w{5,17}@[a-z1-9]+.(com|com.cn|cn)$/ig.test(v2.value)){
			v2.style.borderColor = "blue";
			sp2.style.display = "none";
		}else{
			v2.style.borderColor = "red";
			sp2.style.display = " inline";
		}
	}
	v3.onblur = function() {
		if(/^(\d{4})[-.年\/]([1-9]|1[0-2])[-.月\/]([1-9]|[12]\d{1}|3[01])(日)?$/ig.test(v3.value)){
			v3.style.borderColor = "blue";
			sp3.style.display = "none";
		}else{
			v3.style.borderColor = "red";
			sp3.style.display = " inline";
		}
	}
	function click(){
		if(/^[1-9]\d{4,10}$/g.test(v1.value)){
			v1.style.borderColor = "blue";
		}else{
			v1.style.borderColor = "red";
		}
		if(/^[a-z]\w{5,17}@[a-z1-9]+.(com|com.cn|cn)$/ig.test(v2.value)){
			v2.style.borderColor = "blue";
		}else{
			v2.style.borderColor = "red";
		}
		if(/^(\d{4})[-.年\/]0?([1-9]|1[0-2])[-.月\/]0?([1-9]|[12]\d{1}|3[01])(日)?$/ig.test(v3.value)){
			v3.style.borderColor = "blue";
		}else{
			v3.style.borderColor = "red";
		}
	}
})