const pics = document.querySelectorAll(".pic");
// const pic1 = document.querySelector(".pic1");
// const pic2 = document.querySelector(".pic2");
// const pic3 = document.querySelector(".pic3");
// const pic4 = document.querySelector(".pic4");

const pickUp = document.querySelector(".pick-up");

pics.forEach((el) => {
  gsap.from(el, 1.3, {
    opacity: 0,
    x: -40,
    scrollTrigger: {
      //   markers: true,
      trigger: el,
      start: "top 50%",
    },
  });
});

//   .timeline({
//     defaults: { ease: "power2.out", duration: 1 },
//     ScrollTrigger: {
//       markers: true,
//       trigger: pickUp,
//       start: "top 50%",
//       end: "bottom top",
//       toggleActions: "restart none none none",
//     },
//   })
//   .fromTo("pic1", 3, { width: "0%" }, { width: "80%" })
//   .fromTo("pic2", 3.5, { width: "0%" }, { width: "80%" })
//   .fromTo("pic3", 4, { width: "0%" }, { width: "80%" })
//   .fromTo("pic4", 4.5, { width: "0%" }, { width: "80%" });
