// src/components/threeCube.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function initThreeCube() {
  const cubeCanvas = document.getElementById('three-cube');
  if (!cubeCanvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, cubeCanvas.clientWidth / cubeCanvas.clientHeight, 0.1, 1000);
  camera.position.set(0, 2, 7);

  const renderer = new THREE.WebGLRenderer({ canvas: cubeCanvas, alpha: true, antialias: true });
  renderer.setSize(cubeCanvas.clientWidth, cubeCanvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene.add(new THREE.AmbientLight(0xffffff, 1.2));
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  controls.minPolarAngle = Math.PI / 3;
  controls.maxPolarAngle = Math.PI / 1.8;
  controls.target.set(0, 1, 0);
  controls.update();

  const loader = new GLTFLoader();
  loader.load(
    '/models/dev-setup.glb',
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1);
      model.position.set(0, -1, 0);
      scene.add(model);
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}
