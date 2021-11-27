// Marzo 16 2021 http://stemkoski.github.io/Three.js/Shader-Animate.html
// https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_cube.html
import '../scss/styles.scss';
import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import sand512 from '../public/images/textures/brownTexture.png'

import vertexShader from '../public/shaders/vertexShader.glsl'
import fragmentShader from '../public/shaders/fragmentShader.glsl'

// Required THREEjs stuff
import { MeshBasicMaterial, Vector3 } from 'three';

import Module from './modules/module'

// THREEjs basic Scene stuff
const scene = new THREE.Scene();
let camera, renderer, controls;
let isMobile;

/**
  * Init basic 3D Scene Elements
  */
let init = () => {

	// Show Stats like FPS
	(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})()

    // Checks if app is running on a mobile device
	isMobile = false;

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}

	let SCREEN_WIDTH = window.innerWidth,
		SCREEN_HEIGHT = window.innerHeight,
		VIEW_ANGLE = 45,
		ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
		NEAR = 0.1,
		FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0, 18, 50);
	// camera.lookAt(scene.position);
	
	const light = new THREE.DirectionalLight(0xFFFFFF, 1);
	light.position.set(-10, 10, 30);
	scene.add(light);

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor ( "#000000");
    document.body.appendChild( renderer.domElement );
    // controls = new OrbitControls( camera, renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	// scene.add( new THREE.AxesHelper( 500 ));
	// scene.add( new THREE.GridHelper( 30, 10 ));
	
	// scene.add(renderSkybox());
    animate();
}

/**
 * Updates objects on each frame
 */
let animate = () => {
 
    requestAnimationFrame( animate );
	// controls.update();

    renderer.render( scene, camera );
}

/**
  * Handles window resize events
  */
let onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

init();