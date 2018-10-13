$(function(){
	$(".id").blur(function(){
		$curval=$(".id").val();
		if($curval==""){
			$(this).val(this.defaultValue);
		}else{
			$(this).val($curval);
		}
	});
	$(".id").keyup(function(){
		$curval=$(".id").val();
		if($curval==this.defaultValue){
			$(this).val("");
		}else{
			$(this).val($curval);
		}
	});
	$(".name").blur(function(){
		$curdval=$(".name").val();
		if($curdval==""){
			$(this).val(this.defaultValue);
		}else{
			$(this).val($curdval);
		}
	});
	$(".name").keydown(function(){
		$curdval=$(".name").val();
		if($curdval==this.defaultValue){
			$(this).val("")
		}else{
			$(this).val($curdval);
		}
	});
});
