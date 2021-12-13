
import { chessScene, id } from "./chess.js";
import { curtainsmain, curtains } from "./curtainsmain.js";
import { curtainsTrans, curtainsTransFunc } from "./curtainsTrans.js";
import { curtainsAg, pl, curtainsgenturfunc, } from "./curtainsagentur.js";
import { curtainsProjDet, curtainsDet } from "./curtainsdet.js";
import { curtainsproundermain, curtainsprounder } from "./curtainprounder.js";
import { trans } from "./menu.js";
// import { sliderHome } from "./sliderNew.js"
// import {slider, raf} from "./slider.js"

// $(window).on('load', function(){
//   $('.plane_img').each(function(){
//       $(this).removeAttr('sizes');
//       $(this).removeAttr('srcset');
//   });
//   $('.proj_img_home_wrap').each(function(){
//     $(this).removeAttr('sizes');
//     $(this).removeAttr('srcset');
// });
// });


window.addEventListener("load", function() {
gsap.registerPlugin(ScrollTrigger);
gsap.set(".page_wrap",{ autoAlpha: 0,  });

//MAIN//

  function init() {
    var imagesLoaded = 0;
    const body = document.body;
    const select = (e) => document.querySelector(e);
    const selectAll = (e) => document.querySelectorAll(e);
    const pageWrap = select(".page_wrap");
    const loader = select(".js-loader");
    const loaderInner = select(".js-loader__inner");
    const progressBar = select(".js-loader__progress");
    const loaderMask = select(".js-loader__mask");
    const canvastrans = document.querySelector("#chess");
    const homeCurtainsCanvas = document.querySelector(".canvas_agentur");
    let smoothScroll;

    ////////BARBA INIT//////////
    // gsap.set(pageWrap, { autoAlpha: 0 });

    // show loader on page load
    gsap.set(loader, { autoAlpha: 1 });

    // scale loader down
    gsap.set(loaderInner, { scaleY: 0.005, transformOrigin: "bottom" });

    initPageTransitions();

    function pageTransitionIn({ container }) {
      // timeline to stretch the loader over the whole screen
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power2.inOut",
        },
      });
      tl.set(loaderInner, { autoAlpha: 0 })
        .fromTo(loader, { yPercent: -100 }, { yPercent: 0 })
        .fromTo(loaderMask, { yPercent: 80 }, { yPercent: 0 }, 0)
        
      
      // .to(container, { y: 150}, 0)
      return tl;
    }

    function pageTransitionOut({ container }) {
      // timeline to move loader away down
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power2.inOut",
        },
        onComplete: () => initScript(),
      });
      
      tl.to(loader, { yPercent: 100 }).to(loaderMask, { yPercent: -80 }, 0);
    
      // .from(container, { y: -150}, 0)
      return tl;
    }

    function initPageTransitions() {
      barba.hooks.before(() => {

        select("html").classList.add("is-transitioning");
      });

      barba.hooks.after(() => {

        select("html").classList.remove("is-transitioning");
        // reinit locomotive scroll
        smoothScroll.init();
        
      });

      // scroll to the top of the page
      barba.hooks.enter(() => {
        window.scrollTo(0, 0);
      });

      // barba.use(barbaPrefetch);

      /////////// VIEWS /////////////////////////

      barba.init({
        views: [
          /////////// HOME /////////////////////////
          {
            namespace: "home",

            beforeEnter() {
                   trans.out();	
              gsap.to(loader, {
                opacity: 1,
                duration: 0,
              });
            },

            afterEnter() { 
              $('#page_content').imagesLoaded( {
                // options...
                },
                function() {
                  curtainsmain(smoothScroll);
                  chessScene();
                  gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });

             
                  setTimeout(function () {
                  trans.in();	
                  },2000);
          
               
                
                  // slider();
                }
              );
        
                // gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });

            // let pinWrap = document.querySelector(".pin-wrap");
            //       let pinWrapWidth = pinWrap.offsetWidth;
            //       let horizontalScrollLength = pinWrapWidth - window.innerWidth;
                
                  // Pinning and horizontal scrolling
                
                  // gsap.to(".pin-wrap", {
                  //   scrollTrigger: {
                  //     scroller: (".smooth-scroll"),
                  //     scrub: true,
                  //     trigger: "#sectionPin",
                  //     pin: true,
                  //     anticipatePin: 0,
                  //     start: "top top",
                  //     end: pinWrapWidth,
                  //     ease: "none"
                  //   },
                  //   x: -horizontalScrollLength,
                  //   ease: "none"
                  // });
                  // gsap.to(".chessCanvas", {
                  //   scrollTrigger: {
                  //     scroller: (".smooth-scroll"),
                  //     scrub: true,
                  //     trigger: ".smooth-scroll",
                  //     start: "top top",
                  //     end: "bottom -100"
                  //   },
                  //   opacity: 0,
                  //   ease: "none"
                  // });
                 
           
            
         
        
            },

            beforeLeave(data) {
              // gsap.ticker.remove(raf);
              cancelAnimationFrame( id );
              curtains.clear();
              curtains.dispose();

            },
          },
          /////////// AGENTUR /////////////////////////
          {
            namespace: "agentur",
            beforeEnter() {
              trans.out();
            },

            afterEnter() {
              $('#page_content').imagesLoaded( {
                // options...
                },
                function() {
             	
                  setTimeout(function () {
                    gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });

                  trans.in();	
                  },2000);
                  curtainsgenturfunc(smoothScroll);
                }
              );
       
            },

            beforeLeave(data) {
              setTimeout(function () {
                curtainsAg.dispose();
                curtainsAg.clear();
   
  
              },1000);
         
           
            },
          },
          /////////// PROJEKTE /////////////////////////
          {
            namespace: "projekte",
            beforeEnter() {
              trans.out();

            },

            afterEnter() {
           
              $('#page-content').imagesLoaded( function() {
                setTimeout(function () {
                  trans.in();	
                  },2000);
                gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });
                curtainsproundermain(smoothScroll);                      
              });
        
            },

            beforeLeave(data) {
           
              setTimeout(function () {
              // curtainsProj.dispose();
              curtainsprounder.dispose();
 

            },1600);
            },
          },
          /////////// PROJEKTDETAIL /////////////////////////
          {
            namespace: "projektdetail",
            beforeEnter() {
          


            },
            afterEnter() {
              

              gsap.set(".pro_in", {
                opacity:0,
              
              })


         
              $('#images').imagesLoaded()
              .always( function( instance ) {
                console.log('all images loaded');
              })
              .done( function( instance ) {
                setTimeout(function () {
                  trans.in();	
                  },2000);
                  curtainsTransFunc(smoothScroll);
                  curtainsProjDet(smoothScroll);  

                  setTimeout(function () {
                    trans.in();	
                    },1600);

                   const projTL = gsap.timeline()
                    projTL.to(".img_fullscreen", {
                      delay: 0.4,
                      opacity: 0.5,
                      duration: 1,
                    });

                    projTL.to(".pro_in", {
                      opacity:1,
                      stagger:.2
                  
                    })


                    gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });

                    const nexProjButton = document.querySelector('.next_proj')
                    nexProjButton.addEventListener('click',() => {
                      smoothScroll.stop();
                      smoothScroll.destroy();
                      gsap.to("#fullscreen", {
                        opacity:0,
                        duration:0,
                      })
                    })

                    const brandbutton = document.querySelector('#brand')
                    brandbutton.addEventListener('click',() => {
                     
                      gsap.to("#fullscreen", {
                        opacity:1,
                        duration:0,
                      })
                    })               })
              .fail( function() {
                console.log('all images loaded, at least one is broken');
              })
              .progress( function( instance, image ) {
                var result = image.isLoaded ? 'loaded' : 'broken';
                console.log( 'image is ' + result + ' for ' + image.img.src );
              });


            
                // gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 })               
                  



          
            },

            beforeLeave(data) {
              smoothScroll.stop();

              setTimeout(function () {    
                curtainsDet.dispose();  
              },2000);
            },
          },

        /////////// Jobs /////////////////////////
        {
          namespace: "jobs",
          beforeEnter() {
            
          },
          afterEnter() {
            $(document).ready(function () {
              gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });
            });
          },

          beforeLeave(data) {
         
          },
        },

           /////////// Kontakt /////////////////////////
           {
            namespace: "kontakt",
            beforeEnter() {
            },
            afterEnter() {
              $(document).ready(function () {
                gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });
              });
  
            },
  
            beforeLeave(data) {
        
            },
          },
               /////////// Logofolio /////////////////////////
           {
            namespace: "logofolio",
            beforeEnter() {
            },
            afterEnter() {
              $(document).ready(function () {
                gsap.to(".page_wrap",{ autoAlpha: 1, duration: 1, delay:.5 });
              });
  
            },
  
            beforeLeave(data) {
          
            },
          },

        


        ],

        

      

        /////////// TRANSITIONS /////////////////////////

        sync: true,
        debug: true,
        timeout: 7000,
        transitions: [
          {
            name: "overlay-transition",
            once(data) {
              // do something once on the initial page load
              initSmoothScroll(data.next.container);

              initLoader();
  
            },
            async leave(data) {
              // animate loading screen in

            
              trans.out();	
              
              await delay(2000);

              data.current.container.remove();
            },
            async enter(data) {
              // animate loading screen away
            },
            
            async beforeEnter(data) {
              ScrollTrigger.getAll().forEach((t) => t.kill());
              smoothScroll.destroy();

              initSmoothScroll(data.next.container);
              Webflow.destroy();
              Webflow.ready();
              Webflow.require("ix2").init();
            },
          },
        ],
      });
    }

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end * 0.5;
    }

    function initSmoothScroll(container) {
      smoothScroll = new LocomotiveScroll({
        el: document.getElementById("page-content"),
        smooth: true,
        inertia: .6,
        multiplier: 2,
        mobile: {
          breakpoint: 0,
          smooth: true,
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
        },
      });
      smoothScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
          return arguments.length
            ? smoothScroll.scrollTo(value, 0, 0)
            : smoothScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },

        pinType: document.querySelector(".smooth-scroll").style.transform
          ? "transform"
          : "fixed",
      });

      const scrollbar = selectAll(".c-scrollbar");
      if (scrollbar.length > 1) {
        scrollbar[0].remove();
      }

                  gsap.set(".scroll_indicator_line", {xPercent:-100,} )
                  gsap.to(".scroll_indicator_line", {
                    xPercent: 0,
                    ease: 'none',
                    scrollTrigger: { 
                      trigger: ".main",
                      start: "top top",
                      scroller: ".smooth-scroll",
                      end:"bottom bottom",
                      endTrigger: ".footer_scroll",
                      scrub: 0.3 
                    }
                  });

      ScrollTrigger.addEventListener("refresh", () => smoothScroll.update());
      ScrollTrigger.refresh();
    }

    //////BARBA LOADER///////

    function initLoader() {
      // trans.in()

  
      const tlLoaderIn = gsap.timeline({
        id: "tlLoaderIn",
        
        defaults: {
          duration: 1.1,
          delay:.2,
          ease: "power2.out",
          
        },
       
        onComplete: () => initScript(),
        
      });

      
      // trans.in()

    
      tlLoaderIn
  

        //.set(loaderContent, {autoAlpha: 1})
        .to(loaderInner, {
          scaleY: 1,
          transformOrigin: "bottom",
          ease: "power1.inOut",
        });

      const tlLoaderOut = gsap.timeline({
        id: "tlLoaderOut",
        defaults: {
          delay: .2,
          duration: .2,
          ease: "power2.inOut",
        },
      });

      tlLoaderOut.to(loader, { yPercent: -100 }, 0.2);
      // tlLoaderOut.from('.main', {y: 150}, 0.2);

      // tlLoaderOut.from(".h1_chars_full", {
      //  stagger:.05,opacity: 0, delay: 0,duration: .7, y:50, 
      // })

      // tlLoaderOut.to(".sub_hero", {
      //  opacity: 1, duration: .7, y:50, delay:0
      // })

      const tlLoader = gsap.timeline();
      tlLoader.add(tlLoaderIn).add(tlLoaderOut);
    }

    function delay(n) {
      n = n || 2000;
      return new Promise((done) => {
        setTimeout(() => {
          done();
        }, n);
      });
    }

    /* Fire all scripts on page load*/
    function initScript() {
      select("body").classList.remove("is-loading");
    }
  }
  barba.use(barbaPrefetch);

  init();

  });




