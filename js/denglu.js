$('.menus>.menu').click(function() {
	$(this).children('.link').css({
		'color': '#52e2c0'
	}).parents('.menu').siblings().children('.link').css({
		'color': '#ccc'
	})
	$(this).children('.link').css({
		'background': '#222'
	}).parents('.menu').siblings().children('.link').css({
		'background': 'none'
	})
	$('.nav .shopgif').css({
		'background': 'url(img/geren/shop2.gif) no-repeat'
	})
})
//将css中的background-color样式改为background，防止出现小边条，影响用户交互效果
$('.nav .menus .menu:nth-child(6)').click(function() {
	$(this).children('.shopgif').css({
		'background': '#222'
	})
})

function jump() {
	$('.login-tab a').click(function() {
		$(this).addClass('login-active').siblings().removeClass('login-active')
	})
	$('.active').click(function() {
		$('#login-area').css('display', 'block')
		$('#register-area').css('display', 'none')
	})
	$('.login-reg').click(function() {
		$('#register-area').css('display', 'block')
		$('#login-area').css('display', 'none')
	})
}
jump();
$(document).ready(function() {
	$(document).scroll(function() {
		var z = $(document).scrollTop();
		var i = 0;
		if(z >= 480) {
			$('.return_top_wrapper').show()
			var t = setInterval(function() {
				i += 10;
				$('.return_top_wrapper').css("bottom", '100px')
				if(i >= 100) {
					clearInterval(t)
				}
			}, 50)
		} else {
			$('.return_top_wrapper').hide()
		}

		var i = 0;
		$('.return_top_wrapper').click(function() {
			var c = setInterval(function() {
				i += 50;
				$('.return_top_wrapper').css("scrollTop", i)
				if(i >= 900) {
					clearInterval(c)
				}
			}, 50)
		})
	})
})
$('.return_top_wrapper').click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 500);
})
var testName = /^([\u4e00-\u9fa5]){1,7}$/;
var engName = /^[\u4e00-\u9fa5]{2,7}$|^[a-zA-Z]{1,14}$/;
//验证手机号
var pattern = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
//验证密码长度在6-14之间，以字母开头，只能包含数字，大小写字母_；
///^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{5,13}$/
//验证密码长度在6-20之间，以字母开头，只能包含数字，大小写字母_；
var pass = /^[a-zA-Z]\w{5,19}$/
var flag = false;
$('#user,#pswd,#phones,#pas,#checkNode').bind('input propertychange', function() {
	user();
	pswd();
});
$('#user,#pswd').mousedown(function() {
	user();
	pswd();
	if($('#user').val() == "") {
		$('.a1').show()
		$('.a1').siblings('span').hide()
		$('#user').next('i').removeClass('icc')
	} else {
		$('.a1').hide()
	}
	if($('#pswd').val() == "") {
		$('.a2').show()
		$('.a2').siblings('span').hide()
		$('#pswd').next('i').removeClass('icc')
	} else {
		$('.a2').hide()
	}
	if($('#user').val() == "" && $('#pswd').val() == "") {
		$('.b1').siblings('span').hide()
		$('.b1').show()
	} else {
		$('.b1').hide()
	}
});
$('#phones,#pas,#checkNode').mousedown(function() {
	user();
	pswd();
	if($('#phones').val() == "") {
		$('.a11').show()
		$('.a11').siblings('span').hide()
		$('#phones').next('i').removeClass('icc')
	} else {
		$('.a11').hide()
	}
	if($('#checkNode').val() == "") {
		$('.b55').show()
		$('.b55').siblings('span').hide()
	} else {
		$('.b55').hide()
	}
	if($('#phones').val() == "" && $('#pas').val() != "") {
		$('.a11').siblings('span').hide()
		$('.a11').show()
	} else {
		$('.a11').hide()
	}
	//下面这个判断条件靠后写，否则先后顺序冲突造成密码和验证码都为空的时候提示输入验证码，而不是密码
	if($('#pas').val() == "") {
		$('.a22').show()
		$('.a22').siblings('span').hide()
		$('#pas').next('i').removeClass('icc')
	} else {
		$('.a22').hide()
	}
	if($('#phones').val() == "" && $('#pas').val() == "") {
		$('.b11').siblings('span').hide()
		$('.b11').show()
	} else {
		$('.b11').hide()
	}
});
$('.btn1').click(function() {
	user();
	pswd();
	if($('#user').val() == "") {
		$('.a1').show()
		$('.a1').siblings('span').hide()
		$('#user').next('i').removeClass('icc')
	} else {
		$('.a1').hide()
	}
	if($('#pswd').val() == "") {
		$('.a2').show()
		$('.a2').siblings('span').hide()
		$('#pswd').next('i').removeClass('icc')
	} else {
		$('.a2').hide()
	}
	if($('#user').val() == "" && $('#pswd').val() == "") {
		$('.b1').siblings('span').hide()
		$('.b1').show()
	} else {
		$('.b1').hide()
	}
});
$('.btn2').click(function() {
	user();
	pswd();
	if($('#phones').val() == "") {
		$('.a11').show()
		$('.a11').siblings('span').hide()
		$('#phones').next('i').removeClass('icc')
	} else {
		$('.a11').hide()
	}
	if($('#checkNode').val() == "") {
		$('.b55').show()
		$('.b55').siblings('span').hide()
	} else {
		$('.b55').hide()
	}
	if($('#phones').val() == "" && $('#pas').val() != "") {
		$('.a11').siblings('span').hide()
		$('.a11').show()
	} else {
		$('.a11').hide()
	}
	//下面这个判断条件靠后写，否则先后顺序冲突造成密码和验证码都为空的时候提示输入验证码，而不是密码
	if($('#pas').val() == "") {
		$('.a22').show()
		$('.a22').siblings('span').hide()
		$('#pas').next('i').removeClass('icc')
	} else {
		$('.a22').hide()
	}
	if($('#phones').val() == "" && $('#pas').val() == "") {
		$('.b11').siblings('span').hide()
		$('.b11').show()
	} else {
		$('.b11').hide()
	}
});

function user() {
	var a = $('#user').val().length;
	var e = $('#user').val();
	var j = $('#phones').val().length;
	var q = $('#phones').val();
	var v = $('#checkNode').val().length;
	var u = $('#checkNode').val();
	if(a > 0) {
		if((!pattern.test(e))) {
			$('.b2').show()
			$('.b2').siblings('span').hide()
			$('#user').next('i').removeClass('icc')
		} else if(pattern.test(e) && e == q) {
			$('#user').next('i').addClass('icc')
			$('.icc').show()
			$('.b2').hide()
		} else {
			$('.b2').hide()
		}
	} else {}
	if(j > 0) {
		if((!pattern.test(q))) {
			$('.b22').show()
			$('.b22').siblings('span').hide()
			$('#phones').next('i').removeClass('icc')
		} else {
			$('#phones').next('i').addClass('icc')
			$('.icc').show()
			$('.b22').hide()
		}
	} else {}
	if(v > 0) {
		if((!/^\d{4,6}$/.test(u))) {
			$('.b55').show()
			$('.b55').siblings('span').hide()
		} else {
			$('.b55').hide()
		}
	} else {}
};

function pswd() {
	var c = $('#pswd').val().length;
	var f = $('#pswd').val();
	var g = $('#pas').val().length;
	var h = $('#pas').val();
	if(c > 0) {
		if((!pass.test(f))) {
			$('.b4').show();
			$('.b4').siblings('span').hide()
			$('#pswd').next('i').removeClass('icc')
		} else if(pass.test(f) && f == h) {
			$('#pswd').next('i').addClass('icc')
			$('.icc').show()
			$('.b4').hide()
		} else {
			$('.b4').hide()
		}
	} else {}
	if(g > 0) {
		if((!pass.test(h))) {
			$('.b44').show();
			$('.b44').siblings('span').hide()
			$('#pas').next('i').removeClass('icc')
		} else {
			$('#pas').next('i').addClass('icc')
			$('.icc').show()
			$('.b44').hide()
		}
	} else {}
};
$(document).click(function() {
	$('.a1,.a2,.b1,.b2,.b4,.c1,.a11,.a22,.b11,.b22,.b33,.b44,.b55,.c11').css({
		'display': 'none'
	})
});
$(".btn1,.btn2,#user,#pswd,#phones,#pas,#checkNode").click(function(event) {
	event.stopPropagation();
});
$('.btn2').click(function() {
	var j = $('#phones').val().length;
	var q = $('#phones').val();
	var v = $('#checkNode').val().length;
	var u = $('#checkNode').val();
	var g = $('#pas').val().length;
	var h = $('#pas').val();
	var x = pattern.test(q)
	var o = pass.test(h)
	var y = /^\d{4,6}$/.test(u)
	user();
	pswd();
	if((j && v && g > 0) && (x && o && y) && ($('.chk').is(':checked') == true)) {
		alert('注册成功,跳转至登录界面')
		$('#login-area').css('display', 'block')
		$('#register-area').css('display', 'none')
		$('.active').addClass('login-active').siblings().removeClass('login-active')
	} else if(j && v && g == 0) {
		alert('请填写您的账号或密码')
	} else if((j > 0) && (!x)) {
		alert('账号格式错误，请重新输入')
	} else if((g > 0) && (!o)) {
		alert('密码格式错误，请重新输入')
	} else if((v > 0) && (!y)) {
		alert('验证码错误，请重新输入')
	} else if(j == 0) {
		alert('请填写您的手机号/邮箱')
	} else if(g == 0) {
		alert('请填写您的密码')
	} else if(v == 0) {
		alert('请输入验证码')
	} else if($('.chk').is(':checked') == false) {
		alert('请勾选同意服务条款')
	} else {
		alert('填写信息格式有误,请输入正确的信息格式')
	}
})
$('.btn1').click(function() {
	var a = $('#user').val().length;
	var e = $('#user').val();
	var j = $('#phones').val().length;
	var q = $('#phones').val();
	var c = $('#pswd').val().length;
	var f = $('#pswd').val();
	var g = $('#pas').val().length;
	var h = $('#pas').val();
	var x = pattern.test(e)
	var o = pass.test(f)
	if(a == 0 && c == 0) {
		alert('请输入账号或密码')
	} else if((a > 0) && (!x)) {
		alert('账号输入错误，请重新输入')
		$('#user').val('').focus();
	} else if((c > 0) && (!o)) {
		alert('密码错误，请重新输入')
		$('#pswd').val('').focus();
	} else if(a == 0) {
		alert('请输入账号')
	} else if(c == 0) {
		alert('请输入密码')
	} else if((e != q) && (f == h) && (c > 0)) {
		alert('账号输入错误,请重新输入账号')
		$('#user').val('').focus();
	} else if((e == q) && (f != h) && (a > 0)) {
		alert('密码输入错误,请重新输入密码')
		$('#pswd').val('').focus();
	} else if(e != q && f != h) {
		alert('账号或密码输入错误,请重新输入')
		$('#user').val('').focus();
		$('#pswd').val('').focus();
	} else if(e == q && f == h) {
		alert('登录成功,跳转至个人中心')
		window.location.href = "personal.html"
	} else {
		alert('账号或密码输入错误,请重新输入')
		$('#user').val('').focus();
		$('#pswd').val('').focus();
	}
})