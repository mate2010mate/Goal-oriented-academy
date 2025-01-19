const box = document.getElementById('box');
let positionX = 200;
let positionY = 200;
const step = 10; // ნაბიჯი

// Keydown event listener
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            positionY -= step;
            break;
        case 'ArrowDown':
            positionY += step;
            break;
        case 'ArrowLeft':
            positionX -= step;
            break;
        case 'ArrowRight':
            positionX += step;
            break;
    }
    updatePosition();
});

// ფუნქცია, რომელიც განაახლებს ბოქსის პოზიციას
function updatePosition() {
    box.style.top = positionY + 'px';
    box.style.left = positionX + 'px';
}
