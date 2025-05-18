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
