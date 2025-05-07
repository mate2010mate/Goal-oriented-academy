function toggleText(eventId) {
    const moreText = document.getElementById(eventId);
    const btn = document.getElementById('btn-' + eventId);
    
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}

window.onload = function() {
    // Initially hide all 'extra' text
    document.querySelectorAll('.extra-text').forEach(text => {
        text.style.display = 'none';
    });
};