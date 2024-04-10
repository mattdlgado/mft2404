// Swiper
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

var swiper = new Swiper(".images", {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: ".images-pagination",
  },
});

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".business > div").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
    y: 100,
    duration: 2,
    ease: "power4.out",
  });
});

// Lenis
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
