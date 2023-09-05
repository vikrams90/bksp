const join = document.querySelector("#joinlink")
console.log(join)
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel : true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  var swiper2 = new Swiper(".mySwiper2", {
    direction: "horizontal",
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
  });

  var typed = new Typed('#typed', {
    strings: ['भारत की', 'नई क्रांति का','हिस्सा बनिए'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    loop: true,
  
  });

  join.addEventListener("click",()=>{console.log("hi");swiper.slideTo(3)})

//   var typed = new Typed('.logo-typed1', {
//     strings: ['hartiya',''],
//     typeSpeed: 100,
//     backSpeed: 100,
//     startDelay: 5000,
//     backDelay: 1000,
//     fadeOut: true,
//     fadeOutClass: 'typed-fade-out',
//     loop: false,
  
//   });

//   var typed = new Typed('.logo-typed2', {
//     strings: ['ampurna',''],
//     typeSpeed: 100,
//     backSpeed: 100,
//     startDelay: 5000,
//     backDelay:1100,
//     fadeOut: true,
//     fadeOutClass: 'typed-fade-out',
//     loop: false,
  
//   });
//   var typed = new Typed('.logo-typed3', {
//     strings: ['rantikari',''],
//     onBegin: (self) => {},
//     typeSpeed: 100,
//     backSpeed: 100,
//     startDelay: 5000,
//     fadeOut: true,
//     fadeOutClass: 'typed-fade-out',
//     loop: false,
  
//   });
//   var typed = new Typed('.logo-typed4', {
//     strings: ['arty',''],
//     typeSpeed: 100,
//     backSpeed: 100,
//     startDelay: 5000,
//     backDelay:1500,
//     fadeOut: true,
//     fadeOutClass: 'typed-fade-out',
//     loop: false,
  
//   });

 
                            
                            