// Swiper
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/*var swiper = new Swiper(".ponentes", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".next-ponente",
    prevEl: ".prev-ponente",
  },
});*/

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const iconsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".ponentes",
    start: "top bottom",
    end: "top center",
    scrub: true
  },
});
gsap.set(".swiper-slide", { opacity: 1, y: 0 });
iconsTimeline.from(".swiper-slide", {
  duration: 0.5,
  ease: "power4.out",
  stagger: 0.1,
  opacity: 0,
  y: 80,
});

const iconsTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ponentes",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
});
gsap.set(".ponente", { opacity: 1, y: 0 });
iconsTimeline2.from(".ponente", {
  duration: 0.5,
  ease: "power4.out",
  stagger: 0.1,
  opacity: 0,
  y: 80,
});

// Lenis
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
