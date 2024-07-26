const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
    createSquareGrid(100);
});

function createSquareGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("flex-row");
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("flex-cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = 'black';
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}