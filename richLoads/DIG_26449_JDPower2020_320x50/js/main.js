// // Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from("#logo", 0.5, { x: -55, ease: Power3.easeOut }, "logo")
	.from("#header-1", 0.5, { opacity: 0, y: 3, ease: Back.easeOut.config(1.5) }, "header")
	.from("#award", 0.5, { x: 70, ease: Power3.easeOut }, "header")
	.to("#header-1", 1.5, {}) //delay
	.to("#header-1", 0.5, { opacity: 0, y: 3 })
	.to("#award", 0.5, { x: 70, ease: Power3.easeIn }, "-=0.5")

	.from("#header-2", 0.5, { opacity: 0, y: 3, ease: Back.easeOut.config(1.5) })
	.from("#cta-wrapper", 0.5, { opacity: 0, y: 3 }, "-=0.5");
