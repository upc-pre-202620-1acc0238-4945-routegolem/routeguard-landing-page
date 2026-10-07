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

    // Console log initialization notice in English
    console.log('RouteGuard landing page script initialized successfully.');
});