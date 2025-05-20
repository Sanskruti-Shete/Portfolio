// src/components/funFact.js
export function initFunFactGenerator() {
  const funFacts = [
    "Born in Pune. Always kept switching cities.",
    "I'm a huge fan of crime thrillers and murder mysteries.",
    "Dark mode is my default for everything.",
    "Always been a Potterhead. Btw I'm a Slytherin (and an ex Hufflepuff).",
    "I love to travel and the next place I'm keen on visiting is Hong Kong."
  ];

  const factBtn = document.getElementById("fun-fact-btn");
  const factText = document.getElementById("fun-fact-text");

  if (factBtn && factText) {
    factBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      factText.textContent = funFacts[randomIndex];
    });
  }
}
