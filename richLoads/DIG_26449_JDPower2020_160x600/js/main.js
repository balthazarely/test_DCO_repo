// // Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
    .from("#logo", 0.5, { y: -66, ease: Power3.easeOut }, "logo")
    .from("#header", 0.5, { opacity: 0, y: 3, ease: Back.easeOut.config(1.5) }, "header")
    .from("#award", 0.75, { x: 152, ease: Power4.easeOut }, "header")
    .from("#subhead", 0.5, { opacity: 0, y: 3 }, "header+=0.5")
    .from("#cta-wrapper", 0.5, { opacity: 0, y: 3 }, "header+=1");
