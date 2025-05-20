// src/components/musicPrompt.js
export function initMusicPrompt() {
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
}
