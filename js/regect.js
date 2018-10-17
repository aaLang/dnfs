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
//		console.log($vl);
		if($vl<=0){
			$("#nameSpan").css({
				display:"block"
			});
			$("#userName").css({
				"border-color":"#ed6661"
			});
		}else{
			$("#nameSpan").css({
				display:"none"
			});
			$(".name_img").css({
				display:"block"
			});
			$("#userName").css({
				"border-color":"#ccc"
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
		$(".name_img1").css({
				display:"none"
			});
	});
	$("#userPass").blur(function(){
		$vv=$("#userPass").val();
		$(".passSpan").css({
			display:"none"
		});
//		console.log($vv);
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
			var le=panDuan($vv);
			if(le==2){
				$("#eeor").css({
					display:"none"
				});
			if($vv.indexOf(" ")!=-1){
				$("#eeor").css({
				display:"block"
				});
				$("#userPass").css({
					"border-color":"#ed6661"
				});
				$("#eeor p").remove();
				$("#eeor").append("<p>不能包含空格</p>");
				$(".name_img1").css({
					display:"none"
				});
			}else{
				$("#eeor").css({
				display:"none"
				});
				$("#userPass").css({
					"border-color":"#ccc"
				});
				$(".name_img1").css({
					display:"block"
				});
			}
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
	$("#userPass").keyup(function(){
		$(".pass_key").css({
			display:"block"
		});
		$vv=$("#userPass").val();
		if($vv.indexOf(" ")!=-1){
				$("#koge").css({
					background:"url(../img/info.png) no-repeat 0px 3px "
				});
		}else{
				$("#koge").css({
					background:"url(../img/green.png) no-repeat 0px 3px "
				});
		}
		if($vv.length>=8&&$vv.length<=16){
			$("#lengh").css({
				background:"url(../img/green.png) no-repeat 0px 3px "
			});
			var vale=panDuan($vv);
			if(vale==2){
				$("#stron").css({
					background:"url(../img/green.png) no-repeat 0px 3px "
				});
				
			}else{
				$("#stron").css({
					background:"url(../img/info.png) no-repeat 0px 3px "
				});
			}
		}else{
			$("#lengh").css({
				background:"url(../img/info.png) no-repeat 0px 3px "
			});
		}
		
	});
	$(".pass_key").mousedown(function(){
		$(".eye").css({
			display:"block"
		});
		$(".eye_close").css({
			display:"none"
		});
		$("#userPass").attr("type","text");
	});
	$(".pass_key").mouseup(function(){
		$(".eye").css({
			display:"none"
		});
		$(".eye_close").css({
			display:"block"
		});
		$("#userPass").attr("type","password");
	})
	function panDuan(vla){
		var hasNum = false;
			var regNum = /\d/;
//			console.log(regNum.test($vv));
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
				return 2;				
			}else{
				return 1;	
			}
	}
	
	$("#btn").click(function(){
		let xhr=new XMLHttpRequest();
		xhr.open("post","../php/regect.php",true);
		xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					let squ=xhr.responseText;
					if(squ==0){
						alert("注册失败,用户名已存在")
					}else if(squ==1){
						alert("注册成功,请登录");
						location.href="../dengl.html";
					}else if(squ==2){
						alert("服务器出错,请重新注册");
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			let stt="username="+$("#userName").val()+"&userpass="+$("#userPass").val();
			xhr.send(stt);
	});
});
