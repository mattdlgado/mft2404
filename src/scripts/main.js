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

// Lenis
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
