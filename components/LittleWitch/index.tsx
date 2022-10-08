import { NextPage } from "next";
import { useEffect, useRef } from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const LittleWitch: NextPage = () => {
    const mainElement = useRef<HTMLDivElement>(null);

  useEffect(():void => {
    const WIDTH = mainElement.current?.getBoundingClientRect().width || window.innerWidth;  
    const HEIGHT = mainElement.current?.getBoundingClientRect().height || window.innerHeight;
    const scene = new THREE.Scene();
    
    //Init camera
    const camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, 1, 1000);
    scene.add(camera);

     //Init renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    mainElement.current?.appendChild( renderer.domElement );

     //Init controller
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    camera.position.set(-100, 10, 0);
    controls.update();

    //Add some light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    scene.add(ambientLight);

    function animate() {
      requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
    }	

    const gr = new THREE.Group();
    const loader = new GLTFLoader();
    loader.load('space/scene.gltf',
      function ( gltf: any ) {
        gr.add(gltf.scene);
        const loader1 = new GLTFLoader();
        loader1.load('little-witch/scene.gltf',
          function ( gltf: any ) {
            gr.add(gltf.scene);
            scene.add(gr);
            animate();
          }
        );
      },
      function ( xhr ) {
        console.log( xhr );
      },
      function ( error ) {
        console.log( 'An error happened' );
      }
    );
  }, []);

  return (
    <div ref={mainElement}></div>
  );
}

export default LittleWitch;