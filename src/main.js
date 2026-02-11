import './style.css'

// Global JS Scripts
console.log('Fußbodentechnik Gäbel Website Loaded');

// Sticky Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
