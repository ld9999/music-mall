$('.menuss>.menu').click(function() {
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
	$('.topbar .shopgif').css({
		'background': 'url(img/geren/shop2.gif) no-repeat'
	})
})
$('.topbar .menuss .menu:nth-child(7)').click(function() {
	$(this).children('.shopgif').css({
		'background': '#222'
	})
})
$('.hoverhandler').hover(function() {
	$(this).find('.dropdownmenu').css({
		'height': 'auto',
		'opacity': '1'
	})
	$('.search').hide()
}, function() {
	$(this).find('.dropdownmenu').css({
		'height': '0',
		'opacity': '0'
	})
	$('.search').show()
})
$('.setLmin li').click(function() {
	$(this).css('background', '#f3f3f3').siblings().css('background', 'none')
})
$('.searchbody').click(function() {
	$('.autocomplete').css('height', 'auto')
	$(this).css('background', 'url(../img/geren/JdFs1gtEQAAAAASUVORK5CYII=.png) no-repeat;')
	$(this).css('background-position', '-15px -30px')
	$('.topbar .left_park_side,.topbar .right_park_side').css('background-position', '0px -30px')
})
$(document).click(function() {
	$(".autocomplete").css('height', '0px');
	$('.searchbody').css('background', 'url(../img/geren/JdFs1gtEQAAAAASUVORK5CYII=.png) no-repeat;')
	$('.searchbody').css('background-position', '-15px 0px')
	$('.topbar .left_park_side,.topbar .right_park_side').css('background-position', '0px 0px')
});
//阻止事件冒泡行为，除自己外的事件触发
$(".searchbody,#SignBtn").click(function(event) {
	event.stopPropagation();
});
$('.geetest_close').click(function() {
	$('.geetest_wind.geetest_panel').css({
		'display': 'none',
		'opacity': '0'
	})
})
$(document).click(function() {
	$('.geetest_wind.geetest_panel').css({
		'display': 'none',
		'opacity': '0'
	})
})
var signin = 0;
var verify = 0;
$('#SignBtn').click(function() {
	verify++;
	if($('#SignBtn').text() == '签到') {
		$('.geetest_wind.geetest_panel').css({
			'display': 'block',
			'opacity': '1'
		})
	} else if($('#SignBtn').text() == '已签到') {
		alert('今天已经签到过了')
	}
})
$('.geetest_commit_tip').click(function() {
	alert('验证成功')
	$('#SignBtn').css({
		'background': '#f3f3f3',
		'color': '#1d1d1d',
		'border': 'solid 1px #ececec'
	})
	$('#SignBtn').text('已签到')
	signin++;
	if(signin == 1) {
		$('#continuousDays').text(parseInt($('#continuousDays').text()) + 1)
	} else if($('#SignBtn').text() == '已签到') {
		alert('今天已经签到过了')
		$('.geetest_wind.geetest_panel').hide()
	}
})