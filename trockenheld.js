$(document).ready(function() {
    $('.image').ripples('show');
    
    
    
    
    gsap.from('.section-about-text', {opacity: 0, duration: .8, delay: .6,});
    gsap.from('.st', {opacity: 0, duration: .8, y: 50, delay: .8, stagger: .2,});
    gsap.from('.header-waves-100', {opacity: 0, duration: .8, scale:.9, delay: .2,});
    
    
    //SCROLLTRIGGER
    
    gsap.registerPlugin(ScrollTrigger);
    
    const pageContainer = document.querySelector(".smooth-scroll");
    
    /* SMOOTH SCROLL */
    const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true
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
    
    
    
    ////////////////////////////////////
    ////////////////////////////////////
      let pinBoxes = document.querySelectorAll(".pin-wrap > *");
      let pinWrap = document.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
      // Pinning and horizontal scrolling
    
      gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          anticipatePin: 25,
          start: "top top",
          end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
      });
      
    
    
    /* LOGO */
    gsap.set(".logo_icon",{
        x:0
    })
    
    gsap.to(".logo_icon", {
        x: -80,
        y: -15,
        ease: "Power4inOut",
        duration: .5,
        scale:.8,
    
      scrollTrigger: {
        trigger: ".smooth-scroll",
        scroller: ".smooth-scroll",
        start:'top -100',
        scrub: false,
        end:'bottom bottom',
        toggleActions: "play reverse play reverse",
    
      },
     
    });
    
    gsap.to(".logo_solo", {
        opacity: 0,
        ease: "none",
        duration: .2,
    
      scrollTrigger: {
        trigger: ".smooth-scroll",
        scroller: ".smooth-scroll",
        start:'top -100',
        scrub: false,
        end:'bottom bottom',
        toggleActions: "play reverse play reverse",
    
      },
     
    });



    //////COUNTERS///////
    
    
    function counterOne() {
        var startCount = 0,
        num = {var:startCount};
    
    gsap.timeline({
        scrollTrigger: {
            scroller: ".smooth-scroll",
          trigger: "#counter1",
          start: "top 250",
          end: "+=100", 
          }
      })
      .to(num, {var: 2433, duration: 5, ease:"none", onUpdate:changeNumber})
      .to({}, {duration:2})
    
    function changeNumber() {
        counter1.innerHTML = (num.var).toFixed();
    }
    }

    function counterTwo() {
        var startCount = 0,
        num = {var:startCount};
    
    gsap.timeline({
        scrollTrigger: {
            scroller: ".smooth-scroll",
          trigger: "#counter2",
          start: "top 250",
          end: "+=100", 
          }
      })
      .to(num, {var: 1485, duration: 5, ease:"none", onUpdate:changeNumber})
      .to({}, {duration:2})
    
    function changeNumber() {
        counter2.innerHTML = (num.var).toFixed();
    }
    }

    function counterThree() {
        var startCount = 0,
        num = {var:startCount};
    
    gsap.timeline({
        scrollTrigger: {
            scroller: ".smooth-scroll",
          trigger: "#counter3",
          start: "top 250",
          end: "+=100", 
          }
      })
      .to(num, {var: 56, duration: 5, ease:"none", onUpdate:changeNumber})
      .to({}, {duration:2})
    
    function changeNumber() {
        counter3.innerHTML = (num.var).toFixed();
    }
    }
    counterOne();
    counterTwo();
    counterThree();
    
      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
    
      ScrollTrigger.refresh();
 
    });