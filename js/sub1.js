$(function(){
  //윈도우 스크롤시 애니메이션
  $(window).scroll(function(){
    var winScrollT =$(window).scrollTop();
    var winH = $(window).height()/2;
    var mainScollT = winScrollT + winH;

    var sec1 = $("#intro_section_1").offset().top;
    var sec2 = $("#intro_section_2").offset().top;
    var sec3 = $("#intro_section_3").offset().top;
    var foot = $("#footer").offset().top;

    if(mainScollT >= sec1 && mainScollT <= sec2){
      $("#intro_section_1 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_1>.inner>p").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_1 img").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_1 .wrap1").delay(600).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_1 .wrap2").delay(800).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= sec2 && mainScollT <= sec3){
      $("#intro_section_2 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_2>.inner>img").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_2 .img_list").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#intro_section_2 .pro_wrap").delay(600).animate({"top":"0", "opacity":"1"},600,"swing");
    }

  });
});
