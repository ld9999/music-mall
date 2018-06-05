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
$('.clear-history-btn').click(function() {
	$('.searchbody input').val('')
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
$(".searchbody").click(function(event) {
	event.stopPropagation();
});
$('.navlist a').click(function() {
	$(this).css({
		'color': '#34d7c3',
		'padding': '5px 0',
		'border-bottom': '1px #27d5bf solid'
	})
	$('.last-nav a').css({
		'border-bottom': 'none'
	})
	$(this).parents('li').siblings().children('a').css({
		'color': '#7a7a7a',
		'padding': '0',
		'border-bottom': 'none'
	})
})
$('.banner-nav li').hover(function() {
	$(this).children('a').css({
		'color': '#34d7c3'
	}).parents('li').siblings().children('a').css({
		'color': '#fff'
	})
})
$('.banner-nav li a').click(function() {
	$(this).css({
		'color': '#34d7c3'
	}).parents('li').siblings().children('a').css({
		'color': '#fff'
	})
})
$('.news-box li').hover(function() {
	$(this).addClass('hoverli')
})
//无缝轮播
//定义一个变量，用来模拟那个不断在改变点的序号
var dianKey = 0;
//定义一个变量，用来模拟那个不断在改变图片的序号
var imgKey = 0;
var timer;
//实现无缝的关键就是：请临时工
var firstLi = $('.imgs li:first').clone(true);
$('.imgs').append(firstLi);
var nextFn = function() {
	//需要点的不断改变的序号：0 1 2 3
	dianKey++;
	if(dianKey > 4) {
		dianKey = 0;
	}
	//让下一张的小点具备current...
	//$('.btnList li').eq(dianKey).addClass('current').siblings('li').removeClass('current');
	$('.banner-nav li').eq(dianKey).children('a').css({
		'color': '#34d7c3'
	}).parents('li').siblings().children('a').css({
		'color': '#fff'
	})
	//需要图片不断改变的序号：0 1 2 3 4
	imgKey++;
	if(imgKey > 5) {
		//当你在临时工身上时，用户以为他看到的是第一张，但实际上它是临时工；
		//用户希望看到的下一张是第1张
		imgKey = 1;
		//这里一瞬间需要让盒子回到0的位置
		//因为我需要实现每次都走400PX，所以一瞬间回到0，从0到-400过渡
		$('.imgs').css('top', 0);
	}
	//移动公式：imgKey*-400
	var s = imgKey * -400;
	$('.imgs').stop().animate({
		'top': s
	}, 500);
}
var prevFn = function() {
	dianKey--;
	if(dianKey < 0) {
		dianKey = 4;
	}
	//让上一张的小点具备current...
	//$('.btnList li').eq(dianKey).addClass('current').siblings('li').removeClass('current');
	$('.banner-nav li').eq(dianKey).children('a').css({
		'color': '#34d7c3'
	}).parents('li').siblings().children('a').css({
		'color': '#fff'
	})
	imgKey--;
	if(imgKey < 0) {
		//用户希望看到的上一张是第5张（临时工前面的那一张）
		imgKey = 4;
		//为了实现无缝，也就是每次都走400PX
		//这里一瞬间需要让盒子回到-2000PX的位置
		//从-2000PX向-1600PX进行过渡 
		$('.imgs').css('top', -2000);
	}
	//移动公式：imgKey*-400
	var s = imgKey * -400;
	$('.imgs').stop().animate({
		'top': s
	}, 500);
}
//$('.right').click(nextFn);
//$('.left').click(prevFn);
//给单击小点绑定事件
$('.banner-nav li').hover(function(event) {
	//先获取到序号
	var i = $(this).index();
	var s = i * -400;
	//让小点走走
	//$('.banner-nav li').eq(i).addClass('current').siblings('li').removeClass('current');
	$('.banner-nav li').eq(i).children('a').css({
		'color': '#34d7c3'
	}).parents('li').siblings().children('a').css({
		'color': '#fff'
	})
	//让图片走走
	$('.imgs').stop().animate({
		'top': s
	}, 500);
	//为了让当前这个序号能够影响到上一张和下一张，
	//还有一个很重要的步骤：序号同步（两个全局变量都需要同步）
	imgKey = i;
	dianKey = i;
});
//使用定时器实现自动走
timer = setInterval(nextFn, 2500);

//鼠标悬停时，停止定时器
$('.banner-mid').hover(function() {
	clearInterval(timer);
}, function() {
	clearInterval(timer);
	timer = setInterval(nextFn, 1500);
});

$('.hostlist li').click(function() {
	$(this).addClass('lihover').siblings().removeClass('lihover')
	$('.pragraminfo').eq($(this).index()).show().siblings('.pragraminfo').hide()
})
$('.area-selector a').click(function() {
	$(this).addClass('zcur').siblings().removeClass('zcur')
	$('.buyer-zone').eq($(this).index()).show().siblings('.buyer-zone').hide()
})
$('.week-area .J_guinness_area').click(function() {
	$(this).addClass('cur').siblings().removeClass('cur')
	$('.rank-con').eq($(this).index('.week-area a')).show().siblings('.rank-con').hide()
})
//$('.return_top_wrapper').click(function() {
//	$("html,body").animate({
//		scrollTop: 0
//	}, 1000);
//})
window.onload = function() {
	var timer = null;
	var flag = true;
	var docWidth = document.documentElement.clientWidth;
	$('.return_top_wrapper').click(function() {
		clearInterval(timer);
		timer = setInterval(function() {
			var scoll = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-scoll / 20);
			flag = true;
			document.body.scrollTop = document.documentElement.scrollTop = scoll + speed;
			if(scoll == 0) {
				clearInterval(timer);
			}
		}, 30)
	})
	window.onscroll = function() {
		var scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTopHeight > 500) {
			$('.return_top_wrapper').show();
		} else {
			$('.return_top_wrapper').hide();
		}
		//flag为false时清除定时器，滚动条返回过程中，鼠标滚动使flag为false，返回中断停止  
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};
}