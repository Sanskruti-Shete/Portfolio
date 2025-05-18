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
