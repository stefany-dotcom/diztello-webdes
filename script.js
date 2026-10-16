/* ===== GLOBAL JAVASCRIPT FOR DIZTELLO CONSTRUCTION ===== */
/* MOVED FROM INLINE SCRIPTS IN HTML TO A SINGLE REUSABLE FILE FOR CLEAN ORGANIZED CODE! */

/* ===== GLOBAL JAVASCRIPT FOR DIZTELLO CONSTRUCTION ===== */

const nav = document.querySelector('.nav');

// 1. FROSTED STICKY HEADER
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. SCROLL REVEAL ANIMATIONS 
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});