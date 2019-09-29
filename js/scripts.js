$(document).ready(function(){

  $("#design-pic").click(function(){
  $("#design-pic").hide(1500).toggle();
     $(".design-a").slideDown();

  });
   $(".design-a").click(function(){
     $("#design-pic").slideDown();
     $(".design-a").hide();
   });

   $("#develop-pic").click(function(){
    $("#develop-pic").hide(1500).toggle();
    $(".develop-a").slideDown();
  });
  $(".develop-a").click(function(){
    $("#develop-pic").slideDown();
    $(".develop-a").hide();
  });

  $("#prod-pic").click(function(){
     $("#prod-pic").hide(1500).toggle();
     $(".prod-a").slideDown();
   });

   $(".prod-a").click(function(){
    $("#prod-pic").slideDown();
    $(".prod-a").hide();
  });

 });


 $(document).ready(function(){
   $(".pro1").mouseover(function(){
     $(".project1").show();
   }).mouseout(function(){
     $(".project1").hide();
   });
 });

 $(document).ready(function(){
  $(".pro2").mouseover(function(){
    $(".project2").show();
  }).mouseout(function(){
    $(".project2").hide();
  });
});

$(document).ready(function(){
  $(".pro3").mouseover(function(){
    $(".project3").show();
  }).mouseout(function(){
    $(".project3").hide();
  });
});

$(document).ready(function(){
  $(".pro4").mouseover(function(){
    $(".project4").show();
  }).mouseout(function(){
    $(".project4").hide();
  });
});

$(document).ready(function(){
  $(".pro5").mouseover(function(){
    $(".project5").show();
  }).mouseout(function(){
    $(".project5").hide();
  });
});


$(document).ready(function(){
  $(".pro6").mouseover(function(){
    $(".project6").show();
  }).mouseout(function(){
    $(".project6").hide();
  });
});

$(document).ready(function(){
  $(".pro7").mouseover(function(){
    $(".project7").show();
  }).mouseout(function(){
    $(".project7").hide();
  });
});


$(document).ready(function(){
  $(".pro8").mouseover(function(){
    $(".project8").show();
  }).mouseout(function(){
    $(".project8").hide();
  });
});