
    
import * as THREE from 'https://threejs.org/build/three.module.js';
import Stats from 'https://threejs.org/examples/jsm/libs/stats.module.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';
import { CopyShader } from 'https://threejs.org/examples/jsm/shaders/CopyShader.js';
import { FXAAShader } from 'https://threejs.org/examples/jsm/shaders/FXAAShader.js';
import { GUI } from 'https://threejs.org/examples/jsm/libs/dat.gui.module.js';
import { SSRrPass } from 'https://threejs.org/examples/jsm/postprocessing/SSRrPass.js';
import { ShaderPass as spass } from 'https://threejs.org/examples/jsm/postprocessing/ShaderPass.js';
import { GammaCorrectionShader } from 'https://threejs.org/examples/jsm/shaders/GammaCorrectionShader.js';
import { EffectComposer } from 'https://threejs.org/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass as rpass } from 'https://threejs.org/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://threejs.org/examples/jsm/postprocessing/UnrealBloomPass.js';
var Composer;
let stats, fxaaPass;
const objects = [];
const selects = [];
let gui;

export function chessScene() {


    //===================================================== canvas
    const chessCanvas = document.getElementById("chess");
    stats = new Stats();

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    chessCanvas.appendChild(renderer.domElement);

    //===================================================== scene
    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0xf7f7f7, 0.005 );

    // ////
    // const paramsts = {
    //   exposure: .1,
    //   bloomStrength: .8,
    //   bloomThreshold: 0,
    //   bloomRadius: 0
    // };
    let tooLazyToHandleLoadingProperly = 0;
    const loadingLol = () => tooLazyToHandleLoadingProperly++;
    const ENV_URL = "https://s.halvves.com/gregzaal-venicedawn.jpg";
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
   
   
   
    var lightamb = new THREE.AmbientLight(0xf7f7f7, 0.1);
    scene.add(lightamb);
    var light2 = new THREE.DirectionalLight(0xef7f7f7);
    light2.position.set(1, 1, .1).normalize();
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
    var light3 = new THREE.SpotLight(0xf7f7f7, .1);
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

  



    
     //===================================================== model




var loader = new GLTFLoader();
var mixer;
var model;
var clips;
var mixers = [];

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
        console.log(selects)
      }
    });

    model = gltf.scene;
    group.scale.set(0.31, 0.31, 0.31);
    group.position.set(0,.65, 0);
    // group.rotation.set(Math.PI /7, 0, 0);

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
    
    
    
    
        
     //===================================================== Postprocessing
    
    
    
    
     const pixelRatio = renderer.getPixelRatio();

    
    
    const paramsts = {
			enableSSRr: true,
			autoRotate: true,
		};
    let composer;
		let ssrrPass;
    const renderScene = new rpass( scene, camera );


    composer = new EffectComposer( renderer );
    composer.addPass( new spass( GammaCorrectionShader ) );

    composer.addPass( renderScene );
    const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
				bloomPass.threshold = paramst.bloomThreshold;
				bloomPass.strength = paramst.bloomStrength;
				bloomPass.radius = paramst.bloomRadius;
    composer.addPass( bloomPass );
   
   
   
    ssrrPass = new SSRrPass( {
      renderer,
      scene,
      camera,
      width: innerWidth,
      height: innerHeight,
      selects: selects
    } );

    composer.addPass( ssrrPass );

    fxaaPass = new spass( FXAAShader );

    // fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( container.offsetWidth * pixelRatio );
    // fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( container.offsetHeight * pixelRatio );
	const copyPass = new spass( CopyShader );
      composer.addPass( ssrrPass );


    
  // GUI

  gui = new GUI();
  gui.add( paramst, 'enableSSRr' ).name( 'Enable SSRr' );
  ssrrPass.ior = 1.1;
  gui.add( ssrrPass, 'ior' ).name( 'IOR' ).min( .1 ).max( 1.5 ).step( .0001 );
  gui.add( ssrrPass, 'fillHole' );
  gui.add( paramst, 'autoRotate' ).onChange( () => {


  } );

  gui.add( paramst, 'exposure', 0.1, 2 ).onChange( function ( value ) {

    renderer.toneMappingExposure = Math.pow( value, 4.0 );

  } );

  gui.add( paramst, 'bloomThreshold', 0.0, 1.0 ).onChange( function ( value ) {

    bloomPass.threshold = Number( value );

  } );

  gui.add( paramst, 'bloomStrength', 0.0, 3.0 ).onChange( function ( value ) {

    bloomPass.strength = Number( value );

  } );

  gui.add( paramst, 'bloomRadius', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {

    bloomPass.radius = Number( value );

  } );

  const folder = gui.addFolder( 'more settings' );
  folder.add( ssrrPass, 'specular' );
  folder.add( ssrrPass.specularMaterial, 'metalness' ).min( 0 ).max( 10 ).step( .01 );
  folder.add( ssrrPass.specularMaterial, 'roughness' ).min( 0 ).max( 10 ).step( .01 );
  folder.add( ssrrPass, 'output', {
    'Default': SSRrPass.OUTPUT.Default,
    'SSRr Only': SSRrPass.OUTPUT.SSRr,
    'Beauty': SSRrPass.OUTPUT.Beauty,
    'Depth': SSRrPass.OUTPUT.Depth,
    'DepthSelects': SSRrPass.OUTPUT.DepthSelects,
    'NormalSelects': SSRrPass.OUTPUT.NormalSelects,
    'Refractive': SSRrPass.OUTPUT.Refractive,
    'Specular': SSRrPass.OUTPUT.Specular,
  } ).onChange( function ( value ) {

    ssrrPass.output = parseInt( value );

  } );
  ssrrPass.surfDist = 0.0015;
  folder.add( ssrrPass, 'surfDist' ).min( 0 ).max( .005 ).step( .0001 );
  ssrrPass.maxDistance = 50;
  folder.add( ssrrPass, 'maxDistance' ).min( 0 ).max( 100 ).step( .001 );
  folder.add( ssrrPass, 'infiniteThick' );
  // folder.open()
  // gui.close()
    //===================================================== resize
    window.addEventListener("resize", function () {
      let width = window.innerWidth;
      let height = window.innerHeight;
      // renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      Composer.setSize(canvas.clientWidth, canvas.clientHeight);
      const pixelRatio = renderer.getPixelRatio();

      // fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( container.offsetWidth * pixelRatio );
      // fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( container.offsetHeight * pixelRatio );
    });




    renderer.setClearColor( 0x000000, 0 );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMappingExposure = .8;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.physicallyCorrectLights;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaFactor = 5;


  

var clock = new THREE.Clock();
function render() {

  requestAnimationFrame(render);
  renderer.render(scene, camera);
  stats.update();

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
      trigger: ".site_main",
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


};
