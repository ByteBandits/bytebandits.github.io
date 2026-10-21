// binary matrix rain — vanilla canvas, no deps
(() => {
  const canvas = document.getElementById("rain");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const FONT = 15;
  const SPEED = 55; // ms per frame
  let cols, drops, w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.font = `${FONT * devicePixelRatio}px monospace`;
    cols = Math.floor(w / (FONT * devicePixelRatio * 1.4));
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  }

  function frame() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, w, h);
    const fs = FONT * devicePixelRatio;
    for (let i = 0; i < cols; i++) {
      const x = i * fs * 1.4 + fs * 0.5;
      const y = drops[i] * fs;
      // brighter head
      ctx.fillStyle = "rgba(181, 232, 83, 0.85)";
      ctx.fillText(Math.random() < 0.5 ? "0" : "1", x, y);
      // dimmer trail
      ctx.fillStyle = "rgba(107, 143, 61, 0.5)";
      ctx.fillText(Math.random() < 0.5 ? "0" : "1", x, y - fs);
      drops[i]++;
      if (y > h && Math.random() > 0.985) drops[i] = 0;
    }
  }

  resize();
  window.addEventListener("resize", resize);
  setInterval(frame, SPEED);
})();
