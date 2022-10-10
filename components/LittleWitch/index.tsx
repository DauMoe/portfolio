import { PerspectiveCameraProps } from "@react-three/fiber";
import { NextPage } from "next";
import { useEffect, useRef, useState } from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const LittleWitch: NextPage = () => {
  const mainElement = useRef<HTMLDivElement>(null);
  const [camera, setCamera] = useState<PerspectiveCameraProps>();

  useEffect(():void => {
    const WIDTH = mainElement.current?.getBoundingClientRect().width || window.innerWidth;  
    const HEIGHT = mainElement.current?.getBoundingClientRect().height || window.innerHeight;
    const scene = new THREE.Scene();

    //Set background color
    // scene.background = new THREE.Color( 0xa0a0a0 );
    // scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );
    
    //Init camera
    const camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, 1, 100);
    setCamera(camera);
    scene.add(camera);

     //Init renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    mainElement.current?.appendChild( renderer.domElement );

     //Init controller
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    camera.position.set(0, 3, 0);
    controls.update();

    //Add some light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    scene.add(ambientLight);

    function animate() {
      requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
    }	

    const loader = new GLTFLoader();
    loader.load('space/scene.gltf',
      function(gltf) {
        var box = new THREE.Box3().setFromObject(gltf.scene);
        var center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub( center ); // center the model
        scene.add(gltf.scene);
        animate();
      },
      function ( xhr ) {
        console.log( xhr );
      },
      function ( error ) {
        console.log( 'An error happened' );
      }
    );
  }, []);

  const IncreaseCamera = () => {
    camera?.position.set(0, 10, 0);
    camera?.updateProjectionMatrix();
    setCamera(camera);
  }

  return (
    <>
      <div style={{position: "absolute", top: 0, right: 0, width: 100, height: 100, backgroundColor: 'green'}}>
        <button onClick={IncreaseCamera}>increase</button>
      </div>
      <div style={{display: "inline-block"}} ref={mainElement}></div>
    </>
  );
}

export default LittleWitch;