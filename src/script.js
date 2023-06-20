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

gsap.registerPlugin(ScrollTrigger);

const $bgcontainer = document.querySelector(".funnybgcontainer"); 
const $textcontainer = document.querySelector(".bgtextcontainer"); 

gsap.to($bgcontainer, {
  scrollTrigger: {
    trigger: "header.infraheader",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
  opacity: 0.4,
})

gsap.to($textcontainer, {
  scrollTrigger: {
    trigger: "header.infraheader",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
  opacity: 1,
})