const heartsRoot = document.getElementById('hearts');

function createHeart(index) {
  const heart = document.createElement('span');
  heart.className = 'heart-float';
  heart.textContent = '♥';

  const size = 14 + Math.random() * 26;
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 8;
  const delay = Math.random() * -duration;

  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.opacity = (0.28 + Math.random() * 0.48).toFixed(2);

  if (index % 3 === 0) {
    heart.style.color = 'rgba(239, 192, 192, 0.85)';
  } else if (index % 3 === 1) {
    heart.style.color = 'rgba(222, 160, 159, 0.78)';
  } else {
    heart.style.color = 'rgba(250, 225, 228, 0.9)';
  }

  heartsRoot.appendChild(heart);
}

for (let i = 0; i < 20; i += 1) {
  createHeart(i);
}

const subtitle = document.querySelector('.subtitle');
const subtitleBase = 'Подключение';
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  subtitle.innerHTML = `${subtitleBase}<span class="dots">${'.'.repeat(dots).padEnd(3, '<span style="visibility:hidden">.</span>')}</span>`;
}, 700);
