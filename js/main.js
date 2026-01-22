  //MENU TOGGLE
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

// MODAL DE SUCESSO
  const modal = document.getElementById('successModal');
  const closeModal = document.getElementById('closeModal');

  // Verifica parâmetro ?success=1
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === '1') {
    modal.classList.add('active');

    // Fecha automaticamente após 5 segundos
    setTimeout(() => {
      modal.classList.remove('active');
      history.replaceState(null, "", window.location.pathname);
    }, 5000);
  }

  // Fechar manualmente
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    history.replaceState(null, "", window.location.pathname);
  });

  // Fechar clicando fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      history.replaceState(null, "", window.location.pathname);
    }
  });


  const slides = document.querySelectorAll('.showcase-slide');
  const prev = document.querySelector('.showcase-btn.prev');
  const next = document.querySelector('.showcase-btn.next');
  const dots = document.querySelectorAll('.dot');
  const slider = document.querySelector('.showcase-slider');

  let index = 0;
  let interval;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 6000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  next.addEventListener('click', () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });

  prev.addEventListener('click', () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      index = parseInt(dot.dataset.slide);
      showSlide(index);
      startAutoplay();
    });
  });

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  startAutoplay();