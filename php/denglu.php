<?php
	header("Content-type:text/html;charset=utf-8");
	$userId=$_POST['username'];
	$userName=$_POST['userpass'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败！";
	}else{
		mysql_select_db("dnf",$con);
		$str = "select * from zc where id='$userId' and password='$userName'";
		$result = mysql_query($str,$con);
		$rows= mysql_num_rows($result);
		mysql_close($con);
		if($rows==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>