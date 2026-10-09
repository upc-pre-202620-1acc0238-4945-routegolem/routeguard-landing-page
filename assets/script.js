/**
 * RouteGuard Landing Page Scripts
 * Handles theme toggling (Dark/Light mode) and smooth interactive behaviors.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select the theme toggle button element
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for previously saved user preference in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.classList.toggle('dark', currentTheme === 'dark');
        updateThemeButtonIcon(currentTheme === 'dark');
    }

    // Event listener for theme switching
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Toggle dark class on root html element
            const isDarkMode = htmlElement.classList.toggle('dark');

            // Save preference to localStorage
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

            // Update button icon accordingly
            updateThemeButtonIcon(isDarkMode);
        });
    }

    /**
     * Helper function to update the theme toggle button text/icon
     * @param {boolean} isDark - True if dark mode is active, false otherwise
     */
    function updateThemeButtonIcon(isDark) {
        themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    }

    // Mobile navigation menu (hamburger button, visible below the md breakpoint)
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    function setMenuOpen(open) {
        mobileMenu.classList.toggle('hidden', !open);
        iconOpen.classList.toggle('hidden', open);
        iconClose.classList.toggle('hidden', !open);
        menuToggleBtn.setAttribute('aria-expanded', String(open));
        menuToggleBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }

    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener('click', () => {
            setMenuOpen(mobileMenu.classList.contains('hidden'));
        });

        // Close after choosing a section
        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        // Close with the Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        });

        // Close when the viewport grows to the desktop layout
        window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
            if (event.matches) setMenuOpen(false);
        });
    }

    // Console log initialization notice in English
    console.log('RouteGuard landing page script initialized successfully.');
});