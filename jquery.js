$(document).ready(function(){
    $(".circle1").click(function(){
        $("#2").animate({left: '200px',height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#3").animate({right: '200px',height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#4").animate({right: '50px', bottom: '-=20',height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#5").animate({right: '100px', bottom: '-=200', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#6").animate({right: '50px',bottom: '-=200', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#7").animate({left: '200px',bottom: '+=150', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
    }); 
    
    $("#2").click(function(){
        $("#2").animate({height: '50px', width: '50px', padding: '50px'}, "slow");
        $("#2").animate({fontSize: '1.5em'},"slow");
    });
    
    $("#3").click(function(){
        $("#2").animate({bottom: '-=200'});
        $("#3").animate({bottom: '-=200'});
        $("#4").animate({bottom: '-=200'});
        $("#5").animate({bottom: '-=200'});
        $("#6").animate({bottom: '-=200'});
        $("#7").animate({bottom: '-=200'});
        $(".circle1").animate({bottom: '-=400'});
    });
    
    $("#4").click(function(){
        $("#4").animate({height: '50px', width: '50px', padding: '50px'}, "slow");
        $("#4").animate({fontSize: '1.5em'},"slow");
    });
    
    $("#5").click(function(){
        $("#5").animate({height: '50px', width: '50px', padding: '50px'}, "slow");
        $("#5").animate({fontSize: '1.5em'},"slow");
    });
    
    $("#6").click(function(){
        $("#6").animate({height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
    });
});