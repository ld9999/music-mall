$('.shop-logo').click(function () {
	window.location.href = "index.html"
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
//商品删除
$('.J_confirm_remove').click(function() {
	$('.dialog').show()
	$('.zhezhao').show()
})
$('.J_close').click(function() {
	$('.dialog').hide()
	$('.zhezhao').hide()
})
$('.ico_but_group').click(function() {
	$('.dialog').css('display', 'none')
	$('.zhezhao').css('display', 'none')
	$('.pay_order_list').css('display', 'none')
	$('.cart-empty').css('display', 'block')
	$('.cartNum').valueOf('0')
})
//商品加减
$('.count').children('a').eq(0).click(function() {
	var t = $(this).parent('.count').find('input[class*=pay_cart_num]');
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
	var price = parseInt(t.val())
	$('.J_subTotal').text(parseInt($('.danjia').text()) * price + '.0')
	$('.J_totalMoney').text($('.J_subTotal').text())
	$('#cartNum').text(price)
})
$('.count').children('a').eq(1).click(function() {
	var t = $(this).parent('.count').find('input[class*=pay_cart_num]');
	if(t.val() == "" || NaN || undefined || null) {
		t.val(1);
		alert('商品的数量不能小于1')
	}
	t.val(parseInt(t.val()) + 1)
	if(parseInt(t.val()) > 99) {
		t.val(99);
		alert('购买的商品数量不能更多了')
	}
	var price = parseInt(t.val())
	$('.J_subTotal').text(parseInt($('.danjia').text()) * price + '.0')
	$('.J_totalMoney').text($('.J_subTotal').text())
	$('#cartNum').text(price)
})

function price() {
	var t = $('.count').find('input[class*=pay_cart_num]');
	var price = parseInt(t.val());
	$('.J_subTotal').text(parseInt($('.danjia').text()) * price + '.0')
	$('.J_totalMoney').text($('.J_subTotal').text())
	$('#cartNum').text(price)
}
$('.pay_cart_num').bind('input propertychange', function() {
	var t = $('.count').find('input[class*=pay_cart_num]');
	var r = /^(0|[1-9][0-9]*)$/
	if(parseInt(t.val()) > 99) {
		alert('已达可购买数量上限')
		parseInt(t.val(99))
	} else if(parseInt(t.val()) < 1) {
		alert('商品的数量不能小于1')
		parseInt(t.val(1))
	}
	if(t.val() == "" || NaN || undefined || null || isNaN(t.val())) {
		parseInt(t.val(1));
	} else if(!r.test(t.val())) {
		t.val(1);
	}
	price();
});
$(".text_box").keyup(function() {
	var t = $(this).parent('.count').find('input[class*=pay_cart_num]');
	if(parseInt(t.val()) == "" || undefined || null || isNaN(t.val())) {
		t.val(1);
		alert('请输入正确的商品数量')
	}
	if(parseInt(t.val()) > 99) {
		t.val(99);
		alert('购买的商品数量不能更多了')
	}
})
$('.pay_btn').click(function () {
	alert('支付成功,跳转到个人中心')
	window.location.href = "personal.html"
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
		if(scrollTopHeight > 600) {
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