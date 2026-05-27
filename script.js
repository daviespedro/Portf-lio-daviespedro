/* =========================
   EFEITO DIGITANDO
========================= */

const nome = "Pedro Davies";
let i = 0;

function digitar() {

  const elemento =
    document.getElementById("nome");

  if (!elemento) return;

  if (i < nome.length) {

    elemento.innerHTML += nome.charAt(i);

    i++;

    setTimeout(digitar, 70);
  }
}
/* =========================
   EFEITO BRILHO MOUSE
========================= */

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
/* =========================
   REVEAL SCROLL
========================= */

function reveal() {

  const reveals =
    document.querySelectorAll(".reveal");

  reveals.forEach((elemento) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      elemento.getBoundingClientRect().top;

    const visible = 80;

    if (elementTop < windowHeight - visible) {
      elemento.classList.add("active");
    }

  });

}

window.addEventListener("scroll", reveal);

/* =========================
   NAVBAR ACTIVE
========================= */

const links =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let scrollY =
    window.pageYOffset;

  links.forEach((link) => {

    const id =
      link.getAttribute("href");

    const secao =
      document.querySelector(id);

    if (!secao) return;

    const sectionTop =
      secao.offsetTop - 150;

    const sectionHeight =
      secao.offsetHeight;

    if (
      scrollY >= sectionTop &&
      scrollY < sectionTop + sectionHeight
    ) {

      links.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

    }

  });

});

/* =========================
   BACKGROUND DINÂMICO
========================= */

const bg =
  document.getElementById("bg");

document.addEventListener("mousemove", (e) => {

  const x =
    (e.clientX / window.innerWidth) * 100;

  const y =
    (e.clientY / window.innerHeight) * 100;

  bg.style.background = `

    radial-gradient(
      circle at ${x}% ${y}%,
      rgba(96,165,250,0.18),
      transparent 22%
    ),

    radial-gradient(
      circle at top left,
      rgba(37,99,235,0.18),
      transparent 35%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(96,165,250,0.12),
      transparent 30%
    ),

    #010409
  `;

});

/* =========================
   CARROSSEL EVENTOS
========================= */

let slideAtual = 0;

const slides =
  document.querySelectorAll(".carousel-img");

function mostrarSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

}

function mudarSlide(direcao) {

  slideAtual += direcao;

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  mostrarSlide(slideAtual);

}

/* AUTO PLAY */

setInterval(() => {

  if (slides.length > 0) {
    mudarSlide(1);
  }

}, 5000);

/* =========================
   LER MAIS EVENTO
========================= */

function toggleTexto() {

  const texto =
    document.getElementById("eventText");

  const botao =
    document.querySelector(".read-more-btn");

  if (!texto || !botao) return;

  texto.classList.toggle("collapsed");

  if (texto.classList.contains("collapsed")) {

    botao.innerText = "Ler mais";

  } else {

    botao.innerText = "Ler menos";

  }

}

/* =========================
   LOAD
========================= */

window.onload = () => {

  digitar();

  reveal();

  if (slides.length > 0) {
    mostrarSlide(slideAtual);
  }

};
