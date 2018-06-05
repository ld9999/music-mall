$('.shop-logo').click(function() {
	window.location.href = "index.html"
})
$('.sina').hover(function() {
	$(this).css('background', '#fff')
	$('.popsina').css('display', 'block')
}, function() {
	$(this).css('background', 'none')
	$('.popsina').css('display', 'none')
})
$('.weixin').hover(function() {
	$(this).css('background', '#fff')
	$('.popweixin').css('display', 'block')
}, function() {
	$(this).css('background', 'none')
	$('.popweixin').css('display', 'none')
})
$('html').click(function() {
	$('.one-mid-center .search').css('background', 'url(img/yinyue1/search_icon.png) no-repeat');
	$('.one-mid-center .search').css('background-position', '-1px -44px');
	$('.popup').hide();
});
$('.search #sos').click(function() {
	$('.search').css('background', 'url(img/yinyue1/search_icon.png) no-repeat');
	$('.search').css('background-position', '-1px -1px');
	$('.popup').show()
})
$('.search').mouseleave(function() {
	$('.popup').hide()
})
//轮播图导致的点击后搜索弹出窗口随轮播图消失，将轮播图清除事件冒泡
$(".one-mid-center .search,.box1").click(function(event) {
	event.stopPropagation();
});
$('.fenlei').hover(function() {
	$('.classify').css('display', 'block')
}, function() {
	$('.classify').css('display', 'none')
})
$('.one-bot .nav li a').click(function() {
	$(this).css('color', '#ff2c72')
	$(this).parents('li').siblings().children('a').css('color', '#f5f5f5')
	$(this).parents('li').css('border-bottom', '3px solid #ff2c72')
	$(this).parents('li').siblings().css('border', 'none')
})
$("#box1").swiper({
	ratio: 1200 / 398,
	time: 2000,
	base: false,
	stop: true,
	direction: "right"
});
//追星必备点击事件
var dianKey = 0;
var imgKey = 0;
var timer;
//lt 前几个元素   gt除前几个之后的元素  不计0开始
var firsta = $('.bibei a:lt(4)').clone(true);
$('.bibei').append(firsta);
var nextFn = function() {
	dianKey++;
	if(dianKey > 4) {
		dianKey = 0;
	}
	$('.one4-lf button').eq(dianKey).addClass('bn').siblings().removeClass('bn')
	imgKey++;
	if(imgKey > 5) {
		imgKey = 1;
		$('.bibei').css({
			'margin-left': 0
		});
	}
	var s = imgKey * -218;
	$('.bibei').stop().animate({
		'margin-left': s + 'px'
	}, 500);
}
var prevFn = function() {
	dianKey--;
	if(dianKey < 0) {
		dianKey = 4;
	}
	//让上一张的小点具备current...
	$('.one4-lf button').eq(dianKey).addClass('bn').siblings().removeClass('bn')
	imgKey--;
	if(imgKey < 0) {
		imgKey = 4;
		$('.bibei').css('margin-left', '-1090px');
	}
	var s = imgKey * -218;
	$('.bibei').stop().animate({
		'margin-left': s
	}, 500);
}
$('.slick-next').click(nextFn);
$('.slick-prev').click(prevFn);
//给单击小点绑定事件
//var myIdElement = document.getElementsByClassName('one4-lf');
//var beforeStyle = window.getComputedStyle(myIdElement, ":before");
$('.one4-lf button').click(function(event) {
	//先获取到序号
	var i = $(this).index();
	var s = i * -218;
	//让小点走
	//注意区别定位中的left值和margin-left的区别,否则看不到效果,实际是方位词用错
	$('.one4-lf button').eq(i).addClass('bn').siblings('button').removeClass('bn');
	$('.bibei').stop().animate({
		'margin-left': s
	}, 500);
	//让当前这个序号能够影响到上一张和下一张,有一个重要的步骤：序号同步（两个全局变量都需要同步）
	imgKey = i;
	dianKey = i;
});
timer = setInterval(nextFn, 1500);
$('.ad-one2').hover(function() {
	clearInterval(timer);
}, function() {
	clearInterval(timer);
	timer = setInterval(nextFn, 1500);
});
$('.one4-lf button').click(function() {
	$(this).addClass('bn').siblings().removeClass('bn')
})
$('.ad-two-mid .active').click(function() {
	$('.goods_chart').css('display', 'none')
	$('.artists_chart').css('display', 'block')
	$(this).siblings().addClass('rov').removeClass('active')
	$(this).removeClass('rov').addClass('active')
})
$('.ad-two-mid .shops').click(function() {
	$('.artists_chart').css('display', 'none')
	$('.goods_chart').css('display', 'block')
	$(this).siblings().addClass('rov').removeClass('active')
	$(this).removeClass('rov').addClass('active')
})
//$('.goodsList').children('.' + 'li' + n).css('display', 'block')
//$('.goodsList .lin').siblings().css('display', 'none')
var times = 1;
var clickNum = 0;
var cartNum = document.getElementById('cartNum');
$('.ad-four-mid .change').click(function() {
	clickNum++;
	//	alert(clickNum);
	if(clickNum < 4) {
		$('.goodsList .ul0').css('margin-left', clickNum * (-1212) + 'px')
	} else {
		clickNum = 0
		$('.goodsList .ul0').css('margin-left', '0px')
	}
});
$('#ml').hover(function() {
	$('.goodsList_rank').css('display', 'none')
	$('.mlablumList').css('display', 'block')
	$(this).css('background', '#f9c9d9')
	$(this).siblings().css('background', '#eeeeee')
})
$('#im').hover(function() {
	$('.mlablumList').css('display', 'none')
	$('.goodsList_rank').css('display', 'block')
	$(this).css('background', '#f9c9d9')
	$(this).siblings().css('background', '#eeeeee')
})
$('.goodsList_rank,.mlablumList').hover(function() {
	$(this).children('li').siblings().removeClass('movein')
})
$('.goodsList_rank,.mlablumList').mouseleave(function() {
	$(this).children('li').eq(0).addClass('movein')
})
//shop回到顶部
window.onload = function() {
	var timer = null;
	var flag = true;
	var docWidth = document.documentElement.clientWidth;
	$('.J_returnTop').click(function() {
		clearInterval(timer);
		timer = setInterval(function() {
			var scoll = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-scoll / 10);
			flag = true;
			document.body.scrollTop = document.documentElement.scrollTop = scoll + speed;
			if(scoll == 0) {
				clearInterval(timer);
			}
		}, 30)
	})
	if(docWidth < 1363) {
		$('.J_shopMenu').css('margin-left', docWidth / 2 - 70);
	} else {
		$('.J_shopMenu').css('margin-left', 626);
	}
	window.onresize = function() {
		var docWidth = document.documentElement.clientWidth;
		if(docWidth < 1363) {
			$('.J_shopMenu').css('margin-left', docWidth / 2 - 70);
		} else {
			$('.J_shopMenu').css('margin-left', 626);
		}
	}
	window.onscroll = function() {
		var scrollTopHeight = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTopHeight > 1000) {
			$('.J_returnTop').css('display', 'block');
		} else {
			$('.J_returnTop').css('display', 'none');
		}
		//flag为false时清除定时器，滚动条返回过程中，鼠标滚动使flag为false，返回中断停止  
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};
}