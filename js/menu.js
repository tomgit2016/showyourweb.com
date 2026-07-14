// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');

if (mobileMenuButton && mobileMenu) {
  const body = document.body;

  const setOpen = (open) => {
    mobileMenu.classList.toggle('active', open);
    mobileMenuButton.classList.toggle('active', open);
    mobileMenuButton.setAttribute('aria-expanded', String(open));
    if (menuBackdrop) {
      menuBackdrop.classList.toggle('active', open);
    }
    body.classList.toggle('no-scroll', open);
  };

  const isOpen = () => mobileMenu.classList.contains('active');

  mobileMenuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!isOpen());
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      setOpen(false);
    }
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (event) => {
    if (isOpen() && !mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
    }
  });
}
