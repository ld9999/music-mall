$(function() {
	$('.shop-logo').click(function() {
		window.location.href = "index.html"
	})
	$('.one-bot .nav li a').click(function() {
		$(this).css('color', '#ff2c72')
		$(this).parents('li').siblings().children('a').css('color', '#f5f5f5')
		$(this).parents('li').css('border-bottom', '3px solid #ff2c72')
		$(this).parents('li').siblings().css('border', 'none')
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
	$('.one-mid-center .search').click(function() {
		$(this).css('background', 'url(img/yinyue1/search_icon.png) no-repeat');
		$(this).css('background-position', '-1px -1px');
		$('.botline').css('display', 'block')
	})
	$('.one-mid-center .search').mouseleave(function() {
		$('.botline').css('display', 'none')
	})
	$(document).click(function() {
		$('.one-mid-center .search').css('background', 'url(img/yinyue1/search_icon.png) no-repeat');
		$('.one-mid-center .search').css('background-position', '-1px -44px');
		$('.botline').css('display', 'none')
	});
	$(".one-mid-center .search").click(function(event) {
		event.stopPropagation();
	});
	$('.fenlei').hover(function() {
		$('.classify').css('display', 'block')
	}, function() {
		$('.classify').css('display', 'none')
	})
	$('.share').hover(function() {
		$('#bdshare_l').css('display', 'block')
	}, function() {
		$('#bdshare_l').css('display', 'none')
	})
	$('.tab_param').click(function() {
		$('.box_info').css('display', 'none')
		$(this).addClass('cur').siblings('p').removeClass('cur')
	})
	$('.tab_details').click(function() {
		$('.box_info').css('display', 'block')
		$(this).addClass('cur').siblings('p').removeClass('cur')
	})
	$('.addToCart').click(function() {
		alert('商品已添加到购物车')
	})
	$('.buyNow').click(function() {
		window.location.href = "trolley.html"
	})
	var c = 1;
	$('.J_like').click(function() {
		c++;
		if(c % 2 != 0) {
			$(this).css('background', 'url(../img/xiangqing/ico.png) no-repeat;')
			$(this).css('background-position', '0px -72px')
			alert('取消添加喜欢成功')
		} else {
			$(this).css('background', 'url(../img/xiangqing/ico.png) no-repeat;')
			$(this).css('background-position', '-13px -72px')
			alert('添加喜欢成功')
		}

	})
	$('.count').children('a').eq(0).click(function() {
		var t = $(this).parent('.count').find('input[class*=text_box]');
		if(t.val() == "" || NaN || undefined || null) {
			t.val(1);
		}
		t.val(parseInt(t.val()) - 1)
		if(parseInt(t.val()) < 1) {
			t.val(1);
			alert('商品的数量不能小于1')
		}
		if(parseInt(t.val()) > 99) {
			t.val(99);
			alert('购买的商品数量不能更多了')
		}
	})
	$('.count').children('a').eq(1).click(function() {
		var t = $(this).parent('.count').find('input[class*=text_box]');
		if(t.val() == "" || NaN || undefined || null) {
			t.val(1);
			alert('商品的数量不能小于1')
		}
		t.val(parseInt(t.val()) + 1)
		if(parseInt(t.val()) > 99) {
			t.val(99);
			alert('购买的商品数量不能更多了')
		}
	})
	$(".text_box").keyup(function() {
		var t = $(this).parent('.count').find('input[class*=text_box]');
		if(parseInt(t.val()) == "" || undefined || null || isNaN(t.val())) {
			t.val(1);
			alert('请输入正确的商品数量')
		}
		if(parseInt(t.val()) > 99) {
			t.val(99);
			alert('购买的商品数量不能更多了')
		}
	})
	//返回顶部
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
		if(scrollTopHeight > 850) {
			$('.detailBox_title').addClass('nav_fixed')
			$('.detailBox_title .fixedBtn').css('display', 'block')
			$('.detailBox_title span').css('display', 'block')

		} else {
			$('.detailBox_title .fixedBtn').css('display', 'none')
			$('.detailBox_title span').css('display', 'none')
			$('.nav_fixed').removeClass('nav_fixed')
		}
		//flag为false时清除定时器，滚动条返回过程中，鼠标滚动使flag为false，返回中断停止  
		if(!flag) {
			clearInterval(timer);
		}
		flag = false;
	};
})