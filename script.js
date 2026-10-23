// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    const target = document.querySelector(link.getAttribute("href"));
    if(target) window.scrollTo({top: target.offsetTop - 60, behavior: "smooth"});
  });
});

// TYPING EFFECT - BLINKING LETTERS
const typingName = document.getElementById("typingName");
const names = ["Pavithra S", "a Developer", "a Creator ✨"];
let idx=0, char=0, del=false;
function typeLoop(){
  const full = names[idx];
  if(!del){
    typingName.textContent = full.substring(0, char+1); char++;
    if(char===full.length){ del=true; setTimeout(typeLoop, 1200); return; }
  } else {
    typingName.textContent = full.substring(0, char-1); char--;
    if(char===0){ del=false; idx=(idx+1)%names.length; }
  }
  setTimeout(typeLoop, del ? 60 : 120);
}
typeLoop();

// COUNTER ANIMATION - MOVING NUMBERS
document.querySelectorAll(".counter").forEach(c=>{
  const target = parseInt(c.dataset.target);
  let cur=0; const inc = target/40;
  const update = () => {
    cur+=inc;
    if(cur < target){ c.textContent = Math.ceil(cur); requestAnimationFrame(update); }
    else c.textContent = target + "%";
  };
  const obs = new IntersectionObserver(e=>{ if(e[0].isIntersecting){ update(); obs.disconnect(); }});
  obs.observe(c);
});

// SCROLL REVEAL + TILT
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.opacity="1"; e.target.style.transform="translateY(0) scale(1)"; }});
},{threshold:0.15});
document.querySelectorAll(".skill-card,.timeline-card,.cert-card,.project-card,.about-card").forEach((el,i)=>{
  el.style.opacity="0"; el.style.transform="translateY(20px) scale(0.97)";
  el.style.transition=`all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i*0.05}s`;
  observer.observe(el);
});

// MOUSE FOLLOW PHOTO
const profileImg = document.querySelector(".profile-wrapper img");
document.addEventListener("mousemove", e=>{
  const x = (window.innerWidth/2 - e.clientX)/40;
  const y = (window.innerHeight/2 - e.clientY)/40;
  profileImg.style.transform = `translate(${x}px,${y}px) rotate(${-x/10}deg)`;
});

// NAVBAR COLOUR ON SCROLL
window.addEventListener("scroll", ()=>{
  const h = document.querySelector(".site-header");
  h.style.background = window.scrollY>30 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)";
});

console.log("%c💜 Pavi Small Unique Portfolio Loaded ✨","font-size:14px;color:#7c3aed;background:#ede9fe;padding:6px 12px;border-radius:10px;");
