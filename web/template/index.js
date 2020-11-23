var $main = document.getElementById('main');
var $container = document.getElementById('container');
// 初始化重置滚动条位置
$main.scrollTo(0, 0);
// 监听滚动事件
var prev = 0;
var current= $main.scrollTop;
var scrolling = false;
function slideUp() {
  // do nothing
}
function slideDown() {
  $container.className = 'container check-in';

  setTimeout(function() {
    $container.className = 'container';

    $main.scrollTo(0, window.screen.height);
  }, 500);
}
var $scrollDownTips = document.getElementById('scrollDownTips');
$main.onscroll = function() {
  if ($main.scrollTop < window.screen.height * 0.3) {
    $scrollDownTips.className = 'scroll-down-tips';
  } else {
    $scrollDownTips.className = 'scroll-down-tips hidden';
  }

  if (scrolling) return;

  current = $main.scrollTop;

  if (current > prev) {

    scrolling = true;

    slideDown()
  } else {
      slideUp();
  }
  prev = current;
};
// 判断用户是否提交了签到
var submitTag = document.URL.indexOf('checked=true') !== -1;
var $checkedDialog = document.getElementById('checkedDialog');
if (submitTag) {
  $checkedDialog.className = 'checked-tips-dialog active';
  $scrollDownTips.className = 'scroll-down-tips hidden';
}
// 提交表单
var $submitBtn = document.getElementById('submitBtn');
var $checkedForm = document.getElementById('checkedForm');
var $inputItemArr = $checkedForm.getElementsByClassName('form-input');
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
