import './style.css';
import { initTypingEffect } from './components/typingEffect.js';
import { initCustomCursor } from './components/cursor.js';
import { initFloatingWords } from './components/floatingWords.js';
import { initMusicPrompt } from './components/musicPrompt.js';
import { initFunFactGenerator } from './components/funFact.js';
import { initThreeCube } from './components/threeCube.js';

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initCustomCursor();
  initFloatingWords();
  initMusicPrompt();
  initFunFactGenerator();
  initThreeCube();
});

const avatar = document.querySelector('.hero-avatar');

avatar?.addEventListener('mousemove', (e) => {
  const { width, height, left, top } = avatar.getBoundingClientRect();
  const x = (e.clientX - left - width / 2) / width;
  const y = (e.clientY - top - height / 2) / height;

  avatar.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
});

avatar?.addEventListener('mouseleave', () => {
  avatar.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
