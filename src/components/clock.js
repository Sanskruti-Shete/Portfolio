export function initWorldClock() {
  const clockElement = document.getElementById("clock-time");
  if (!clockElement) return;

  function updateClock() {
    const now = new Date();

    // Convert to Chennai (Asia/Kolkata) timezone
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata'
    };

    const timeString = now.toLocaleTimeString('en-IN', options);
    clockElement.textContent = timeString;
  }

  updateClock(); // Initial call
  setInterval(updateClock, 1000); // Update every second
}
