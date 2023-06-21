const $cursor = document.querySelector(".cursorcircle");
const $hoverlink = document.querySelectorAll("a");


document.body.addEventListener("mousemove", onMouseMove);

for (let i = 0; i < $hoverlink.length; i++) {
  $hoverlink[i].addEventListener("mouseenter", onMouseHover);
  $hoverlink[i].addEventListener("mouseleave", onMouseHoverOut);
}

function onMouseMove(e) {
  gsap.to($cursor, { duration: 0.4, x: e.pageX - 16, y: e.pageY - 16 });
}

function onMouseHover() {
  gsap.to($cursor, { duration: 0.4, scale: 3 });
}
function onMouseHoverOut() {
  gsap.to($cursor, { duration: 0.4, scale: 1 });
}




// cool scroll down text appear animation


const $bgcontainer = document.querySelector(".funnybgcontainer"); 
const $textcontainer = document.querySelector(".bgtextcontainer"); 

gsap.to($bgcontainer, {
  opacity: 0.2,
  delay: 1.5
})

gsap.to($textcontainer, {
  opacity: 1,
  delay: 1.5
})


//INNOVATION STUFF

gsap.to("#backgroundVid", {opacity: 0.2, delay: 5})
gsap.to(".innovationInfo", {opacity: 1, delay: 5})