export function initGitHubSnake() {
  const canvas = document.getElementById("github-snake");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const cols = 53; // GitHub weeks
  const rows = 7;  // Days
  const cellSize = 14;
  const gap = 2;

  const gridLevels = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * 5))
  );

  let snake = [{ x: 0, y: 0 }];
  let dir = { x: 1, y: 0 };
  let tick = 0;

  function drawCell(x, y, level = 0) {
    const colorMap = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    ctx.fillStyle = colorMap[level] || colorMap[0];
    ctx.fillRect(x, y, cellSize, cellSize);
  }

  function drawSnakeCell(x, y) {
  ctx.fillStyle = '#a78bfa'; // Solid purple
  ctx.beginPath();
  ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2.4, 0, Math.PI * 2);
  ctx.fill();
}

  function updateSnake() {
    const head = { ...snake[0] };
    head.x += dir.x;
    head.y += dir.y;

    // Change direction on edge or random chance
    if (
      head.x < 0 || head.x >= cols ||
      head.y < 0 || head.y >= rows ||
      Math.random() < 0.03
    ) {
      const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
      ];
      dir = directions[Math.floor(Math.random() * directions.length)];
      return;
    }

    snake.unshift(head);
    if (snake.length > 10) snake.pop();
  }

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const level = gridLevels[y][x];
        drawCell(x * (cellSize + gap), y * (cellSize + gap), level);
      }
    }

    snake.forEach((s, i) => {
      drawSnakeCell(s.x * (cellSize + gap), s.y * (cellSize + gap), i);
    });
  }

  function loop() {
    if (++tick % 10 === 0) updateSnake();
    drawGrid();
    requestAnimationFrame(loop);
  }

  loop();
}
