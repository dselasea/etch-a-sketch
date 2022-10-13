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
        // grid.style.borderRight = '1px solid black'
        // grid.style.borderBottom = '1px solid black'
        grid.setAttribute('style', 'border-bottom: 1px solid rgba(0, 0, 0, 0.5); border-right: 1px solid rgba(0, 0, 0, 0.5);')
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
        // grid.style.borderRight = '1px solid black'
        // grid.style.borderBottom = '1px solid black'
        grid.setAttribute('style', 'border-bottom: 1px solid rgba(0, 0, 0, 0.5); border-right: 1px solid rgba(0, 0, 0, 0.5); opacity: .5;')
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



