// Automatically update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (mobileMenuButton && mobileMenu) {
        // Toggle menu on button click
        mobileMenuButton.addEventListener('click', function() {
            mobileMenuButton.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) &&
                !mobileMenuButton.contains(event.target) &&
                mobileMenu.classList.contains('active')) {
                mobileMenuButton.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });

        // Close menu when clicking a menu item
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuButton.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }
});

// Prevent body scrolling when menu is open
const style = document.createElement('style');
style.innerHTML = `
    .no-scroll {
        overflow: hidden;
    }
`;
document.head.appendChild(style);