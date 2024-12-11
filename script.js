function drawSketchpad(gridSize) {
    const gridContainer = document.getElementById('grid');
  
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
      }
    }
  }
