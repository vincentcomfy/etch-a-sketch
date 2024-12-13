let slider = document.getElementById("gridSizeSlider");
let sliderOutput = document.getElementById("gridSizeOutput");
sliderOutput.innerHTML = slider.value; // Initial display

slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
  drawSketchpad(this.value);
}

function drawSketchpad(gridSize) {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = "";

  const sketchpadSize = 200;
  const cellSize = sketchpadSize/gridSize;

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.display = `grid`;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col ++) {
      const cell = document.createElement(`div`);
      cell.classList.add('cell');
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      gridContainer.appendChild(cell);
    }
  }
}

drawSketchpad(4);