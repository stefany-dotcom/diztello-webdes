/* ===== GLOBAL JAVASCRIPT FOR DIZTELLO CONSTRUCTION ===== */
/* MOVED FROM INLINE SCRIPTS IN HTML TO A SINGLE REUSABLE FILE FOR CLEAN ORGANIZED CODE! */

// SELECT THE NAV BAR ELEMENT FROM THE DOM
const nav = document.querySelector('.nav');

// LISTEN FOR WINDOW SCROLL TO TOGGLE THE FROSTED GLASS STICKY HEADER
window.addEventListener('scroll', () => {
    // TRIGGER SCROLLED CLASS ONCE SCROLLED PAST 150PX DOWN THE PAGE
    if (window.scrollY > 150) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});