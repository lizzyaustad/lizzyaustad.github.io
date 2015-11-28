$(document).ready(function(){
    $(".circle1").one("click",function(){
        $("#2").animate({left: '200px',height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#3").animate({right: '200px',height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#4").animate({right: '50px', bottom: '+=5',height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#5").animate({right: '100px', bottom: '-=175', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#6").animate({right: '50px',bottom: '-=175', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
        $("#7").animate({left: '200px',bottom: '+=175', height: '50px', width: '50px', padding: '50px', fontSize: '1.5em'});
document.getElementById("resumelogo").style.visibility='visible';  
document.getElementById("projectlogo").style.visibility='visible';        document.getElementById("fblogo").style.visibility='visible';
    document.getElementById("githublogo").style.visibility='visible';
        document.getElementById("linkedinlogo").style.visibility='visible';
document.getElementById("email").style.visibility='visible';
        document.getElementById("goback").style.visibility='visible';
    }); 
    
    $("#2").click(function(){
        window.open("Resume.pdf");
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