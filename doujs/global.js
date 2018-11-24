// JavaScript Document
//初始化文字
$(function(){
	if($(window).width()<=1300){
		$("body").addClass("w_1280")
	}

	$(window).resize(function(){
		if($(window).width()<=1280){
			$("body").addClass("w_1280")
		}else{
			$("body").removeClass("w_1280")
		}
	})
})










//弹出层
function showlayer(e){
	$(e).css({marginTop:$(e).outerHeight()*-0.5});
	$(e).show();
	$(".shadow").fadeIn(300);
}
function hidelayer(e){
	$(e).hide();
	$(".shadow").fadeOut(300);
}

//自动调整底部,配合相应class
function autofoot(){
	var wh=$(window).height();
	var dh=$(document.body).height();
	if($("#footer").attr("class")=="footb"){
		dh=$(document.body).height()+$("#footer").height();;
	}
	if(wh>dh){
		$("#footer").addClass("footb");
	}
	else{
		$("#footer").removeClass("footb");
	}
}


//获取日期
function getdate(e){
	var day="";
	var month="";
	var ampm="";
	var ampmhour="";
	var myweekday="";
	var year="";
	mydate=new Date();
	myweekday=mydate.getDay();
	mymonth=mydate.getMonth()+1;
	myday= mydate.getDate();
	myyear= mydate.getYear();
	year=(myyear > 200) ? myyear : 1900 + myyear;
	if(myweekday == 0)
	weekday=" 星期日 ";
	else if(myweekday == 1)
	weekday=" 星期一 ";
	else if(myweekday == 2)
	weekday=" 星期二 ";
	else if(myweekday == 3)
	weekday=" 星期三 ";
	else if(myweekday == 4)
	weekday=" 星期四 ";
	else if(myweekday == 5)
	weekday=" 星期五 ";
	else if(myweekday == 6)
	weekday=" 星期六 ";
	$(e).text(year+"年"+mymonth+"月"+myday+"日 "+weekday)
}

//设置cookie
function setCookie(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function getCookie(c_name){
	if(document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=")
		if(c_start!=-1){
			c_start=c_start + c_name.length+1
			c_end=document.cookie.indexOf(";",c_start)
			if(c_end==-1)c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end))
		}
	}
	return "";
}

//是否支持html5
function ishtml5(){
	if(typeof(Worker)!=="undefined"){
		return true;
	}
	else{
		return false;
	}
}

//是否支持css3
function isCss3(style) {
	var prefix = ['webkit', 'Moz', 'ms', 'o'],
	i,
	humpString = [],
	htmlStyle = document.documentElement.style,
	_toHumb = function(string) {
		return string.replace(/-(\w)/g,
		function($0, $1) {
			return $1.toUpperCase();
		});
	};

	for (i in prefix) humpString.push(_toHumb(prefix[i] + '-' + style));

	humpString.push(_toHumb(style));

	for (i in humpString) if (humpString[i] in htmlStyle) return true;

	return false;
}

//获取随机数
function GetRandomNum(Min,Max){
	var Range = Max - Min;
	var Rand = Math.random();
	return(Min + Math.round(Rand * Range));
}

function mjump(url){
	var ua=navigator.userAgent.toLowerCase();
	if(ua.match(/iPad/i)=="ipad" || ua.match(/iphone/i)=="iphone" || ua.match(/android/i)=="android") {
		location=url;
	}
}
