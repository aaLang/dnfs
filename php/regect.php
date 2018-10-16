<?php
	header("Content-type:text/html;charset=utf-8");
	$userId=$_POST['username'];
	$userName=$_POST['userpass'];
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败！";
	}else{
		mysql_select_db("dnf",$con);
		$str="select * from zc where id='$userId'";
		$retult=mysql_query($str,$con);
		$rows=mysql_num_rows($retult);
		if($rows>0){
			echo "0";
		}else{
			$strs="insert into zc(id,password) values ('$userId','$userName')";
			mysql_close($con);
			$retult=mysql_query($strs,$con);
			if($retult){
				echo "1";
			}else{
				echo "2";
			}
		}
	}
?>