// splash.js
export function initSplashScreen(onComplete) {
  const splash = document.getElementById("splash-screen");

  // Ensure splash screen exists
  if (!splash) return;

  // Hide after 3s, then call callback
  setTimeout(() => {
    splash.style.display = 'none';
    if (typeof onComplete === 'function') onComplete();
  }, 3000);
}
