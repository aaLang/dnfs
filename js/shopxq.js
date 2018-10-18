$(function(){
	$(".nav_right").hover(function(){
		$(".nav_right1").slideDown(100);
	},function(){
		$(".nav_right1").slideUp(100);
	});
	$(".xq li").hover(function(){
		$(this).children(".xq_lb").show();
		$(this).children("a").addClass("navzi_hover");
	},function(){
		$(this).children(".xq_lb").hide();
		$(this).children("a").removeClass("navzi_hover");
	});
	$("#xiao li").hover(function(){
		$(this).parent().children().removeClass("li_cur");
		$i=$(this).index();
		$j=$(this).parent().prev().children();
		$j.addClass("hid");
		$(this).addClass("li_cur");
		$j.eq($i).removeClass("hid");
	},function(){
		$(this).addClass("li_cur");
	});
});
