const canvas = document.querySelector('.canvas')
const number = document.querySelector('#number')
const apply = document.querySelector('#apply')
const clear = document.querySelector('#clear')
const color = document.querySelector('#color')


createGrid()

function createGrid(){
    for(let i = 0; i < 4096; i++){
        const grid = document.createElement("div") 
        grid.style.border = '.5px solid black'
        canvas.appendChild(grid)
    }
}

const grids = Array.from(canvas.children);
grids.forEach(grid => {
    grid.addEventListener("mouseover", (e) => {
        grid.style.backgroundColor = color.value
    })
})

clear.addEventListener('click', () => {
    canvas.querySelectorAll('.canvas div').forEach(div => {
        div.style.backgroundColor = "#fff"
    })
})

