const canvas = document.querySelector('.canvas')
const numberOfGrids = document.querySelector('#number')
const clearColor = document.querySelector('#clear')
const color = document.querySelector('#color')
const gridNumber = document.querySelector('#num')


createGrid()
numberOfGrids.addEventListener('input', gridSize)
clearColor.addEventListener('click', eraseColors)


function createGrid(){
    for(let i = 0; i < 4096; i++){
        const grid = document.createElement("div") 
        grid.style.border = '1px solid black'
        canvas.appendChild(grid)
    }
    colorGrid()
}

function gridSize() {
    if(canvas.innerHTML){
        canvas.innerHTML = ""
    }
    let doubleNumber = number.value * number.value
    for(let i = 0; i < doubleNumber; i++){
        const grid = document.createElement("div") 
        canvas.setAttribute('style', 'grid-template-columns: repeat(' + number.value + ', 1fr)')
        grid.style.border = '.5px solid black'
        canvas.appendChild(grid)
    }
    gridNumber.textContent = `${number.value} x ${number.value}`;
    colorGrid()
}


function colorGrid(){
    const grids = Array.from(canvas.children);
    grids.forEach(grid => {
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = color.value
        })
    })
}


function eraseColors(){
    canvas.querySelectorAll('.canvas div').forEach(div => {
        div.style.backgroundColor = "#fff"
    })
}



