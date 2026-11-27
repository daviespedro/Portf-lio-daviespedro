(() => {
  "use strict";

  /* Português fica escrito direto no index.html. Cada texto traduzível tem um
     atributo data-i18n="chave" (ou data-i18n-alt / data-i18n-aria) e a versão em
     inglês dessa chave fica em EN, logo abaixo. */
  const EN = {
    "page.title": "Pedro Davies | Full Stack Developer",
    "page.description": "Pedro Davies’ Full Stack developer portfolio. Projects built with React, TypeScript, Node.js, Python, Flask, and Supabase: web applications, REST APIs, and automation.",
    "page.share": "Explore my web applications, REST APIs, automation projects, and educational code security tools.",
    "nav.sobre": "About",
    "nav.habilidades": "Skills",
    "nav.projetos": "Projects",
    "nav.eventos": "Events",
    "nav.certificados": "Certificates",
    "nav.contato": "Contact",
    "about.name": "Name:",
    "about.edu": "Education:",
    "about.edu.v": "Multiplatform Software Development – FATEC (2025 – present)",
    "about.exp": "Project experience:",
    "about.exp.v": "I build professional websites, management systems, platforms with authentication, and educational tools. My projects include React and TypeScript, Node.js and Express, Python and Flask, Supabase, and integrations with Google Sheets and WhatsApp.",
    "about.goal": "Career goal:",
    "about.goal.v": "Build complete web applications, from frontend to backend, with responsive interfaces, REST APIs, databases, and integrations that solve business and user needs.",
    "about.acad": "Academic goals:",
    "about.acad.v": "Strengthen my knowledge of web development, data structures, databases, and software engineering.",
    "about.int": "Areas of interest:",
    "about.int.v": "Full Stack Development • REST APIs • Automation • Code Security",
    "hard.frontend": "Frontend:",
    "hard.frontend.v": "HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS",
    "hard.backend": "Backend:",
    "hard.backend.v": "Node.js, Express, Python, Flask, and REST APIs",
    "hard.data": "Data and authentication:",
    "hard.data.v": "MySQL, PostgreSQL, and Supabase (Auth, database, and Storage)",
    "hard.tools": "Tools:",
    "hard.tools.v": "Git, GitHub, Docker, and Vite",
    "hard.integ": "Integrations:",
    "hard.integ.v": "Google Sheets, Google Apps Script, and WhatsApp",
    "hard.quality": "Quality:",
    "hard.quality.v": "Vitest, Playwright, and automated testing",
    "hard.web": "Web experience:",
    "hard.web.v": "UI/UX, responsive design, accessibility, and SEO",
    "hard.security": "Code security:",
    "hard.security.v": "static analysis and educational tools in Portuguese",
    "hard.offline": "Offline applications:",
    "hard.offline.v": "PWA, Service Workers, and Local Storage",
    "soft.comm": "Clear communication",
    "soft.team": "Teamwork",
    "soft.solve": "Problem solving",
    "soft.analysis": "Analytical thinking",
    "soft.active": "Proactivity",
    "soft.time": "Organization and time management",
    "soft.learn": "Continuous learning",
    "soft.adapt": "Adaptability",
    "solution": "Solution:",
    "context": "Problem:",
    "role": "My role:",
    "stack": "Technologies",
    "details": "Project details",
    "action.site": "Visit Website",
    "action.code": "View Project",
    "status.dev": "In Development",
    "filter.todos": "All",
    "filter.sistemas": "Systems",
    "filter.sites": "Websites",
    "filter.ferramentas": "Tools",
    "filters.label": "Filter projects",
    "pedro-neto.summary": "Responsive website with coaching plans, methodology, results, a booking form, and an administration area.",
    "pedro-neto.problem": "Present online coaching services and organize inquiries and appointments for new clients.",
    "pedro-neto.role": "Full Stack development, responsive interface, appointment integration, and WhatsApp contact.",
    "secmentor.summary": "Educational mentor with static analysis, lessons, quizzes, and reports, available in the browser, CLI, and a VS Code extension. The core works offline.",
    "secmentor.problem": "Make learning about code security more accessible through practical explanations in Portuguese.",
    "secmentor.role": "Development of the monorepo, analyzer, playground, and educational features, validated with automated tests.",
    "wr.summary": "Management system with reception, service tracking, customer and vehicle records, service history, payments, expenses, and CRM metrics.",
    "wr.problem": "Centralize car wash operations by tracking vehicles in the service area, customers, and cash flow.",
    "wr.role": "Development of the React application, business rules, synchronized record editing, and local data persistence.",
    "priscila.title": "Priscila Schunck — Nutritionist",
    "priscila.summary": "Professional website covering clinical and oncology nutrition, bariatric surgery, intestinal health, practice locations, and consultation requests through WhatsApp.",
    "priscila.problem": "Bring together information about specialties, practice locations, and how to book a nutrition consultation.",
    "priscila.role": "Frontend development, responsive layout, appointment request form, and search engine content optimization.",
    "mundo-pet.title": "O Mundo Pet — Christmas Booking",
    "mundo-pet.summary": "Interactive calendar with available time slots, service selection, and requests through WhatsApp. The owner confirms appointments and manages availability in Google Sheets.",
    "mundo-pet.problem": "Make it easier to check bathing and grooming availability during the busy December season.",
    "mundo-pet.role": "Development of the website, booking form, and integration with Google Sheets and Apps Script.",
    "radar.stack": "Python • Flask • MySQL • HTML • CSS • JavaScript • REST APIs • Docker",
    "radar.summary": "Development of a web application to centralize, process, and display this information clearly and accessibly.",
    "radar.problem": "Difficulty accessing and interpreting public data about the work of members of Congress.",
    "radar.role": "Frontend and Backend development.",
    "forja.summary": "Platform with authentication, user profiles, workout plans, and a food diary with calorie targets and activity tracking.",
    "forja.problem": "Difficulty creating and managing personalized workout routines and meal plans based on body metrics in one place.",
    "forja.role": "Development of the interface and workout and calorie target logic, with Supabase integration for authentication and data persistence.",
    "geo.summary": "Responsive website with services, a portfolio, and a booking request form that prepares an appointment message for WhatsApp.",
    "geo.problem": "Lack of an elegant, efficient online platform to manage appointments and showcase nail services.",
    "geo.role": "Frontend development, visual identity, responsive navigation, and integration of the booking request form with WhatsApp.",
    "luminelli.summary": "Development of a web application to improve product visibility and introduce e-commerce features.",
    "luminelli.problem": "Limited inventory visibility and lack of an e-commerce presence.",
    "luminelli.role": "Frontend, Backend, and database development.",
    "new-life.summary": "Development of a modern, responsive, intuitive website to present services, the team, and a work gallery, and make booking through WhatsApp easier.",
    "new-life.problem": "The salon lacked a professional digital presence, making it harder to share services, opening hours, and contact information with clients.",
    "new-life.role": "Complete Frontend development, visual structure, user experience (UI/UX), and direct contact integration.",
    "igreja.summary": "Development of an elegant landing page with an interactive form focused on the user experience to collect this information.",
    "igreja.problem": "Need for an online registration system to welcome new visitors and collect information efficiently in one place.",
    "igreja.role": "Complete Frontend development.",
    "carousel.prev": "Previous photo",
    "carousel.next": "Next photo",
    "ev.science.desc": "I took part in the Science Business Meeting as a volunteer representing PIT. During the event I met companies, startups, and professionals in technology and innovation. The experience brought networking, professional growth, and stronger communication, teamwork, and problem-solving skills.",
    "ev.maratona.title": "XXV Internal Programming Marathon",
    "ev.maratona.desc": "I took part in the Programming Marathon, putting logic, algorithms, and problem solving into practice. The event strengthened my Python skills, quick thinking, code optimization, and collaborative work.",
    "ev.interfatec.title": "InterFatecs 26 – 1st Semester",
    "ev.interfatec.desc": "I took part in InterFatecs, an academic competition focused on technology and programming. The experience brought technical challenges, teamwork, and hands-on practice solving computational problems.",
    "ev.innovation.desc": "I took part in Innovation Week 2026, an event focused on the latest trends in technology, innovation, and sustainable development. The experience offered deep exposure to new tools in the market, inspiring talks, and an excellent networking opportunity with technology professionals and companies.",
    "cert.view": "View Certificate",
    "cert.unavailable": "Preview unavailable",
    "cert.marathon.alt": "Marathon certificate",
    "cert.marathon.title": "XXV Internal Programming Marathon",
    "cert.marathon.desc": "Certificate of participation in the XXV Internal Programming Marathon at FATEC São José dos Campos.",
    "cert.pit.alt": "PIT volunteer certificate",
    "cert.pit.title": "Volunteering – PIT Science Business Connection",
    "cert.pit.desc": "Certificate of volunteer work representing the Technology Innovation Park (PIT) at the Science Business Meeting.",
    "cert.interfatecs.alt": "InterFatecs 2026 certificate",
    "cert.interfatecs.title": "InterFatecs 2026 – 1st Semester",
    "cert.interfatecs.desc": "Certificate of participation in the InterFatecs 2026 academic competition, focused on programming logic, algorithms, and problem solving, strengthening technical skills and teamwork.",
    "contact.wa": "Message me on WhatsApp",
    "hero.desc": "React • TypeScript • Node.js • Python • Web Applications",
    "hero.cv": "Download Résumé"
  };

  /* Textos que o JavaScript escreve: chave -> [português, inglês]. */
  const DYN = {
    "menu.open": [
      "Abrir menu lateral",
      "Open side menu"
    ],
    "menu.close": [
      "Fechar menu lateral",
      "Close side menu"
    ],
    "events.more": [
      "Ler mais",
      "Read more"
    ],
    "events.less": [
      "Ler menos",
      "Read less"
    ],
    "count.one": [
      "{n} projeto",
      "{n} project"
    ],
    "count.many": [
      "{n} projetos",
      "{n} projects"
    ],
    "filters.label": [
      "Filtrar projetos",
      "Filter projects"
    ],
    "lang.switch": [
      "Switch to English",
      "Mudar para português"
    ],
    "wa.text": [
      "Olá! Vi seu portfólio e gostaria de bater um papo.",
      "Hi! I saw your portfolio and would like to get in touch."
    ]
  };

  const STORAGE_KEY = "portfolio-language";
  const toggle = document.querySelector(".lang-toggle");
  const isEnglish = () => document.documentElement.lang === "en";

  const texts = [...document.querySelectorAll("[data-i18n]")].map((el) => ({
    el, key: el.dataset.i18n, pt: el.textContent
  }));
  const alts = [...document.querySelectorAll("[data-i18n-alt]")].map((el) => ({
    el, key: el.dataset.i18nAlt, pt: el.getAttribute("alt")
  }));
  const labels = [...document.querySelectorAll("[data-i18n-aria]")].map((el) => ({
    el, key: el.dataset.i18nAria, pt: el.getAttribute("aria-label")
  }));

  const metaDescription = document.querySelector('meta[name="description"]');
  const metaTitle = document.querySelector('meta[property="og:title"]');
  const metaShare = document.querySelector('meta[property="og:description"]');
  const original = {
    title: document.title,
    description: metaDescription.content,
    share: metaShare.content
  };

  const whatsapp = [...document.querySelectorAll('a[href^="https://wa.me/"]')];
  const originalWhatsapp = whatsapp.map((a) => a.getAttribute("href"));

  window.portfolioI18n = {
    isEnglish,
    t(key) {
      const entry = DYN[key];
      return entry ? entry[isEnglish() ? 1 : 0] : key;
    }
  };

  function setLanguage(language) {
    const en = language === "en";
    document.documentElement.lang = en ? "en" : "pt-BR";

    texts.forEach(({ el, key, pt }) => { el.textContent = en ? (EN[key] ?? pt) : pt; });
    alts.forEach(({ el, key, pt }) => { el.setAttribute("alt", en ? (EN[key] ?? pt) : pt); });
    labels.forEach(({ el, key, pt }) => { el.setAttribute("aria-label", en ? (EN[key] ?? pt) : pt); });

    document.title = en ? EN["page.title"] : original.title;
    metaTitle.content = document.title;
    metaDescription.content = en ? EN["page.description"] : original.description;
    metaShare.content = en ? EN["page.share"] : original.share;

    whatsapp.forEach((a, n) => {
      if (!en) { a.setAttribute("href", originalWhatsapp[n]); return; }
      const url = new URL(originalWhatsapp[n]);
      url.searchParams.set("text", DYN["wa.text"][1]);
      a.setAttribute("href", url.href);
    });

    if (toggle) {
      toggle.querySelector('[lang="pt-BR"]').classList.toggle("chosen", !en);
      toggle.querySelector('[lang="en"]').classList.toggle("chosen", en);
      toggle.setAttribute("aria-label", en ? DYN["lang.switch"][1] : DYN["lang.switch"][0]);
      toggle.lang = en ? "pt-BR" : "en";
    }

    document.dispatchEvent(new Event("portfolio:language"));
  }

  let saved = "pt";
  try { saved = localStorage.getItem(STORAGE_KEY) || "pt"; } catch { /* sem armazenamento: segue em português */ }
  setLanguage(saved === "en" ? "en" : "pt");

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const next = isEnglish() ? "pt" : "en";
      setLanguage(next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* a troca continua funcionando */ }
    });
  }
})();
