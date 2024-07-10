document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    if (typeof gsap === 'undefined') {
        console.error("GSAP is not loaded");
        return;
    }
    
    if (typeof ScrollTrigger === 'undefined') {
        console.error("ScrollTrigger is not loaded");
        return;
    }

    console.log("GSAP and ScrollTrigger are loaded");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("body", {
        backgroundColor: "#181919",
        scrollTrigger: {
            trigger: ".cards", // Make sure this matches your HTML
            start: "top 10%",
            scrub: true,
            markers: false, // This will show markers for debugging
            onEnter: () => console.log("ScrollTrigger entered"),
            onLeave: () => console.log("ScrollTrigger left"),
        }
    });

    gsap.to("#navBar", {
        backgroundColor: '#202120',
        color: '#ffffff', // Change text color to white
        scrollTrigger: {
            trigger: triggerElement,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
            toggleActions: "play none none reverse",
            onEnter: () => console.log("NavBar ScrollTrigger entered"),
            onLeave: () => console.log("NavBar ScrollTrigger left"),
        }
    });

    console.log("GSAP animation set up");
});