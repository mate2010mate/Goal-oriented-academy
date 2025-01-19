const container = document.querySelector('.container');
const rectangle = document.getElementById('movingRectangle');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const rectWidth = rectangle.offsetWidth;
const rectHeight = rectangle.offsetHeight;
let angle = 0;
const radiusX = (containerWidth - rectWidth) / 2;
const radiusY = (containerHeight - rectHeight) / 2;

function moveRectangle() {
    const x = radiusX + Math.cos(angle * (Math.PI / 180)) * radiusX;
    const y = radiusY + Math.sin(angle * (Math.PI / 180)) * radiusY;
    rectangle.style.left = `${x}px`;
    rectangle.style.top = `${y}px`;
    angle -= 1;

    if (angle <= -360) {
        angle = 0;
        rectangle.style.left = "0px";
        rectangle.style.top = "0px";
    }

    requestAnimationFrame(moveRectangle);
}

moveRectangle();