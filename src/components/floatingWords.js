// src/components/floatingWords.js
export function initFloatingWords() {
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
}
