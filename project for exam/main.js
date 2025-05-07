function highlightActiveLink() {
    const links = document.querySelectorAll('.navbar .link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

window.onload = function() {
    alert("Welcome to Goal Oriented Academy!");
    highlightActiveLink();
};