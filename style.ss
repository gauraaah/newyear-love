* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: black;
  color: white;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;
}

.scene {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.scene.active {
  display: flex;
}

.full-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.comic-text {
  position: absolute;
  top: 15%;
  background: white;
  color: black;
  padding: 15px 20px;
  border-radius: 15px;
  font-size: 20px;
  max-width: 80%;
}

.tap {
  position: absolute;
  bottom: 30px;
  font-size: 16px;
  opacity: 0.7;
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.lyrics {
  font-size: 22px;
  animation: floatText 6s ease-in-out infinite;
}

@keyframes floatText {
  0% { opacity: 0; transform: translateY(30px); }
  50% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-30px); }
}

.photo {
  width: 70%;
  border-radius: 20px;
  margin: 10px;
  animation: fadeIn 2s forwards;
}

.delay {
  animation-delay: 2s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.corner-text {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  opacity: 0.8;
}

.confession {
  font-size: 20px;
  line-height: 1.6;
  max-width: 80%;
}

.final-text {
  position: absolute;
  font-size: 32px;
  color: #ffb6c1;
  z-index: 2;
}

canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
