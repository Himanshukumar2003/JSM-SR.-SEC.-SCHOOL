// const nav = document.getElementById("mainNav");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 80) {
//     nav.classList.add("scrolled");
//   } else {
//     nav.classList.remove("scrolled");
//   }
// });

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileNavClose");

function openMobileNav() {
  mobileMenuBtn.classList.add("open");
  mobileNav.classList.add("show");
  mobileOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileMenuBtn.classList.remove("open");
  mobileNav.classList.remove("show");
  mobileOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

mobileMenuBtn.addEventListener("click", openMobileNav);
mobileClose.addEventListener("click", closeMobileNav);
mobileOverlay.addEventListener("click", closeMobileNav);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});

// ═══ MOBILE DROPDOWN TOGGLE ═══
document.querySelectorAll(".mobile-dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdown = toggle.nextElementSibling;
    const isOpen = dropdown.classList.contains("show");

    // Close all dropdowns
    document
      .querySelectorAll(".mobile-dropdown")
      .forEach((d) => d.classList.remove("show"));

    // Toggle current
    if (!isOpen) {
      dropdown.classList.add("show");
      toggle.querySelector(".fa-chevron-down").style.transform =
        "rotate(180deg)";
    } else {
      toggle.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
    }
  });
});

document.querySelectorAll(".campus-card").forEach((card) => {
  const bg = card.querySelector(".campus-card-bg");
  const img = card.getAttribute("data-img");
  bg.style.backgroundImage = `url(${img})`;
});
