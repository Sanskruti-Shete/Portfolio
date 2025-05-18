import './style.css';
import Typed from 'typed.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  new Typed('#typing-name', {
    strings: ["Sanskruti Shete", "Frontend Developer", "Creative Designer"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });

  // Cursor
  const cursor = document.querySelector('.custom-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  });

  // Floating words
  const words = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Figma', 'Tailwind', 'Bootstrap', 'Git', 'Python', 'Java'];
  const container = document.querySelector('.tech-background');

  function createFloatingWord() {
    const span = document.createElement('span');
    span.textContent = words[Math.floor(Math.random() * words.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.fontSize = `${Math.random() * 1 + 0.7}rem`;
    span.style.animationDuration = `${10 + Math.random() * 20}s`;
    container.appendChild(span);
    setTimeout(() => container.removeChild(span), 30000);
  }
  setInterval(createFloatingWord, 500);

  // Music modal
  const audio = new Audio('/background.mp3');
  audio.loop = true;

  const modal = document.getElementById('music-prompt');
  const yesBtn = document.getElementById('music-yes');
  const noBtn = document.getElementById('music-no');

  if (yesBtn && noBtn && modal) {
    yesBtn.addEventListener('click', () => {
      audio.play();
      modal.style.display = 'none';
    });

    noBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Fun Fact Button
  const funFacts = [
    "I once debugged an entire project with just console logs 😅",
    "I'm a huge fan of Figma and spend hours perfecting UI.",
    "Dark mode is my default for everything 🌙",
    "I can spend hours just choosing the perfect font combo 🔤",
    "I believe semicolons are optional… until they're not 🤓"
  ];
  const factBtn = document.getElementById("fun-fact-btn");
  const factText = document.getElementById("fun-fact-text");

  if (factBtn && factText) {
    factBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      factText.textContent = funFacts[randomIndex];
    });
  }

  
  // Tech Cube Canvas (already working)
  const cubeCanvas = document.getElementById('three-cube');
  if (cubeCanvas) {
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
});
