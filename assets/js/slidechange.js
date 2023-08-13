let imgarr=["dp2.jpg","dp3.jpg","dp1.jpeg"];
var mainimg=document.getElementById("bitmoji-div");
function slideswitcher(number){
 mainimg.style.backgroundImage="url('assets/img/"+imgarr[number]+"')";
}