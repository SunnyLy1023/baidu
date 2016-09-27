$(function(){
	//登录
	$('#login').dialog({
		autoOpen : true,
		modal : true,
		width : 390,
		height : 450,
		resizable : false,
	});


	$('#header .login').click(function(){
		$('#login').dialog('open');
	});

	//显示设置
	$('#header .set').bind('mouseover',function(){
		$('#header .serach').show();
	});
	//隐藏设置
	$('#header .set').bind('mouseout',function(){
		$('#header .serach').hide();
	});
	//搜索框的相机图片和搜索框的高亮
	$('.camera').hover(function(){
		$(this).css('background','url(img/camera_new_679c15cc.png) 0 -20px no-repeat');
		$('.bd_text').css('border','1px solid #b5b5b5');
	},function(){
		$(this).css('background','url(img/camera_new_679c15cc.png) no-repeat');
		$('.bd_text').css('border','1px solid #ccc');
	});
	$('.bd_text').hover(function(){
		$(this).css('border','1px solid #b5b5b5');
	},function(){
		$(this).css('border','1px solid #ccc');
	});
	$('.bd_text').focus(function(){
		$(this).css('border','1px solid #4791ff');
	});
	$('.bd_text').blur(function(){
		$(this).css('border','1px solid #ccc');
	});

	//注册页面

	//用户验证
	$('form').eq(0).find('#user').bind('focus',function(){
		$('#content .info_user').show();
		$('#content .succ_user').hide();
		$('#content .error_user').hide();
		$(this).css('border','1px solid #488ee7');
	}).bind('blur',function(){
		var str=$.trim($(this).val());
		var len=0;
		if (str.match(/[\u4e00-\u9fa5]/g) == null) {
			len=str.length;
		}else{
			len=str.length+str.match(/[\u4e00-\u9fa5]/g).length;
		}
		if(len>14){
			$('#content .error_user').html('用户名不能超过7个汉字或14个字符').show().css('color','red');
			$(this).css('border','1px solid red');
			$('#content .info_user').hide();
			$('#content .succ_user').hide();
			return false;
		}
		if (str=='') {
			$('#content .info_user').hide();
			$(this).css('border','1px solid #ddd');
		}else if(check_user()){
			$('#content .succ_user').show();
			$('#content .error_user').hide();
			$('#content .info_user').hide();
		}
		else {
			
			$('#content .error_user').html('用户名仅支持中英文、数字和下划线,且不能为纯数字').show().css('color','red');
			$(this).css('border','1px solid red');
			$('#content .info_user').hide();
			$('#content .succ_user').hide();
		}
		
	});
	//号码验证
	$('form').eq(0).find('#phone').bind('focus',function(){
		$('#content .info_phone').show();
		$('#content .succ_phone').hide();
		$('#content .error_phone').hide();
		$(this).css('border','1px solid #488ee7');
	}).bind('blur',function(){
		var str=$.trim($(this).val());
		if (str=='') {
			$('#content .info_phone').hide();
			$(this).css('border','1px solid #ddd');
		}else if (check_phone()) {
			$('#content .info_phone').hide();
			$('#content .succ_phone').show();
			$('#content .error_phone').hide();
			
		}else {
			$('#content .info_phone').hide();
			$('#content .succ_phone').hide();
			$('#content .error_phone').show().css('color','red');
			$(this).css('border','1px solid red');
		}
	});
	//验证码
	$('form').eq(0).find('#iCode').bind('focus',function(){
		$('#content .info_iCode').show();
		$('#content .succ_iCode').hide();
		$('#content .error_iCode').hide();
		$(this).css('border','1px solid #488ee7');
	}).bind('blur',function(){
		var str=$.trim($(this).val());
		if (str=='') {
			$('#content .info_iCode').hide();
			$(this).css('border','1px solid #ddd');
		}
	});


	//密码验证
	$('form').eq(0).find('#pass').bind('focus',function(){
		$('#content .info_pass').show();
		$('#content .succ_pass').hide();
		$('#content .error_pass').hide();
		$(this).css('border','1px solid #488ee7');
	}).bind('blur',function(){
		var str=$.trim($(this).val());
		if (str=='') {
			$('#content .info_pass').hide();
			$(this).css('border','1px solid #ddd');
		}else if(check_pass()){
			$('#content .info_pass').hide();
			$('#content .succ_pass').show();
			$('#content .error_pass').hide();
		}else{
			$('#content .info_pass').hide();
			$('#content .succ_pass').hide();
			$(this).css('border','1px solid red');
			$('#content .error_pass').show().css('color','red');
		}
	});
	//密码强度验证
	$('form').eq(0).find('#pass').bind('keyup',function(){
		check_pass();
	});

	//密码验证函数
	function check_pass(){
		var str=$.trim($('form').eq(0).find('#pass').val());
		var lengthP=str.length;
		var flag=false;
		//第一个条件6-14个字符
		if (lengthP>=6 && lengthP<=14) {
			$('#content .info_pass .st1').html('●').css('color','green');
		}else{
			$('#content .info_pass .st1').html('○').css('color','#666');
		}
		//第二个条件不能有空格
		if (lengthP>0 && !/\s/.test(str)) {
			$('#content .info_pass .st3').html('●').css('color','green');
		}else{
			$('#content .info_pass .st3').html('○').css('color','#666');
		}
		//第三个条件允许大小写字母和标点符号
		if (/[\d]/.test(str)) {
			flag=true;
		}
		if (/[a-z]/.test(str)) {
			flag=true;
		}
		if (/[A-Z]/.test(str)) {
			flag=true;
		}
		if (/[^a-zA-Z0-9]/.test(str)) {
			flag=true;
		}
		if (flag) {
			$('#content .info_pass .st2').html('●').css('color','green');
		}else{
			$('#content .info_pass .st2').html('○').css('color','#666');
		}
		if (lengthP>=6 && lengthP<=14&& !/\s/.test(str)&& flag==true) {
			return true;
		}else{
			return false;
		}
	}
	function check_phone(){
		var str=$.trim($('form').eq(0).find('#phone').val());
		if (/^[\d]{11}$/.test(str))return true;
	}
	function check_user(){
		var str=$.trim($('form').eq(0).find('#user').val());
		if(/^[\u4e00-\u9fa5]$|(?!\d+)[\w\u4e00-\u9fa5]+/.test(str)) return true;
	}
	function check_iCode(){
		var str=$.trim($('form').eq(0).find('#iCode').val());
		if (str.length!=0)return true;
	}
	

	//注册按钮
	$('form').eq(0).find('#button').click(function(){
		if (!check_user()) {
			$('#user').css('border','1px solid red');
			$('#content .error_user').show().css('color','red');
		}
		if (!check_phone()) {
			$('#content .error_phone').show();
			$('#phone').css('border','1px solid red');
		}
		if (!check_pass()) {
			$('#pass').css('border','1px solid red');
			$('#content .error_pass').show().css('color','red');
		}
		if (!check_iCode()) {
			$('#iCode').css('border','1px solid red');
			$('#content .error_iCode').show().css('color','red');
		}
	});
});