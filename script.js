$(document).ready(function(){
    $(".iframe_big").hide();
    $(".aj").children().hide();
    $(".iframe5").show();
    $(".iframe5").parent().show();
    

    $(".click_bar").click(function(){
        var x = $(this).parent().attr('class');
        x = x.substr(0, 7);
        $(".iframe_big").hide();
        $(".click_bar").hide();
        $(".click_bar").parent().hide();
        $(".aj").children("." + x).show();
        $(".aj").children("." + x).children().show();
        $(".center").children("." + x).css('display','block');
    });
    $(".search-btn").click(function(){
        var x = $(".search-txt").val();
        x = Number(x);
        if(x == 0){
            console.log("chi kareli");
        }else{
            $(".click_bar").hide();
            $(".click_bar").parent().hide();
            var object = "iframe" + String(x);
            console.log(object);
            $(".iframe_big").hide();
            $("." + object).show();
            $("." + object).children().show();
            $(".search-txt").val("");
        }
    });
    function call( result){
        $(".iframe_big").hide();
        var obj_div = $(".aj").children("." + result);
        $(".click_bar").hide();
        $(".click_bar").parent().hide();
        $(obj_div).show();
        $(obj_div).children().show();
    }
    $(".click_a").click(function(){
        var obj_class = $(this).attr("class");
        var result = obj_class.replace(" click_a", "");
        call(result);
    });
    $(".dropdown_header").click(function(){
        var obj_class = $(this).attr("class");
        var result = obj_class.replace("dropdown_header", "");
        call(result);
    }); 
});