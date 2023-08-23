// function isElementInsideViewPort(element) {
//     const rect = element.getBoundingClientRect();
//     // console.log(rect.scrollY, rect.bottom, rect.top, "rect")

//     return (
//         window.scrollY - 300 >= element.offsetTop);
// }

// function firstAnimation(success) {
//     if (success) {
      
//     } else {
//         document.querySelector(".animation-container").classList.remove("active-now")
//     }
// }

// function secondAnimation(success) {
//     if (success) {
//         document.querySelector(".animation2-container").classList.add("active-now")
//     } else {
//         document.querySelector(".animation2-container").classList.remove("active-now")
//     }
// }

// function thirdAnimation(success) {
//     if (success) {
//         document.querySelector(".a3-main-container").classList.add("active-now")
//         document.querySelector(".animation3-container").classList.add("active-now")
//     } else {
//         document.querySelector(".a3-main-container").classList.remove("active-now")
//         document.querySelector(".animation3-container").classList.remove("active-now")
//     }
// }

// function fourthAnimation(success) {
//     if (success) {
//         document.querySelector(".animation4-container").classList.add("active-now")
//     } else {
//         document.querySelector(".animation4-container").classList.remove("active-now")
//     }
// }

// function checker(element, animation_index) {
//     if (isElementInsideViewPort(element)) {
//         if (animation_index == 0) {
//             firstAnimation(true);
//         } else if (animation_index == 1) {
//             secondAnimation(true);
//         } else if (animation_index == 2) {
//             thirdAnimation(true);
//         } else if (animation_index == 3) {
//             fourthAnimation(true)
//         }

//     } else {
//         if (animation_index == 0) {
//             firstAnimation(false);
//         } else if (animation_index == 1) {
//             secondAnimation(false)
//         } else if (animation_index == 2) {
//             thirdAnimation(false);
//         } else if (animation_index == 3) {
//             fourthAnimation(false)
//         }
//     }
// }


// window.addEventListener("scroll", () => {
//     checker(animationBox, 0)
//     checker(animation2Box, 1)
//     checker(animation3Box, 2)
//     checker(animation4Box, 3)
// });








const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "-50px"
}

const observer = new IntersectionObserver(callback, options)

function callback(entries) {
    console.log(entries);

    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.add("active-now")
    } else {
        entry.target.classList.remove("active-now")
    }
}

const animationBox = document.querySelector(".animation-container");
const animation2Box = document.querySelector(".animation2-container");
const animation3Box = document.querySelector(".a3-main-container");
const animation4Box = document.querySelector(".animation4-container");

observer.observe(animationBox);
observer.observe(animation2Box);
observer.observe(animation3Box);
observer.observe(animation4Box);

