export function initDevQuote() {
  const quotes = [
    "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Fix the cause, not the symptom.” – Steve Maguire",
    "“Before software can be reusable it first has to be usable.” – Ralph Johnson"
  ];

  const quoteEl = document.getElementById("dev-quote");
  if (!quoteEl) return;

  function updateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = quote;
  }

  updateQuote();
  setInterval(updateQuote, 10000); // change every 10s
}
