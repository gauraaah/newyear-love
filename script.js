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
    if (scenes[current].id === "scene4") {
  setTimeout(typeWriter, 500);
}


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

  let hearts = [];

  function createHeart() {
    const x = Math.random() * canvas.width;
    const y = canvas.height;
    hearts.push({
      x,
      y,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 1.5 + 0.5,
      alpha: 1
    });
  }

  function drawHeart(h) {
    ctx.fillStyle = `rgba(255,105,180,${h.alpha})`;
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x - h.size, h.y - h.size,
                      h.x - h.size * 2, h.y + h.size / 2,
                      h.x, h.y + h.size * 2);
    ctx.bezierCurveTo(h.x + h.size * 2, h.y + h.size / 2,
                      h.x + h.size, h.y - h.size,
                      h.x, h.y);
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      drawHeart(h);
      h.y -= h.speed;
      h.alpha -= 0.003;
    });
    hearts = hearts.filter(h => h.alpha > 0);
    requestAnimationFrame(animate);
  }

  setInterval(createHeart, 300);
  animate();
}
const confessionText = [
  "Gaurav loved her deeply.",
  "He made mistakes.",
  "He regrets every moment that hurt her.",
  "But his heart still chooses her."
];

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  const el = document.getElementById("typeText");
  if (!el) return;

  if (charIndex < confessionText[textIndex].length) {
    el.innerHTML += confessionText[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  } else {
    el.innerHTML += "<br>";
    charIndex = 0;
    textIndex++;
    if (textIndex < confessionText.length) {
      setTimeout(typeWriter, 800);
    }
  }
}
