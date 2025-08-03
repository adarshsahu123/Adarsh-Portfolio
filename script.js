let rotateX = 0;
let rotateY = 0;

function rotate(direction) {
  if (direction === 'left') rotateY -= 90;
  if (direction === 'right') rotateY += 90;
  if (direction === 'up') rotateX += 90;
  if (direction === 'down') rotateX -= 90;

  document.querySelector('.cube').style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function handleFaceClick(event) {
  const page = event.target.dataset.page;
  if (page) {
    // ✅ Save current cube rotation
    localStorage.setItem('cubeRotateX', rotateX);
    localStorage.setItem('cubeRotateY', rotateY);

    // ✅ Navigate to clicked face's page
    window.location.href = page;
  }
}

// ✅ Restore saved cube rotation when cube page opens
window.addEventListener('DOMContentLoaded', () => {
  const savedX = localStorage.getItem('cubeRotateX');
  const savedY = localStorage.getItem('cubeRotateY');

  if (savedX !== null && savedY !== null) {
    rotateX = parseInt(savedX);
    rotateY = parseInt(savedY);

    document.querySelector('.cube').style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});
