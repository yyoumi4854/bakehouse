//메인페이지용
//bxslider, swiper, slick slider, owlcarousel 직접
//윈도우 스크롤시 애니메이션
//마우스 호버 클래스 추가/제 호버이벤트 추가
$(function(){
  var vwH = $('.bx-viewport').height();
  $(window).on("load resize",function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      auto: true,
      pager: true,
      speed: 500,
      prevSelector: '#btn_prev',
      nextSelector: '#btn_next',
      prevText: '',
      nextText: ''
    });
    $('.bx-wrapper').css("height",vwH);
  });//window load resize

  //슬라이드 놓이
  // var pc_img = $(".main-visual .pc").height();
  // var m_img = $(".main-visual .mobile").height();
  // var win_w = $(window).width();
  //
  // console.log(pc_img);
  // console.log(m_img);
  // console.log(win_w);
  // $(".main_visual .bx-viewport").css("height",pc_img);
  //
  // if(win_w > 758){
  //   $(".main_visual .bx-viewport").css("height",pc_img);
  // }else if(win_w <= 758){
  //   $(".main_visual .bx-viewport").css("height",m_img);
  // }

  //윈도우 스크롤시 애니메이션
  $(window).scroll(function(){
    var winScrollT = $(window).scrollTop(); //실제로 스크롤한 값
    var winH = $(window).height()/2; //실제로 스크롤한 값에 더해주는 값
    var mainScollT = winScrollT + winH;

    var sec1 = $("#section_1").offset().top;
    var foot = $("#footer").offset().top;

    //스크롤한 값이 1번 영역 위치보다 크고 2번 영역 위치보다 작을 때
    if(mainScollT >= sec1 && mainScollT <= foot){
      $("#section_1 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $("#section_1 img").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#section_1 .btn").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
    }
  });
});
