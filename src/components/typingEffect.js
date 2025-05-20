// src/components/typingEffect.js
import Typed from 'typed.js';

export function initTypingEffect() {
  new Typed('#typing-name', {
    strings: ["Sanskruti Shete", "Web Development", "Creative Design","Blockchain Technology","Competitive Programming"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });
}
