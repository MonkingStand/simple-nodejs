!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Swiper=e()}(this,function(){"use strict";function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}function f(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach(function(t){return!e.classList.contains(t)&&e.classList.add(t)})}function p(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach(function(t){return e.classList.contains(t)&&e.classList.remove(t)})}function h(t,e,i,s){t.addEventListener(e,i,s)}function a(t,e,i){t.removeEventListener(e,i)}function n(t,e){t.removeAttribute(e)}function u(t,e){var i,s=getComputedStyle(t).transform.replace(/[a-z]|\(|\)|\s/g,"").split(",").map(parseFloat);return 16===s.length?i=s.slice(12,14):6===s.length&&(i=s.slice(4,6)),i[e?0:1]||0}var o=["INPUT","SELECT","OPTION","TEXTAREA","BUTTON","VIDEO"];return function(){function s(t,e){e=s.formatConfig(e),t="string"==typeof t?document.body.querySelector(t):t,this.index=0,this.scrolling=!1,this.config=e,this.supportTouch=Boolean("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||window.DocumentTouch&&document instanceof DocumentTouch),this.$el=t,this.$wrapper=t.querySelector("."+e.wrapperClass),this.eventHub={},this.initPlugins(e.plugins||s.plugins),this.emit("before-init",this),this.initListener(),this.initTouchStatus(),this.initWheelStatus(),this.update(),this.attachListener(),this.emit("after-init",this),this.scroll(e.initialSlide)}s.use=function(t){s.plugins=t},s.formatConfig=function(t){void 0===t&&(t={});return t.mousewheel&&(t.mousewheel=e({invert:!1,sensitivity:1},t.mousewheel)),e({},{direction:"horizontal",touchRatio:1,touchAngle:45,longSwipesRatio:.5,initialSlide:0,loop:!1,mousewheel:!1,pagination:!1,passiveListeners:!0,resistance:!0,resistanceRatio:.85,speed:300,longSwipesMs:300,intermittent:0,spaceBetween:0,slidesPerView:1,centeredSlides:!1,slidePrevClass:"swiper-slide-prev",slideNextClass:"swiper-slide-next",slideActiveClass:"swiper-slide-active",slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchMoveStopPropagation:!1,excludeElements:[]},{},t)};var t=s.prototype;return t.initPlugins=function(t){var e=this;(t||[]).forEach(function(t){return t(e)})},t.on=function(t,e){var i=this.eventHub;i[t]?i[t].push(e):i[t]=[e]},t.off=function(t,e){var i=this.eventHub;if(i[t]){var s=i[t].indexOf(e);-1<s&&i[t].splice(s,1)}},t.emit=function(t){for(var e=arguments.length,i=new Array(1<e?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];var n=this.eventHub;n[t]&&n[t].forEach(function(t){return t.apply(void 0,i)})},t.initListener=function(){var r=this,h=this.$wrapper,l=this.config,c=this.supportTouch;this.listeners={onTouchStart:function(t){for(var e=0;e<l.excludeElements.length;e++)if(l.excludeElements[e].contains(t.target))return;r.initTouchStatus();var i=r.touchStatus,s=l.touchStartPreventDefault&&-1===o.indexOf(t.target.nodeName)||l.touchStartForcePreventDefault;i.startOffset=u(h,r.isHorizontal),r.transform(i.startOffset),h.style.transition="none",i.isTouchStart=!0,i.touchStartTime=Date.now(),i.touchTracks.push({x:c?t.touches[0].pageX:t.pageX,y:c?t.touches[0].pageY:t.pageY}),s&&!l.passiveListeners&&t.preventDefault()},onTouchMove:function(t){var e=r.touchStatus,i=e.touchTracks;if(e.isTouchStart&&!e.isScrolling){l.touchMoveStopPropagation&&t.stopPropagation();var s={x:c?t.touches[0].pageX:t.pageX,y:c?t.touches[0].pageY:t.pageY},n={x:s.x-i[i.length-1].x,y:s.y-i[i.length-1].y};i.push(s);var o=180*Math.atan2(Math.abs(n.y),Math.abs(n.x))/Math.PI,a=0;r.isHorizontal?o<l.touchAngle||e.isTouching?(e.isTouching=!0,a=n.x,t.preventDefault()):e.isScrolling=!0:90-o<l.touchAngle||e.isTouching?(e.isTouching=!0,a=n.y,t.preventDefault()):e.isScrolling=!0,r.scrollPixel(a*l.touchRatio)}},onTouchEnd:function(){if(r.touchStatus.isTouchStart){var t=r.index,e=r.boxSize,i=r.touchStatus,s=Date.now()-i.touchStartTime,n=u(h,r.isHorizontal)-i.startOffset,o=Math.ceil(Math.abs(n)/e),a=Math.ceil(Math.abs(n)/e-l.longSwipesRatio);h.style.transition="transform ease "+l.speed+"ms",s>r.config.longSwipesMs?r.scroll(r.index+a*(0<n?-1:1),!0):r.scroll(0<n?t-o:t+o,!0),r.initTouchStatus()}},onWheel:function(t){var e=r.index,i=r.wheelStatus,s=t.deltaY;(0<Math.abs(s)-Math.abs(i.wheelDelta)||!i.wheeling)&&Math.abs(s)>=l.mousewheel.sensitivity&&r.scroll(0<s?e-1:e+1),i.wheelDelta=s,clearTimeout(i.wheelingTimer),i.wheeling=!0,i.wheelingTimer=setTimeout(function(){r.initWheelStatus()},200),t.preventDefault(),t.stopPropagation()}}},t.attachListener=function(){var t=this.$el,e=this.config,i=this.supportTouch,s=this.listeners,n=s.onTouchStart,o=s.onTouchMove,a=s.onTouchEnd,r=s.onWheel;i?(h(t,"touchstart",n,{passive:e.passiveListeners,capture:!1}),h(t,"touchmove",o),h(t,"touchend",a),h(t,"touchcancel",a)):(h(t,"mousedown",n),h(document,"mousemove",o),h(document,"mouseup",a)),e.mousewheel&&h(t,"wheel",r)},t.detachListener=function(){var t=this.$el,e=this.listeners,i=e.onTouchStart,s=e.onTouchMove,n=e.onTouchEnd,o=e.onWheel;a(t,"touchstart",i),a(t,"touchmove",s),a(t,"touchend",n),a(t,"touchcancel",n),a(t,"mousedown",i),a(document,"mousemove",s),a(document,"mouseup",n),a(t,"wheel",o)},t.transform=function(t){this.$wrapper.style.transform=this.isHorizontal?"translate3d("+t+"px, 0, 0)":"translate3d(0, "+t+"px, 0)"},t.scroll=function(i,t){var e=this;if(void 0===i&&(i=0),void 0===t&&(t=!1),!this.scrolling||t){var s=this.config,n=this.minIndex,o=this.maxIndex,a=this.minTransform,r=this.maxTransform,h=i*this.boxSize+this.baseTransform;i=i<n?n:o<i?o:i,this.emit("before-slide",this.index,this,i),this.scrolling=!0,this.transform(-(r<h?r:h<a?a:h));var l=this.$list[i],c=this.$list[i-1],u=this.$list[i+1];this.$list.forEach(function(t,e){p(t,[s.slidePrevClass,s.slideNextClass,s.slideActiveClass]),e===i&&f(l,s.slideActiveClass),e===i-1&&f(c,s.slidePrevClass),e===i+1&&f(u,s.slideNextClass)}),this.index=i,setTimeout(function(){e.scrolling=!1,e.emit("after-slide",i,e)},this.config.speed+this.config.intermittent)}},t.scrollPixel=function(t){var e=t.toExponential().split("e")[1],i=e<=0?Math.pow(10,-(e-1)):1,s=u(this.$wrapper,this.isHorizontal);this.config.resistance&&(0<t&&0<=s-this.minTransform?t-=Math.pow(t*i,this.config.resistanceRatio)/i:t<0&&s+this.maxTransform<=0&&(t+=Math.pow(-t*i,this.config.resistanceRatio)/i)),this.transform(s+t)},t.initTouchStatus=function(){this.touchStatus={touchTracks:[],startOffset:0,touchStartTime:0,isTouchStart:!1,isScrolling:!1,isTouching:!1}},t.initWheelStatus=function(){this.wheelStatus={wheeling:!1,wheelDelta:0,wheelingTimer:!1}},t.update=function(){var e=this,t=this.$el,i=this.$wrapper,s=this.index,n=this.config,o=i.style,a="horizontal"===n.direction;t.style.overflow="hidden",this.isHorizontal=a,this.$list=[].slice.call(t.getElementsByClassName(n.slideClass)),this.minIndex=0,this.maxIndex=this.$list.length-(n.centeredSlides?1:Math.ceil(n.slidesPerView)),this.viewSize=a?t.offsetWidth:t.offsetHeight,this.slideSize=(this.viewSize-Math.ceil(n.slidesPerView-1)*n.spaceBetween)/n.slidesPerView,this.boxSize=this.slideSize+n.spaceBetween,this.baseTransform=n.centeredSlides?(this.slideSize-this.viewSize)/2:0,this.minTransform=-this.baseTransform,this.maxTransform=this.boxSize*this.$list.length-n.spaceBetween-this.viewSize-this.baseTransform,this.$list.forEach(function(t){t.style[a?"width":"height"]=e.slideSize+"px",t.style[a?"margin-right":"margin-bottom"]=n.spaceBetween+"px"}),o.willChange="transform",o.transition="transform ease "+n.speed+"ms",o[a?"width":"height"]=this.boxSize*this.$list.length+"px",o.display="flex",o.flexDirection=a?"row":"column",this.transform(-s*this.boxSize)},t.destroy=function(){var t=this.$el,e=this.$wrapper,i=this.config.slideActiveClass;this.emit("before-destroy",this),this.$list.forEach(function(t){n(t,"style"),p(t,[i])}),n(e,"style"),n(t,"style"),this.detachListener(),this.emit("after-destroy",this),this.$el=null,this.$list=[],this.$wrapper=null,this.eventHub={},this.config=s.formatConfig()},s}()});

// 判断用户是否提交了签到
var submitTag = document.URL.indexOf('checked=true') !== -1 || haveCheckedIn;
var $checkedDialog = document.getElementById('checkedDialog');
var $scrollDownTips = document.getElementsByClassName('scroll-down-tips')[0];
if (submitTag) {
  $checkedDialog.className = 'checked-tips-dialog active';
  $scrollDownTips.className = 'scroll-down-tips hidden';
}
// 提交表单
var $checkedFormTitle = document.getElementsByClassName('check-form-title')[0];
var $submitBtn = document.getElementById('submitBtn');
var $checkedForm = document.getElementById('checkedForm');
var $inputItemArr = $checkedForm.getElementsByClassName('form-input');
$checkedFormTitle.className = 'check-form-title';
$checkedForm.className = '';
$submitBtn.onclick = function() {
  // 校验字段数据
  for (let i = 0; i < $inputItemArr.length; i++) {
    var $formInputItem = $inputItemArr[i].parentNode.parentNode;
    var inputType = $inputItemArr[i].getAttribute('name');
    var inputVal = $inputItemArr[i].value;

    switch (inputType) {
      case 'mobile':
        const mobileReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (!mobileReg.test(inputVal.trim())) {
          $formInputItem.className = 'form-item error';
          return;
        }
      default:
        if (inputType !== 'congratulation' && !inputVal.trim()) {
          $formInputItem.className = 'form-item error';
          return;
        }
    }
  }

  $checkedForm.submit();
};
for (let i = 0; i < $inputItemArr.length; i++) {
  $inputItemArr[i].onfocus = function(evt) {
    $inputItem = evt.target;

    $inputItem.parentNode.parentNode.className = 'form-item';
  };
}

new Swiper('#container', {
  speed: 300,
  cssMode: true,
  direction: 'vertical',
  wrapperClass: 'swiper-wrapper',
  spaceBetween: 0,
  mousewheel: true,
});
