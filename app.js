// const section1 = document.querySelector('.section1');

// const sections = document.querySelectorAll(".sections")

// const options = {
//     root: null,
//     threshold: 0,
//     rootMargin: "-350px",
// };

// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         }
//         entry.target.classList.toggle('inverse');
//         observer.unobserve(entry.target);
//     });
// }, options);

// sections.forEach(section => {
//     observer.observe(section); 
// });


const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});