import {chessScene,expModel, id, scene} from './chess.js';
import {curtainsmain, curtains} from './curtainsmain.js';
import {projekte, curtainsProj} from './projekte.js'
import {render as menu} from './menu.js'
import {curtainsAg, curtainsgenturfunc} from './curtainsagentur.js'

//INTRO//
gsap.registerPlugin(ScrollTrigger);

//MAIN//

function init(){
const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const container = select('.smooth-scroll');
const loader = select(".js-loader");
const loaderInner = select(".js-loader__inner");
const progressBar = select(".js-loader__progress");
const loaderMask = select(".js-loader__mask");
const canvastrans = document.querySelector("#chess")
const homeCurtainsCanvas = document.querySelector(".canvas_agentur");
let smoothScroll;


////////BARBA INIT//////////


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
    tl
    .set(loaderInner, { autoAlpha: 0 })
    .fromTo(loader, { yPercent: -100 }, {yPercent: 0 })
    .fromTo(loaderMask, { yPercent: 80 }, {yPercent: 0 }, 0)
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
    tl 
    .to(loader, { yPercent: 100 })
    .to(loaderMask, { yPercent: -80 }, 0)
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

    /////////// VIEWS ///////////////////////// 

    barba.init({
      views: [
    /////////// HOME ///////////////////////// 
       {
        namespace: 'home',
        
        beforeEnter() {
         
        },       
        afterEnter() {    
           
    
            curtainsmain(smoothScroll);
            chessScene();

          
        },       
        beforeLeave(data) {
          setTimeout (function (){
            curtains.clear();
            curtains.dispose();
            cancelAnimationFrame( id );
             gsap.to (canvastrans,{
              opacity: 0,
          })
          }, 1000)
          
        },
      },
      /////////// AGENTUR /////////////////////////  
      {
        namespace: 'agentur',       
        beforeEnter() {

         
        },       
        beforeLeave(data) {
          setTimeout(function (){
            curtainsAg.clear();
            curtainsAg.dispose();
          }, 1000);
        },
        afterEnter() {
          curtainsgenturfunc(smoothScroll);  
        }
      },
      /////////// PROJEKTE /////////////////////////  
      {
        namespace: 'projekte',
        beforeEnter() {
        
        },
        afterEnter() {
          projekte(smoothScroll);  

        }, 
        beforeLeave(data) {
         
          setTimeout(function (){
            curtainsProj.clear();
            curtainsProj.dispose();
            
          }, 1000);
        },
      },
      /////////// PROJEKTdetail /////////////////////////  
      {
        namespace: 'projektdetail',
        beforeEnter() {
        },
        afterEnter() {
     
          projekte(smoothScroll);  

        }, 
        beforeLeave(data) {
          gsap.to (loader,{
            opacity: 1,
            duration:0,
        })
          setTimeout(function (){
            curtainsProj.clear();
            curtainsProj.dispose();
          }, 1000);
        },
      }
    
    
    
    ],

    /////////// TRANSITIONS /////////////////////////  

    
      sync: true,
      debug: true,
      // timeout: 7000,
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
            
            pageTransitionIn(data.current);
      
            


            await delay(1000);
            data.current.container.remove();
            
          },
          async enter(data) {
            
            // animate loading screen away
            pageTransitionOut(data.next);
      
            
          },
          async beforeEnter(data) {

            ScrollTrigger.getAll().forEach(t => t.kill());
            smoothScroll.destroy();
            initSmoothScroll(data.next.container);
            Webflow.destroy();
            Webflow.ready();
            Webflow.require('ix2').init();
   
            
          }
        },
        
      ],
    });
  }


function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end * 0.5;
}

function initSmoothScroll(container)  {
  smoothScroll = new LocomotiveScroll({
    el: document.getElementById("page-content"),
    smooth: true,
    inertia: 0.5,
    passive: true,
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
    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => smoothScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
};




//////BARBA LOADER///////

function initLoader() {
 
  const tlLoaderIn = gsap.timeline({
    id: 'tlLoaderIn',
    defaults: {
      duration: 1.1,
      ease: 'power2.out'
    },
    onComplete: () => initScript() 
  });

  tlLoaderIn
  //.set(loaderContent, {autoAlpha: 1})
  .to(loaderInner, {
    scaleY: 1,
    transformOrigin: 'bottom',
    ease: 'power1.inOut'
  });

  const tlLoaderOut = gsap.timeline({
    id: 'tlLoaderOut',
    defaults: {
      duration: 1.2,
      ease: 'power2.inOut'
    },
  });
  
  tlLoaderOut
  .to(loader, {yPercent: -100}, 0.2)
  // .from('.main', {y: 150}, 0.2);

  const tlLoader = gsap.timeline();
  tlLoader
  .add(tlLoaderIn)
  .add(tlLoaderOut);

}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


/**
 * Fire all scripts on page load
 */
function initScript() {
  select("body").classList.remove("is-loading");
  // chessScene();
}

}

window.addEventListener('load', function(){
    init();
});
