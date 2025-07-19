const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});
menuClose?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});
