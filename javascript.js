const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");


document.addEventListener("DOMContentLoaded", () => {
    createSquareGrid(16);
});

resetButton.addEventListener("click", () => {
    promptUserAndResetGrid();
});

function createSquareGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("flex-row");
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("flex-cell");
            cell.style.opacity = 0;
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = returnRandomColor();
                increaseOpacity(cell);
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function promptUserAndResetGrid() {
    container.innerHTML = '';

    let size = prompt("Input the size of the grid (max. 100)");
    if (!size instanceof Number) {
        return;
    } 

    if (size <= 0) {
        size = 1;
    } else if (size > 100) {
        size = 100;
    }

    createSquareGrid(size);
}

function returnColorBlack() {
    return "#000000";
}

function returnRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function increaseOpacity(cell) {
    let opacity = Number(cell.style.opacity);
    opacity += 0.1;
    cell.style.opacity = opacity;
}