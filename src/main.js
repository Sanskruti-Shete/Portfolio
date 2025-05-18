import './style.css';
import Typed from 'typed.js';



document.addEventListener("DOMContentLoaded", () => {
  new Typed('#typing-name', {
    strings: ["Sanskruti Shete", "Frontend Developer", "Creative Designer"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });
});
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});
import './style.css';

const words = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Node.js', 'MongoDB', 'Express',
  'Git', 'GitHub', 'Figma', 'Tailwind',
  'Bootstrap', 'Vite', 'Python', 'Java'
];

const container = document.querySelector('.tech-background');

function createFloatingWord() {
  const span = document.createElement('span');
  span.textContent = words[Math.floor(Math.random() * words.length)];
  
  span.style.left = `${Math.random() * 100}%`;
  span.style.fontSize = `${Math.random() * 1 + 0.7}rem`;
  span.style.animationDuration = `${10 + Math.random() * 20}s`;

  container.appendChild(span);

  // Remove element after animation
  setTimeout(() => {
    container.removeChild(span);
  }, 30000);
}

// Create words repeatedly
setInterval(createFloatingWord, 500);

// Create audio element
const audio = new Audio('/background.mp3');
audio.loop = true;

const modal = document.getElementById('music-prompt');
const yesBtn = document.getElementById('music-yes');
const noBtn = document.getElementById('music-no');

yesBtn.addEventListener('click', () => {
  audio.play();
  modal.style.display = 'none';
});

noBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.getElementById('three-cube');

if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 8); // farther view

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.autoRotate = true;         // <-- Enable auto-rotation
  controls.autoRotateSpeed = 1;       // <-- Speed of rotation
  controls.minPolarAngle = Math.PI / 3;
  controls.maxPolarAngle = Math.PI / 1.8;
  controls.target.set(0, 1, 0);
  controls.update();

  // Load model
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
    controls.update(); // includes auto-rotation
    renderer.render(scene, camera);
  }

  animate();

  // Resize support
  window.addEventListener('resize', () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}
