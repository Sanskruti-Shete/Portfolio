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

import * as THREE from 'three';

const canvas = document.getElementById('three-cube');
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(300, 300);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const loader = new THREE.TextureLoader();

  const materials = [
    new THREE.MeshBasicMaterial({ map: loader.load('/images/html.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('/images/css.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('/images/javascript.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('/images/react.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('/images/node.png') }),
    new THREE.MeshBasicMaterial({ map: loader.load('/images/mongodb.png') }),
  ];

  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}
