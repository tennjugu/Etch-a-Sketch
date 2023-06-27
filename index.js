
const container = document.querySelector('.container')
const resetButton = document.querySelector('button')
const createGrid = (numberOfGrids) => {
    for (let i = 0; i < numberOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < numberOfGrids; j++) {
            const widthAndHeight = 960 / numberOfGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            //adding mouse listener to change background color
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}


resetButton.addEventListener('click', () =>{
    let userSize = Number(prompt("what size of grid do you want?"))

    while (userSize > 100) {
        userSize = Number(prompt("pick a smaller number that less than 100"))
        
    }
    createGrid(userSize)
})


