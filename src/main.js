import './style.css';
import { initTypingEffect } from './components/typingEffect.js';
import { initCustomCursor } from './components/cursor.js';
import { initFloatingWords } from './components/floatingWords.js';
import { initFunFactGenerator } from './components/funFact.js';
import { initThreeCube } from './components/threeCube.js';
import { initGitHubSnake } from './components/snake.js';
import { initWorldClock } from './components/clock.js';
import { initDevQuote } from './components/devQuotes.js';
import { initChatbot } from './components/chatbot.js';
import { initSplashScreen } from './components/splash.js';

initSplashScreen();

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initCustomCursor();
  initFloatingWords();
  initFunFactGenerator();
  initThreeCube();
  initGitHubSnake();
  initWorldClock();
  initDevQuote();
  initChatbot();
});
