function toggleInfo() {
    const infoSection = document.getElementById('extra-info');
    const toggleButton = document.getElementById('toggle-btn');

    if (infoSection.style.display === 'none') {
        infoSection.style.display = 'block';
        toggleButton.textContent = 'Show Less';
    } else {
        infoSection.style.display = 'none';
        toggleButton.textContent = 'Show More';
    }
}

// Function to change background color when hovering over the GOA section
function changeBgColor(color) {
    document.querySelector('.goa').style.backgroundColor = color;
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}