/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// Tambahkan di main.js
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: true // kalau mau animasi muncul lagi tiap scroll
});

sr.reveal('.home__data, .home__social, .home__img', { interval: 200 });
sr.reveal('.about__container', { delay: 300 });
sr.reveal('.skills__container', { interval: 200 });
sr.reveal('.work__container', { delay: 400 });
sr.reveal('.contact__form', { delay: 300 });


document.addEventListener("DOMContentLoaded", () => {
  const text = "ARBA'IN";
  const typedText = document.querySelector(".typed-text");
  typedText.textContent = ""; // 🔥 kosongkan dulu biar tidak duplikat
  let i = 0;
  const speed = 150;

  function typeEffect() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    } else {
      typedText.style.borderRight = "none";
    }
  }

  typeEffect();
});

window.addEventListener("load", () => {
  const opening = document.getElementById("opening");

  // biarkan tampil 2.5 detik lalu hilang
  setTimeout(() => {
    opening.classList.add("hide");
  }, 2500);
});

const openingText = "ARBA'IN PORTFOLIO";
const openType = document.getElementById("open-type");
let i = 0;
function typeOpening() {

  if (i < openingText.length) {
    openType.textContent += openingText.charAt(i);
    i++;
    setTimeout(typeOpening, 100);
  }
}
typeOpening();

<!-- Typed.js -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

<script>
  // === Efek mengetik dinamis ===
  var typed = new Typed(".typing", {
    strings: ["Web Designer 💻", "Front-End Developer ⚡", "Network Engineer 🌐", "System Administrator 🧠"],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 500<script>
const toggle = document.getElementById("toggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};
</script>
,
    loop: true
  });

  // === Efek cursor bercahaya ===
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // === Efek Parallax pada gambar profil ===
  const floatingImg = document.querySelector(".floating-img");
  document.addEventListener("mousemove", (e) => {
    let moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    let moveY = (e.clientY - window.innerHeight / 2) * 0.02;
    floatingImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  // === Scroll Reveal ===
  ScrollReveal().reveal(".home__text, .home__image", {
    origin: "bottom",
    distance: "60px",
    duration: 1200,
    delay: 200,
    easing: "ease-in-out",
  });
</script>




