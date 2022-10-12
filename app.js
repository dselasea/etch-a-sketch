const container = document.querySelector('.container')

const GRID_NUMBER = 10000;
for(let i = 0; i < GRID_NUMBER; i++){
    const grid = document.createElement("div")
    grid.style.border = '1px solid black'
    container.appendChild(grid)
}

const grids = Array.from(container.children);
grids.forEach(grid => {
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "crimson"
    })
})

container.addEventListener("onmousemove", () => {
    console.log("Entered")
})