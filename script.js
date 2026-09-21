const flowerDetails = {
  1: { badge: "Deseo 1: Luz Infinita", title: "El Girasol de la Alegría", desc: "María Elena, este girasol representa tu energía contagiosa y tu hermosa sonrisa. Que en tus 22 años nunca dejes de brillar.", img: "watermarked_img_7994141819128674895.png" },
  2: { badge: "Deseo 2: Amor Apasionado", title: "Rosas de Nuestro Amor", desc: "El rojo intenso simboliza la profundidad de mis sentimientos por ti. 22 años de vida, y mi mayor deseo es amarte cada día con más fuerza.", img: "watermarked_img_13251606889708656398.png" },
  3: { badge: "Deseo 3: Belleza Única", title: "Peonías para mi Princesa", desc: "Las peonías son tan únicas y preciosas como tú. Este año, quiero recordarte a diario que eres la mujer más hermosa del universo.", img: "watermarked_img_7979089072965578794.png" },
  4: { badge: "Deseo 4: Fortaleza y Elegancia", title: "Orquídeas de Admiración", desc: "Admiro la increíble mujer en la que te conviertes. Fuerte, elegante, decidida. Estoy tan orgulloso de ti, mi hermosa cumpleañera.", img: "watermarked_img_12458387208732597534.png" },
  5: { badge: "Deseo 5: Aventuras Inolvidables", title: "Tulipanes de Complicidad", desc: "Por todos los viajes, risas y locuras que viviremos este año. Eres mi cómplice perfecta y mi lugar seguro.", img: "watermarked_img_4845481220654397320.png" },
  6: { badge: "Deseo 6: Sueños Cumplidos", title: "Un Jardín de Esperanzas", desc: "Cada color es un sueño que lograrás a tus 22. Yo estaré aquí, en primera fila, aplaudiendo cada uno de tus éxitos.", img: "watermarked_img_2722922539239330759.png" },
  7: { badge: "Deseo 7: Ternura y Paz", title: "Bouquet Silvestre", desc: "Me traes la paz más hermosa. Prometo cuidar tu corazón, entenderte y abrazarte en los días buenos y en los no tan buenos.", img: "watermarked_img_9302327914380896249.png" },
  8: { badge: "Deseo 8: Mi Vida Contigo", title: "El Gran Ramo de 22", desc: "22 años de María Elena, y toda una vida para amarla. Este mega ramo tiene todas las flores juntas, porque lo quiero todo contigo. ¡Feliz cumpleaños, mi amor!", img: "watermarked_img_3899222128679799579.png" }
};

const audioPlayer = document.getElementById('bgMusic');
let isPlaying = false;

function startMusic() {
  if (!audioPlayer) return;
  audioPlayer.volume = 0.6;
  audioPlayer.play().then(() => {
    isPlaying = true;
    const icon = document.getElementById('musicIcon');
    const text = document.getElementById('musicText');
    if (icon) icon.textContent = '⏸️';
    if (text) text.textContent = 'Pausar Melodía';
  }).catch(error => {
    console.log("Interacción requerida por el navegador para reproducir audio:", error);
  });
}

function stopMusic() {
  if (!audioPlayer) return;
  audioPlayer.pause();
  isPlaying = false;
  const icon = document.getElementById('musicIcon');
  const text = document.getElementById('musicText');
  if (icon) icon.textContent = '🎵';
  if (text) text.textContent = 'Melodía de Cumpleaños';
}

document.getElementById('musicToggle').addEventListener('click', () => {
  if (isPlaying) stopMusic();
  else startMusic();
});

function openGiftIntro() {
  const intro = document.getElementById('introEnvelope');
  intro.classList.add('opacity-0', 'pointer-events-none');
  setTimeout(() => { intro.style.display = 'none'; }, 1000);
  triggerFestiveBurst(window.innerWidth / 2, window.innerHeight / 2, 80);
  startMusic();
}

const flowerModal = document.getElementById('flowerModal');
const modalImageContainer = document.getElementById('modalImageContainer');

function showFlowerMessage(id) {
  const data = flowerDetails[id];
  if (!data) return;

  modalImageContainer.innerHTML = `
    <img src="${data.img}" alt="${data.title}" class="w-full h-full object-cover animate-float-fast" />
    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0508] via-[#0a0508]/40 to-transparent opacity-90"></div>
  `;
  document.getElementById('modalFlowerBadge').textContent = data.badge;
  document.getElementById('modalFlowerTitle').textContent = data.title;
  document.getElementById('modalFlowerBody').textContent = data.desc;

  flowerModal.classList.remove('opacity-0', 'pointer-events-none');
  flowerModal.firstElementChild.classList.remove('scale-95');
  flowerModal.firstElementChild.classList.add('scale-100');
}

function closeFlowerModal() {
  flowerModal.classList.add('opacity-0', 'pointer-events-none');
  flowerModal.firstElementChild.classList.add('scale-95');
  flowerModal.firstElementChild.classList.remove('scale-100');
}

const letterModal = document.getElementById('letterModal');
function openLetterModal() {
  letterModal.classList.remove('opacity-0', 'pointer-events-none');
  letterModal.firstElementChild.classList.remove('scale-95');
  letterModal.firstElementChild.classList.add('scale-100');
}
function closeLetterModal() {
  letterModal.classList.add('opacity-0', 'pointer-events-none');
  letterModal.firstElementChild.classList.add('scale-95');
  letterModal.firstElementChild.classList.remove('scale-100');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-32');
  setTimeout(() => { toast.classList.add('opacity-0', 'translate-y-32'); }, 4000);
}

function copyLoveMessage() {
  const message = "🎉 Para la cumpleañera más hermosa, María Elena Hurtado Díaz:\nFelices 22 primaveras, mi amor. Hoy 22 de Septiembre celebro tu vida, tu belleza y la inmensa suerte de tenerte conmigo. Eres mi mayor regalo. ¡Te amo con todo mi corazón!\n\nCon amor eterno,\nMichael Antonio 💖🥂";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).then(() => showToast("¡Felicitación copiada! ✨"));
  }
}

function sendLoveReply() {
  const replyText = encodeURIComponent("¡Mi amor Michael Antonio! Acabo de ver el hermoso jardín por mis 22 años y me puse a llorar de emoción. 😭💖 Gracias por hacer mi cumpleaños tan especial y por la bella carta. ¡Te amo muchísimo mi vida! 🎉✨");
  window.open(`https://api.whatsapp.com/send?text=${replyText}`, '_blank');
}

// Canvas Partículas
const canvas = document.getElementById('magicCanvas');
const ctx = canvas.getContext('2d');
let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(x, y, isBurst = false) {
    this.x = x !== undefined ? x : Math.random() * width;
    this.y = y !== undefined ? y : Math.random() * -height - 100;
    this.type = Math.random() > 0.3 ? 'petal' : 'confetti';
    
    if(this.type === 'petal') {
      this.size = Math.random() * 12 + 10;
      const colors = ['#f43f5e', '#fb7185', '#fda4af', '#facc15', '#fde047'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    } else {
      this.size = Math.random() * 6 + 3;
      const colors = ['#ffffff', '#facc15', '#fbbf24', '#fecdd3'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    this.speedY = isBurst ? (Math.random() - 0.5) * 12 : Math.random() * 2 + 1;
    this.speedX = isBurst ? (Math.random() - 0.5) * 12 : Math.random() * 1.5 - 0.75;
    this.angle = Math.random() * 360;
    this.angleSpeed = (Math.random() - 0.5) * 4;
    this.opacity = Math.random() * 0.5 + 0.4;
    this.isBurst = isBurst;
    this.life = isBurst ? (Math.random() * 60 + 60) : Infinity;
    this.gravity = isBurst ? 0.15 : 0;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.angle * 0.03) * 0.5;
    this.angle += this.angleSpeed;
    if (this.isBurst) {
      this.speedY += this.gravity;
      this.life--;
      this.opacity = Math.max(0, this.life / 100);
    } else if (this.y > height + 20) {
      this.y = -20;
      this.x = Math.random() * width;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    if (this.type === 'petal') {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, -this.size, 0, -this.size * 1.2);
      ctx.bezierCurveTo(this.size / 2, -this.size, this.size / 2, -this.size / 2, 0, 0);
      ctx.fill();
    } else {
      ctx.fillRect(-this.size/2, -this.size/4, this.size, this.size/2);
    }
    ctx.restore();
  }
}

const particles = [];
for (let i = 0; i < 40; i++) particles.push(new Particle());

function triggerFestiveBurst(x, y, amount = 40) {
  for (let i = 0; i < amount; i++) particles.push(new Particle(x, y, true));
}

window.addEventListener('click', (e) => {
  if (!e.target.closest('button') && !e.target.closest('.glass-panel') && !e.target.closest('#introEnvelope')) {
    triggerFestiveBurst(e.clientX, e.clientY, 15);
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.isBurst && p.life <= 0) particles.splice(i, 1);
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();
