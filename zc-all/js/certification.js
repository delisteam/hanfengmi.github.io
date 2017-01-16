$(function(){
	$(".iam").on("click","input.check",function(){
		var check = $(this).parents(".iam").find("input.check");
		var checkBg = check.siblings(".check-bg");
		checkBg.removeClass("active");
		$(this).siblings(".check-bg").addClass("active");
		if($("#per-check").prop("checked")){
			$(".per-tab").show();
			$(".ins-tab").hide();
		}else{
			$(".per-tab").hide();
			$(".ins-tab").show();	
		}
	});
	$(".investor-list").on("click",".radio",function(){
		var radiobg = $(this).parents(".investor-list").find(".check-bg");
		radiobg.removeClass("active");
		$(this).siblings(".check-bg").addClass("active");
	});
	
	$(".agree").click(function(){
		var checkBg = $(this).siblings(".check-bg");
		if($(this).prop("checked")){
			checkBg.addClass("active");
		}else{
			checkBg.removeClass("active");
		}
	});
	
	//弹窗
	var timer = null;
	var num = $("#pop-time>span").text();
	var cur = 0;
	$(".cer-sub").click(function(){
		$(".cer-pop-wrap").show();
		cur = num;
		timer = setInterval(function(){
			cur--;
			$("#pop-time>span").text(cur);
			if(cur < 0){
				$("#pop-time>span").text(num);
				clearInterval(timer);
				$(".cer-pop-wrap").hide();
			}
		},1000);
	});
	$(".cer-pop-wrap").click(function(){
		pophide();
	});
	$(".close").on("click",function(){
		pophide();
	});
	$(".cer-pop").on("click",function(e){
		e.stopPropagation();
	});
	
	function pophide(){
		$(".cer-pop-wrap").hide();
		$("#pop-time>span").text(num);
		clearInterval(timer);
	}
	
});
//定义了城市的二维数组，里面的顺序跟省份的顺序是相同的。通过selectedIndex获得省份的下标值来得到相应的城市数组
var province=[
	"北京","天津","上海","重庆","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","香港","澳门","台湾"
];
var city=[
	["北京"],
	["天津"],
	["上海"],
	["重庆"],
	["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],
	["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],
	["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安","锡林郭勒","阿拉善"],
	["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],
	["长春","吉林","四平","辽源","通化","白山","松原","白城","延边"],
	["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"],
	["南京","苏州","扬州","无锡","徐州","常州","南通","连云港","淮安","盐城","镇江","泰州","宿迁"],
	["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"],
	["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"],
	["福州","宁德","南平","厦门","莆田","三明","泉州","漳州"],
	["南昌","上饶","萍乡","九江","景德镇","新余","鹰潭","赣州","吉安","宜春","抚州"],
	["济南","青岛","淄博","枣庄","东营","烟台","潍坊","威海","济宁","泰安","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],
	["郑州","开封","洛阳","平顶山","焦作","鹤壁","新乡","安阳","濮阳","漯河","许昌","三门峡","南阳","商丘","信阳","周口","驻马店"],
	["武汉","十堰","襄樊","鄂州","黄石","荆州","宜昌","荆门","孝感","黄冈","咸宁","随州","恩施"],
	["长沙","株洲","湘潭","岳阳","邵阳","常德","衡阳","张家界","益阳","郴州","永州","怀化","娄底","湘西"],
	["广州","清远","潮州","东莞","珠海","深圳","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","阳江","河源","中山","揭阳","云浮"],
	["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],
	["海口","三亚"],
	["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","宜宾","广安","达州","眉山","雅安","巴中","资阳","阿坝","甘孜","凉山"],
	["贵阳","六盘水","遵义","安顺","铜仁","毕节","黔西南","黔东南","黔南"],
	["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","文山","红河","西双版纳","楚雄","大理","德宏","怒江","迪庆"],
	["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"],
	["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],
	["兰州","白银","定西","敦煌","嘉峪关","金昌","天水","武威","张掖","平凉","酒泉","庆阳","临夏","陇南","甘南"],
	["西宁","海东","海北","黄南","海南","果洛","玉树","海西"],
	["银川","石嘴山","吴忠","固原","中卫"],
	["乌鲁木齐","克拉玛依","吐鲁番","哈密","和田","阿克苏","喀什","克孜勒苏柯尔克孜","巴音郭楞蒙古","昌吉","博尔塔拉蒙古","伊犁哈萨克","阿勒泰"],
	["香港"],
	["澳门"],
	["台北","高雄","基隆","台中","台南","新竹","嘉义"]
];
$(function(){
	var proBtn = $(".provinceText");
	var cityBtn = $(".cityText");
	
	proBtn.click(function(){
		var proList = $(this).parents(".select-wrap").children(".provinceList");
		if(proList.is(":hidden")){
			proList.show();
		}else{
			proList.hide();
		}
	});

	$(".provinceList").on("click","li",function(){
		var inpText = $(this).parents(".select-wrap").find(".provinceText"); 
		var cityList = $(this).parents("li").find(".cityList");
		var cityText = $(this).parents("li").find(".cityText");
		var order = $(this).attr("order");
		var cityArr = city[order];
		var cityStr = "";
		$.each(cityArr, function(i,v) {
			cityStr += "<li>"+v+"</li>";
		});
		cityList.html("");
		cityList.append(cityStr);
		cityText.val("选择市");
		$(this).parent().hide();
		inpText.val($(this).text());
	});

	cityBtn.click(function(){
		var cityList = $(this).parents(".select-wrap").children(".cityList");
		if(cityList.is(":hidden")){
			cityList.show();
		}else{
			cityList.hide();
		}
	});
	
	$(".cityList").on("click","li",function(){
		var inpText = $(this).parents(".select-wrap").find(".cityText"); 
		$(this).parent().hide();
		inpText.val($(this).text());
	});
	
	$(document).click(function(e){
		$(".provinceList").hide();
		$(".cityList").hide();
	});
	$(".select-wrap").click(function(e){
		e.stopPropagation();
	});	
	//验证
	$("input.test").blur(function(){
		var p = $(this).siblings(".error");
		var v = $(this).val();
		if(v.length == 0){
			p.show();
		}
	}).focus(function(){
		var p = $(this).siblings(".error");
		p.hide();
	});
	
	
	// 邮箱验证
	var mail = /^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$/;
	$(".vali-mail").each(function(){
		var _this = $(this);
		vali(_this,mail,"邮箱不能为空","邮箱错误");
	});
	
	//手机号码验证
	var mobile = /^(1(3|5|7)\d{9}|18[0-9]\d{8})$/;
	$(".vali-mobile").each(function(){
		var _this = $(this);
		vali(_this,mobile,"手机号码不能为空","手机号码错误");
	});
	
	//身份证号验证
	$(".vali-code").focus(function(){
		var _this = $(this);
		var hint = _this.siblings(".error");
		hint.html("");
		hint.hide();
	}).blur(function(){
		var _this = $(this);
		var val = _this.val();
		var hint = _this.siblings(".error");
		if(val.length == 0){
			hint.text("身份证号不能为空");
			hint.show();
			return;
		}else{
			if(!IdentityCodeValid(val)){
				hint.text("身份证号错误");
				hint.show();
			}else{
				hint.hide();
			}
		}
	});

	function IdentityCodeValid(code) {   //身份证号验证规则
        var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        var tip = "";
        var pass= true;
        
        if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
            tip = "身份证号格式错误";
            pass = false;
        }
        
       else if(!city[code.substr(0,2)]){
            tip = "地址编码错误";
            pass = false;
        }
        else{
            //18位身份证需要验证最后一位校验位
            if(code.length == 18){
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                //校验位
                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++)
                {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if(parity[sum % 11] != code[17]){
                    tip = "校验位错误";
                    pass =false;
                }
            }
        }
        return pass;
    }	
	
	
	function vali(obj,regu,empty,wrong){   
		obj.focus(function(){
			var hint = obj.siblings(".error");
			hint.html("");
			hint.hide();
		}).blur(function(){
			var val = obj.val();
			var hint = obj.siblings(".error");
			if(val.length == 0){
				hint.text(empty);
				hint.show();
				return;
			}else{
				if(!(regu.test(val))){
					hint.text(wrong);
					hint.show();
				}else{
					hint.hide();
				}
			}
		});
	}
});
