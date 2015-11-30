$(document).ready(function(){
    
    //$(".circle1").one("click",function(){
        if ($.browser.mozilla) {
            $("#2").animate({position: "relative",left: '175px', bottom: '-=25', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},"slow");
        $("#3").animate({position: "relative",right: '175px', bottom: '-=25', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#4").animate({position: "relative",right: '350px', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#5").animate({position: "relative",right: '175px', bottom: '-=625', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#6").animate({position: "relative",left: '175px',bottom: '-=625', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#7").animate({position: "relative",left: '350px', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        }
        else {
        $("#2").animate({position: "relative",left: '175px', bottom: '+=300', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},750);
        $("#3").animate({position: "relative",right: '175px', bottom: '+=300', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},500);
        $("#4").animate({position: "relative",right: '350px', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},1750);
        $("#5").animate({position: "relative",right: '175px', bottom: '-=300', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},1500);
        $("#6").animate({position: "relative",left: '175px',bottom: '-=300', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},1250);
        $("#7").animate({position: "relative",left: '350px', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'},1000);
        }
        
document.getElementById("2").style.visibility='visible';  
document.getElementById("3").style.visibility='visible'; 
        document.getElementById("4").style.visibility='visible';
    document.getElementById("5").style.visibility='visible';
        document.getElementById("6").style.visibility='visible';
document.getElementById("7").style.visibility='visible';
        
    //}); 
        
    
    $("#resumelogo").click(function(){
        window.open("Resume.pdf");
    });
    
    $("#jianlilogo").click(function(){
        window.open("简历.pdf");
    });
    
    $("#4").click(function(){
        window.open("http://github.com/lizzyaustad");
    });
    
    $("#5").click(function(){
        window.open("http://linkedin.com/in/lizzyaustad");
    });
    
    $("#6").click(function(){
        window.open("http://www.facebook.com/lizzyaustad");
    });
            
    
});