
  const projetos = document.querySelectorAll('.projeto-card');
  const verMaisBtn = document.getElementById('ver-mais');
  const filtroBtns = document.querySelectorAll('.filtro-btn');
  let mostrarQtd = 6; // quantidade inicial

  function mostrarProjetos(filtro = 'all') {
    let count = 0;
    projetos.forEach(proj => {
      const tags = proj.dataset.tags.split(' ');
      if (filtro === 'all' || tags.includes(filtro)) {
        if (count < mostrarQtd) {
          proj.style.display = 'block';
        } else {
          proj.style.display = 'none';
        }
        count++;
      } else {
        proj.style.display = 'none';
      }
    });
  }

  verMaisBtn.addEventListener('click', () => {
    mostrarQtd += 6;
    const ativo = document.querySelector('.filtro-btn.ativo').dataset.filter;
    mostrarProjetos(ativo);
  });

  filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filtroBtns.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      mostrarQtd = 6;
      mostrarProjetos(btn.dataset.filter);
    });
  });

  // Inicializa
  mostrarProjetos();






    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });




  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  // Cria o botão "Mostrar tudo"
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Mostrar tudo';
  resetBtn.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 10px 15px;
    background-color: #7A5C99;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    display: none;
    z-index: 1100;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: background-color 0.3s;
  `;
  resetBtn.addEventListener('mouseenter', () => resetBtn.style.backgroundColor = '#9a6bde');
  resetBtn.addEventListener('mouseleave', () => resetBtn.style.backgroundColor = '#7A5C99');
  document.body.appendChild(resetBtn);

  function showAllSections() {
    sections.forEach(sec => {
      sec.classList.remove('section-hidden');
      sec.classList.add('section-visible');
    });
    resetBtn.style.display = 'none';
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      sections.forEach(sec => {
        sec.classList.add('section-hidden');
        sec.classList.remove('section-visible');
      });

      targetSection.classList.remove('section-hidden');
      targetSection.classList.add('section-visible');

      resetBtn.style.display = 'block';

      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  resetBtn.addEventListener('click', () => {
    showAllSections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', () => {
    showAllSections();
  });
