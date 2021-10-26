
// //INTRO//

// gsap.registerPlugin(ScrollTrigger);

// //MAIN//


// var mixer;
// //LOCOMOTIVE//


// window.addEventListener("load", () => {
//   function lerp (start, end, amt){
//       return (1 - amt) * start + amt * end *.5;
//   }
  
//   // we will keep track of all our planes in an array
//   const planes = [];
//   let scrollEffect = 0;
//   var planesDeformations = 0


//   // get our planes elements
//   const planeElements = document.getElementsByClassName("plane_test");

//   // handle smooth scroll and update planes positions
//   const smoothScroll = new LocomotiveScroll({
//       el: document.getElementById('page-content'),
//       smooth: true,
//       inertia: 0.5,
//       passive: true,
//   });

// smoothScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".smooth-scroll", {
// 	scrollTop(value) {
// 		return arguments.length
// 			? smoothScroll.scrollTo(value, 0, 0)
// 			: smoothScroll.scroll.instance.scroll.y;
// 	},
// 	getBoundingClientRect() {
// 		return {
// 			top: 0,
// 			left: 0,
// 			width: window.innerWidth,
// 			height: window.innerHeight
// 		};
// 	},

// 	pinType: document.querySelector(".smooth-scroll").style.transform
// 		? "transform"
// 		: "fixed"
// });






//     // var tl_zoom = gsap.timeline({
//     //     scrollTrigger: {
//     //       trigger: ".section_zoom",
//     //       scroller: ".smooth-scroll",
//     //       scrub: true,
    
//     //       start: "top top",
//     //       end: "bottom bottom",
//     //       ease: "none"
          
//     //     }
//     //   });



//     //   tl_zoom.from(".zoom_image", {scale: 5.5, });


      



// // const ratio = 0.5625;

// // function newSize() {
// //   let w = window.innerWidth;
// //   let h = window.innerHeight;
// //   if (w > h * (16 / 9)) {
// //     gsap.set("#pin-overlay", { attr: { width: w, height: w * ratio } });
// //   } else {
// //     gsap.set("#pin-overlay", { attr: { width: h / ratio, height: h } });
// //   }
// //   //let data = svg.getBoundingClientRect();
// //   //gsap.set("#overlay", {x:w/2 - data.width/2});
// //   //gsap.set("#overlay", {y:h/2 - data.height/2});
// // }

// // newSize();
// // window.addEventListener("resize", newSize);



// ///

// // gsap.from("p", {
// // 	scrollTrigger: {
// // 		trigger: ".sec-p",
// // 		// markers: true,
// // 		start: "top center",
// // 		scroller: ".smooth-scroll",
// // 		toggleActions: "play none none reverse"
// // 	},
// // 	opacity: 0,
// // 	y: 50,
// // 	duration: 1,
// // 	ease: "power3.out"
// // });



// // // Chess

// //  //===================================================== canvas

// //  const chessCanvas = document.getElementById("chess");
// //  var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // chessCanvas.appendChild(renderer.domElement);

// //  //===================================================== scene
// //  var scene = new THREE.Scene();

// //  //===================================================== camera
// //  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //  camera.position.z = 5;
// //  camera.position.y = 0;

// //  //===================================================== lights
// //  var light = new THREE.DirectionalLight(0xefefff, 1);
// //  light.position.set(1, 1, 1).normalize();
// //  scene.add(light);
// //  var light = new THREE.DirectionalLight(0xffefef, 1);
// //  light.position.set(-1, -1, -1).normalize();
// //  scene.add(light);

// //  //===================================================== resize
// //  window.addEventListener("resize", function() {
// //    let width = window.innerWidth;
// //    let height = window.innerHeight;
// //    renderer.setSize(width, height);
// //    camera.aspect = width / height;
// //    camera.updateProjectionMatrix();
// //  });


//  //===================================================== model


// //  var loader = new THREE.GLTFLoader();
// //  var model;
// //  loader.load(
// //    "https://raw.githubusercontent.com/chris-ain/handlefinal/main/chess_board.glb", function(gltf) {

// //       gltf.scene.traverse( function( node ) {
// //          if ( node instanceof THREE.Mesh ) { 
// //            node.castShadow = true; 
// //            node.material.side = THREE.DoubleSide;
        
// //          }
// //        });
      
// //      model = gltf.scene;
// //      model.scale.set(1,1,1);
// //      model.position.set(0,-5,-5)
// //      scene.add(model);
// //      gsap.from(model.position, {
// //         duration: 3,
// //         y: -250,
// //         z: -1700,
// //         repeat: 0,
// //         delay: 5,
// //         ease: Power3.easeInOut,
// //         alpha:0,
// //     });
    
// //     var center = new THREE.Vector3(0, 0, 0);
// // var distanceToMove = 0.1;

// // for (var i = 0; i < model.children.length; i++) {
// //     var meshPosition = model.children[i].position;

// //     var direction = meshPosition.clone().sub(center).normalize();

// //     var moveThisFar = direction.clone().multiplyScalar(distanceToMove);

// //     model.children[i].position.add(moveThisFar);
// // }
// //      //shows all animations imported into the dopesheet in blender
// //      mixer = new THREE.AnimationMixer( gltf.scene );
        
// //      gltf.animations.forEach( ( clip ) => {
       
// //          mixer.clipAction( clip ).play();
       
// //      } );
// //  });


     
    
     


// //  renderer.setPixelRatio( window.devicePixelRatio );
// //  renderer.setSize( window.innerWidth, window.innerHeight );
// //  renderer.toneMapping = THREE.ACESFilmicToneMapping;
// //  renderer.toneMappingExposure = 1;
// //  renderer.outputEncoding = THREE.sRGBEncoding;

// // //===================================================== animate
// // var clock = new THREE.Clock();
// // function render() {
// //  requestAnimationFrame(render);
// //  var delta = clock.getDelta();
// //  if (mixer != null) mixer.update(smoothScroll);
// //  if (model) model.rotation.y += 0.00;

// //  renderer.render(scene, camera);
// // }

// // render();


// ////////


// // Chess
// console.clear();

// //===================================================== canvas
// const chessCanvas = document.getElementById("chess");

// var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// chessCanvas.appendChild(renderer.domElement);

// //===================================================== scene
// var scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x080808 );
// scene.fog = new THREE.FogExp2( 0x0e0e0e, 0.15 );


// //===================================================== camera
// var camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 5;
// camera.position.y = 1.5;

// //===================================================== lights
// var lightamb = new THREE.AmbientLight( 0xefefff, .1 )
// scene.add(lightamb);
// var light2 = new THREE.DirectionalLight(0xefefff, 1.5);
// light2.position.set(1, 1, 1).normalize();
// scene.add(light2);
// light2.shadow.camera = new THREE.OrthographicCamera( 100, 100, 100,100, 0.1, 0.1);
// light2.castShadow = true;
// var light3 = new THREE.SpotLight(0xffefef, 1);
// light3.position.set(-1, -1, -1).normalize();
// scene.add(light3);

// //===================================================== resize
// window.addEventListener("resize", function () {
//   let width = window.innerWidth;
//   let height = window.innerHeight;
//   renderer.setSize(width, height);
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// });

//  renderer.setPixelRatio( window.devicePixelRatio );
//  renderer.setSize( window.innerWidth, window.innerHeight );
//  renderer.toneMappingExposure = 1;
//  renderer.toneMapping = THREE.ACESFilmicToneMapping;
//  renderer.shadowMap.enabled = true;
//  renderer.physicallyCorrectLights;
//  renderer.outputEncoding = THREE.sRGBEncoding;
 
// //===================================================== model
// var loader = new THREE.GLTFLoader();
// var mixer;
// var model;
// var clips;
// var mixers = [];

// const group = new THREE.Group();


// loader.load(
//   "https://raw.githubusercontent.com/chris-ain/handlefinal/main/chess_board12.glb",
//   function (gltf) {
//     gltf.scene.traverse(function (node) {
//       if (node instanceof THREE.Mesh) {
//         node.castShadow = true;
//         node.material.side = THREE.DoubleSide;
        
//       }
//     });

//     model = gltf.scene;
//     group.scale.set(0.3, 0.3, 0.3);
//     group.position.set(0, 1.6, 0);
//     group.rotation.set(Math.PI /7, 0, 0);

//     group.add( model);
//     scene.add( group );



//     mixer = new THREE.AnimationMixer(model);
//     mixer.timeScale = 1;
    
//     // mixer.clipAction(gltf.animations[1]).play();
//     var action = mixer.clipAction(gltf.animations[1]);
//     clips=gltf.animations;

//     clips.forEach(element => {
//       mixer.clipAction( element ).play();
//     });
    
//     clips.paused= true;
//     createAnimation(mixer, action, gltf.animations[1]);

//     // gsap.from(model.position, {
//     //           duration: 3,
//     //           ease: Power3.easeInOut,
//     //           x:150,
           
//     //       });
//   }
// );

// var clock = new THREE.Clock();
// function render() {
  
//   requestAnimationFrame(render);
  
//   var delta = clock.getDelta();
  
//   if (mixer != null) mixer.update(delta);
//   if (group) group.rotation.y += 0.001;
  
//   renderer.render(scene, camera);
// }

// render();

// function createAnimation(mixer, action, clip) {
//   let proxy = {
    
//     get time() {
//       return mixer.time;
//     },
//     set time(value) {
  
//       clips.forEach(element => {
//         var last = mixer.clipAction( element );
//         last.paused = false;

//       });
//       mixer.setTime(value);
//       clips.forEach(element => {
//         var last = mixer.clipAction( element );
//         last.paused = true;
//       });
//     }
//   };

//   let scrollingTL = gsap.timeline({
//     scrollTrigger: {
//       offset: -100,
//       trigger: ".null",
//       scroller: ".smooth-scroll",
//       start: "top top",
//       end: "bottom",
//       pin: true,
//       scrub: true,
//       ease: Power3.easeInOut,
//       onUpdate: function () {
//         camera.updateProjectionMatrix();
//       }
//     }
//   });

//   scrollingTL.to(proxy, {
//     time: clip.duration,
//     repeat: 0,
//   });


//   let scrollingTL2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".smooth-scroll",
//       scroller: ".smooth-scroll",
//       start: "top top",
//       end: "bottom",
//       pin: true,
//       scrub: true,
//         ease: Power3.easeInOut,
// onUpdate: function () {
//         camera.updateProjectionMatrix();
//       }
//     }
//   }, );

//   scrollingTL2.to(model.rotation, {
//     x:Math.PI/5,
//     y:Math.PI,
//     z:-Math.PI/5,
   
//   });

//   let scrollingTL3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".smooth-scroll",
//       scroller: ".smooth-scroll",
//       start: "top top",
//       end: "bottom",
//       pin: true,
//       scrub: true,
//         ease: Power3.easeInOut,
// onUpdate: function () {
//         camera.updateProjectionMatrix();
//       }
//     }
//   }, );


//     scrollingTL3.to(model.position, {
//     x:2,
//     y:-2,
  
   
//   });

// }


    
// // CURTAINS
    
    
    
//     const useNativeScroll = smoothScroll.isMobile;

//   // set up our WebGL context and append the canvas to our wrapper
//   const curtains = new Curtains({
//       container: "canvas",
//       watchScroll: useNativeScroll, // watch scroll on mobile not on desktop since we're using locomotive scroll
//       pixelRatio: Math.min(1.5, window.devicePixelRatio) // limit pixel ratio for performance
//   });


  



//   curtains.onRender(() => {
//       if(useNativeScroll) {
//           // update our planes deformation
//           // increase/decrease the effect
//           planesDeformations = lerp(planesDeformations, 5, 0.075);
//           scrollEffect = lerp(scrollEffect, 5, 0.075);
//       }
//   }).onScroll(() => {
//       // get scroll deltas to apply the effect on scroll
//       const delta = curtains.getScrollDeltas();

//       // invert value for the effect
//       delta.y = -delta.y;

//       // threshold
//       if(delta.y > 60) {
//           delta.y = 60;
//       }
//       else if(delta.y < -60) {
//           delta.y = -60;
//       }
//       if(Math.abs(delta.y) > Math.abs(planesDeformations)) {
//           planesDeformations = lerp(planesDeformations, delta.y, 0.5);
//       }
    
//       if(Math.abs(delta.y) > Math.abs(scrollEffect)) {
//           scrollEffect = lerp(scrollEffect, delta.y, 0.5);
//       }

//   }).onError(() => {
//       // we will add a class to the document body to display original images
//       document.body.classList.add("no-curtains", "planes-loaded");
//   }).onContextLost(() => {
//       // on context lost, try to restore the context
//       curtains.restoreContext();
//   });

//   function updateScroll(xOffset, yOffset) {
//       // update our scroll manager values
//       curtains.updateScrollValues(xOffset, yOffset);
//   }

//   // custom scroll event
//   if(!useNativeScroll) {
//       // we'll render only while lerping the scroll
//       curtains.disableDrawing();
//       smoothScroll.on('scroll', (obj) => {
//           updateScroll(obj.scroll.x, obj.scroll.y);

//           // render scene
//           curtains.needRender();
//       });
//   }

//   // keep track of the number of plane we're currently drawing
//   const debugElement = document.getElementById("debug-value");
//   // we need to fill the counter with all our planes
//   let planeDrawn = planeElements.length;

//   const vs = `
//   precision mediump float;
  
//   // default mandatory variables
//   attribute vec3 aVertexPosition;
//   attribute vec2 aTextureCoord;

//   uniform mat4 uMVMatrix;
//   uniform mat4 uPMatrix;

//   uniform mat4 planeTextureMatrix;

//   // custom variables
//   varying vec3 vVertexPosition;
//   varying vec2 vTextureCoord;

//   uniform float uPlaneDeformation;

//   void main() {
//       vec3 vertexPosition = aVertexPosition;

//       // cool effect on scroll
//       vertexPosition.y += sin(((vertexPosition.x + 1.0) / 2.0) * 3.141592) * (sin(uPlaneDeformation / 100.0));

//       gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

//       // varyings
//       vVertexPosition = vertexPosition;
//       vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
//   }
// `;


//   const fs = `
//   precision mediump float;
  
//   varying vec3 vVertexPosition;
//   varying vec2 vTextureCoord;

//   uniform sampler2D planeTexture;

//   void main() {
//       // just display our texture
//       gl_FragColor = texture2D(planeTexture, vTextureCoord);
//   }
// `;


//   const params = {
//       vertexShader: vs,
//       fragmentShader: fs,
//       shareProgram: true, // share planes program to improve plane creation speed
//       widthSegments: 10,
//       heightSegments: 10,
//       drawCheckMargins: {
//           top: 100,
//           right: 0,
//           bottom: 100,
//           left: 0,
//       },
//       uniforms: {
//           planeDeformation: {
//               name: "uPlaneDeformation",
//               type: "1f",
//               value: 0,
//           },
//       }
//   };

//   // add our planes and handle them
//   for(let i = 0; i < planeElements.length; i++) {
//       const plane = new Plane(curtains, planeElements[i], params);

//       planes.push(plane);

//       handlePlanes(i);
//   }


//   // handle all the planes
//   function handlePlanes(index) {
//   const plane = planes[index];

//   // check if our plane is defined and use it
//   plane && plane.onLoading(function () {
//     //console.log(plane.loadingManager.sourcesLoaded);
//   }).onReady(function () {
//   plane.setRenderTarget(rgbTarget);

//   // once everything is ready, display everything
//   if (index === planes.length - 1) {
//     document.body.classList.add("planes-loaded");
//   }
// }).onRender(function () {
//   // update the uniform
//   plane.uniforms.planeDeformation.value = planesDeformations;

//   //plane.setScale(1, 1 + Math.abs(scrollEffect) / 500);
//   plane.textures[0].setScale(new Vec2(1 + Math.abs(scrollEffect) / 500));
// });
// }

//   var rgbFs = `
//   precision mediump float;

//   varying vec3 vVertexPosition;
//   varying vec2 vTextureCoord;

//   uniform sampler2D uRenderTexture;

//   uniform float uScrollEffect;

//   void main() {
//       vec2 textureCoords = vTextureCoord;

//       vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 400.0);
//       vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 3000.0);
//       vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 3000.0);

//       vec4 red = texture2D(uRenderTexture, redTextCoords);
//       vec4 green = texture2D(uRenderTexture, greenTextCoords);
//       vec4 blue = texture2D(uRenderTexture, blueTextCoords);

//       vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a * blue.a * green.a));
//       gl_FragColor = finalColor;
//   }
// `;

// var rgbTarget = new RenderTarget(curtains);


// var rgbPass = new ShaderPass(curtains,{
//   fragmentShader: rgbFs,
//   renderTarget: rgbTarget,
//   depthTest: false, // we need to disable the depth test to display that shader pass on top of the first one
//   uniforms: {
//       scrollEffect: {
//           name: "uScrollEffect",
//           type: "1f",
//           value: 0,
//       },
//   },
// });

// if(rgbPass) {
//   rgbPass.onRender(function() {
//       // update the uniform
//       rgbPass.uniforms.scrollEffect.value = scrollEffect;
//   });
// }



// gsap.from(".page_wrap", {
//     scrollTrigger: {
//         trigger: ".page_wrap",
//         scroller: ".smooth-scroll",
//         scrub: true,
//         start: "top top",
//         end: "bottom bottom",

//         onUpdate: (self) => {
//             // camera.position.z = 50 * 3.14 * self.progress;
            
//         },
//     },
// });

// ScrollTrigger.addEventListener("refresh", () => smoothScroll.update());

// ScrollTrigger.refresh();

// });




//INTRO//

gsap.registerPlugin(ScrollTrigger);

//MAIN//

// ScrollTrigger.defaults({
//   markers: true;
// })

let scroll;
const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');
const loader = select('.js-loader');
const loaderInner = select('.js-loader__inner');
const progressBar = select('.js-loader__progress');
const loaderMask = select('.js-loader__mask');

////////BARBA INIT//////////
document.addEventListener("DOMContentLoaded", function(event) {
   


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
}

  });


//LOCOMOTIVE//
function initSmoothScroll(container) {

window.addEventListener("load", () => {
  function lerp (start, end, amt){
      return (1 - amt) * start + amt * end *.5;
  }
  
  // we will keep track of all our planes in an array
  const planes = [];
  let scrollEffect = 0;
  var planesDeformations = 0


  // get our planes elements
  const planeElements = document.getElementsByClassName("plane_test");

  // handle smooth scroll and update planes positions
  const smoothScroll = new LocomotiveScroll({
      el: document.getElementById('page-content'),
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
			height: window.innerHeight
		};
	},

	pinType: document.querySelector(".smooth-scroll").style.transform
		? "transform"
		: "fixed"
});






    // var tl_zoom = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".section_zoom",
    //       scroller: ".smooth-scroll",
    //       scrub: true,
    
    //       start: "top top",
    //       end: "bottom bottom",
    //       ease: "none"
          
    //     }
    //   });



    //   tl_zoom.from(".zoom_image", {scale: 5.5, });


      



// const ratio = 0.5625;

// function newSize() {
//   let w = window.innerWidth;
//   let h = window.innerHeight;
//   if (w > h * (16 / 9)) {
//     gsap.set("#pin-overlay", { attr: { width: w, height: w * ratio } });
//   } else {
//     gsap.set("#pin-overlay", { attr: { width: h / ratio, height: h } });
//   }
//   //let data = svg.getBoundingClientRect();
//   //gsap.set("#overlay", {x:w/2 - data.width/2});
//   //gsap.set("#overlay", {y:h/2 - data.height/2});
// }

// newSize();
// window.addEventListener("resize", newSize);



///

// gsap.from("p", {
// 	scrollTrigger: {
// 		trigger: ".sec-p",
// 		// markers: true,
// 		start: "top center",
// 		scroller: ".smooth-scroll",
// 		toggleActions: "play none none reverse"
// 	},
// 	opacity: 0,
// 	y: 50,
// 	duration: 1,
// 	ease: "power3.out"
// });


    
// CURTAINS
 
// Chess
console.clear();

//===================================================== canvas
const chessCanvas = document.getElementById("chess");

var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
renderer.setSize(window.innerWidth, window.innerHeight);
chessCanvas.appendChild(renderer.domElement);

//===================================================== scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x080808 );
scene.fog = new THREE.FogExp2( 0x0e0e0e, 0.15 );


////

let tooLazyToHandleLoadingProperly = 0;
const loadingLol = () => tooLazyToHandleLoadingProperly++;
const ENV_URL = 'https://s.halvves.com/gregzaal-venicedawn.jpg';
const reflectionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol);
const refractionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol);
reflectionCube.mapping = THREE.EquirectangularReflectionMapping;
refractionCube.mapping = THREE.EquirectangularRefractionMapping;
scene.environment = reflectionCube;


//===================================================== camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
camera.position.y = 1.5;

//===================================================== lights
var lightamb = new THREE.AmbientLight( 0xefefff, .1 )
scene.add(lightamb);
var light2 = new THREE.DirectionalLight(0xefefff, );
light2.position.set(1, 1, 1).normalize();
scene.add(light2);
light2.shadow.camera = new THREE.OrthographicCamera( 100, 100, 100,100, 0.1, 0.1);
light2.castShadow = true;
var light3 = new THREE.SpotLight(0xffefef, .5);
light3.position.set(-1, -1, -1).normalize();
scene.add(light3);

//===================================================== resize
window.addEventListener("resize", function () {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

 renderer.setPixelRatio( window.devicePixelRatio );
 renderer.setSize( window.innerWidth, window.innerHeight );
 renderer.toneMappingExposure = .4;
 renderer.toneMapping = THREE.ACESFilmicToneMapping;
 renderer.shadowMap.enabled = true;
 renderer.physicallyCorrectLights;
 renderer.outputEncoding = THREE.sRGBEncoding;
 
//===================================================== model
var loader = new THREE.GLTFLoader();
var mixer;
var model;
var clips;
var mixers = [];

const group = new THREE.Group();


loader.load(
  "https://raw.githubusercontent.com/chris-ain/handlefinal/main/chess_board17.glb",
  function (gltf) {
    gltf.scene.traverse(function (node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.material.side = THREE.DoubleSide;
        
      }
    });

    model = gltf.scene;
    group.scale.set(0.3, 0.3, 0.3);
    group.position.set(0, 1.6, 0);
    group.rotation.set(Math.PI /7, 0, 0);

    group.add( model);
    scene.add( group );



    mixer = new THREE.AnimationMixer(model);
    mixer.timeScale = 1;
    
    // mixer.clipAction(gltf.animations[1]).play();
    var action = mixer.clipAction(gltf.animations[1]);
    clips=gltf.animations;

    clips.forEach(element => {
      mixer.clipAction( element ).play();
    });
    
    clips.paused= true;
    createAnimation(mixer, action, gltf.animations[1]);

    // gsap.from(model.position, {
    //           duration: 3,
    //           ease: Power3.easeInOut,
    //           x:150,
           
    //       });
  }
);

var clock = new THREE.Clock();
function render() {
  
  requestAnimationFrame(render);
  
  var delta = clock.getDelta();
  
  if (mixer != null) mixer.update(delta);
  if (group) group.rotation.y += 0.001;
  
  renderer.render(scene, camera);
}

render();

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
      offset: -100,
      trigger: ".null",
      scroller: ".smooth-scroll",
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
      trigger: ".smooth-scroll",
      scroller: ".smooth-scroll",
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
      trigger: ".smooth-scroll",
      scroller: ".smooth-scroll",
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
   
    
    
    const useNativeScroll = smoothScroll.isMobile;

  // set up our WebGL context and append the canvas to our wrapper
  const curtains = new Curtains({
      container: "canvas",
      watchScroll: useNativeScroll, // watch scroll on mobile not on desktop since we're using locomotive scroll
      pixelRatio: Math.min(1.5, window.devicePixelRatio) // limit pixel ratio for performance
  });


  



  curtains.onRender(() => {
      if(useNativeScroll) {
          // update our planes deformation
          // increase/decrease the effect
          planesDeformations = lerp(planesDeformations, 5, 0.075);
          scrollEffect = lerp(scrollEffect, 5, 0.075);
      }
  }).onScroll(() => {
      // get scroll deltas to apply the effect on scroll
      const delta = curtains.getScrollDeltas();

      // invert value for the effect
      delta.y = -delta.y;

      // threshold
      if(delta.y > 60) {
          delta.y = 60;
      }
      else if(delta.y < -60) {
          delta.y = -60;
      }
      if(Math.abs(delta.y) > Math.abs(planesDeformations)) {
          planesDeformations = lerp(planesDeformations, delta.y, 0.5);
      }
    
      if(Math.abs(delta.y) > Math.abs(scrollEffect)) {
          scrollEffect = lerp(scrollEffect, delta.y, 0.5);
      }

  }).onError(() => {
      // we will add a class to the document body to display original images
      document.body.classList.add("no-curtains", "planes-loaded");
  }).onContextLost(() => {
      // on context lost, try to restore the context
      curtains.restoreContext();
  });

  function updateScroll(xOffset, yOffset) {
      // update our scroll manager values
      curtains.updateScrollValues(xOffset, yOffset);
  }

  // custom scroll event
  if(!useNativeScroll) {
      // we'll render only while lerping the scroll
      curtains.disableDrawing();
      smoothScroll.on('scroll', (obj) => {
          updateScroll(obj.scroll.x, obj.scroll.y);

          // render scene
          curtains.needRender();
      });
  }

  // keep track of the number of plane we're currently drawing
  const debugElement = document.getElementById("debug-value");
  // we need to fill the counter with all our planes
  let planeDrawn = planeElements.length;

  const vs = `
  precision mediump float;
  
  // default mandatory variables
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  uniform mat4 planeTextureMatrix;

  // custom variables
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform float uPlaneDeformation;

  void main() {
      vec3 vertexPosition = aVertexPosition;

      // cool effect on scroll
      vertexPosition.y += sin(((vertexPosition.x + 1.0) / 2.0) * 3.141592) * (sin(uPlaneDeformation / 100.0));

      gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

      // varyings
      vVertexPosition = vertexPosition;
      vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
  }
`;


  const fs = `
  precision mediump float;
  
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D planeTexture;

  void main() {
      // just display our texture
      gl_FragColor = texture2D(planeTexture, vTextureCoord);
  }
`;


  const params = {
      vertexShader: vs,
      fragmentShader: fs,
      shareProgram: true, // share planes program to improve plane creation speed
      widthSegments: 10,
      heightSegments: 10,
      drawCheckMargins: {
          top: 100,
          right: 0,
          bottom: 100,
          left: 0,
      },
      uniforms: {
          planeDeformation: {
              name: "uPlaneDeformation",
              type: "1f",
              value: 0,
          },
      }
  };

  // add our planes and handle them
  for(let i = 0; i < planeElements.length; i++) {
      const plane = new Plane(curtains, planeElements[i], params);

      planes.push(plane);

      handlePlanes(i);
  }


  // handle all the planes
  function handlePlanes(index) {
  const plane = planes[index];

  // check if our plane is defined and use it
  plane && plane.onLoading(function () {
    //console.log(plane.loadingManager.sourcesLoaded);
  }).onReady(function () {
  plane.setRenderTarget(rgbTarget);

  // once everything is ready, display everything
  if (index === planes.length - 1) {
    document.body.classList.add("planes-loaded");
  }
}).onRender(function () {
  // update the uniform
  plane.uniforms.planeDeformation.value = planesDeformations;

  //plane.setScale(1, 1 + Math.abs(scrollEffect) / 500);
  plane.textures[0].setScale(new Vec2(1 + Math.abs(scrollEffect) / 500));
});
}

  var rgbFs = `
  precision mediump float;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D uRenderTexture;

  uniform float uScrollEffect;

  void main() {
      vec2 textureCoords = vTextureCoord;

      vec2 redTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 400.0);
      vec2 greenTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 3000.0);
      vec2 blueTextCoords = vec2(vTextureCoord.x, vTextureCoord.y - uScrollEffect / 3000.0);

      vec4 red = texture2D(uRenderTexture, redTextCoords);
      vec4 green = texture2D(uRenderTexture, greenTextCoords);
      vec4 blue = texture2D(uRenderTexture, blueTextCoords);

      vec4 finalColor = vec4(red.r, green.g, blue.b, min(1.0, red.a * blue.a * green.a));
      gl_FragColor = finalColor;
  }
`;

var rgbTarget = new RenderTarget(curtains);


var rgbPass = new ShaderPass(curtains,{
  fragmentShader: rgbFs,
  renderTarget: rgbTarget,
  depthTest: false, // we need to disable the depth test to display that shader pass on top of the first one
  uniforms: {
      scrollEffect: {
          name: "uScrollEffect",
          type: "1f",
          value: 0,
      },
  },
});

if(rgbPass) {
  rgbPass.onRender(function() {
      // update the uniform
      rgbPass.uniforms.scrollEffect.value = scrollEffect;
  });
}



gsap.from(".page_wrap", {
    scrollTrigger: {
        trigger: ".page_wrap",
        scroller: ".smooth-scroll",
        scrub: true,
        start: "top top",
        end: "bottom bottom",

        onUpdate: (self) => {
            // camera.position.z = 50 * 3.14 * self.progress;
            
        },
    },
});

ScrollTrigger.addEventListener("refresh", () => smoothScroll.update());

ScrollTrigger.refresh();

});
}

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
      delay: 1
    });
    
    tlLoaderOut
    .to(loader, {yPercent: -100}, 0.2)
    .from('.site-main', {y: 150}, 0.2);
  
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
    select('body').classList.remove('is-loading');
    initImageParallax();
  }
  
  //initPageTransitions();
  
  
  /**
   * Parallax Images
   */
  function initImageParallax() {
      
    // select all sections .with-parallax
    gsap.utils.toArray('.is-parallax').forEach(section => {
  
      // get the image
      const image = section.querySelector('img');
  
      // create tween for the image
      gsap.to(image, {
        scaleX: 1.2,
        scaleY:1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: section,
          scroller: '.scroll-container',
          start: 'top bottom',
          scrub: true
        }
      });
  
    });
  


  }
  

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {
  var response = newPageRawHTML.replace(/(<\/?)html( .+?)?>/gi, '$1nothtml$2>', newPageRawHTML)
  var bodyClasses = $(response).filter('nothtml').attr('data-wf-page')
  $('html').attr('data-wf-page', bodyClasses)
});

Barba.Pjax.start();

export { handlemain};