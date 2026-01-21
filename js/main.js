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

    // Modal de sucesso
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
