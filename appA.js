//text field transition
nbutton = this.document.getElementById("not");
sub = this.document.getElementById("sub");
e = this.document.getElementById("e");

//////////////////////////////////////////////////////////////////////////////// loader display = none
wrapper = this.document.getElementById("load-wrapper")
window.addEventListener("load", function(){
  setTimeout(() => {
    wrapper.style.opacity = "0%";
  setTimeout(() => {
    wrapper.style.display = "none";
  }, 2000);
  }, 2000);
  
}) 


function notify(){
    nbutton.style.width = "20vw";
    nbutton.style.marginLeft = "40vw";
    nbutton.style.backgroundColor = "white";

    sub.style.opacity = "100%";
    setTimeout(() => {
        e.style.zIndex = "1";
        e.style.opacity = "100%";
        nbutton.style.opacity = "0%";
    }, 600); 
}

menub = document.getElementById("menub");
function movem1() {
  menub.style.left = -48 + "vw";
}

function movem2() {
  menub.style.left = -3.5 + "vw";
}