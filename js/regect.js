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
		},2000);
});
