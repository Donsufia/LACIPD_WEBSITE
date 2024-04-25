// JavaScript for making the website responsive

window.addEventListener('resize', () => {
    // Get the current width of the window
    const windowWidth = window.innerWidth;

    // Example: adjust navigation links based on window width
    const navLinks = document.querySelectorAll('nav a');
    if (windowWidth < 768) {
        // For small screens, display navigation links vertically
        navLinks.forEach(link => {
            link.style.display = 'block';
        });
    } else {
        // For larger screens, display navigation links horizontally
        navLinks.forEach(link => {
            link.style.display = 'inline-block';
        });
    }
});
