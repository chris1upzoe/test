!function(t){t.fn.PageScroll=function(i){return this.each(function(){var n=t(this),s=n.data("PageScroll");if(s||(s=new e(n,i),n.data("PageScroll",s)),"init"===t.trim(i)||t.isPlainObject(i))return s.init()})},t.fn.PageScroll.defaults={selectors:{sections:".sections",section:".section",item:".item",page:".pages",active:".active"},index:0,easing:"cubic-bezier(0,0,0,1)",duration:800,loop:!1,pagination:!0,keyboard:!0,direction:"vertical",callback:""};var i=function(t){var i,e=["webkit","Moz","o","ms"],n="";for(i in e)if(n=e[i]+"Transition",void 0!==t.style[n])return"-"+e[i].toLowerCase()+"-";return!1}(document.createElement("div")),e=function(){function e(i,e){this.element=i,this.settings=t.extend(!0,t.fn.PageScroll.defaults,e||{})}return e.prototype={init:function(){this.canScroll=!0,this.selectors=this.settings.selectors,this.sections=this.selectors.sections,this.section=this.selectors.section,this.item=this.selectors.item,this.direction="vertical"==this.settings.direction,this.pgCount=this.pageCount(),t(this.element).height(t(window).height()),t(this.section).height(t(window).height()),this.index=0<=this.settings.index&&this.settings.index<=this.pgCount-1?this.settings.index:0,this.switchLen=this.switchLength(),this.direction||this._initLayout(),this.settings.pagination&&this._initPaging(),this._initEvent()},getDataType:function(){var i=this,e=[];return t(this.sections).children().each(function(){var n=t(this).data("type");n===i.section.substring(1)&&e.push(n)}),e},pageCount:function(){var i=this,e=0;return t(this.sections).children().each(function(){var n=t(this).data("type");n===i.section.substring(1)&&(t(this).hasClass(n||i.section.substring(1))?e++:t(this).height(t(window).height()/1.8))}),e},switchLength:function(){return this.direction?t(this.element).height():t(this.element).width()},prev:function(){0<this.index?(this.index--,this._pageScroll(this.index)):this.settings.loop&&(this.index=this.pgCount-1,this._pageScroll(this.index))},next:function(){var i=this.getDataType();this.index<i.length-1?(this.index++,this._pageScroll(this.index)):this.settings.loop&&(this.index=0,this._pageScroll(this.index)),this.index+1>this.pgCount-1&&i.length>this.pgCount&&(i=t(this.sections).children().eq(this.index).height(),this._pageScroll(this.index-1,!0,i),this.canScroll=!0)},_initLayout:function(){var i=100*this.pgCount+"%",e=(100/this.pgCount).toFixed(2)+"%";t(this.sections).width(i),t(this.section).width(e).css("float","left")},_Layout:function(e){var n=t(this.sections).children().eq(this.index).height();e=this.index>this.pgCount-1&&this.index<this.getDataType()?this.direction?{top:this.switchLen*index+n,left:0}:{top:0,left:this.switchLen*index+n}:this.direction?{top:e*this.index,left:0}:{top:0,left:e*this.index},i?(e=this.direction?"translate3d(0,-"+e.top+"px,0)":"translate3d(-"+e.left+"px,0,0)",t(this.sections).children().css(i+"transform",e)):(e=this.direction?{top:-e.top}:{left:-e.left},t(this.sections).children().animate(e,this.settings.duration))},_initPaging:function(){for(var i=this.selectors.page.substring(1),e=this.selectors.active.substring(1),i="<ul class="+i+">",n=0;n<this.pgCount;n++)i+="<li><a href='javascript:;'><span>"+n+"</span></a></li>";i+="</ul>",t(this.sections).after(i),i=t(this.selectors.page),i.find("li").eq(this.index).addClass(e).siblings().removeClass(e),this.direction?i.addClass("vertical"):i.addClass("horizontal")},_initEvent:function(){function e(t){t=t||window.event,t.touches.length&&(t=t.touches[0],c=parseInt(t.pageX),h=parseInt(t.pageY),w.addEventListener("touchmove",n,!1),w.addEventListener("touchend",o,!1))}function n(t){if(t=t||window.event,t.preventDefault(),t.touches.length&&!v){t=t.touches[0];var i=t.pageY;a=t.pageX-c,l=i-h,u=-l+f.index*f.switchLen,p=-a+f.index*f.switchLen,d=requestAnimationFrame(s)}}function s(){v=!1,u=-l+f.index*f.switchLen,p=-a+f.index*f.switchLen,g=f.direction?"translate3d(0,-"+u+"px,0)":"translate3d(-"+p+"px,0,0)",t(f.section).css(i+"transform",g)}function o(){r=l/x,.3<=r?f.prev():-.3>=r&&f.next(),cancelAnimationFrame(d);var e=f.direction?"translate3d(0,-"+f.switchLen*f.index+"px,0)":"translate3d(-"+f.switchLen*f.index+"px,0,0)";t(f.section).css(i+"transform",e),l=a=0,w.removeEventListener("touchmove",n,!1),w.removeEventListener("touchend",o,!1)}var c,h,a,l,r,d,g,u,p,f=this,x=t(f.element).height(),v=!1;t(document.body||document.documentElement).on("click","[data-click]",function(i){i.preventDefault(),i=(t(this).data("click")||t(this).attr("data-click")||"").replace("/[s_]*/",""),i in f&&f.canScroll&&f[i]()});var w=t(f.element)[0];"ontouchstart"in document&&w.addEventListener("touchstart",e,!1),f.element.on("click",f.selectors.page+" li",function(){f.index=t(this).index(),f._pageScroll(f.index)}),f.element.on("mousewheel DOMMouseScroll",function(t){f.canScroll&&(t=t.originalEvent.wheelDelta||-t.originalEvent.detail,0<t&&(f.index&&!f.settings.loop||f.settings.loop)?f.prev():0>t&&(f.index<f.getDataType().length-1&&!f.settings.loop||f.settings.loop)&&f.next())}),f.settings.keyboard&&t(window).on("keydown",function(t){t=t.keyCode,38==t?f.canScroll&&f.prev():40==t&&f.canScroll&&f.next()}),f.element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){f.canScroll=!0,f.settings.callback&&"function"===t.type(f.settings.callback)&&f.settings.callback.call(f)}),t(window).resize(function(){t(f.element).height(t(window).height()),t(f.sections).height(t(window).height()),t(f.section).height(t(window).height()),f.switchLen=f.switchLength(),f._Layout(f.switchLen)})},_pageScroll:function(e,n,s){var o=this,c=o.selectors.active.substring(1);e=n?o.direction?{top:this.switchLen*e+s,left:0}:{top:0,left:this.switchLen*e+s}:o.direction?{top:this.switchLen*e,left:0}:{top:0,left:this.switchLen*e},o.canScroll=!1,o.index===o.pgCount-1?t(".mousetip").hide():t(".mousetip").show(),t(o.sections).children().is(":animated")||(i?(t(o.sections).children().css(i+"transition","all "+o.settings.duration+"ms "+o.settings.easing),e=o.direction?"translate3d(0,-"+e.top+"px,0)":"translate3d(-"+e.left+"px,0,0)",t(o.sections).children().css(i+"transform",e)):(e=o.direction?{top:-e.top}:{left:-e.left},t(o.sections).children().animate(e,o.settings.duration,function(){o.canScroll=!0,o.settings.callback&&"function"===t.type(o.settings.callback)&&o.settings.callback.call(o)}))),t(o.selectors.page).find("li").eq(o.index).addClass(c).siblings().removeClass(c)}},e}()}(jQuery);