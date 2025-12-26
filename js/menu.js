// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  const body = document.body;

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('active');
    mobileMenuButton.classList.remove('active');
    body.classList.remove('no-scroll');
  };

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('active');
    body.classList.toggle('no-scroll');
  };

  mobileMenuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      closeMenu();
    }
  });
}
