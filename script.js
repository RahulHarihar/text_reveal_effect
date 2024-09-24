const lenis = new Lenis();

lenis.on("scroll", (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

let timeLine = gsap.timeline({
	scrollTrigger: {
		trigger: ".two",
		start: "10% 50%",
		end: "80% 80%",
		scrub: 1,
	},
});

timeLine.to(".text-area-2 h1", {
	width: "100%",
});
timeLine.to(".text-area-2 h2", {
	width: "100%",
	delay: -0.4,
});
