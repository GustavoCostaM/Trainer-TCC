function slide1(){
    document.getElementById(slideImg1).src="1.bmp";
    setTimeout("slide2()", 3000)
    }
    
    function slide2(){
    document.getElementById(slideImg2).src="2.bmp";
    setTimeout("slide3()", 3000)
    }
    
    function slide3(){
    document.getElementById(slideImg3).src="3.bmp";
    setTimeout("slide1()", 3000)
    }