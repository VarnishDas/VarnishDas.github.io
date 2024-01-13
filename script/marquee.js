/**
 * Modified version of Marquee Animation by Codegrid (https://youtu.be/V-kgJU-Fndk?si=kxJjlPpxjoi5fxdi)
 */

let currentScroll = 0;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marqueePart", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear",
}).totalProgress(0.5);

gsap.set(".marqueeInner", { xPercent: -50 });

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const isScrollingDown = scrollY > currentScroll;

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
        duration: 0.1,  // Adjust the duration for a quicker transition
        ease: "power1.inOut",
    });

    currentScroll = scrollY;

    arrows.forEach((arrow) => {
        if (isScrollingDown) {
            arrow.classList.remove("active");
        } else {
            arrow.classList.add("active");
        }
    })
});