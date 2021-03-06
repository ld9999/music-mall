$.fn.extend({ //添加滚轮事件//by jun
	mousewheel: function(Func) {
		return this.each(function() {
			var _self = this;
			_self.D = 0;
			//滚动方向
			if($.browser.msie || $.browser.safari || $.browser.version == 11) {
				_self.onmousewheel = function(e) {
					_self.D = event.wheelDelta;
					event.returnValue = false;
					Func && Func.call(_self);
				};
			} else {
				_self.addEventListener("DOMMouseScroll", function(e) {
					_self.D = e.detail > 0 ? -1 : 1;
					e.preventDefault();
					Func && Func.call(_self);
				}, false);
			}
		});
	}
});
$.fn.extend({
	jscroll: function(j) {
		return this.each(function() {
			j = j || {}
			j.Bar = j.Bar || {};
			j.Btn = j.Btn || {};
			j.BarBg = j.BarBg || {};
			j.MaxHeight = j.MaxHeight || {}
			var maxHeight = $(this).css("height");
			maxHeight = maxHeight.slice(0, maxHeight.length - 2) - 0;
			var jun = {
				W: "15px",
				Bg: "#efefef",
				BarBg: "",
				Radius: "",
				MaxHeight: 200,
				Fn: function() {}
			}
			j.W = j.W || jun.W;
			j.Bg = j.Bg || jun.Bg;
			j.BarBg = j.BarBg || jun.BarBg;
			j.Radius = j.Radius || jun.Radius;
			j.MaxHeight = j.MaxHeight || jun.MaxHeight
			j.Fn = j.Fn || jun.Fn;
			var _self = this;
			var Stime, Sp = 0,
				Isup = 0;
			$(_self).css({
				overflow: "hidden",
				position: "relative",
				padding: "0px"
			});
			var dw = $(_self).width(),
				dh = $(_self).height() - 1;
			var sw = j.W ? parseInt(j.W) : 21;
			var sl = dw - sw
			var bw = j.Btn.btn == true ? sw : 0;
			if($(_self).children(".jscroll-c").height() == null && maxHeight >= j.MaxHeight) { //存在性检测
				$(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:9999;zoom:1;position:relative'></div>");
				$(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");
				$(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:10000;'><div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div></div>");
			}
			var jscrollc = $(_self).children(".jscroll-c");
			var jscrolle = $(_self).children(".jscroll-e");
			var jscrollh = jscrolle.children(".jscroll-h");
			var jscrollu = jscrolle.children(".jscroll-u");
			var jscrolld = jscrolle.children(".jscroll-d");
			if($.browser.msie) {
				document.execCommand("BackgroundImageCache", false, true);
			}
			jscrollc.css({
				"padding-right": sw
			});
			jscrolle.css({
				width: sw,
				background: j.Bg,
				"border-radius": j.Radius
			});
			jscrollh.css({
				top: bw,
				background: j.BarBg,
				width: sw,
				"border-radius": j.Radius
			});
			jscrollu.css({
				height: bw,
			});
			jscrolld.css({
				height: bw,
			});
			var sch = jscrollc.height();
			//var sh = Math.pow(dh,2) / sch ;//Math.pow(x,y)x的y次方
			var sh = (dh - 2 * bw) * dh / sch
			if(sh < 10) {
				sh = 10
			}
			var wh = sh / 6 //滚动时候跳动幅度
			//	sh = parseInt(sh);
			var curT = 0,
				allowS = false;
			jscrollh.height(sh);
			if(sch <= dh) {
				jscrollc.css({
					padding: 0
				});
				jscrolle.css({
					display: "none"
				})
			} else {
				allowS = true;
			}
			jscrollh.bind("mousedown", function(e) {
				j['Fn'] && j['Fn'].call(_self);
				Isup = 1;
				var pageY = e.pageY,
					t = parseInt($(this).css("top"));
				$(document).mousemove(function(e2) {
					curT = t + e2.pageY - pageY;
					//pageY浏览器可视区域鼠标位置，screenY屏幕可视区域鼠标位置
					setT();
				});
				$(document).mouseup(function() {
					Isup = 0;
					jscrollh.css({
						background: j.BarBg,
						"border-radius": j.Radius
					})
					$(document).unbind();
				});
				return false;
			});
			jscrollu.bind("mousedown", function(e) {
				j['Fn'] && j['Fn'].call(_self);
				Isup = 1;
				_self.timeSetT("u");
				$(document).mouseup(function() {
					Isup = 0;
					$(document).unbind();
					clearTimeout(Stime);
					Sp = 0;
				});
				return false;
			});
			jscrolld.bind("mousedown", function(e) {
				j['Fn'] && j['Fn'].call(_self);
				Isup = 1;
				_self.timeSetT("d");
				$(document).mouseup(function() {
					Isup = 0;
					$(document).unbind();
					clearTimeout(Stime);
					Sp = 0;
				});
				return false;
			});
			_self.timeSetT = function(d) {
				var self = this;
				if(d == "u") {
					curT -= wh;
				} else {
					curT += wh;
				}
				setT();
				Sp += 2;
				var t = 500 - Sp * 50;
				if(t <= 0) {
					t = 0
				};
				Stime = setTimeout(function() {
					self.timeSetT(d);
				}, t);
			}
			jscrolle.bind("mousedown", function(e) {
				j['Fn'] && j['Fn'].call(_self);
				curT = curT + e.pageY - jscrollh.offset().top - sh / 2;
				asetT();
				return false;
			});

			function asetT() {
				if(curT < bw) {
					curT = bw;
				}
				if(curT > dh - sh - bw) {
					curT = dh - sh - bw;
				}
				jscrollh.stop().animate({
					top: curT
				}, 100);
				var scT = -((curT - bw) * sch / (dh - 2 * bw));
				jscrollc.stop().animate({
					top: scT
				}, 1000);
			};

			function setT() {
				if(curT < bw) {
					curT = bw;
				}
				if(curT > dh - sh - bw) {
					curT = dh - sh - bw;
				}
				jscrollh.css({
					top: curT
				});
				var scT = -((curT - bw) * sch / (dh - 2 * bw));
				jscrollc.css({
					top: scT
				});
			};
			$(_self).mousewheel(function() {
				if(allowS != true)
					return;
				j['Fn'] && j['Fn'].call(_self);
				if(this.D > 0) {
					curT -= wh;
				} else {
					curT += wh;
				};
				setT();
			})
		});
	}
});