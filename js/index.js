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
});