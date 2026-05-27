// ==========================================
//  MENU HAMBÚRGUER (RESPONSIVO COM EFEITO DE VIDRO)
// ==========================================
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const links Internos = document.querySelectorAll(".nav-links a");

if (menuBtn && navMenu) {
  // Abre e fecha o menu ao clicar no botão hambúrguer
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Fecha o menu lateral automaticamente ao clicar em qualquer link
  linksInternos.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });
}

// ==========================================
//  EFEITO DIGITANDO (HERO TITLE)
// ==========================================
const nomeCompleto = "Pedro Davies";
let caractereIndex = 0;

function digitar() {
  const elementoNome = document.getElementById("nome");
  if (!elementoNome) return;

  if (caractereIndex < nomeCompleto.length) {
    elementoNome.innerHTML += nomeCompleto.charAt(caractereIndex);
    caractereIndex++;
    setTimeout(digitar, 90);
  }
}

// ==========================================
//  RASTREAMENTO DO MOUSE (VARIÁVEIS CSS)
// ==========================================
document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--y", `${e.clientY}px`);
});

// ==========================================
//  REVEAL SCROLL & NAVBAR LINKS ATIVOS
// ==========================================
const elementosReveal = document.querySelectorAll(".reveal");
const secoesPagora = document.querySelectorAll("section, header");
const linksNavbar = document.querySelectorAll(".nav-links a");

function gerenciarScroll() {
  const windowHeight = window.innerHeight;
  let secaoAtualId = "";

  // 1. Efeito Reveal dos Elementos
  elementosReveal.forEach((elemento) => {
    const elementTop = elemento.getBoundingClientRect().top;
    const pontoDeCorte = 80;

    if (elementTop < windowHeight - pontoDeCorte) {
      elemento.classList.add("active");
    }
  });

  // 2. Mapeamento da Seção Ativa na Navbar
  let topicoScrollY = window.pageYOffset;

  secoesPagora.forEach((secao) => {
    const sectionTop = secao.offsetTop - 160;
    const sectionHeight = secao.offsetHeight;
    const id = secao.getAttribute("id");

    if (topicoScrollY >= sectionTop && topicoScrollY < sectionTop + sectionHeight) {
      secaoAtualId = id || "";
    }
  });

  if (secaoAtualId) {
    linksNavbar.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${secaoAtualId}`) {
        link.classList.add("active");
      }
    });
  }
}

window.addEventListener("scroll", gerenciarScroll);

// ==========================================
//  BACKGROUND DINÂMICO GRADIENTE
// ==========================================
const bgGradiente = document.getElementById("bg");

if (bgGradiente) {
  document.addEventListener("mousemove", (e) => {
    const percentX = (e.clientX / window.innerWidth) * 100;
    const percentY = (e.clientY / window.innerHeight) * 100;

    bgGradiente.style.background = `
      radial-gradient(circle at ${percentX}% ${percentY}%, rgba(96,165,250,0.15), transparent 25%),
      radial-gradient(circle at top left, rgba(37,99,235,0.15), transparent 40%),
      radial-gradient(circle at bottom right, rgba(96,165,250,0.1), transparent 35%),
      #050814
    `;
  });
}

// ==========================================
//  CARROSSEL DE EVENTOS (MULTI-CARDS INDEPENDENTES)
// ==========================================
document.querySelectorAll(".carousel").forEach((carousel) => {
  const imagens = carousel.querySelectorAll(".carousel-img");
  const btnPrev = carousel.querySelector(".prev");
  const btnNext = carousel.querySelector(".next");
  let slideIndex = 0;

  if (imagens.length === 0) return;

  function alternarImagem(novoIndex) {
    imagens.forEach((img) => img.classList.remove("active"));
    imagens[novoIndex].classList.add("active");
  }

  btnNext.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % imagens.length;
    alternarImagem(slideIndex);
  });

  btnPrev.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + imagens.length) % imagens.length;
    alternarImagem(slideIndex);
  });

  // Autoplay independente para cada carrossel (5 segundos)
  setInterval(() => {
    slideIndex = (slideIndex + 1) % imagens.length;
    alternarImagem(slideIndex);
  }, 5000);
});

// ==========================================
//  COMPORTAMENTO LER MAIS (MULTI-CARDS)
// ==========================================
document.querySelectorAll(".read-more-btn").forEach((botao) => {
  botao.addEventListener("click", () => {
    const textoContainer = botao.parentElement.querySelector(".event-description");
    
    if (textoContainer) {
      textoContainer.classList.toggle("collapsed");
      botao.innerText = textoContainer.classList.contains("collapsed") ? "Ler mais" : "Ler menos";
    }
  });
});

// ==========================================
//  DISPAROS NO CARREGAMENTO DA PÁGINA
// ==========================================
window.onload = () => {
  digitar();
  gerenciarScroll();
};
