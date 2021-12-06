 
import * as THREE from 'https://threejs.org/build/three.module.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

var Composer;
let stats, fxaaPass;
const objects = [];
const selects = [];
let gui;
const spheres = [];
var texLoader = new THREE.TextureLoader();

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
    scene.fog = new THREE.FogExp2( 0x090909,.15, 100 );

    // ////
    // const paramsts = {
    //   exposure: .1,
    //   bloomStrength: .8,
    //   bloomThreshold: 0,
    //   bloomRadius: 0
    // };
    let tooLazyToHandleLoadingProperly = 0;
    const loadingLol = () => tooLazyToHandleLoadingProperly++;
    const ENV_URL = "https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/617481136662332a5d3e39bb_gregzaal-venicedawn-1.jpg";
    const reflectionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol);
    const refractionCube = new THREE.TextureLoader().load(ENV_URL, loadingLol);
    reflectionCube.mapping = THREE.EquirectangularReflectionMapping;
    refractionCube.mapping = THREE.EquirectangularRefractionMapping;
    scene.environment = reflectionCube;
    var normal = texLoader.load( 'https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/61885cd22ccdfed3d95febbf_download.jpg');

    //===================================================== camera
    
    const transmissionoptions = {
 
      transmission: 1,
      thickness: 15,
      roughness: 0.2,
      envMapIntensity: 2.6,
      clearcoat: 1,
      clearcoatRoughness: 0.0,
      // normalScale: .31,
      // clearcoatNormalScale: 0,
      // normalRepeat: 1
    };
    
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 1.5;




    //===================================================== lights
   
   
   
    var lightamb = new THREE.AmbientLight(0xf7f7f7, 0.3);
    scene.add(lightamb);
    var light2 = new THREE.DirectionalLight(0xef7f7f7,10);
    light2.position.set(1, 1, 1).normalize();
    scene.add(light2);
    light2.shadow.camera = new THREE.OrthographicCamera(
      100,
      100,
      100,
      100,
      0.1,
      0.1
    );
    light2.castShadow = true;
    var light3 = new THREE.SpotLight(0xf7f7f7,10);
    light3.position.set(-1, -1, -1).normalize();
    scene.add(light3);
    
    const paramst = {
			enableSSRr: true,
			autoRotate: true,
      exposure: 1,
				bloomStrength: 1.5,
				bloomThreshold: 0,
				bloomRadius: 0
		};




    const materialTrans = new THREE.MeshPhysicalMaterial({
      transmission: transmissionoptions.transmission,
      thickness: transmissionoptions.thickness,
      roughness: transmissionoptions.roughness,
      envMap: reflectionCube,
      envMapIntensity: transmissionoptions.envMapIntensity,
      clearcoat: transmissionoptions.clearcoat,
      clearcoatRoughness: transmissionoptions.clearcoatRoughness,
      // normalScale: new THREE.Vector2(transmissionoptions.normalScale),
      // normalMap: normal,
      // clearcoatNormalMap: normalMapTexture,
      // clearcoatNormalScale: new THREE.Vector2(transmissionoptions.clearcoatNormalScale)
    });
    const geometrySphere = new THREE.SphereGeometry( 2, 100, 100 );
    const sphere = new THREE.Mesh( geometrySphere, materialTrans );

    for ( let i = 0; i < 10; i ++ ) {

      const mesh = new THREE.Mesh( geometrySphere, materialTrans );

      mesh.position.x = Math.random() * 5 - 5;
      mesh.position.y = Math.random() * 5 - 5;
      mesh.position.z = Math.random() * 5 - 5;

      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * .4 +0;

    
      spheres.push( mesh );

    }


    
     //===================================================== model

     var normal = texLoader.load( 'https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/61885cd22ccdfed3d95febbf_download.jpg');
 



     const materialmat = new THREE.MeshMatcapMaterial({
       normalMap: normal,
       normalScale: new THREE.Vector2( .04, .04 ),
 
     })
 
     const matcapTexture = texLoader.load('https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/618554e0f8540f80a52aaf77_images.jpg')
     materialmat.matcap = matcapTexture
 
     const materialmat2 = new THREE.MeshMatcapMaterial({
       normalMap: normal,
       normalScale: new THREE.Vector2( .04, .04 ),
 
     })
 
     const matcapTexture2 = texLoader.load('https://uploads-ssl.webflow.com/612d2c01db57a270ec502b3f/6185565a02d38140d4f7320d_images-1.jpg')
     materialmat2.matcap = matcapTexture2
 
 
     var materialwhite = new THREE.MeshPhysicalMaterial({
       roughness: 0,
       transmission: 1,
       thickness: 5,
       // envMap: reflectionCube, 
       // envMapIntensity:.2     
 
     });
     
 
     var materialcool =   new THREE.MeshPhysicalMaterial({
       color: 0xffffff,
 
       roughness: .25,
       transmission: 1,
       thickness: 4,
       envMap: reflectionCube,      
      envMapIntensity:.2     
     });
 



var loader = new GLTFLoader();
var mixer;
var model;
var clips;
var mixers = [];

const group = new THREE.Group();


loader.load(
  "https://raw.githubusercontent.com/chris-ain/Handleweb/master/models/chess_board_bake4.glb",
  function (gltf) {
    gltf.castShadow = true;
    gltf.receiveShadow = true;

    gltf.scene.traverse(function (node) {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    
    // gltf.scene.children
    // .filter((child) => child.name.includes("Cube"))
    // .forEach((mesh) => {
    //   mesh.material = materialTrans;      

    // });

    // gltf.scene.children
    // .filter((child) => child.name.includes("Mesh"))
    // .forEach((mesh) => {
    //   mesh.material = materialTrans;      

    // });

    gltf.scene.children
    .filter((child) => child.name.includes("weiss"))
    .forEach((mesh) => {
      mesh.material = materialcool;      

    });

  
    
    model = gltf.scene;
    expModel = gltf.scene;
    model.position.set(0,-.01, 0);

    group.scale.set(0.31, 0.31, 0.31);
    group.position.set(0,.5, 0);

    group.rotation.set(0,-Math.PI/2, 0);
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
    // model.material.needsUpdate = true;
  
    
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

    
  
  }
);
    
   
        
     //===================================================== Postprocessing
    


  //   //===================================================== resize
    window.addEventListener("resize", function () {
      let width = window.innerWidth;
      let height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const pixelRatio = renderer.getPixelRatio();

    });




    // const handlePointerMove = ({ clientX, clientY }) => {
    //   const centerPoint = {
    //     x: window.innerWidth / 2,
    //     y: window.innerHeight / 2,
    //   };
    //   const z = (clientX - centerPoint.x) / 6000;
    //   const x = (clientY - centerPoint.y) / 6000;
    //   gsap.to(camera.rotation, {
    //     x: -x,
    //     y: -z,
    //     duration: 1,
    //     ease: "power2.out",
    //     onUpdate: renderer.render(scene, camera),
    //   });

    // };
    // window.addEventListener("pointermove", handlePointerMove);
 

    // const handlePointerMove = ({ clientX, clientY }) => {
    //   const centerPoint = {
    //     x: window.innerWidth / 2,
    //     y: window.innerHeight / 2,
    //   };
    //   const z = (clientX - centerPoint.x) / 60;
    //   const x = (clientY - centerPoint.y) / 60;
    //   gsap.to(sphere.position, {
    //     x: x,
    //     y: z,
    //     duration: 1,
    //     ease: "power2.out",
    //     onUpdate: renderer.render(scene, camera),
    //   });
    // };
    // window.addEventListener("pointermove", handlePointerMove);
 




    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();
    var intersects = new THREE.Vector3();
    
    function onMouseMove(e) {
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(plane, intersects);
      model.position.set(intersects.x, intersects.y, intersects.z);
    }
    



    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMappingExposure = 1;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.physicallyCorrectLights;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaFactor = 5;


  

var clock = new THREE.Clock();
function render() {

  id = requestAnimationFrame(render);
  renderer.render(scene, camera);
  // stats.update();
  const timer = 0.0001 * Date.now();

  var delta = clock.getDelta();

  if (mixer != null) mixer.update(delta);
  if (group) group.rotation.y += 0.001;
  for ( let i = 0, il = spheres.length; i < il; i ++ ) {

					const sphere = spheres[ i ];

					sphere.position.x = 5 * Math.cos( timer + i );
					sphere.position.y = 5 * Math.sin( timer + i * 1.1 );

				}

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
      trigger: ".smooth-scroll",
      scroller: ".smooth-scroll",
      start: "top 10",
      end: "bottom",
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


};
