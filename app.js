//////////////////////////////////////////////////////////////////////////////// accommodations slideshows

//RV arrows and pictures to shuffle through
arrowRVL = this.document.getElementById("arrowRVL");
arrowRVR = this.document.getElementById("arrowRVR");
RV1 = this.document.getElementById("RV1");
RV2 = this.document.getElementById("RV2");

//Cabin arrows and pictures to shuffle through
arrowCL = this.document.getElementById("arrowCL");
arrowCR = this.document.getElementById("arrowCR");
cabin1 = this.document.getElementById("cabin1");
cabin2 = this.document.getElementById("cabin2");

//Middle accommodation picture (Yurt)
two = document.getElementById("two");

//Gallery slideshow for cabin in accommodations using the arrows on picture
cabintf = true;
rvtf = true;
function slideshowRV() {
  if (rvtf == true) {
    RV1.style.display = "none";
    RV2.style.display = "block";
    rvtf = false;
  } else {
    RV1.style.display = "block";
    RV2.style.display = "none";
    rvtf = true;
  }
}
function slideshowCabin() {
  if (cabintf == true) {
    cabin1.style.display = "none";
    cabin2.style.display = "block";
    cabintf = false;
  } else {
    cabin1.style.display = "block";
    cabin2.style.display = "none";
    cabintf = true;
  }
}

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

//////////////////////////////////////////////////////////////////////////////// "Register Your Interest" button (Scroll into view)
const ryi = document.getElementById("RYI");
const ryi2 = document.getElementById("RYI2");
ryi.addEventListener("click", () => {
  let i = document.getElementById("four");
  i.scrollIntoView({ behavior: "smooth", block: "center" });
  
});
ryi2.addEventListener("click", () => {
    let i = document.getElementById("four2");
    i.scrollIntoView({ behavior: "smooth", block: "center" });
    console.log(i)
  });

//////////////////////////////////////////////////////////////////////////////// Read more button function to expand text underneath small overview text
const readMore = document.getElementById("read");
let ML = true;

function read() {
  if (ML == true) {
    readMore.innerHTML = "Read Less";
    ML = false;
  } else {
    readMore.innerHTML = "Read More";
    ML = true;
  }
}
//////////////////////////////////////////////////////////////////////////////// Top and bottom paralax effect and haunted house animation
const bground = document.getElementById("ScrollEffect");
const bground2 = document.getElementById("ScrollEffect2");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
window.addEventListener("scroll", function () {
  let offset2 = window.pageYOffset;
  bground.style.backgroundPositionY = offset2 * 0.3 + "px";
  bground2.style.backgroundPositionY = offset2 * 0.3 + "px";

  if (offset2 > 0 && offset2 < 257){
    c3.style.marginTop = 4.25 + (offset2*.22) + 2 + "vw";
  }
  if (offset2 > 150 && offset2 < 400){
    c2.style.marginTop = 0 + (offset2*.225) - 33.75 + "vw";
  }

  if (offset2 > 329 && offset2 < 595){
    c1.style.marginTop = 0 + (offset2*.2) - 69 + "vw";
  }
});

//////////////////////////////////////////////////////////////////////////////// Accommodations pictures srolling enlargement functionality
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  if (offset < 340) {
    RV1.style.width = 30 + "vw";
    RV1.style.marginLeft = 0 + "vw";
    RV1.style.marginTop = 3 + "vw";

    RV2.style.width = 30 + "vw";
    RV2.style.marginLeft = 0 + "vw";
    RV2.style.marginTop = 3 + "vw";

    two.style.width = 30 + "vw";
    two.style.marginLeft = 14 + "vw";
    two.style.marginTop = 14.5 + "vw";

    cabin1.style.width = 30 + "vw";
    cabin1.style.marginLeft = 0 + "vw";
    cabin1.style.marginTop = 15.5 + "vw";
    cabin2.style.width = 30 + "vw";
    cabin2.style.marginLeft = 0 + "vw";
    cabin2.style.marginTop = 15.5 + "vw";

    arrowRVL.style.display = "none";
    arrowRVR.style.display = "none";
    arrowCL.style.display = "none";
    arrowCR.style.display = "none";
  } else if (offset < 600) {
    arrowRVL.style.display = "block";
    arrowRVR.style.display = "block";

    arrowCL.style.display = "none";
    arrowCR.style.display = "none";

    RV1.style.width = 32 + "vw";
    RV1.style.marginLeft = -1 + "vw";
    RV1.style.marginTop = 2 + "vw";

    RV2.style.width = 32 + "vw";
    RV2.style.marginLeft = -1 + "vw";
    RV2.style.marginTop = 2 + "vw";

    two.style.width = 30 + "vw";
    two.style.marginLeft = 14 + "vw";
    two.style.marginTop = 14.5 + "vw";

    cabin1.style.width = 30 + "vw";
    cabin1.style.marginLeft = 0 + "vw";
    cabin1.style.marginTop = 15.5 + "vw";
    cabin2.style.width = 30 + "vw";
    cabin2.style.marginLeft = 0 + "vw";
    cabin2.style.marginTop = 15.5 + "vw";
  } else if (offset < 900) {
    arrowRVL.style.display = "none";
    arrowRVR.style.display = "none";

    arrowCL.style.display = "none";
    arrowCR.style.display = "none";

    RV1.style.width = 30 + "vw";
    RV1.style.marginLeft = 0 + "vw";
    RV1.style.marginTop = 3 + "vw";

    RV2.style.width = 30 + "vw";
    RV2.style.marginLeft = 0 + "vw";
    RV2.style.marginTop = 3 + "vw";

    two.style.width = 32 + "vw";
    two.style.marginLeft = 13 + "vw";
    two.style.marginTop = 13.5 + "vw";

    cabin1.style.width = 30 + "vw";
    cabin1.style.marginLeft = 0 + "vw";
    cabin1.style.marginTop = 15.5 + "vw";
    cabin2.style.width = 30 + "vw";
    cabin2.style.marginLeft = 0 + "vw";
    cabin2.style.marginTop = 15.5 + "vw";
  } else if (offset > 900 && offset < 1100) {
    arrowRVL.style.display = "none";
    arrowRVR.style.display = "none";

    arrowCL.style.display = "block";
    arrowCR.style.display = "block";

    RV1.style.width = 30 + "vw";
    RV1.style.marginLeft = 0 + "vw";
    RV1.style.marginTop = 3 + "vw";

    RV2.style.width = 30 + "vw";
    RV2.style.marginLeft = 0 + "vw";
    RV2.style.marginTop = 3 + "vw";

    two.style.width = 30 + "vw";
    two.style.marginLeft = 14 + "vw";
    two.style.marginTop = 14.5 + "vw";

    cabin1.style.width = 32 + "vw";
    cabin1.style.marginLeft = -1 + "vw";
    cabin1.style.marginTop = 14.5 + "vw";
    cabin2.style.width = 32 + "vw";
    cabin2.style.marginLeft = -1 + "vw";
    cabin2.style.marginTop = 14.5 + "vw";
  }
});

//////////////////////////////////////////////////////////////////////////////// Icons animation
const icons = [
  document.getElementById("bike"),
  document.getElementById("pool"),
  document.getElementById("paw"),
  document.getElementById("mic"),
  document.getElementById("store"),
  document.getElementById("golf"),
  document.getElementById("arcade"),
  document.getElementById("ball"),
  document.getElementById("pool2"),
  document.getElementById("paw2"),
  document.getElementById("mic2"),
  document.getElementById("store2"),
  document.getElementById("golf2"),
  document.getElementById("arcade2"),
  document.getElementById("ball2"),
  document.getElementById("bike2"),
];

clicked = false;
circle = document.getElementById("onec");
obje = null;
right = null;

//setting a hover effect on all icons
for (let i = 0; i < 16; i++) {
  icons[i].addEventListener("mouseover", (e) => {
    if (clicked == false) {
      right = e.target.dataset.right;
      circle.style.transitionDuration = "0s";
      circle.style.right = right;
      circle.style.top = e.target.dataset.top;
      console.log(e.target.dataset.top);
      setTimeout(() => {
        circle.style.transitionDuration = "1s";
        circle.style.opacity = "100%";
      }, 20);
    }
  });
  icons[i].addEventListener("mouseout", (e) => {
    if (clicked == false) {
      circle.style.opacity = "0%";
    }
  });
}

//starting the click animation on the icon being hovered over
function iconClick(obj) {
  obje = obj;
  if (clicked == false){
      clicked = true;
      for (i = 0; i<8;i++){
          if (icons[i] != obj){
              icons[i].style.zIndex = "1";

          }else{
              icons[i].style.zIndex = "3";
          }
          
      }
      document.getElementById("onec").style.zIndex = "2";
      
      
      setTimeout(() => {
          
          circle.style.width = "25vw";
          circle.style.height = "20.5vw";
          circle.style.right = "0vw";
          circle.style.top = "7.5vw";
          setTimeout(() => {
              obje.style.left = "1vw";
              obje.style.bottom = "22vw";
              document.getElementById("onen").style.zIndex = "2";
              document.getElementById("oned").style.zIndex = "2";
              document.getElementById("smallx").style.zIndex = "2";
              document.getElementById("onen").innerHTML = obje.dataset.title;
              document.getElementById("oned").innerHTML = obje.dataset.desc;

              setTimeout(iconClick2,500);
          }, 700);
      }, 300);

  }
}
//continuing the icon animation
function iconClick2() {
  document.getElementById("oned").style.opacity = "100%";
  document.getElementById("onen").style.opacity = "100%";
  document.getElementById("smallx").style.opacity = "100%";
}

//starting the closing animation when the "x" is clicked
function xer() {
  document.getElementById("onen").style.opacity = "0%";
  document.getElementById("oned").style.opacity = "0%";
  document.getElementById("smallx").style.opacity = "0%";
  setTimeout(() => {
      obje.style.left = obje.dataset.left;
      obje.style.bottom = obje.dataset.bottom;
      setTimeout(xer2,800);
  }, 800);
  
}
//continuing the closing animation
function xer2() {
    
  document.getElementById("onec").style.width = "6.7vw";
  document.getElementById("onec").style.height = "6.7vw";
  document.getElementById("onec").style.right = right;
  document.getElementById("onec").style.top = obje.dataset.top;
  setTimeout(() => {
      document.getElementById("onec").style.opacity = "0%";
      console.log("by");
      setTimeout(() => {
          for (i = 1; i<8;i++){
              icons[i].style.zIndex = "2";
          }
          icons[0].style.zIndex = "2"
          document.getElementById("onec").style.zIndex = "0";
          clicked = false;
      }, 20);
  }, 500); 

  
}

//////////////////////////////////////////////////////////////////////////////// slideshow bground
let bground3 = "url(../IMG/cabin2.png)";
let bground4 = "url(../IMG/campersun.jpg)";
let tf = true;

function slide() {
  if (tf == true) {
    bground.style.backgroundImage = bground3;
    tf = false;
  } else {
    bground.style.backgroundImage = bground4;
    tf = true;
  }
}


/////////////////////////////////////////////////////////////////////////////// Menu bar slide
menub = document.getElementById("menub");
function movem1() {
  menub.style.left = -48 + "vw";
}

function movem2() {
  menub.style.left = -3.5 + "vw";
}



/////////////////////////////////////////////////////////////////////////////// accom slide mobile
img1 = document.getElementById("rvpicsl");
img2 = document.getElementById("cabinpicsl");
img3 = document.getElementById("yurtpicsl");

desc1 = document.getElementById("descofrv");
desc2 = document.getElementById("descofcabin");
desc3 = document.getElementById("descofyurt");

t1 = document.getElementById("titleofrv");
t2 = document.getElementById("titleofcabin");
t3 = document.getElementById("titleofyurt");


state = 0;
function rightsl(){
  if(state==0){
    state += 1;
    img1.style.marginLeft = -80 + "vw";
    img3.style.marginLeft = 3.95 + "vw";

    desc1.style.marginLeft = -80 + "vw";
    desc3.style.marginLeft = 3.95 + "vw";

    t1.style.marginLeft = -80 + "vw";
    t3.style.marginLeft = 3.95 + "vw";
    
    console.log(state);

  }
  if(state == -1){
    img1.style.marginLeft = 3.95 + "vw";
    img2.style.marginLeft = -80 + "vw";
    desc1.style.marginLeft = 3.95 + "vw";
    desc2.style.marginLeft = -80 + "vw";
    t1.style.marginLeft = 3.95 + "vw";
    t2.style.marginLeft = -80 + "vw";
    state += 1;
    console.log(state);
  }
}
function leftsl(){
  if(state==0){
    state += -1;
    img1.style.marginLeft = 80 + "vw";
    img2.style.marginLeft = 3.95 + "vw";
    desc1.style.marginLeft = 80 + "vw";
    desc2.style.marginLeft = 3.95 + "vw";
    t1.style.marginLeft = 80 + "vw";
    t2.style.marginLeft = 3.95 + "vw";
    console.log(state);
  }
  if(state == 1){
    state += -1;
    img1.style.marginLeft = 3.95 + "vw";
    img3.style.marginLeft = 80 + "vw";
    desc1.style.marginLeft = 3.95 + "vw";
    desc3.style.marginLeft = 80 + "vw";
    t1.style.marginLeft = 3.95 + "vw";
    t3.style.marginLeft = 80 + "vw";
    console.log(state);
  }

}











//starting the click animation on the icon being hovered over
function iconClickm(obj) {
  obje = obj;
  if (clicked == false) {
    clicked = true;
    for (i = 0; i < 16; i++) {
      if (icons[i] != obj) {
        icons[i].style.zIndex = "1";
      } else {
        icons[i].style.zIndex = "3";
      }
    }
    document.getElementById("onec").style.zIndex = "2";

    setTimeout(() => {
      circle.style.width = "45vw";
      circle.style.height = "40vw";
      circle.style.right = "0vw";
      circle.style.top = "10vw";
      setTimeout(() => {
        obje.style.left = "2vw";
        obje.style.bottom = "15vw";
        document.getElementById("onen").style.zIndex = "2";
        document.getElementById("oned").style.zIndex = "2";
        document.getElementById("smallx2").style.zIndex = "2";
        document.getElementById("onen").innerHTML = obje.dataset.title;
        document.getElementById("oned").innerHTML = obje.dataset.desc;

        setTimeout(iconClick2m, 500);
      }, 700);
    }, 300);
  }
}
//continuing the icon animation
function iconClick2m() {
  document.getElementById("oned").style.opacity = "100%";
  document.getElementById("onen").style.opacity = "100%";
  document.getElementById("smallx2").style.opacity = "100%";
}

//starting the closing animation when the "x" is clicked
function xerm() {
  document.getElementById("onen").style.opacity = "0%";
  document.getElementById("oned").style.opacity = "0%";
  document.getElementById("smallx2").style.opacity = "0%";
  setTimeout(() => {
    obje.style.left = obje.dataset.left;
    obje.style.bottom = obje.dataset.bottom;
    setTimeout(xer2m, 800);
  }, 800);
}
//continuing the closing animation
function xer2m() {
  document.getElementById("onec").style.width = "11.5vw";
  document.getElementById("onec").style.height = "11.5vw";
  document.getElementById("onec").style.right = right;
  document.getElementById("onec").style.top = obje.dataset.top;

  setTimeout(() => {
    document.getElementById("onec").style.display = "0%";
    console.log("by");
    setTimeout(() => {
      for (i = 1; i < 8; i++) {
        icons[i].style.zIndex = "2";
      }
      icons[0].style.zIndex = "2";
      document.getElementById("onec").style.zIndex = "0";
      clicked = false;
    }, 20);
  }, 500);
}