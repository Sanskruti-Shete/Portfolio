import './style.css';
import { initTypingEffect } from './components/typingEffect.js';
import { initCustomCursor } from './components/cursor.js';
import { initFloatingWords } from './components/floatingWords.js';
import { initMusicPrompt } from './components/musicPrompt.js';
import { initFunFactGenerator } from './components/funFact.js';
import { initThreeCube } from './components/threeCube.js';
import { initGitHubSnake } from './components/snake.js';

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initCustomCursor();
  initFloatingWords();
  initMusicPrompt();
  initFunFactGenerator();
  initThreeCube();
  initGitHubSnake();
});
