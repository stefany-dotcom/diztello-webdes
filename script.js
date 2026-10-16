/* ===== GLOBAL JAVASCRIPT FOR DIZTELLO CONSTRUCTION ===== */
/* MOVED FROM INLINE SCRIPTS IN HTML TO A SINGLE REUSABLE FILE FOR CLEAN ORGANIZED CODE! */

const nav = document.querySelector('.nav');

// LISTEN FOR WINDOW SCROLL TO TOGGLE THE FROSTED GLASS STICKY HEADER
window.addEventListener('scroll', () => {

    if (window.scrollY > 150) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

