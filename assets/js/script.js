const siteConfig = {
  // Update these values when Mayra's verified social links and MLS-approved listings are ready.
  contact: {
    phoneLabel: "(347) 935-4566",
    phoneRaw: "13479354566",
    email: "mayra.galarza@exprealty.com",
    whatsappRaw: "13479354566",
    formEndpoint: "https://api.web3forms.com/submit"
  },
  socials: [
    {
      label: "Instagram",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>`,
      url: "https://www.instagram.com/mayrarealtornj"
    },
    {
      label: "Facebook",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.77-1.63 1.56v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z"/></svg>`,
      url: "https://facebook.com/mayra.galarza.165"
    },
    {
      label: "TikTok",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.64 2c.34 2.58 1.78 4.12 4.36 4.29v3.2a7.5 7.5 0 0 1-4.29-1.31v6.69c0 4.06-2.54 6.87-6.34 6.87-3.19 0-5.37-2.04-5.37-5.01 0-3.3 2.55-5.55 6.28-5.39.3.01.59.05.89.11v3.35a3.47 3.47 0 0 0-1.16-.2c-1.52 0-2.55.84-2.55 2.04 0 1.07.86 1.82 2.01 1.82 1.42 0 2.42-.91 2.42-2.92V2h3.75Z"/></svg>`,
      url: "https://www.tiktok.com/@mayrarealtornj"
    },
    {
      label: "WhatsApp",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.88 9.88 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7 15.24h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.25 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29Z"/></svg>`,
      get url() {
        return `https://wa.me/${siteConfig.contact.whatsappRaw}`;
      }
    }
  ],
  listings: []
};

const translations = {
  en: {
    languageAria: "Change language to Spanish",
    skipLink: "Skip to content",
    brandSubtitle: "New Jersey REALTOR®",
    navHome: "Home",
    navListings: "Listings",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "New Jersey Real Estate",
    realtorLabel: "REALTOR®",
    heroRole: "REALTOR® | eXp Realty",
    heroCopy: "Helping families buy and sell homes throughout New Jersey with clarity, care, and bilingual guidance.",
    viewListings: "View Listings",
    contactMeToday: "Contact Me Today",
    call: "Call",
    text: "Text",
    email: "Email",
    featuredListings: "Featured Listings",
    listingsTitle: "Homes Worth a Closer Look",
    comingSoonEyebrow: "New Listings Coming Soon",
    comingSoonTitle: "Fresh New Jersey homes will be featured here shortly.",
    comingSoonCopy: "Contact Mayra today to ask about current opportunities, upcoming inventory, or help starting your home search.",
    aboutEyebrow: "About Mayra",
    aboutTitle: "A Steady Guide for Your Next Move",
    aboutCopyOne: "Mayra Galarza is a licensed REALTOR® with eXp Realty serving buyers and sellers throughout New Jersey. She brings a calm, practical, relationship-first approach to every conversation, helping clients feel informed from first showing to closing day.",
    aboutCopyTwo: "Bilingual in English and Spanish, Mayra supports first-time buyers, growing families, sellers, and investors with thoughtful communication, local market perspective, and a deep respect for what home means.",
    trustLicensed: "Licensed REALTOR®",
    trustBilingual: "English & Spanish",
    servicesEyebrow: "Why Work With Me",
    servicesTitle: "Personal Service, Polished Results",
    serviceOneTitle: "First-Time Buyers",
    serviceOneCopy: "Clear next steps, patient education, and guidance from search to keys.",
    serviceTwoTitle: "Home Sellers",
    serviceTwoCopy: "Pricing perspective, preparation strategy, and a confident launch plan.",
    serviceThreeTitle: "Local Knowledge",
    serviceThreeCopy: "New Jersey market context for neighborhoods, value, and timing.",
    serviceFourTitle: "Personalized Service",
    serviceFourCopy: "Responsive communication shaped around each client's goals.",
    serviceFiveTitle: "Investment Properties",
    serviceFiveCopy: "Practical support for buyers evaluating opportunity and long-term fit.",
    serviceSixTitle: "English & Spanish",
    serviceSixCopy: "Bilingual guidance that helps every client feel heard and prepared.",
    socialEyebrow: "Connect With Mayra",
    socialTitle: "Follow Along for Homes, Tips, and Local Updates",
    contactEyebrow: "Contact",
    contactTitle: "Ready to Talk About Your Next Move?",
    contactCopy: "Send a note, call directly, or text Mayra for a quicker conversation.",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone",
    formMessage: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    successMessage: "Thank you! Your message has been sent successfully. We will contact you shortly.",
    errorMessage: "Something went wrong. Please try again or contact Mayra directly.",
    footerDisclaimer: "Each Office Independently Owned and Operated.",
    footerRights: "All rights reserved."
  },
  es: {
    languageAria: "Cambiar idioma a inglés",
    skipLink: "Saltar al contenido",
    brandSubtitle: "REALTOR® en Nueva Jersey",
    navHome: "Inicio",
    navListings: "Propiedades",
    navAbout: "Sobre Mayra",
    navContact: "Contacto",
    heroEyebrow: "Bienes Raíces en Nueva Jersey",
    realtorLabel: "REALTOR®",
    heroRole: "REALTOR® | eXp Realty",
    heroCopy: "Ayudando a familias a comprar y vender casas en todo Nueva Jersey con claridad, dedicación y orientación bilingüe.",
    viewListings: "Ver Propiedades",
    contactMeToday: "Contáctame Hoy",
    call: "Llamar",
    text: "Mensaje",
    email: "Correo",
    featuredListings: "Propiedades Destacadas",
    listingsTitle: "Hogares que Vale la Pena Conocer",
    comingSoonEyebrow: "Nuevas Propiedades Pronto",
    comingSoonTitle: "Muy pronto se presentarán nuevos hogares en Nueva Jersey.",
    comingSoonCopy: "Contacta a Mayra hoy para preguntar sobre oportunidades actuales, próximas propiedades o ayuda para comenzar tu búsqueda.",
    aboutEyebrow: "Sobre Mayra",
    aboutTitle: "Una Guía Confiable para Tu Próxima Mudanza",
    aboutCopyOne: "Mayra Galarza es una REALTOR® licenciada con eXp Realty que sirve a compradores y vendedores en todo Nueva Jersey. Ofrece un enfoque tranquilo, práctico y centrado en la relación con cada cliente, ayudándoles a sentirse informados desde la primera visita hasta el cierre.",
    aboutCopyTwo: "Bilingüe en inglés y español, Mayra apoya a compradores primerizos, familias, vendedores e inversionistas con comunicación clara, conocimiento del mercado local y profundo respeto por lo que significa el hogar.",
    trustLicensed: "REALTOR® Licenciada",
    trustBilingual: "Inglés y Español",
    servicesEyebrow: "Por Qué Trabajar Conmigo",
    servicesTitle: "Servicio Personal, Resultados Profesionales",
    serviceOneTitle: "Compradores Primerizos",
    serviceOneCopy: "Pasos claros, orientación paciente y apoyo desde la búsqueda hasta recibir las llaves.",
    serviceTwoTitle: "Vendedores de Casas",
    serviceTwoCopy: "Perspectiva de precio, estrategia de preparación y un plan de lanzamiento seguro.",
    serviceThreeTitle: "Conocimiento Local",
    serviceThreeCopy: "Contexto del mercado de Nueva Jersey para vecindarios, valor y momento adecuado.",
    serviceFourTitle: "Servicio Personalizado",
    serviceFourCopy: "Comunicación atenta adaptada a las metas de cada cliente.",
    serviceFiveTitle: "Propiedades de Inversión",
    serviceFiveCopy: "Apoyo práctico para compradores que evalúan oportunidad y valor a largo plazo.",
    serviceSixTitle: "Inglés y Español",
    serviceSixCopy: "Orientación bilingüe para que cada cliente se sienta escuchado y preparado.",
    socialEyebrow: "Conecta con Mayra",
    socialTitle: "Síguela para Ver Hogares, Consejos y Actualizaciones Locales",
    contactEyebrow: "Contacto",
    contactTitle: "¿Lista para Hablar Sobre Tu Próxima Mudanza?",
    contactCopy: "Envía un mensaje, llama directamente o escribe a Mayra para una conversación más rápida.",
    formName: "Nombre",
    formEmail: "Correo",
    formPhone: "Teléfono",
    formMessage: "Mensaje",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    successMessage: "¡Gracias! Tu mensaje se ha enviado correctamente. Nos pondremos en contacto contigo pronto.",
    errorMessage: "Algo salió mal. Inténtalo de nuevo o contacta a Mayra directamente.",
    footerDisclaimer: "Cada oficina es de propiedad y operación independiente.",
    footerRights: "Todos los derechos reservados."
  }
};

const savedLanguage = localStorage.getItem("mayra-language");
let currentLanguage = savedLanguage === "es" ? "es" : "en";

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector("[data-language-toggle]");
const contactActions = document.querySelector("[data-contact-actions]");
const contactDetails = document.querySelector("[data-contact-details]");
const footerContact = document.querySelector("[data-footer-contact]");
const listingGrid = document.querySelector("[data-listings]");
const socialLinks = document.querySelector("[data-social-links]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  languageToggle.setAttribute("aria-label", t("languageAria"));
  languageToggle.setAttribute("aria-pressed", String(currentLanguage === "es"));
  languageToggle.dataset.language = currentLanguage;
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("mayra-language", language);
  applyStaticTranslations();
  renderContact();
  renderListings();
  renderSocials();
  setFormMessage("");
  setSubmittingState(false);
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function renderContact() {
  const { phoneLabel, phoneRaw, email } = siteConfig.contact;
  const actions = [
    {
      label: t("call"),
      icon: "phone",
      href: `tel:+${phoneRaw}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.49c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2Z"/></svg>`
    },
    {
      label: t("text"),
      icon: "message",
      href: `sms:+${phoneRaw}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8.2l-4.1 3.08A.68.68 0 0 1 3 20.54V6c0-1.1.9-2 2-2Zm1 2v12.5L7.53 16H20V6H5Zm3 4h8v2H8v-2Zm0-3h10v2H8V7Zm0 6h6v2H8v-2Z"/></svg>`
    },
    {
      label: t("email"),
      icon: "email",
      href: `mailto:${email}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>`
    }
  ];

  contactActions.innerHTML = actions
    .map(
      (action) => `
        <a class="contact-pill" href="${action.href}" aria-label="${action.label} Mayra Galarza">
          <span class="contact-icon contact-icon-${action.icon}">${action.svg}</span>
          <span class="contact-label">${action.label}</span>
        </a>
      `
    )
    .join("");

  contactDetails.innerHTML = `
    <a href="tel:+${phoneRaw}">${phoneLabel}</a>
    <a href="mailto:${email}">${email}</a>
  `;

  footerContact.innerHTML = `
    <a href="tel:+${phoneRaw}">${phoneLabel}</a>
    <a href="mailto:${email}">${email}</a>
  `;
}

function renderListings() {
  if (!siteConfig.listings.length) {
    listingGrid.innerHTML = `
      <div class="listing-empty">
        <p class="eyebrow">${t("comingSoonEyebrow")}</p>
        <h3>${t("comingSoonTitle")}</h3>
        <p>${t("comingSoonCopy")}</p>
        <a class="button button-primary" href="#contact">${t("contactMeToday")}</a>
      </div>
    `;
    return;
  }

  listingGrid.innerHTML = siteConfig.listings
    .map(
      (listing) => `
        <article class="listing-card">
          <div class="listing-media">
            <img src="${listing.image}" alt="${listing.address} in ${listing.city}" loading="lazy" width="1200" height="900" />
            <span class="badge">${listing.status}</span>
          </div>
          <div class="listing-body">
            <p class="price">${listing.price}</p>
            <h3 class="address">${listing.address}</h3>
            <p class="city">${listing.city}</p>
            <div class="facts" aria-label="Property facts">
              <span>${listing.beds}</span>
              <span>${listing.baths}</span>
              <span>${listing.sqft}</span>
            </div>
            <p class="listing-description">${listing.description}</p>
            <a class="listing-link" href="${listing.detailsUrl}">View Details</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSocials() {
  socialLinks.innerHTML = siteConfig.socials
    .map(
      (social) => `
        <a class="social-link" href="${social.url}" target="_blank" rel="noopener" aria-label="Follow Mayra on ${social.label}">
          <span class="social-icon">${social.icon}</span>
          <span>${social.label}</span>
        </a>
      `
    )
    .join("");
}

function setupRevealAnimation() {
  const sections = document.querySelectorAll(".section-reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  sections.forEach((section) => observer.observe(section));
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

function setFormMessage(message, status = "") {
  formNote.textContent = message;
  formNote.classList.toggle("is-success", status === "success");
  formNote.classList.toggle("is-error", status === "error");
}

function setSubmittingState(isSubmitting) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = isSubmitting;
  submitButton.textContent = isSubmitting ? t("sending") : t("sendMessage");
}

function getFormPayload() {
  const formData = new FormData(contactForm);
  if (!formData.has("botcheck")) {
    formData.append("botcheck", "");
  }
  return formData;
}

async function submitContactForm() {
  const response = await fetch(siteConfig.contact.formEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: getFormPayload()
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Submission failed");
  }
}

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setFormMessage("");

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  setSubmittingState(true);

  try {
    await submitContactForm();
    contactForm.reset();
    setFormMessage(
      t("successMessage"),
      "success"
    );
  } catch (error) {
    setFormMessage(
      t("errorMessage"),
      "error"
    );
  } finally {
    setSubmittingState(false);
  }
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "es" : "en");
});

window.addEventListener("scroll", setHeaderState, { passive: true });
document.querySelector("[data-year]").textContent = new Date().getFullYear();

setLanguage(currentLanguage);
setupRevealAnimation();
setHeaderState();
