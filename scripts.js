// scripts.js

$(document).ready(function() {
    $('#menu-button').on('click', function() {
        $('#side-menu').toggleClass('visible');
        $('#menu-button').toggleClass('menu-open');
    });
});

jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'right': '0px' //右から0pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'right': '-50px' //右から-50pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
      return false;
    });
  });
  
  $(function(){
    $('a[href^="#"]').click(function(){
      var time = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" ? 'html' : href);
      var distance = target.offset().top;
      $("html, body").animate({scrollTop:distance}, time, "swing");
      return false;
    });
  });