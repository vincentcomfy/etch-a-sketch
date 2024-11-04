document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('.grid');
    const resetButton = document.getElementById('reset-button');
    const wipeButton = document.getElementById('wipe-button');

    // Function to create the grid
    function createGrid(size) {
        gridContainer.innerHTML = ''; // Clear existing grid
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        // Generate grid cells
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // Add hover effect
            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
            });

            gridContainer.appendChild(square);
        }
    }

    // Function to reset the grid with user input
    function resetGrid() {
        let newSize = prompt("Enter new grid size (1-100):", 16);
        newSize = parseInt(newSize);

        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }

    // Function to wipe the grid
    function wipeGrid() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.classList.remove('hovered'));
    }

    // Event listeners for buttons
    resetButton.addEventListener('click', resetGrid);
    wipeButton.addEventListener('click', wipeGrid);

    // Initial grid setup
    createGrid(16);
});
