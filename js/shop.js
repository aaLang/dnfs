$(function(){
	$(".right_shop_2").hover(function(){
		$(this).children(".shop_yin").slideDown(300);
	},function(){
		$(this).children(".shop_yin").slideUp(100);
	});
//	nav服务显示
	$(".nav_right").hover(function(){
		$(this).children(".nav_right1").slideDown(1);
	},function(){
		$(this).children(".nav_right1").slideUp(1);
	});
	
		$.ajax({
			type:"get",
			url:"../php/getGoodsList.php",
			async:true,
			success:function(data){
				lieBiao(data);
			}
		});
		function lieBiao(data){
				let $d=JSON.parse(data);
				$.each($d,function(i,obj){
					if(obj.goodsType=="凑单商品"){
						cretLi($("#ul_cd"),obj);
					}else if(obj.goodsType=="推荐"){
						cretLi($("#cd_tj"),obj);
					}
				
				});
			}
function cretLi(ulDom,obj){
	var liDom=$("<li></li>");
			liDom.css({
			width:160,
            "text-align":"center",
            float:"left"
			});
			ulDom.append(liDom);
			var aDom=$("<a href='#'></a>");
			liDom.append(aDom);
			var imgDom=$("<img />");
			imgDom.attr("src",obj.goodsImg);
			imgDom.css({
			display:"block",
                width:140,
                height:190,
                margin:"0 auto"
			});
			aDom.append(imgDom);
			var aDom1=$("<a href='#'></a>");
			aDom1.html(obj.goodsName)
			aDom1.css({
				color:"black",
                "font-size":14,
                "margin-top":30
			});
			liDom.append(aDom1);
			var divDom=$("<div></div>");
			divDom.css({
				"font-size":12,
                color:"#9796a6",
                "margin-top":10,
                "margin-bottom":10
			});
		liDom.append(divDom);
		var spanDom1=$("<span></span>");
		spanDom1.html(obj.goodsPrice);
		spanDom1.css({
			color:"#eb4329",
            "margin-right":10
		});
		divDom.append(spanDom1);
		var spanDom2=$("<span></span>");
		spanDom2.html("0人点评");
		divDom.append(spanDom2);
		var aDom2=$("<a href='#'></a>");
		aDom2.html("加入购物车");
		aDom2.css({
				display:"block",
				color:"#2f333c",
				width:90,
				height:28,
                border:"1px solid #999999",
                "text-align":"center",
                "font-size":12,
       		    "line-height":2,
                margin:"0 auto"
				});
		liDom.append(aDom2);
			aDom2.hover(function(){
				aDom2.css({
					"text-decoration":"none",
                     color:"red",
                      "border-color":"red"
				})
			},function(){
				aDom2.css({
					color:"#2f333c",
                    "border-color":"#999999"
				});
			});
		}
});
