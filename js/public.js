$(function(){
	//	左侧头部显示隐藏
	$(".top_1").hover(function(){
		$(this).children(".top_show").slideDown(1);
	},function(){
		$(this).children(".top_show").slideUp(1);
	});
//	右侧头部显示隐藏
	$(".right_shop_21").hover(function(){
		$(this).addClass("right_shop_21_hover");
		$(this).children(".right_shop_yin").slideDown(300);
	},function(){
		$(this).children(".right_shop_yin").slideUp(100);
		$(this).removeClass("right_shop_21_hover");
	});
	$(".right_shop_2").hover(function(){
		$(this).addClass("right_shop_2_hover");
		$(this).children(".shop_yin").slideDown(300);
	},function(){
		$(this).children(".shop_yin").slideUp(100);
		$(this).removeClass("right_shop_2_hover");
	});
//	侧边栏QQ客服显示隐藏
	$(".right_qq").mouseenter(function(){
		$(".qq_1").css({
			display:"block"
		});
	});
	$(".right_qq").mouseleave(function(){
		$(".qq_1").css({
			display:"none"
		});
	});
//	侧边栏头部显示隐藏
	$(".right_top").mouseenter(function(){
		$(".mum_1").css({
			display:"block"
		});
	});
	$(".right_top").mouseleave(function(){
		$(".mum_1").css({
			display:"none"
		});
	});
//	侧边栏礼包显示隐藏
	$(".right_mum").mouseenter(function(){
		$(".liBao").css({
			display:"block"
		});
	});
	$(".right_mum").mouseleave(function(){
		$(".liBao").css({
			display:"none"
		});
	});
//	侧边栏礼包显示滑过当前元素显示隐藏子元素
	$(".lb_bottom1").hover(function(){
		$(this).css({
			cursor:"default"
		})
		$(".yinc_1").css({
			display:"none"
		});
		$(".spa").css({
			display:"none"
		});
		$(".bb").css({
			color:"black"
		})
		$(this).find("div").slideDown(200);
		$(this).find("span").css({
			display:"inline-block"
		});
		$(this).find("b").css({
			color:"#a01f23"
		});
	},function(){
		$(this).find("div").css({
			display:"block"
		});
		$(this).find("span").css({
			display:"inline-block"
		});
		$(this).find("b").css({
			color:"#a01f23"
		});
	});
//	返回顶部
		$(window).scroll(function(){
		if($(window).scrollTop() >= 500){
		$(".tOp").fadeIn(1000);
		} else{
		$(".tOp").fadeOut(1000);
		}
		});
//		点击返回顶部
		$(".tOp").click(function(){
			$("html,body").animate({scrollTop:0},10);
		});
})
