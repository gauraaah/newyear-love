let scenes = document.querySelectorAll(".scene");
let current = 0;
let music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
  if (current === 0) {
    music.play();
  }
  if (current < scenes.length - 1) {
    scenes[current].classList.remove("active");
    current++;
    scenes[current].classList.add("active");

    if (current === scenes.length - 1) {
      startFireworks();
    }
  }
});

function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 60; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        alpha: 1
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = `rgba(255,182,193,${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.01;
    });
    particles = particles.filter(p => p.alpha > 0);
    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 800);
  animate();
}
