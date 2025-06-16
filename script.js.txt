document.getElementById('capa').onclick = function() {
  const audio = document.getElementById('bg-music');
  audio.play();
  
  document.querySelector('.swiper').classList.add("active");
  this.classList.add("hidden");
};
