// JavaScript for making the website responsive
function adjustNavigationLinks() {
    // Get the current width of the window
    const windowWidth = window.innerWidth;

    // Example: adjust navigation links based on window width
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.display = windowWidth < 768 ? 'block' : 'inline-block';
    });
}

// Event listener for window resize
window.addEventListener('resize', adjustNavigationLinks);

// Functions for drag and drop functionality
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
