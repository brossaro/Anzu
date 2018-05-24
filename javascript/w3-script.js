// Side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.textAlign = "center";
    x.style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var activebtn = document.getElementsByClassName("testbtn");
    for (i = 0; i < x.length; i++) {
        activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
}

// Accordions
function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// Slideshows
function plusDivs(n) {
    slideIndex = slideIndex + n;
    showDivs(slideIndex);
}

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

// Progress Bars
function move() {
    var elem = document.getElementById("myBar");   
    var width = 5;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
        }
    }
}

// Include HTML
function includeHTML() {    
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                    /*make an HTTP request using the attribute value as the file name:*/
                    xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                            if (this.readyState == 4) {
                                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                                /*remove the attribute, and call this function once more:*/
                                elmnt.removeAttribute("w3-include-html");
                                includeHTML();
                                }
                    }
                    xhttp.open("GET", file, true);
                    xhttp.send();
                    /*exit the function:*/
                    return;
            }
    }
}

includeHTML(); 
/*setTimeout(function() {
$('.main-logo').hover(function () {
    $(".svg-logo").attr()("src", "images/compass(5)");
  },
    function () {
        $(".svg-logo").attr("src", "images/compass(4).svg");
    });
}, 1000);*/

