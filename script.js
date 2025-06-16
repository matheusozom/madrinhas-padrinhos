// Ajusta a unidade vh para dispositivos móveis
function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}
window.addEventListener('resize', setVH);
setVH();

// Função para gerar balões (animação)
function launchBalloons(n = 30) {
  const container = document.getElementById('balloons');
  for (let i = 0; i < n; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    const size = 50 + Math.random() * 50;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDuration = (4 + Math.random() * 4) + 's';
    container.appendChild(balloon);
    balloon.addEventListener('animationend', () => balloon.remove());
  }
}

// Função para abrir o convite
function openInvite() {
  const audio = document.getElementById('bg-music');
  audio.currentTime = 0;
  audio.play().catch(() => {});
  launchBalloons(30);
  
  // Tenta ativar fullscreen e travar a orientação para "landscape"
  document.documentElement.requestFullscreen().catch(() => {});
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape-primary').catch(() => {});
  }
  
  // Ativa o slider e remove o envelope para que ele não reapareça
  document.querySelector('.swiper').classList.add('active');
  document.getElementById('capa').remove();
  
  // Inicializa o Swiper, se ainda não tiver sido inicializado
  if (!window._swiper) {
    window._swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      keyboard: { enabled: true },
      allowTouchMove: true
    });
    // Botão "Seguir para Presentes" (slide RSVP)
    const goGifts = document.getElementById('go-gifts');
    if (goGifts) {
      goGifts.onclick = () => window._swiper.slideNext();
    }
  }
}
