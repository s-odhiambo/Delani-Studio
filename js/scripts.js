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

