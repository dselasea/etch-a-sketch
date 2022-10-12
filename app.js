const canvas = document.querySelector('.canvas')
const input = document.querySelector('input')

const GRID_NUMBER = 100;
for(let i = 0; i < GRID_NUMBER; i++){
    const grid = document.createElement("div")
    grid.style.border = '1px solid black'
    canvas.appendChild(grid)
}

const grids = Array.from(canvas.children);
grids.forEach(grid => {
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "crimson"
    })
})

input.addEventListener('input', () => {
    console.log(input.value)
})
