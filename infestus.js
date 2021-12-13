
//SCROLLTRIGGER

//SCROLLTRIGGER



gsap.registerPlugin(ScrollTrigger);
const body = document.body;
console.log(body)

const pageContainer = document.querySelector(".smooth-scroll");

/* SMOOTH SCROLL */
  const scroller = new LocomotiveScroll({
    el: pageContainer,
    inertia: 0.8,
    smooth: true,
    class: 'in-view',
    reloadOnContextChange: true,

    mobile: {
      breakpoint: 0,
      smooth: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
    },
  });

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

gsap.set ('.huge', {opacity:0})
gsap.set ('.main', {opacity:0})

const tlintro = new gsap.timeline();

tlintro.to (".huge", {
    opacity: 1,
    duration: 1,
    delay:1,

  })

tlintro.to (".main", {
    opacity: 1,
    duration: 1,
  },"-=.8")








let pinWrap = document.querySelector(".pin-wrap");
                  let pinWrapWidth = pinWrap.offsetWidth;
                  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
                console.log(horizontalScrollLength)
                  // Pinning and horizontal scrolling
                
                  gsap.to(".pin-wrap", {
                    scrollTrigger: {
                      scroller: (".smooth-scroll"),
                      scrub: true,
                      trigger: "#sectionPin",
                      pin: true,
                      anticipatePin: 0,
                      start: "top top",
                      end: pinWrapWidth,
                      ease: "none"
                    },
                    x: -horizontalScrollLength,
                    ease: "none"
                  });



// Anchor Links



const anchorLink1 = document.querySelector(".anchorlink1");
const anchor = document.querySelector('#hero')        
anchorLink1.addEventListener(
    "click",
    (e) => {

        scroller.scrollTo(anchor);
   
    })

const anchorLink2 = document.querySelector(".anchorlink2");
const anchor2 = document.querySelector('#null')        

anchorLink2.addEventListener("click", () => {
        console.log('hello')

        scroller.scrollTo(anchor2);

        // scroller.destroy()
        // scroller.init()

    
 
  });


const anchorLink3 = document.querySelector(".anchorlink3");
const anchor3 = document.querySelector('#gallery')        
anchorLink3.addEventListener(
    "click",
    (e) => {
        scroller.scrollTo(anchor3);
        console.log(scroller.scrollTo)

    })

const anchorLink4 = document.querySelector(".anchorlink4");
const anchor4 = document.querySelector('#videos')        
anchorLink4.addEventListener(
    "click",
    (e) => {

        scroller.scrollTo(anchor4);
    })

const anchorLink5 = document.querySelector(".anchorlink5");
const anchor5 = document.querySelector('#termine')        
anchorLink5.addEventListener(
    "click",
    (e) => {

        scroller.scrollTo(anchor5);
    })


  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
  ScrollTrigger.refresh();
