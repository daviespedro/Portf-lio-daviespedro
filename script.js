const nome = "Pedro Davies";
let i = 0;

function digitar() {
  if (i < nome.length) {
    document.getElementById("nome").innerHTML += nome[i];
    i++;
    setTimeout(digitar, 60);
  }
}

function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

/* NAV ACTIVE */
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  links.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop - 120 <= scroll &&
      section.offsetTop + section.offsetHeight > scroll
    ) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

/* BACKGROUND SUAVE */
const bg = document.getElementById("bg");

document.addEventListener("mousemove", (e) => {
 let x = e.clientX / window.innerWidth * 100;
 let y = e.clientY / window.innerHeight * 100;

 bg.style.background = `
 radial-gradient(circle at ${x}% ${y}%,
 rgba(96,165,250,0.25),
 transparent 75%)
`;

});


window.onload = () => {
  digitar();
  reveal();
};
