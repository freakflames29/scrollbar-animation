$(window).scroll(function () {

    var scrollbar=$(window).scrollTop();
   let dh=$(document).height();
  let  wh=$(window).height();
   let  scrollparcent=(scrollbar/(dh-wh))*100;
    $("#pregressBar").css("height",scrollparcent+"%");






  });