
    
import * as THREE from 'https://threejs.org/build/three.module.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';


// var Composer;
// let stats, fxaaPass;
const objects = [];
const selects = [];
export var id;
export  var scene;
export var expModel;
export function chessScene(smoothScroll) {


    //===================================================== canvas
    const chessCanvas = document.getElementById("chess");
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true, canvas: chessCanvas});
    renderer.setSize(window.innerWidth, window.innerHeight);

    //===================================================== scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0xf7f7f7, 0.005 );
    const ENV_URL = "https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/617481136662332a5d3e39bb_gregzaal-venicedawn-1.jpg";
    const reflectionCube = new THREE.TextureLoader().load(ENV_URL,);
    reflectionCube.mapping = THREE.EquirectangularReflectionMapping;
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
   
   
    var lightamb = new THREE.AmbientLight(0xf7f7f7, 0.1);
    scene.add(lightamb);
    var light2 = new THREE.DirectionalLight(0xef7f7f7);
    light2.position.set(1, 1, .1).normalize();
    scene.add(light2);
    light2.castShadow = true;
    var light3 = new THREE.SpotLight(0xf7f7f7, .1);
    light3.position.set(-1, -1, -1).normalize();
    scene.add(light3);
  
     //===================================================== model


    var loader = new GLTFLoader();
    var mixer;
    var model;
    var clips;
    const group = new THREE.Group();

    loader.load(
      "https://raw.githubusercontent.com/chris-ain/handlefinal/main/chess_board21.glb",
      function (gltf) {
        gltf.castShadow = true;
        gltf.receiveShadow = true;

        gltf.scene.traverse(function (node) {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.side = THREE.DoubleSide;
            selects.push(node);
            objects.push(node);
          }
    });

    model = gltf.scene;
    expModel = gltf.scene;
    group.scale.set(0.31, 0.31, 0.31);
    group.position.set(0,.65, 0);

    group.add( model);
    scene.add( group );

    mixer = new THREE.AnimationMixer(model);
    mixer.timeScale = 1;

    var action = mixer.clipAction(gltf.animations[1]);
    clips=gltf.animations;

    clips.forEach(element => {
      mixer.clipAction( element ).play();
    });

    clips.paused= true;
    createAnimation(mixer, action, gltf.animations[1]);
  
  }
); 
   
  //   //===================================================== resize
    window.addEventListener("resize", function () {
      let width = window.innerWidth;
      let height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const pixelRatio = renderer.getPixelRatio();

    });


    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  

var clock = new THREE.Clock();
function render() {

  id = requestAnimationFrame(render);
  renderer.render(scene, camera);

  var delta = clock.getDelta();

  if (mixer != null) mixer.update(delta);
  if (group) group.rotation.y += 0.001;

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
  });

    scrollingTL3.to(model.position, {
    x:2,
    y:-2,

  });

  let scrollingTL4 = gsap.timeline({
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

    scrollingTL4.to('#chess', {
    opacity:0,

  });
  
}

};
