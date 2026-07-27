const siteConfig = {
  // Update these values when Mayra's verified social links and MLS-approved listings are ready.
  contact: {
    phoneLabel: "(347) 935-4566",
    phoneRaw: "13479354566",
    email: "hello@mayrarealtornj.com",
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
    { label: "Call", icon: "TEL", href: `tel:+${phoneRaw}` },
    { label: "Text", icon: "SMS", href: `sms:+${phoneRaw}` },
    { label: "Email", icon: "@", href: `mailto:${email}` },
    { label: "WhatsApp", icon: "WA", href: `https://wa.me/${whatsappRaw}` }
  ];

  contactActions.innerHTML = actions
    .map(
      (action) => `
        <a class="contact-pill" href="${action.href}" aria-label="${action.label} Mayra Galarza">
          <span>${action.icon}</span>${action.label}
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
