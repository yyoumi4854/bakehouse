$(function(){
  //데스크탑 gnb
  $("#gnb li").each(function(index){
    $(this).mouseenter(function(){
      $("#gnb li").eq(index).addClass("on");
    });
    $(this).mouseleave(function(){
      $("#gnb li").eq(index).removeClass("on");
    });
  });

  //모바일 gnb
  var isMgnb = false;
  $(".btn_all").click(function(){
    if(isMgnb==false){
      $(".m_menu_area").animate({"left":"0"},300, "easeInCubic");
      isMgnb = true;
    }
  });
  $(".btn_close").click(function(){
    if(isMgnb==true){
      $(".m_menu_area").animate({"left":"-50%"},300, "easeInCubic");
      isMgnb = false;
    }
  });
});
