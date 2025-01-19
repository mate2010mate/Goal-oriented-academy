const smallRect = document.getElementById('smallRect');
const container = document.querySelector('.container');

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

const rectWidth = smallRect.offsetWidth;
const rectHeight = smallRect.offsetHeight;

let xPos = 0;
let yPos = 0; 
let direction = 'right'; 

function moveRectangle() {
  
    if (direction === 'right') {
        xPos += 5;
        if (xPos + rectWidth >= containerWidth) {
            direction = 'down';
        }
    } else if (direction === 'down') {
        yPos += 5;
        if (yPos + rectHeight >= containerHeight) {
            direction = 'left';
        }
    } else if (direction === 'left') {
        xPos -= 5;
        if (xPos <= 0) {
            direction = 'up';
        }
    } else if (direction === 'up') {
        yPos -= 5;
        if (yPos <= 0) {
            direction = 'right';
        }
    }


    smallRect.style.left = `${xPos}px`;
    smallRect.style.top = `${yPos}px`;

   
    requestAnimationFrame(moveRectangle);
}


moveRectangle();