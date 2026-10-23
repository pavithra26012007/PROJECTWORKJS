// === PAVITHRA - SUPER INTERACTIVE JS ===

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle - with animation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
  
  // Interactive - menu open animation
  if(isOpen){
    navLinks.style.animation = "slideIn 0.3s ease";
  }
});

// Close menu when link clicked + smooth scroll
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    
    // Close menu
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
    
    // Smooth scroll with offset
    if(target){
      const offset = target.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  });
});

// === INTERACTIVE EFFECTS ===

// 1. Typing Effect for H1
const h1 = document.querySelector("h1");
const originalText = h1.innerHTML;
h1.innerHTML = "";
let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    h1.innerHTML = originalText.substring(0, i+1);
    i++;
    setTimeout(typeWriter, 30);
  }
}
// Start typing after load
window.addEventListener("load", () => setTimeout(typeWriter, 500));

// 2. Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0) scale(1)";
      entry.target.style.filter = "blur(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".skill-card, .timeline-card, .cert-card, .project-card, .about-card, .contact-card").forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px) scale(0.95)";
  card.style.filter = "blur(5px)";
  card.style.transition = `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.05}s`;
  observer.observe(card);
});

// 3. Hero Image - Interactive Float + Tilt on mousemove
const profileImg = document.querySelector(".profile-wrapper img");
if(profileImg){
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    profileImg.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  });
}

// 4. Navbar - Colour change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if(window.scrollY > 50){
    header.style.background = "rgba(255,255,255,0.95)";
    header.style.boxShadow = "0 10px 30px rgba(124,58,237,0.15)";
    header.style.borderBottomColor = "#c4b5fd";
  } else {
    header.style.background = "rgba(255,255,255,0.85)";
    header.style.boxShadow = "0 4px 20px rgba(124,58,237,0.08)";
  }
});

// 5. Quick Facts - Count Animation
const facts = document.querySelectorAll(".quick-facts strong");
const factObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animation = "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    }
  });
});
facts.forEach(f => factObserver.observe(f));

// 6. Buttons - Magnetic Effect
document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.15}px, ${y*0.3}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

// 7. Console Easter Egg
console.log("%c💜 Hi Pavi! Portfolio loaded ✨", "font-size:20px; font-weight:800; color:#7c3aed; background:linear-gradient(90deg,#ede9fe,#fce7f3); padding:10px 20px; border-radius:15px;");
console.log("%cBuilt with love by Pavithra S", "color:#ec4899; font-size:12px;");

// 8. Add CSS animation keyframes dynamically
const style = document.createElement("style");
style.textContent = `
@keyframes slideIn { from { transform: translateX(20px); opacity:0; } to { transform: translateX(0); opacity:1; } }
@keyframes popIn { 0% { transform: scale(0.5); } 60% { transform: scale(1.2); } 100% { transform: scale(1); } }
@keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
.profile-wrapper img { animation: floaty 3s ease-in-out infinite; transition: transform 0.2s ease-out !important; }
.nav-links.open { display:flex !important; flex-direction:column; position:absolute; top:70px; right:20px; background:white; padding:20px; border-radius:20px; box-shadow:0 15px 40px rgba(124,58,237,0.2); border:2px solid #f3e8ff; gap:15px; }
@media(min-width:769px){ .nav-links.open { position:static; flex-direction:row; background:none; padding:0; box-shadow:none; border:none; } }
`;
document.head.appendChild(style);
