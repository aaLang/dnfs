$(function(){
var img=[
		"../img/01-1.jpg",
		"../img/01-3.jpg",
		"../img/01-4.jpg",
		];
		$(".left img").attr("src",img[0]);
		var i=0;
		setInterval(function(){
			i++;
			if(i>img.length-1){
				i=0;
			}
			$(".left img").attr("src",img[i]);
		},5000);
	$(".dq").focus(function(){
		$(".sj_1").css({
			display:"none"
		});
		$(".sj_2").css({
			display:"block"
		});
		$(".cit").css({
			display:"block"
		});
	});
	$(".dq").blur(function(){
		$(".sj_1").css({
			display:"block"
		});
		$(".sj_2").css({
			display:"none"
		});
		$(".cit").css({
			display:"none"
		});
	});
	$(".call").focus(function(){
		$(".yz").css({
			display:"block"
		});
	});
	$(".call").blur(function(){
		$(".yz").css({
			display:"none"
		});
	});
	$(".kt").click(function(){
		$(".mr").toggle();
		$(".ko").toggle();
	});
	$("#xy").click(function(){
		$(".mr_1").toggle();
		$(".ko_1").toggle();
	});
	$(".right_xy").click(function(){
		$(".xy_112").toggle();
		$(".xy_113").toggle();
		$(".xy_1").toggle(100);
	});
	$("#userName").blur(function(){
		$vl=$("#userName").val().length
		console.log($vl);
		if($vl<=0){
			$("#nameSpan").css({
				display:"block"
			});
			$("#userName").css({
				"border-color":"#ed6661"
			})
		}else{
			$("#nameSpan").css({
				display:"none"
			});
		}
	});
	$("#userPass").focus(function(){
		$(".passSpan").css({
			display:"block"
		});
		$("#userPass").css({
				"border-color":"#ed6661"
			})
		$("#eeor").css({
				display:"none"
			});
	});
	$("#userPass").blur(function(){
		$vv=$("#userPass").val();
		$(".passSpan").css({
			display:"none"
		});
		console.log($vv);
		if(($vv.length)<=0){
			$("#eeor").css({
				display:"block"
			});
			$("#userPass").css({
				"border-color":"#ed6661"
			})
			$("#eeor p").remove();
			$("#eeor").append("<p>密码不能为空</p>");
		}else if($vv.length>0&&$vv.length<8){
			$("#eeor").css({
				display:"block"
			});
			$("#userPass").css({
				"border-color":"#ed6661"
			})
			$("#eeor p").remove();
			$("#eeor").append("<p>长度为8-16个字符</p>");
		}else if($vv.length>=8&&$vv.length<=16){
			var hasNum = false;
			var regNum = /\d/;
			console.log(regNum.test($vv));
			if(regNum.test($vv)){
				hasNum = true;
			}
			//2）、字母
			var hasLetter = false;
			var regLetter = /[a-zA-Z]/;
			if(regLetter.test($vv)){
				hasLetter = true;
			}
//			console.log(regLetter.test($vv))
			//3）、特殊字符
			var hasSpecial = false;
			var regSpecial = /[@!#\$%*^&_]/;
			if(regSpecial.test($vv)){
				hasSpecial = true;
			}
			var level =hasNum+hasLetter+hasSpecial;
			if(level>=2){
				
			}else{
				$("#eeor").css({
				display:"block"
			});
			$("#userPass").css({
				"border-color":"#ed6661"
			})
			$("#eeor p").remove();
			$("#eeor").append("<p>必须包含字母、数字、符号至少2种</p>");
			}
		}
		
	});
	$("#userPass").keydown(function(){
		$(".pass_key").css({
			display:"block"
		})
		$vv=$("#userPass").val();
		
	});
	$(".pass_key").click(function(){
		$(".eye").toggle();
		$(".eye_close").toggle();
	})
});
