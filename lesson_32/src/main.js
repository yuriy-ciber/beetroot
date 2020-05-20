import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 1,
  perView: 4,
  focusAt: 0,
  gap: 20,
  autoplay: 2000,
  animationDuration: 800,
  breakpoints: {
    1024: {
      perView: 3,
    },
    900: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};
new Glide(".glide", config).mount();
