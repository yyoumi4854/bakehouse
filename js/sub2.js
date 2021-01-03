$(function(){
  //윈도우 스크롤시 애니메이션
  $(window).scroll(function(){
    var winScrollT =$(window).scrollTop();
    var winH = $(window).height()/2;
    var mainScollT = winScrollT + winH;

    var sec1 = $("#event_section_1").offset().top;
    var sec2 = $("#event_section_2").offset().top;
    var sec3 = $("#event_section_3").offset().top;
    var foot = $("#footer").offset().top;

    if(mainScollT >= sec1 && mainScollT <= sec2){
      $("#event_section_1 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_1 .method").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_1 .tag").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= sec2 && mainScollT <= sec3){
      $("#event_section_2 h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_2>.inner>img").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_2 .txt_wrap").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
    }else if(mainScollT >= sec3 && mainScollT <= foot){
      $("#event_section_3 .inner h2").animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_3 .gift1_wrap").delay(200).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_3 .gift2").delay(400).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_3 .gift3").delay(600).animate({"top":"0", "opacity":"1"},600,"swing");
      $("#event_section_3 .all_gift").delay(800).animate({"top":"0", "opacity":"1"},600,"swing");
    }
  });
});
