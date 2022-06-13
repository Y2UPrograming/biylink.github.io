// Lisence : MIT
// Author : Y2UPrograming
//  Copyright (c) 2020-2022 Bootstrap. All rights reserved.




// Grey sticky navbar (Desktop only)
window.addEventListener("DOMContentLoaded", () => {
  let scrollPos = 0;
  const mainNav = document.getElementById("mainNav");
  const headerHeight = mainNav.clientHeight;
  window.addEventListener("scroll", function () {
    if (window.innerWidth > 992) {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if (currentTop < scrollPos) {
        mainNav.classList.remove("sticky");
        // Scrolling Up
        if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
          mainNav.classList.add("is-visible");
        } else {
          console.log(123);
          mainNav.classList.remove("is-visible", "is-fixed");
        }
      } else {
        // Scrolling Down
        mainNav.classList.remove(["is-visible"]);
        if (
          currentTop > headerHeight &&
          !mainNav.classList.contains("is-fixed")
        ) {
          mainNav.classList.add("is-fixed");
        }
      }
      scrollPos = currentTop;
    } else {
      // !BUG! Bug ketika width window browswer dikecilkan terlalu cepat/tiba-tiba
      // !BUG! Maka class is-fixed dan is-visible tidak akan dihapus

      if (mainNav.classList.contains(["is-visible"]) || mainNav.classList.contains(["is-fixed"])) {
        mainNav.classList.remove(["is-visible"]);
        mainNav.classList.remove(["is-fixed"]);
      }
      mainNav.classList.toggle("sticky", window.scrollY > 0);
    }
  });
});


// Grey Navbar (mobile)
{
  function navGrey() {
    const mainNav = document.getElementById("mainNav");

    if (!window.scrollY > 0) {
      mainNav.classList.toggle("sticky");
    }
  }
}


// Bubble down animation navbar
window.addEventListener("scroll", function () {
  const mainNav = document.getElementById("mainNav");

  const navHover = document.getElementById("hov");
  const navHover1 = document.getElementById("hov1");
  const navHover2 = document.getElementById("hov2");
  const navHover3 = document.getElementById("hov3");
    
    navHover.classList.toggle("noJquery", window.scrollY > 0 && mainNav.classList.contains("is-fixed"));
    navHover1.classList.toggle("noJquery1", window.scrollY > 0 && mainNav.classList.contains("is-fixed"));
    navHover2.classList.toggle("noJquery2", window.scrollY > 0 && mainNav.classList.contains("is-fixed"));
    navHover3.classList.toggle("noJquery3", window.scrollY > 0 && mainNav.classList.contains("is-fixed"));

  
});

const hlNavPost = document.getElementById("hlNavPost");

hlNavPost.mouseover = function() { 
  hlNavPost.classList.toggle("no");
  alert("Hello");
}


  //Hovered!


// const mainNav = document.querySelector('nav');
// const button = document.querySelectorAll('nav div button');

// mainNav.addEventListener('click', function () {
//     if (button.ariaExpanded = !JSON.parse(button.ariaExpanded)) {
//         mainNav.classList.add('sticky');
//     } else {
//         mainNav.classList.remove('sticky');
//     }
// })

// const button = document.querySelector('button');
// const mainNav = document.getElementById('mainNav');

// $(function () {
//     if (button.attr('aria-expanded') === "true") {
//         $(this).classList.add('theclass');
//     }
// });

// window.addEventListener('DOMContentLoaded', () => {
//     const mainNav = document.getElementById('mainNav');
//     window.addEventListener('scroll', function () {
//             mainNav.classList.toggle('theclass', !mainNav.classList.contains('sticky'));
//     })
// })
