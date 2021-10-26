import {chessScene} from './chessTwo.js';
import {curtainsmain} from './curtainsmain.js';

gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//   markers: true;
// })

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
// const container = select('.smooth-scroll');
const loader = select('.js-loader');
const loaderInner = select('.js-loader__inner');
const progressBar = select('.js-loader__progress');
const loaderMask = select('.js-loader__mask');

// show loader on page load
gsap.set(loader, {autoAlpha: 1});

// scale loader down
gsap.set(loaderInner, {scaleY: 0.005, transformOrigin: 'bottom'});


initPageTransitions();

function pageTransitionIn({container}) {
  // timeline to stretch the loader over the whole screen
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.inOut'
    }
  });
  tl
  .set(loaderInner, { autoAlpha: 0 })
  .fromTo(loader, { yPercent: -100 }, {yPercent: 0 })
  .fromTo(loaderMask, { yPercent: 80 }, {yPercent: 0 }, 0)
  .to(container, { y: 150}, 0);
  return tl;
}

function pageTransitionOut({container}) {
  // timeline to move loader away down
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.inOut'
    },
    onComplete: () => initScript()
  });
  tl
  .to(loader, { yPercent: 100 })
  .to(loaderMask, { yPercent: -80 }, 0)
  .from(container, { y: -150}, 0);
  return tl;
}

function initPageTransitions() {

  //let scroll;

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    // reinit locomotive scroll
    scroll.init();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    window.scrollTo(0, 0);
  });

  barba.init({
    sync:true,
    debug: true,
    timeout:7000,
    transitions: [{
      name: 'overlay-transition',
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
        scroll.destroy();
        initSmoothScroll(data.next.container);
      }

    }]
  });
  
  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true
    });
    chessScene();

    // curtainsmain(scroll);
    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }  
}

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
    delay: 1
  });
  
  tlLoaderOut
  .to(loader, {yPercent: -100}, 0.2)
  .from('.site-main', {y: 150}, 0.2);

  const tlLoader = gsap.timeline();
  tlLoader
  .add(tlLoaderIn)
  .add(tlLoaderOut);



function createAnimation(mixer, action, clip) {
    let proxy = {
  
      get time() {
        return mixer.time;
      },
      set time(value) {
  
        clips.forEach(element => {
          var last = mixer.clipAction( element );
          last.paused = false;
  
        });
        mixer.setTime(value);
        clips.forEach(element => {
          var last = mixer.clipAction( element );
          last.paused = true;
        });
      }
    };
  
    let scrollingTL = gsap.timeline({
      scrollTrigger: {
  
        trigger: ".site-main",
        scroller: ".scroll-container",
        start: "top top",
        end: "bottom",
        pin: true,
        scrub: true,
        ease: Power3.easeInOut,
        onUpdate: function () {
          camera.updateProjectionMatrix();
        }
      }
    });
  
    scrollingTL.to(proxy, {
      time: clip.duration,
      repeat: 0,
    });
  
    let scrollingTL2 = gsap.timeline({
      scrollTrigger: {
        trigger: "site-main",
        scroller: ".scroll-container",
        start: "top top",
        end: "bottom",
        pin: true,
        scrub: true,
          ease: Power3.easeInOut,
  onUpdate: function () {
          camera.updateProjectionMatrix();
        }
      }
    }, );
  
    scrollingTL2.to(model.rotation, {
      x:Math.PI/5,
      y:Math.PI,
      z:-Math.PI/5,
  
    });
  
    let scrollingTL3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        scroller: ".scroll-container",
        start: "top top",
        end: "bottom",
        pin: true,
        scrub: true,
          ease: Power3.easeInOut,
  onUpdate: function () {
          camera.updateProjectionMatrix();
        }
      }
    }, );
  
    
  
      scrollingTL3.to(model.position, {
      x:2,
      y:-2,
  
    });
  
  
  
  
  
  
    
  
  
  
  
  }

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
  select('body').classList.remove('is-loading');
}

//initPageTransitions();


/**
 * Parallax Images
 */
function initImageParallax() {
    
//   // select all sections .with-parallax
//   gsap.utils.toArray('.is-parallax').forEach(section => {

//     // get the image
//     const image = section.querySelector('img');

//     // create tween for the image
//     gsap.to(image, {
//       scaleX: 1.2,
//       scaleY:1.2,
//       ease: 'power2.inOut',
//       scrollTrigger: {
//         trigger: section,
//         scroller: '.scroll-container',
//         start: 'top bottom',
//         scrub: true
//       }
//     });

//   });

}

