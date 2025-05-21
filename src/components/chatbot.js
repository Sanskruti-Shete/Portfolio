export function initChatbot() {
  const toggle = document.getElementById("chatbot-toggle");
  const panel = document.getElementById("chatbot-panel");
  const input = document.getElementById("chatbot-input");
  const closeBtn = document.getElementById("chatbot-close");
  const messages = document.getElementById("chatbot-messages");

  const responses = {
    "hi": "Hello there 👋",
    "who are you": "I'm Sanskruti-bot — your friendly frontend dev assistant!",
    "stack": "I use React, Tailwind, Vite, and a touch of magic 🪄",
    "fun fact": "I love murder mysteries and am a proud Slytherin 💚🐍",
    "project": "You're looking at it! My portfolio is my latest project 🔥",
    "clear": ""
  };

  toggle.addEventListener("click", () => {
    panel.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.add("hidden");
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const msg = input.value.trim();
      if (!msg) return;

      addMessage(msg, "user");

      const key = msg.toLowerCase();
      const reply = responses[key] || "🤖 Hmm, I don't know that one. Try 'stack', 'fun fact', or 'project'.";
      setTimeout(() => addMessage(reply, "bot"), 500);

      input.value = "";
    }
  });

  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = sender;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
}
