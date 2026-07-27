const siteConfig = {
  // Update these values when Mayra's verified social links and MLS-approved listings are ready.
  contact: {
    phoneLabel: "(347) 935-4566",
    phoneRaw: "13479354566",
    email: "mayra.galarza@exprealty.com",
    whatsappRaw: "13479354566",
    formEndpoint: ""
  },
  socials: [
    {
      label: "Instagram",
      icon: "https://cdn.simpleicons.org/instagram/ffffff",
      url: "https://www.instagram.com/mayrarealtornj"
    },
    {
      label: "Facebook",
      icon: "https://cdn.simpleicons.org/facebook/ffffff",
      url: "https://www.facebook.com/mayrarealtornj"
    },
    {
      label: "TikTok",
      icon: "https://cdn.simpleicons.org/tiktok/ffffff",
      url: "https://www.tiktok.com/@mayrarealtornj"
    },
    {
      label: "LinkedIn",
      icon: "https://cdn.simpleicons.org/linkedin/ffffff",
      url: "https://www.linkedin.com/"
    }
  ],
  listings: [
    {
      status: "Active",
      price: "$625,000",
      address: "18 Linden Avenue",
      city: "Montclair, NJ",
      beds: "4 Beds",
      baths: "3 Baths",
      sqft: "2,180 Sq Ft",
      description: "Sun-filled colonial with warm finishes, flexible living spaces, and a private backyard close to shops and transit.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      detailsUrl: "#contact"
    },
    {
      status: "New",
      price: "$479,900",
      address: "42 Parkview Terrace",
      city: "Clifton, NJ",
      beds: "3 Beds",
      baths: "2 Baths",
      sqft: "1,640 Sq Ft",
      description: "Updated home with an open main level, finished lower space, and a commuter-friendly location.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      detailsUrl: "#contact"
    },
    {
      status: "Featured",
      price: "$735,000",
      address: "7 Willow Court",
      city: "West Orange, NJ",
      beds: "5 Beds",
      baths: "4 Baths",
      sqft: "2,950 Sq Ft",
      description: "Elegant residence with generous rooms, a polished kitchen, and outdoor space made for hosting.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      detailsUrl: "#contact"
    }
  ]
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactActions = document.querySelector("[data-contact-actions]");
const contactDetails = document.querySelector("[data-contact-details]");
const footerContact = document.querySelector("[data-footer-contact]");
const listingGrid = document.querySelector("[data-listings]");
const socialLinks = document.querySelector("[data-social-links]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function renderContact() {
  const { phoneLabel, phoneRaw, email, whatsappRaw } = siteConfig.contact;
  const actions = [
    {
      label: "Call",
      icon: "phone",
      href: `tel:+${phoneRaw}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.49c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2Z"/></svg>`
    },
    {
      label: "Text",
      icon: "message",
      href: `sms:+${phoneRaw}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H8.2l-4.1 3.08A.68.68 0 0 1 3 20.54V6c0-1.1.9-2 2-2Zm1 2v12.5L7.53 16H20V6H5Zm3 4h8v2H8v-2Zm0-3h10v2H8V7Zm0 6h6v2H8v-2Z"/></svg>`
    },
    {
      label: "Email",
      icon: "email",
      href: `mailto:${email}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>`
    },
    {
      label: "WhatsApp",
      icon: "whatsapp",
      href: `https://wa.me/${whatsappRaw}`,
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.88 9.88 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7 15.24h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.25 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.29Z"/></svg>`
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
          <img class="social-icon" src="${social.icon}" alt="" aria-hidden="true" loading="lazy" width="22" height="22" />
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

contactForm.addEventListener("submit", (event) => {
  if (!siteConfig.contact.formEndpoint) {
    event.preventDefault();
    formNote.textContent = "Thanks. Form delivery is ready to connect to Mayra's preferred inbox or CRM.";
    return;
  }

  contactForm.action = siteConfig.contact.formEndpoint;
});

window.addEventListener("scroll", setHeaderState, { passive: true });
document.querySelector("[data-year]").textContent = new Date().getFullYear();

renderContact();
renderListings();
renderSocials();
setupRevealAnimation();
setHeaderState();
