function toggleDesign() {
    var x = document.getElementById("design");
    var y = document.getElementById("designshow");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block"; 
    } else {
        y.style.display = "none";
        x.style.display = "block";  
    } 
} 
function toggleDevelopment() { 
    var x = document.getElementById("development");
    var y = document.getElementById("developmentshow");
    if (x.style.display === "block") {
        x.style.display = "none";  
        y.style.display = "block"; 
    } else {
        y.style.display = "none";
        x.style.display = "block";
    }
} 
function toggleProductManagement() {
    var x = document.getElementById("productmanagement");
    var y = document.getElementById("productmanagementshow");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        y.style.display = "none";
        x.style.display = "block";
    }
}
$(document).ready(function(){
    $("#portfolio").hover(function(){
      $(this).css("background-color", "lightgreen");
      }, function(){
      $(this).css("background-color", "white");
    });
    $("#portfolio1").hover(function(){
        $(this).css("background-color", "lightgreen");
        }, function(){
        $(this).css("background-color", "white");
    });
    $("#portfolio2").hover(function(){
    $(this).css("background-color", "lightgreen");
    }, function(){
    $(this).css("background-color", "white");
    });
    $("#portfolio3").hover(function(){
    $(this).css("background-color", "lightgreen");
    }, function(){
    $(this).css("background-color", "white");
    });
    $("#portfolio4").hover(function(){
    $(this).css("background-color", "lightgreen");
    }, function(){
    $(this).css("background-color", "white");
    });
    $("#portfolio5").hover(function(){
    $(this).css("background-color", "lightgreen");
    }, function(){
    $(this).css("background-color", "white");
    });
    $("#portfolio6").hover(function(){
    $(this).css("background-color", "lightgreen");
    }, function(){
    $(this).css("background-color", "white");
    });
    $("#portfolio7").hover(function(){
    $(this).css("background-color", "lightgreen");
    }, function(){
    $(this).css("background-color", "white");
    });
  });
