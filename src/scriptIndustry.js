var tl = gsap.timeline()

tl.from(".iWorldtext", {scale: 0}, 0.5)
tl.from(".iFairtext", {y: "+=100px"}, ">+=2")

tl.to(".iWorldtext", {y: -100}, 3)
tl.to(".iFairtext", {y: -100}, 3)

tl.to(".iInfo", {opacity: 1}, 3)

// const imgs = document.getElementsByClassName("sideImgs")
// const container = document.querySelector("body")

// container.addEventListener("mousemove", (e)=> {
//     xPercent = parseInt(e.pageX / window.innerWidth * 20);
//     imgs[0].style.objectPosition = `${xPercent}% 50%`;
//     imgs[1].style.objectPosition = `${xPercent}% 50%`;
//   });