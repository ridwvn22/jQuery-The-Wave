console.log("test");
$( document ).ready(function(){
    //console.log("ready");
//This will grab the height of the window of the browser
  
$("#div1").animate({bottom: "400px", top: "400px"}, "5.3");
$("#div2").animate({bottom: "0px", top: "0px"}, "5.3");
$("#div3").animate({bottom: "400px", top: "400px"}, "5.3");
$("#div4").animate({bottom: "0px", top: "0px"}, "5.3");
$("#div5").animate({bottom: "400px", top: "400px"}, "5.3");
$("#div6").animate({bottom: "0px", top: "0px"}, "5.3");        
$("#div7").animate({bottom: "400px", top: "400px"}, "5.3");
$("#div8").animate({bottom: "0px", top: "0px"}, "5.3");
$("#window").each(function(){
});    
$("#div1").animate({bottom: "0px", top: "0px"}, "5.3");
$("#div2").animate({bottom: "400px", top: "400px"}, "5.3");
$("#div3").animate({bottom: "0px", top: "0px"}, "5.3");
$("#div4").animate({bottom: "400px", top: "400px"}, "5.3");
$("#div5").animate({bottom: "0px", top: "0px"}, "5.3");
$("#div6").animate({bottom: "400px", top: "400px"}, "5.3");        
$("#div7").animate({bottom: "0px", top: "0px"}, "5.3");
$("#div8").animate({bottom: "400px", top: "400px"}, "5.3");
var HEIGHT = $(window).height();
$("div").each(function(){
  var timer = setInterval(move, 5.3);
});
});
