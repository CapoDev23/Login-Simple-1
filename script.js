document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.querySelector('.rain');
  
    for (let i = 0; i < 50; i++) {
      createSquare();
    }
  
    function createSquare() {
      const square = document.createElement('div');
      square.classList.add('square');
  
      
      const size = Math.random() * 20 + 5;
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
      square.style.left = `${Math.random() * window.innerWidth}px`;
  
      
      square.style.animationDuration = `${Math.random() * 2 + 1}s`;
  
      rainContainer.appendChild(square);
    }
  });
  
  