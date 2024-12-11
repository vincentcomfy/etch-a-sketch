let slider = document.getElementById("gridSizeSlider");
let sliderOutput = document.getElementById("gridSizeOutput");
sliderOutput.innerHTML = slider.value; // Initial display

slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
  drawSketchpad(this.value);
}

function drawSketchpad(gridSize) {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = ""; // Clear previous grid (optional)

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gridContainer.appendChild(cell);
    }
  }
}
